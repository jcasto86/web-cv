export interface JobPosition {
    id?: number;
    logoHref: string;
    logoSrc: string;
    logoAltText: string;
    position: string;
    startMonth: number;
    startYear: number;
    endMonth?: number;
    endYear?: number;
    city: string;
    description: string;
    remote?: boolean;
}