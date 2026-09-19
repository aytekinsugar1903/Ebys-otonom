import type { Decision, DocumentAction, EbysDocument } from "./domain.js";
import type { DistributionTarget } from "./document-creation.js";
export type DocumentIntent="INFORMATION"|"ACTION_REQUIRED"|"REPLY_REQUIRED"|"APPROVAL_REQUIRED"|"ROUTING_REQUIRED"|"DEADLINE_REQUIRED"|"ARCHIVE_ONLY"|"UNCLEAR";
export interface ExtractedDocumentFacts {subject:string;sender?:string;documentNumber?:string;documentDate?:string;deadline?:string;requestedActions:readonly string[];referencedDocuments:readonly string[];attachmentMentions:readonly string[];intent:DocumentIntent;summary:string;}
export interface ExpertRecommendation {facts:ExtractedDocumentFacts;proposedAction:DocumentAction;proposedTopicCodes:readonly string[];proposedFilingFolderId?:string;proposedDistribution:readonly DistributionTarget[];replyNeeded:boolean;draftReply?:string;missingInformation:readonly string[];confidence:number;rationale:string;}
export interface SemanticExpert {analyze(document:EbysDocument):Promise<ExpertRecommendation>;}
export function recommendationToDecision(r:ExpertRecommendation):Decision<ExpertRecommendation>{return {action:r.proposedAction,confidence:r.confidence,rationale:r.rationale,payload:r};}
