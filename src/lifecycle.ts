export interface WithdrawalContext { nextApproverOpened:boolean; note:string; }
export function canWithdraw(c:WithdrawalContext):boolean{return !c.nextApproverOpened&&c.note.trim().length>0;}
export interface DeleteContext { submitted:boolean; withdrawn:boolean; nextApproverOpened:boolean; note:string; }
export function canDelete(c:DeleteContext):boolean {
 return c.note.trim().length>0 && (!c.submitted || (c.withdrawn&&!c.nextApproverOpened));
}
export interface ClosurePlan { documentId:string; routedToCurrentUser:boolean; type:string; filingFolderId:string; closeAt?:string; }
export function validateClosure(p:ClosurePlan):string[]{
 const e:string[]=[]; if(!p.routedToCurrentUser)e.push("MUST_BE_ROUTED_TO_CURRENT_USER"); if(!p.type)e.push("CLOSURE_TYPE_REQUIRED"); if(!p.filingFolderId)e.push("FILING_FOLDER_REQUIRED"); return e;
}
