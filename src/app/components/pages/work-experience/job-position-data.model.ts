export interface JobPosition {
    id?: number;
    logoHref: string;
    logoSrc: string;
    logoAltText: string;
    position: string;
    startMonth: string;
    startYear: string;
    endMonth?: string;
    endYear?: string;
    city: string;
    description: string;
    remote?: boolean;
}