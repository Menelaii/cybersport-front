import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthResponseDTO} from "../interfaces/auth/auth-response.dto";
import {environment} from "../../../environments/environment.dev";
import {AuthRequestDTO} from "../interfaces/auth/auth-request.dto";
import {Observable} from "rxjs";
import {AuthStorageService} from "./auth-storage.service";

@Injectable()
export class AuthService {

  constructor(private storage: AuthStorageService,
              private http: HttpClient) {
  }

  public signIn(auth:AuthRequestDTO):Observable<AuthResponseDTO | null> {
    return this.http.post<AuthResponseDTO>(environment.SIGN_IN_URL, auth)
  }

  public signOut() {
    this.storage.setAuth(null);
  }

  public isAuthenticated():boolean {
    return this.storage.getToken() != null && !this.storage.isTokenExpired();
  }

  public getRole(): string {
    return this.storage.getRole();
  }
}
