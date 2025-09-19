import type { FC } from 'react';
import styles from './styles.module.scss';
import { getCopyrightsText } from './utils';
import { CONTACTS_LIST } from '@/constants/contactsList';
import { CopyIcon } from '@/assets/icons/CopyIcon';
import { TelegramGoIcon } from '@/assets/icons/TelegramGoIcon';

export const Footer: FC = () => {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  const handleCopyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log(`ты скопировал - ${text}`); // todo
    } catch (e) {
      console.error('ошибка при копировании', e);
    }
  };

  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.contacts}>
            <h4 className={styles.contactsTitle}>Contacts</h4>
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
                              handleCopyToClipboard(contact.value);
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
                          onClick={() => handleCopyToClipboard(contact.value)}
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
