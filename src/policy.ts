import type { Decision, DocumentAction, Risk } from "./domain.js";
const RED = new Set<DocumentAction>(["PARAPH","SIGN","FINAL_SEND","WITHDRAW","DELETE","ADMIN_CHANGE"]);
const YELLOW = new Set<DocumentAction>(["FORWARD_PERSON","FORWARD_UNIT","CLOSE","SCHEDULE_CLOSE","SUBMIT_FOR_PARAPH"]);
export function riskOf(action: DocumentAction): Risk { if (RED.has(action)) return "RED"; if (YELLOW.has(action)) return "YELLOW"; return "GREEN"; }
export interface PolicyResult { allowed: boolean; requiresHumanApproval: boolean; reason?: string; }
export function evaluatePolicy<T>(d: Decision<T>, threshold=.9): PolicyResult {
 if (!Number.isFinite(d.confidence)||d.confidence<0||d.confidence>1) return {allowed:false,requiresHumanApproval:true,reason:"INVALID_CONFIDENCE"};
 const r=riskOf(d.action);
 if(r==="RED") return {allowed:true,requiresHumanApproval:true,reason:"CRITICAL_ACTION"};
 if(d.confidence<threshold) return {allowed:true,requiresHumanApproval:true,reason:"LOW_CONFIDENCE"};
 if(r==="YELLOW") return {allowed:true,requiresHumanApproval:true,reason:"CONTROLLED_ACTION"};
 return {allowed:true,requiresHumanApproval:false};
}
