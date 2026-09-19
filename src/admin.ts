export type SigningMethod="E_SIGNATURE"|"MOBILE_SIGNATURE"|"DIGITAL_SIGNATURE";
export interface UserRecord { id:string; tcId?:string; name:string; email?:string; unitIds:readonly string[]; roleIds:readonly string[]; signingMethod:SigningMethod; accessibility:boolean; active:boolean; }
export interface UserDefaults { theme:"LIGHT"|"DARK"; accessibility:boolean; }
export function canDeleteUser(hasAnyTransaction:boolean):boolean{return !hasAnyTransaction;}
export function deactivationOrder():readonly ["REMOVE_ROLES","REMOVE_UNITS"]{return ["REMOVE_ROLES","REMOVE_UNITS"];}
