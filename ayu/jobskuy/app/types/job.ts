export interface JobType {
  job_id: string;
  title: string;
  slug: string;
  url: string;
  company_name: string;
  company_logo: string;
  location: string;
  job_country: string;
  job_city: string;
  job_employment_type: string;
  employer_logo: string;
  employer_name: string;
  job_highlights: {
    Qualifications?: string[];
    Responsibilities?: string[];
  };
}
