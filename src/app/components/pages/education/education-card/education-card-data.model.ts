export interface EducationData {
  studyName?: string;
  university?: string;
  logo?: SchoolLogo;
  startDate?: Date;
  endDate?: Date;
  remote?: boolean;
  city?: string;
  description?: string;
}

export interface SchoolLogo {
  href?: string;
  src?: string;
  altText?: string;
}
