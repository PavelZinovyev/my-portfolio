import type { FC } from 'react';
import styles from './styles.module.scss';
import { useToast } from '@/hooks/useToast';

import type { ContactProps } from '@/types/Contacts';

import { getCopyrightsText, getToastText } from './utils';
import { CONTACTS_LIST } from '@/constants/contactsList';

import { CopyIcon } from '@/assets/icons/CopyIcon';
import { TelegramGoIcon } from '@/assets/icons/TelegramGoIcon';

export const Footer: FC = () => {
  const { showToast } = useToast();

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  const handleCopyToClipboard = async (text: string, fieldType: ContactProps['type']) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast({ message: getToastText(fieldType, 'success'), type: 'success' });
    } catch (e) {
      showToast({ message: getToastText(fieldType, 'error'), type: 'error' });
      console.error(`failed to copy ${fieldType}`, e);
    }
  };

  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.contacts}>
            <h3 className={styles.contactsTitle}>Contacts</h3>
            <ul className={styles.contactsList}>
              {CONTACTS_LIST.map((contact, i) => {
                const isPhone = contact.type === 'tel';
                const IconComponent = contact.icon;

                return (
                  <li key={i} className={styles.contact}>
                    <div className={styles.contactIcon}>
                      <IconComponent />
                    </div>

                    {isPhone ? (
                      <div className={styles.contactWrapper}>
                        <a
                          href={`tel:${contact.value.replace(/\D/g, '')}`}
                          onClick={(e) => {
                            if (!isMobile) {
                              e.preventDefault();
                              handleCopyToClipboard(contact.value, contact.type);
                            }
                          }}
                          className={styles.contactsText}
                        >
                          {contact.value}
                        </a>
                        <CopyIcon />
                      </div>
                    ) : contact.type === 'email' ? (
                      <div className={styles.contactWrapper}>
                        <span
                          className={styles.contactsText}
                          onClick={() => handleCopyToClipboard(contact.value, contact.type)}
                        >
                          {contact.value}
                        </span>
                        <CopyIcon />
                      </div>
                    ) : (
                      <div className={`${styles.contactWrapper} ${styles.contactGoWrapper}`}>
                        <a
                          href={contact.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.contactsText}
                        >
                          {contact.value}
                        </a>
                        <TelegramGoIcon />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <span className={styles.copyrights}>{getCopyrightsText()}</span>
        </div>
      </div>
    </footer>
  );
};
