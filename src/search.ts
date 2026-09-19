export interface DocumentSearchCriteria {
 number?:string; dateFrom?:string; dateTo?:string; direction?:"INCOMING"|"OUTGOING";
 fullText?:string; detailed?:Record<string,string|number|boolean>;
}
export type SearchExportFormat="PDF"|"XLSX";
export interface NotificationSearch { mode:"SERVED_BY_ME"|"SERVED_TO_ME"; query?:string; }
