export interface AuthResponse {
    ok: boolean;
    uid?: string;
    name?: string;
    email?: string;
    token?: string;
    msg?: string;
}

export interface Usuario {
    uid: string;
    name: string;
    email: string;
}

export interface JobPosition {
    uid: string;
    logoHref: string;
    logoSrc: string;
    logoAltText: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    city: string;
    remote: boolean;
    description: string;
}