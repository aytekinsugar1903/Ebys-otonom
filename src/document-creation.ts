export type SelectionType="USER"|"REAL_PERSON"|"LEGAL_ENTITY"|"INSTITUTION"|"UNIT"|"DISTRIBUTION_PLAN";
export type Visibility="GENERAL"|"PERSONAL"|"SPECIAL";
export type SignatureStepType="CONTROL"|"PARAPH"|"SIGN"|"COORDINATED"|"CLOSURE_PARAPH"|"CLOSURE_SIGN";

export interface Attachment {
 kind:"FILE"|"PHYSICAL"|"REGISTERED_DOCUMENT"|"EXTERNAL_REFERENCE";
 label:string; reference:string;
}
export interface Interest { kind:"FILE"|"TEXT"|"REGISTERED_DOCUMENT"; text:string; reference?:string; }
export interface Note { text:string; visibility:Visibility; visibleToUserIds?:readonly string[]; }
export interface ApprovalStep { userId:string; type:SignatureStepType; order:number; }
export interface DistributionTarget { selectionType:SelectionType; targetId:string; purpose:"GEREGI"|"BILGI"; }

export interface OutgoingDocumentDraft {
 topicCodes:readonly string[];
 subject:string;
 filingFolderId:string;
 transferFolderNumberToNumber:boolean;
 documentType:string;
 language:"TR"|"EN";
 confidentiality?:string;
 citizenTcId?:string;
 numberSuffix?:string;
 urgency:string;
 deadline?:string;
 distribution:readonly DistributionTarget[];
 approvalFlow:readonly ApprovalStep[];
 body:string;
 attachments:readonly Attachment[];
 interests:readonly Interest[];
 relatedDocumentIds:readonly string[];
 notes:readonly Note[];
}

export function validateOutgoingDraft(d:OutgoingDocumentDraft):string[] {
 const errors:string[]=[];
 if(!d.topicCodes.length) errors.push("TOPIC_CODE_REQUIRED");
 if(!d.filingFolderId) errors.push("FILING_FOLDER_REQUIRED");
 if(!d.documentType) errors.push("DOCUMENT_TYPE_REQUIRED");
 if(!d.approvalFlow.length) errors.push("APPROVAL_FLOW_REQUIRED");
 if(!d.body.trim()) errors.push("BODY_REQUIRED");
 const orders=d.approvalFlow.map(x=>x.order);
 if(new Set(orders).size!==orders.length) errors.push("APPROVAL_ORDER_DUPLICATE");
 return errors;
}
