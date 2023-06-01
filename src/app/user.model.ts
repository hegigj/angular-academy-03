export enum Gender {
    MALE = 0,
    FEMALE = 1
}

export interface UserModel {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    idCard: string;
    gender: Gender;
}