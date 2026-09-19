import {describe,it,expect} from "vitest";
import {canTransition} from "../src/workflows.js";
import {canWithdraw,canDelete,validateClosure} from "../src/lifecycle.js";
import {validateOutgoingDraft} from "../src/document-creation.js";
describe("BELGENET workflow guards",()=>{
 it("blocks impossible signature from draft",()=>expect(canTransition("DRAFT","SIGN")).toBe(false));
 it("allows submit from draft",()=>expect(canTransition("DRAFT","SUBMIT_FOR_PARAPH")).toBe(true));
 it("withdraws only before next approver opens",()=>{expect(canWithdraw({nextApproverOpened:false,note:"hata"})).toBe(true);expect(canWithdraw({nextApproverOpened:true,note:"hata"})).toBe(false);});
 it("deletes submitted document only after safe withdrawal",()=>expect(canDelete({submitted:true,withdrawn:false,nextApproverOpened:false,note:"hata"})).toBe(false));
 it("requires routed incoming document for closure",()=>expect(validateClosure({documentId:"1",routedToCurrentUser:false,type:"NORMAL",filingFolderId:"K"})).toContain("MUST_BE_ROUTED_TO_CURRENT_USER"));
 it("validates outgoing required fields",()=>expect(validateOutgoingDraft({topicCodes:[],subject:"",filingFolderId:"",transferFolderNumberToNumber:false,documentType:"",language:"TR",urgency:"NORMAL",distribution:[],approvalFlow:[],body:"",attachments:[],interests:[],relatedDocumentIds:[],notes:[]})).toEqual(expect.arrayContaining(["TOPIC_CODE_REQUIRED","FILING_FOLDER_REQUIRED","DOCUMENT_TYPE_REQUIRED","APPROVAL_FLOW_REQUIRED","BODY_REQUIRED"])));
});
