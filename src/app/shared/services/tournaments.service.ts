import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {XPage} from "../interfaces/pagination/x-page";
import {TournamentShortDTO} from "../interfaces/tournaments/tournament-short.dto";
import {PageDTO} from "../interfaces/pagination/page.dto";
import {environment} from "../../../environments/environment.dev";
import {TournamentDTO} from "../interfaces/tournaments/tournament.dto";

@Injectable()
export class TournamentService {

  constructor(private http: HttpClient) {}

  getTournaments(xpage: XPage): Observable<PageDTO<TournamentShortDTO>> {
    let params = new HttpParams();
    params = params.append('page', xpage.page.toString());
    params = params.append('itemsPerPage', xpage.itemsPerPage.toString());

    return this.http.get<PageDTO<TournamentShortDTO>>(environment.TOURNAMENTS_URL, { params });
  }

  getTournament(tournamentId: number): Observable<TournamentDTO> {
    return this.http.get<TournamentDTO>(`${environment.TOURNAMENTS_URL}/${tournamentId}`);
  }
}
