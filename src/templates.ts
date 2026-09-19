import type { SelectionType } from "./document-creation.js";
export interface DistributionPlan { id:string; name:string; elements:readonly {type:SelectionType;id:string}[]; subUnitsCanSee:boolean; active:boolean; }
export interface ContentTemplate { id:string; scope:"PERSONAL"|"UNIT"; name:string; documentType:string; body:string; unitIds?:readonly string[]; subUnitsCanSee?:boolean; active:boolean; }
export interface ApprovalFlowTemplate { id:string; name:string; type:"OUTGOING"|"CLOSURE"; steps:readonly {userId:string; role:"CONTROL"|"PARAPH"|"SIGN"|"COORDINATED"|"CLOSURE_PARAPH"|"CLOSURE_SIGN"}[]; active:boolean; }
export interface Favorite { kind:"TOPIC_CODE"|"SUBJECT"|"FOLDER"|"UNIT"|"INSTITUTION"|"COMPANY"; id:string; label:string; }
export interface UserUnitGroup { id:string; name:string; userIds:readonly string[]; active:boolean; }
