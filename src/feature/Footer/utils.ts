import type { ContactProps } from '@/types/Contacts';

export const getCopyrightsText = (): string => {
  return `© ${new Date().getFullYear()} Pavel Zinovyev`;
};

export const getToastText = (type: ContactProps['type'], status: 'success' | 'error'): string => {
  const messages: Record<ContactProps['type'], { success: string; error: string }> = {
    tel: {
      success: 'Phone number copied',
      error: 'Failed to copy phone number',
    },
    email: {
      success: 'Email copied',
      error: 'Failed to copy email',
    },
    media: {
      success: 'Media copied',
      error: 'Failed to copy Media',
    },
  };

  return messages[type]?.[status] ?? '';
};
