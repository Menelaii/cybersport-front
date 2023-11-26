import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment.dev";
import {HttpHeaders} from "@angular/common/http";
import {AuthResponseDTO} from "../interfaces/auth/auth-response.dto";

@Injectable()
export class AuthStorageService {

  public getToken():string | null {
    return localStorage.getItem(environment.TOKEN_KEY)
  }

  public setAuth(response:AuthResponseDTO | null) {
    localStorage.clear()
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem(environment.TOKEN_KEY, response.token)
      localStorage.setItem(environment.EXP_DATE_KEY, expDate.toString())
      localStorage.setItem(environment.ROLE_KEY, response.role)
    }
  }

  public isTokenExpired():boolean {
    const expDateStr = localStorage.getItem(environment.EXP_DATE_KEY)
    if (expDateStr) {
      const expDate: Date = new Date(expDateStr)
      return new Date() > expDate
    }

    return false
  }

  public getAuthHeader(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'bearer ' + this.getToken() ?? ''
    })
  }

  getRole(): string {
    return localStorage.getItem(environment.ROLE_KEY) || '';
  }
}
