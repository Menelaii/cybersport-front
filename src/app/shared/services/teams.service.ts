import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {XPage} from "../interfaces/pagination/x-page";
import {Observable} from "rxjs";
import {PageDTO} from "../interfaces/pagination/page.dto";
import {TournamentShortDTO} from "../interfaces/tournaments/tournament-short.dto";
import {environment} from "../../../environments/environment.dev";
import {TeamDTO} from "../interfaces/teams/team.dto";

@Injectable()
export class TeamsService {

    constructor(private http: HttpClient) {}

    getTeams(xpage: XPage): Observable<PageDTO<TournamentShortDTO>> {
        let params = new HttpParams();
        params = params.append('page', xpage.page.toString());
        params = params.append('itemsPerPage', xpage.itemsPerPage.toString());

        return this.http.get<PageDTO<TournamentShortDTO>>(environment.TEAMS_URL, { params });
    }

    getTeamById(teamId: number): Observable<TeamDTO> {
        return this.http.get<TeamDTO>(`${environment.TEAMS_URL}/${teamId}`);
    }
}
