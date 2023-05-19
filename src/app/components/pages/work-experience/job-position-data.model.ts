export interface JobPosition {
    id?: number;
    logoHref: string;
    logoSrc: string;
    logoAltText: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    city: string;
    description: string;
    remote: number;
}