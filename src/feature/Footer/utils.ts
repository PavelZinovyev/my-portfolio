import type { ContactProps } from '@/types/Contacts';
import type { LangProps } from '@/types/Lang';
import { TRANSLATIONS } from '@/constants/i18n';

export const getCopyrightsText = (lang: LangProps): string => {
  return `© ${new Date().getFullYear()} ${TRANSLATIONS[lang].fio}`;
};

export const getToastText = (
  type: ContactProps['type'],
  status: 'success' | 'error',
  lang: LangProps
): string => {
  const messages: Record<ContactProps['type'], { success: string; error: string }> = {
    tel: {
      success: TRANSLATIONS[lang].phoneCopiedSuccess,
      error: TRANSLATIONS[lang].phoneCopiedFailed,
    },
    email: {
      success: TRANSLATIONS[lang].emailCopiedSuccess,
      error: TRANSLATIONS[lang].emailCopiedFailed,
    },
    media: {
      success: TRANSLATIONS[lang].mediaCopiedSuccess,
      error: TRANSLATIONS[lang].mediaCopiedFailed,
    },
  };

  return messages[type]?.[status] ?? '';
};
