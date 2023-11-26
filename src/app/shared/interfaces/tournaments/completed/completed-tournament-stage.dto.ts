import {CompletedMatchDTO} from "./completed-match.dto";

export interface CompletedStageDTO {
    name: string;
    matches: CompletedMatchDTO[];
}
