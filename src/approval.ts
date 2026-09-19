import type { Decision, UserId } from "./domain.js"; import { evaluatePolicy } from "./policy.js";
export type Approval={status:"NOT_REQUIRED"}|{status:"PENDING";reason:string}|{status:"APPROVED";approvedBy:UserId;approvedAt:string}|{status:"REJECTED";rejectedBy:UserId;rejectedAt:string};
export function approvalFor<T>(d:Decision<T>):Approval { const p=evaluatePolicy(d); return (!p.allowed||p.requiresHumanApproval)?{status:"PENDING",reason:p.reason??"POLICY"}:{status:"NOT_REQUIRED"}; }
