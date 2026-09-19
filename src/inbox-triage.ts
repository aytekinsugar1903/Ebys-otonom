import type { EbysDocument } from "./domain.js";
import {deadlineStatus,type DeadlineLevel} from "./deadline.js";
export interface InboxCard {id:EbysDocument["id"];subject:string;sender?:string;deadline?:string;deadlineLevel?:DeadlineLevel;attachmentCount:number;}
export function buildInboxCard(d:EbysDocument,nowIso:string):InboxCard{return {id:d.id,subject:d.subject,sender:d.sender,deadline:d.deadline,deadlineLevel:d.deadline?deadlineStatus(d.deadline,nowIso).level:undefined,attachmentCount:d.attachments.length};}
