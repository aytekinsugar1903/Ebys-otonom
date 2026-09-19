export type DocumentId = string & { readonly __brand: "DocumentId" };
export type UserId = string & { readonly __brand: "UserId" };
export type Purpose = "GEREGI" | "BILGI";
export type DocumentAction =
  | "DRAFT_REPLY" | "FORWARD_PERSON" | "FORWARD_UNIT" | "FOR_INFORMATION"
  | "ARCHIVE" | "CLOSE" | "SCHEDULE_CLOSE" | "REQUEST_ATTACHMENT"
  | "SUBMIT_FOR_PARAPH" | "PARAPH" | "SIGN" | "FINAL_SEND"
  | "WITHDRAW" | "DELETE" | "ADMIN_CHANGE" | "NEEDS_HUMAN_REVIEW";
export type Risk = "GREEN" | "YELLOW" | "RED";
export interface EbysDocument { id: DocumentId; subject: string; body: string; sender?: string; deadline?: string; attachments: readonly string[]; }
export interface Decision<T> { action: DocumentAction; confidence: number; rationale: string; payload: T; }
export interface Actor { id: UserId; roles: readonly string[]; permissions: readonly string[]; }
