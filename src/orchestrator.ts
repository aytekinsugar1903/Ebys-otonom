import type { Decision, DocumentId, EbysDocument, UserId } from "./domain.js";
import type { AuditLog } from "./audit.js";
import type { EbysConnector } from "./connector.js";
import { approvalFor, type Approval } from "./approval.js";

export interface DocumentJudge { judge(document:EbysDocument):Promise<Decision<unknown>>; }

export interface PlannedAction {
 document:EbysDocument; decision:Decision<unknown>; approval:Approval;
}

export class EbysOrchestrator {
 constructor(private readonly connector:EbysConnector,private readonly judge:DocumentJudge,private readonly audit:AuditLog){}
 async plan(documentId:DocumentId):Promise<PlannedAction>{
  const document=await this.connector.getDocument(documentId);
  const decision=await this.judge.judge(document);
  const approval=approvalFor(decision);
  await this.audit.append({timestamp:new Date().toISOString(),documentId,actor:"AI",action:decision.action,confidence:decision.confidence,requiresApproval:approval.status==="PENDING",result:"PLANNED",detail:decision.rationale});
  return {document,decision,approval};
 }
 approve<T>(decision:Decision<T>,userId:UserId):Approval{
  const gate=approvalFor(decision);
  return gate.status==="PENDING"?{status:"APPROVED",approvedBy:userId,approvedAt:new Date().toISOString()}:gate;
 }
}
