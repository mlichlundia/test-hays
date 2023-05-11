export interface ProfileInterface {
  name: string;
  lastName: string;
  title: string;
  imgName: string;
  contacts: ContactInterface[];
  summary: string;
  skills: string[];
  languages: LanguageInterface[];
  workExperience: WorkExperienceInterface[]
}

export interface ContactInterface {
  label: string;
  value: string;
  src?: string
}

export interface LanguageInterface {
  label: string;
  lvl: string;
}

export interface WorkExperienceInterface {
  title: string,
  company: string,
  achievements: string[]
}