import type { Actor, DocumentAction } from "./domain.js";
const permissionMap:Partial<Record<DocumentAction,readonly string[]>>={PARAPH:["PARAPH"],SIGN:["SIGN"],FINAL_SEND:["EXTERNAL_SEND"],ADMIN_CHANGE:["ADMIN"],FORWARD_UNIT:["ROUTE_UNIT"],FORWARD_PERSON:["ROUTE_PERSON"],CLOSE:["CLOSE_DOCUMENT"],WITHDRAW:["WITHDRAW"],DELETE:["DELETE_DOCUMENT"]};
export function hasPermission(actor:Actor,action:DocumentAction):boolean{const needed=permissionMap[action];return !needed?.length||needed.some(p=>actor.permissions.includes(p));}
export function requirePermission(actor:Actor,action:DocumentAction):void{if(!hasPermission(actor,action))throw new Error("PERMISSION_DENIED:"+action);}
