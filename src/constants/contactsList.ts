import type { ContactProps } from '@/types/Contacts';
import { TelephoneIcon } from '@/assets/icons/TelephoneIcon';
import { TelegramMiniIcon } from '@/assets/icons/TelegramMiniIcon';
import { EmailIcon } from '@/assets/icons/EmailIcon';

export const CONTACTS_LIST: ContactProps[] = [
  { label: 'Телефон', value: '8-915-362-47-05', type: 'tel', icon: TelephoneIcon },
  { label: 'Почта', value: 'frontenderpavel@gmail.com', type: 'email', icon: EmailIcon },
  {
    label: 'Телеграм',
    value: 'pashka_aleksandrovich',
    type: 'media',
    href: 'https://t.me/pashka_aleksandrovich',
    icon: TelegramMiniIcon,
  },
];
