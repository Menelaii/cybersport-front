import {TeamShortDto} from "../teams/team-short-dto";

export interface MatchDTO {
    id: number;
    team1: TeamShortDto;
    team2: TeamShortDto;
    winnerTeam?: TeamShortDto
}
