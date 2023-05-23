export interface JobPosition {
    id?: number;
    logoHref: string;
    logoSrc: string;
    logoAltText: string;
    position: string;
    startDate: string;
    endDate?: string;
    city: string;
    description: string;
    remote?: boolean;
}