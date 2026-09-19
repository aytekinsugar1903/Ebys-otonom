export interface Delegation {
 id:string; approvalDocumentId:string; fromUserId:string; toUserId:string;
 documentIds:readonly string[]; roleIds:readonly string[]; folderIds:readonly string[];
 allFolderAccess:boolean; requiresHigherApproval:boolean;
 startsAt:string; endsAt:string; explanation?:string; status:"ACTIVE"|"PASSIVE"|"CANCELLED";
}
export function validateDelegation(d:Delegation):string[]{
 const e:string[]=[];
 if(!d.approvalDocumentId)e.push("APPROVAL_DOCUMENT_REQUIRED");
 if(d.fromUserId===d.toUserId)e.push("SAME_USER");
 if(Date.parse(d.startsAt)>Date.parse(d.endsAt))e.push("INVALID_DATE_RANGE");
 return e;
}
export interface DocumentTransfer { fromUserId:string; toUserId:string; documentIds:readonly string[]; explanation:string; }
