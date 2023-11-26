export interface CreateJudgeRequestDTO {
    firstName: string;
    lastName: string;
    middleName: string;
    contacts: string[];
    birthDate: string;
    subjectOfRF: string;
    email: string;
    password: string;
    residence: string;
    certificationLevel: number;
}
