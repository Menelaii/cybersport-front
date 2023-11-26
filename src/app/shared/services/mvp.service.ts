import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {CreateMvpDTO} from "../interfaces/players/create-mvp.dto";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.dev";
import {AuthStorageService} from "./auth-storage.service";

@Injectable()
export class MvpService {

    constructor(private http: HttpClient,
                private tokenStorage: AuthStorageService) {}


    setMvp(dto: CreateMvpDTO): Observable<any> {
        return this.http.post(`${environment.MVP_URL}`, dto, {
            headers: this.tokenStorage.getAuthHeader()
        });
    }
}
