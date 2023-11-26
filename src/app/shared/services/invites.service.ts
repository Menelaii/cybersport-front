import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.dev";
import {AuthStorageService} from "./auth-storage.service";
import {CreateInvitationLinksRequestDTO} from "../interfaces/invites/create-invitation-links-request.dto";
import {CreateInvitationLinksResponseDTO} from "../interfaces/invites/create-invitation-links-response.dto";
import {CreateJudgeRequestDTO} from "../interfaces/judges/create-judge-request.dto";

@Injectable()
export class InviteService {

    constructor(
        private http: HttpClient,
        private tokenStorageService: AuthStorageService
    ) {
    }

    generateInvites(amount: number, role: string): Observable<CreateInvitationLinksResponseDTO> {
        const requestDTO: CreateInvitationLinksRequestDTO = {role: role, amount: amount}
        return this.http.post<CreateInvitationLinksResponseDTO>(environment.GENERATE_INVITES_URL, requestDTO, {
            headers: this.tokenStorageService.getAuthHeader(),
        });
    }

    registerJudge(token: string, createJudgeRequestDTO: CreateJudgeRequestDTO): Observable<void> {
        return this.http.post<void>(environment.REGISTER_JUDGE_URL, createJudgeRequestDTO, {
            params: {token},
            headers: this.tokenStorageService.getAuthHeader()
        });
    }

    validateLink(token: string): Observable<boolean> {
        return this.http.get<boolean>(environment.VALIDATE_INVITE_LINK_URL,
            { params: { token } });
    }
}
