const programModeEnumMap = {
    GROUP: "group",
    ANNOUNCEMENT: "announcemenet",
    ONE_ON_ONE: "1on1",
    SELF_DIRECTED: "selfDirected",
    PLANNED_ONE_ON_ONE: "planned1on1",
    PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

type GroupProgram = typeof programModeEnumMap["GROUP"];
type AnnouncementProgram = typeof programModeEnumMap["ANNOUNCEMENT"];
type OneOnOneProgram = typeof programModeEnumMap["ONE_ON_ONE"];
type SelfDirectedProgram = typeof programModeEnumMap["SELF_DIRECTED"];
type PlannedOneOnOneProgram = typeof programModeEnumMap["PLANNED_ONE_ON_ONE"];
type PlannedSelfDirected = typeof programModeEnumMap["PLANNED_SELF_DIRECTED"];

type T = typeof programModeEnumMap[
    Exclude<keyof typeof programModeEnumMap, "GROUP" | "PLANNED_SELF_DIRECTED">
];
