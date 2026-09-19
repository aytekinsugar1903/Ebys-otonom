import type { ApprovalStep, Attachment, Interest, Note } from "./document-creation.js";
export interface ApprovalDocumentDraft {
 topicCode:string; subject:string; filingFolderId:string; documentType:"RESMI_YAZISMA";
 confidentiality?:string; numberSuffix?:string; urgency:"NORMAL"|string;
 informationUnitId:string; approvalFlow:readonly ApprovalStep[]; body:string;
 attachments:readonly Attachment[]; interests:readonly Interest[]; relatedDocumentIds:readonly string[]; notes:readonly Note[];
}
export function validateApprovalDocument(d:ApprovalDocumentDraft):string[]{
 const e:string[]=[]; if(!d.topicCode)e.push("TOPIC_CODE_REQUIRED"); if(!d.informationUnitId)e.push("INFORMATION_UNIT_REQUIRED"); if(!d.approvalFlow.some(x=>x.type==="SIGN"))e.push("SIGNER_REQUIRED"); if(!d.body.trim())e.push("BODY_REQUIRED"); return e;
}
