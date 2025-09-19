import type { ContactProps } from '@/types/Contacts';
import { TelephoneIcon } from '@/assets/icons/TelephoneIcon';
import { TelegramMiniIcon } from '@/assets/icons/TelegramMiniIcon';
import { EmailIcon } from '@/assets/icons/EmailIcon';

export const CONTACTS_LIST: ContactProps[] = [
  { label: 'Phone number', value: '8-915-362-47-05', type: 'tel', icon: TelephoneIcon },
  { label: 'Email', value: 'frontenderpavel@gmail.com', type: 'email', icon: EmailIcon },
  {
    label: 'Telegram',
    value: 'pashka_aleksandrovich',
    type: 'media',
    href: 'https://t.me/pashka_aleksandrovich',
    icon: TelegramMiniIcon,
  },
];
