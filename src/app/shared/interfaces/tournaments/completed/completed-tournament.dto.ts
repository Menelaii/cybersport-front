import {CompletedTournamentResultDTO} from "./completed-tournament-result.dto";
import {CompletedStageDTO} from "./completed-tournament-stage.dto";

export interface CompletedTournamentDTO {
    name: string;
    location: string;
    discipline: string;
    startDate: string;
    endDate: string;
    registrationDate: string;
    closingDate: string;
    reportDate: string;
    organizer: string;
    stages: CompletedStageDTO[];
    judgeIds: number[];
    secretaryIds: number[];
    chiefJudgeId: number;
    chiefSecretaryId: number;
    results: CompletedTournamentResultDTO[];
}
