import type { Actor, DocumentId, EbysDocument } from "./domain.js";
import type { OutgoingDocumentDraft } from "./document-creation.js";
import type { ApprovalDocumentDraft } from "./olur.js";
import type { RoutePlan, ReturnPlan } from "./routing.js";
import type { DocumentSearchCriteria, SearchExportFormat, NotificationSearch } from "./search.js";
import type { ClosurePlan } from "./lifecycle.js";
import type { ApprovalFlowTemplate, ContentTemplate, DistributionPlan, Favorite, UserUnitGroup } from "./templates.js";
import type { Delegation, DocumentTransfer } from "./delegation.js";
import type { UserDefaults, UserRecord } from "./admin.js";

export interface EbysConnector {
 getCurrentUser():Promise<Actor>;
 getIncomingDocuments():Promise<readonly EbysDocument[]>;
 getPendingDocuments(kind?:"PARAPH"|"SIGN"|"INCOMING"|"ACCEPTANCE"):Promise<readonly EbysDocument[]>;
 getDocument(id:DocumentId):Promise<EbysDocument>;
 getDocumentHistory(id:DocumentId):Promise<readonly unknown[]>;

 createOutgoingDocument(draft:OutgoingDocumentDraft):Promise<DocumentId>;
 createApprovalDocument(draft:ApprovalDocumentDraft):Promise<DocumentId>;
 copyDocument(id:DocumentId):Promise<DocumentId>;
 saveDraft(id:DocumentId):Promise<void>;
 replyToDocument(id:DocumentId,draft:OutgoingDocumentDraft):Promise<DocumentId>;
 addAttachment(id:DocumentId,data:Uint8Array,name:string):Promise<void>;

 acceptDocument(id:DocumentId):Promise<void>;
 route(plan:RoutePlan):Promise<void>;
 returnDocument(plan:ReturnPlan):Promise<void>;
 closeDocument(plan:ClosurePlan):Promise<void>;

 submitForApproval(id:DocumentId):Promise<void>;
 paraphrase(id:DocumentId):Promise<void>;
 sign(id:DocumentId):Promise<void>;
 bulkParaphrase(ids:readonly DocumentId[]):Promise<void>;
 bulkSign(ids:readonly DocumentId[]):Promise<void>;
 finalSend(id:DocumentId):Promise<void>;
 withdrawDocument(id:DocumentId,note:string):Promise<void>;
 deleteDocument(id:DocumentId,note:string):Promise<void>;

 searchDocuments(criteria:DocumentSearchCriteria):Promise<readonly EbysDocument[]>;
 exportSearch(criteria:DocumentSearchCriteria,format:SearchExportFormat):Promise<Uint8Array>;
 searchNotifications(criteria:NotificationSearch):Promise<readonly EbysDocument[]>;

 listDistributionPlans():Promise<readonly DistributionPlan[]>;
 saveDistributionPlan(plan:DistributionPlan):Promise<void>;
 listTemplates(scope:"PERSONAL"|"UNIT"):Promise<readonly ContentTemplate[]>;
 saveTemplate(template:ContentTemplate):Promise<void>;
 listApprovalFlows():Promise<readonly ApprovalFlowTemplate[]>;
 saveApprovalFlow(flow:ApprovalFlowTemplate):Promise<void>;
 saveFavorite(favorite:Favorite):Promise<void>;
 removeFavorite(favorite:Favorite):Promise<void>;
 saveUserUnitGroup(group:UserUnitGroup):Promise<void>;

 listDelegations():Promise<readonly Delegation[]>;
 saveDelegation(delegation:Delegation):Promise<void>;
 cancelDelegation(id:string,reason:string):Promise<void>;
 transferDocuments(transfer:DocumentTransfer):Promise<void>;

 findUsers(query:string):Promise<readonly UserRecord[]>;
 saveUser(user:UserRecord):Promise<void>;
 deactivateUser(id:string):Promise<void>;
 getUserDefaults():Promise<UserDefaults>;
 saveUserDefaults(defaults:UserDefaults):Promise<void>;
}
