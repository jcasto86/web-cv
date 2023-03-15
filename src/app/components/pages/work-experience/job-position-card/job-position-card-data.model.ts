export interface JobPositionData {
  position?: string;
  logo?: CompanyLogo;
  startDate?: Date;
  endDate?: Date;
  remote?: boolean;
  city?: string;
  description?: string;
}

export interface CompanyLogo {
  href?: string;
  src?: string;
  altText?: string;
}
