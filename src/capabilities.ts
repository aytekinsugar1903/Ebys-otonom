export type CapabilityStatus="UI_CONFIRMED_API_UNKNOWN"|"IMPLEMENTED"|"UNSUPPORTED";
export const capabilities={
 documentCreation:"UI_CONFIRMED_API_UNKNOWN", approvalDocument:"UI_CONFIRMED_API_UNKNOWN",
 attachments:"UI_CONFIRMED_API_UNKNOWN", interests:"UI_CONFIRMED_API_UNKNOWN", notes:"UI_CONFIRMED_API_UNKNOWN",
 search:"UI_CONFIRMED_API_UNKNOWN", notificationSearch:"UI_CONFIRMED_API_UNKNOWN",
 unitRouting:"UI_CONFIRMED_API_UNKNOWN", personRouting:"UI_CONFIRMED_API_UNKNOWN", bulkRouting:"UI_CONFIRMED_API_UNKNOWN",
 returnDocument:"UI_CONFIRMED_API_UNKNOWN", reply:"UI_CONFIRMED_API_UNKNOWN", withdraw:"UI_CONFIRMED_API_UNKNOWN",
 deleteDocument:"UI_CONFIRMED_API_UNKNOWN", closure:"UI_CONFIRMED_API_UNKNOWN", distributionPlans:"UI_CONFIRMED_API_UNKNOWN",
 templates:"UI_CONFIRMED_API_UNKNOWN", approvalFlows:"UI_CONFIRMED_API_UNKNOWN", delegation:"UI_CONFIRMED_API_UNKNOWN",
 documentTransfer:"UI_CONFIRMED_API_UNKNOWN", documentCopy:"UI_CONFIRMED_API_UNKNOWN", userManagement:"UI_CONFIRMED_API_UNKNOWN"
} as const satisfies Record<string,CapabilityStatus>;
