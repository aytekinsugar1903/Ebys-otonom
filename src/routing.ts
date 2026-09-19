import type { Purpose } from "./domain.js";
export interface RouteTarget { id:string; kind:"UNIT"|"USER"; purpose:Purpose; }
export interface RoutePlan { documentIds:readonly string[]; targets:readonly RouteTarget[]; note?:string; processingDurationDays?:number; approverId?:string; }
export function validateRoutePlan(p:RoutePlan):string[] {
 const e:string[]=[];
 if(!p.documentIds.length)e.push("DOCUMENT_REQUIRED");
 if(!p.targets.length)e.push("TARGET_REQUIRED");
 if(p.processingDurationDays!==undefined&&p.processingDurationDays<0)e.push("INVALID_DURATION");
 return e;
}
export interface ReturnPlan { documentId:string; mode:"TO_ROUTER"|"TO_UPPER_UNIT"; reason:string; }
export function validateReturnPlan(p:ReturnPlan):string[]{return p.reason.trim()?[]:["RETURN_REASON_REQUIRED"];}
