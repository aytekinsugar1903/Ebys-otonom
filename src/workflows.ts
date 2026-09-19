import type { DocumentAction } from "./domain.js";

export type Role =
  | "STANDART_KULLANICI" | "SON_IMZACI_AMIR" | "BELGENET_SORUMLUSU"
  | "YETKILI_PERSONEL" | "PARAFCI" | "IMZACI";

export type WorkflowState =
  | "DRAFT" | "WAITING_PARAPH" | "WAITING_SIGNATURE" | "SIGNED" | "DISTRIBUTED"
  | "WAITING_ACCEPTANCE" | "ACCEPTED" | "ROUTED" | "RETURNED" | "CLOSED"
  | "WITHDRAWN" | "DELETED";

export interface Transition {
  from: readonly WorkflowState[];
  action: DocumentAction | "ACCEPT" | "RETURN" | "COPY";
  to: WorkflowState;
  roles?: readonly Role[];
  humanApproval: boolean;
}

export const transitions: readonly Transition[] = [
 {from:["DRAFT"],action:"SUBMIT_FOR_PARAPH",to:"WAITING_PARAPH",roles:["STANDART_KULLANICI"],humanApproval:true},
 {from:["WAITING_PARAPH"],action:"PARAPH",to:"WAITING_SIGNATURE",roles:["PARAFCI"],humanApproval:true},
 {from:["WAITING_SIGNATURE"],action:"SIGN",to:"SIGNED",roles:["IMZACI","SON_IMZACI_AMIR"],humanApproval:true},
 {from:["SIGNED"],action:"FINAL_SEND",to:"DISTRIBUTED",roles:["SON_IMZACI_AMIR"],humanApproval:true},
 {from:["WAITING_ACCEPTANCE"],action:"ACCEPT",to:"ACCEPTED",humanApproval:false},
 {from:["ACCEPTED"],action:"FORWARD_UNIT",to:"ROUTED",humanApproval:true},
 {from:["ACCEPTED"],action:"FORWARD_PERSON",to:"ROUTED",humanApproval:true},
 {from:["ROUTED"],action:"CLOSE",to:"CLOSED",humanApproval:true},
 {from:["WAITING_PARAPH","WAITING_SIGNATURE"],action:"WITHDRAW",to:"WITHDRAWN",humanApproval:true},
 {from:["DRAFT","WITHDRAWN"],action:"DELETE",to:"DELETED",humanApproval:true},
];

export function canTransition(state:WorkflowState, action:Transition["action"]):boolean {
 return transitions.some(t=>t.from.includes(state)&&t.action===action);
}
