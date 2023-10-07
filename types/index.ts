export type TExperience = {
  _id: string;
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: {text: string , _key: string}[];
};
