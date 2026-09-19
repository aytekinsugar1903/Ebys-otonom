import type { DocumentAction, DocumentId, UserId } from "./domain.js";
export interface AuditEvent { timestamp:string; documentId?:DocumentId; actor:"AI"|"USER"|"SYSTEM"; action:DocumentAction; confidence?:number; requiresApproval:boolean; approvedBy?:UserId; result:"PLANNED"|"SUCCESS"|"FAILED"|"CANCELLED"; detail?:string; }
export interface AuditLog { append(event:AuditEvent):Promise<void>; }
export class MemoryAuditLog implements AuditLog { readonly events:AuditEvent[]=[]; async append(e:AuditEvent){this.events.push(e);} }
