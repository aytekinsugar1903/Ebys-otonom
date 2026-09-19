import type { Actor, DocumentId, EbysDocument, Purpose } from "./domain.js";
export interface RoutingInput { documentId: DocumentId; purpose: Purpose; destinationIds: readonly string[]; }
export interface DraftInput { subject:string; body:string; topicCodes:readonly string[]; distributionIds:readonly string[]; }
export interface ClosureInput { documentId:DocumentId; folderId:string; closeAt?:string; }
export interface EbysConnector {
 getCurrentUser():Promise<Actor>; getIncomingDocuments():Promise<readonly EbysDocument[]>; getDocument(id:DocumentId):Promise<EbysDocument>; searchDocuments(query:string):Promise<readonly EbysDocument[]>;
 acceptDocument(id:DocumentId):Promise<void>; routeToUnit(input:RoutingInput):Promise<void>; routeToPerson(input:RoutingInput):Promise<void>;
 createDraft(input:DraftInput):Promise<DocumentId>; addAttachment(id:DocumentId,data:Uint8Array,name:string):Promise<void>; submitForApproval(id:DocumentId):Promise<void>;
 closeDocument(input:ClosureInput):Promise<void>; withdrawDocument(id:DocumentId):Promise<void>; paraphrase(id:DocumentId):Promise<void>; sign(id:DocumentId):Promise<void>; finalSend(id:DocumentId):Promise<void>;
}
