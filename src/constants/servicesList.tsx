import { TelegramIcon } from '../assets/icons/TelegramIcon';
import { LinkedInIcon } from '../assets/icons/LinkedInIcon';
import { GithubIcon } from '../assets/icons/GithubIcon';
import { YouTubeIcon } from '../assets/icons/YouTubeIcon';
import { TELEGRAM_LINK } from './telegramLink';

export const SERVICES_LIST = [
  {
    name: 'Telegram',
    color: '#0071e3',
    link: TELEGRAM_LINK,
    icon: TelegramIcon,
  },
  {
    name: 'YouTube',
    color: '#FF0032',
    link: 'https://www.youtube.com/channel/UCBPw4bK7f0DjDuV5xS_OvEA',
    icon: YouTubeIcon,
  },
  {
    name: 'LinkedIn',
    color: '#0B65C2',
    link: 'https://linkedin.com/in/pavel-zinovyev',
    icon: LinkedInIcon,
  },
  {
    name: 'GitHub',
    color: 'black',
    link: 'https://github.com/PavelZinovyev',
    icon: GithubIcon,
  },
];
