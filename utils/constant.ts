import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { TSocial } from './types';

export const socials: TSocial[] = [
  {
    text: 'Github',
    url: 'http://github.com/vignesh-gupta',
    Icon: BsGithub,
  },
  {
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vigneshgupta/',
    Icon: BsLinkedin,
  },
  {
    text: 'Twitter',
    url: 'https://twitter.com/vigneshfixes',
    Icon: BsTwitterX,
  },
];

export const CONTACT_EMAIL = 'hello@vigneshgupta.tech';
