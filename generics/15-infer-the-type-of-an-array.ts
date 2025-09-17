function makeStatus<TStatuses extends string[]>(statuses: TStatuses) {
    return statuses;
}

const statuses = makeStatus(["info", "debug", "error", "warn"] as const);

function makeStatus2<TStatus extends string>(statuses: TStatus[]) {
    return statuses;
}

const statuses2 = makeStatus2(["info", "debug", "warn"]);
