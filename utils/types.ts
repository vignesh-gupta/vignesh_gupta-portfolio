import { IconType } from 'react-icons';

export type TExperience = {
  _id: string;
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: { text: string; _key: string }[];
};

export type TProject = {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  codeLink: string;
  projectLink: string;
  tags: string[];
  isFeatured: boolean;
  imgUrl: string;
};

export type TSkill = {
  _id: string;
  _createdAt: string;
  name: string;
  icon: string;
};

export type TSocial = {
  text: string;
  url: string;
  Icon: IconType;
};
