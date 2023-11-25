import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {PageDTO} from "../interfaces/pagination/page.dto";
import {MatchDTO} from "../interfaces/matches/match.dto";
import {environment} from "../../../environments/environment.dev";
import {Injectable} from "@angular/core";
import {XPage} from "../interfaces/pagination/x-page";

@Injectable()
export class MatchesService {

    constructor(private http: HttpClient) {}

    getCurrentStageMatches(tournamentId: number, xpage: XPage): Observable<PageDTO<MatchDTO>> {
        let params = new HttpParams();
        params = params.append('page', xpage.page.toString());
        params = params.append('itemsPerPage', xpage.itemsPerPage.toString());

        return this.http.get<PageDTO<MatchDTO>>(
            `${environment.TOURNAMENTS_URL}/${tournamentId}/current-stage/matches`,
            {params}
        );
    }
}
