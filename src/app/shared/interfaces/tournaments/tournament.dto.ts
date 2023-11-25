import {TeamShortDto} from "../teams/team-short-dto";
import {TournamentStageShortDTO} from "../tournament-stages/tournament-stage-short.dto";
import {TournamentResultShortDTO} from "../tournament-results/tournament-result-short.dto";

export interface TournamentDTO {
    id: number;
    name: string;
    discipline: string;
    organizer: string;
    location: string;
    startDate: string;
    endDate: string;
    isStarted: boolean;
    teams: TeamShortDto[];
    stages: TournamentStageShortDTO[];
    results: TournamentResultShortDTO[];
}
