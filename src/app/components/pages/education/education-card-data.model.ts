export interface EducationData {
  id?: number;
  studyName?: string;
  university?: string;
  logoHref: string;
  logoSrc: string;
  logoAltText: string;
  startMonth: number;
  startYear: number;
  endMonth?: number;
  endYear?: number;
  city?: string;
}