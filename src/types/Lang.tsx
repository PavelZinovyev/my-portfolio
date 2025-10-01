export type LangProps = 'en' | 'ru';

export type TranslationKeys =
  | 'aboutMe'
  | 'greeting'
  | 'frontendDev'
  | 'homeAboutMe'
  | 'contactMe'
  | 'fio'
  | 'home'
  | 'about'
  | 'experience'
  | 'experienceSectionHeader'
  | 'codePaletteTitle'
  | 'codePaletteDescriptionPart1'
  | 'codePaletteDescriptionPart2'
  | 'skillRadarTitle'
  | 'skillRadarDescriptionPart1'
  | 'skillRadarDescriptionPart2'
  | 'current'
  | 'future'
  | 'timeZoneTitle'
  | 'timeZoneDescriptionPart1'
  | 'timeZoneDescriptionPart2'
  | 'codePaletteBanner'
  | 'phoneCopiedSuccess'
  | 'phoneCopiedFailed'
  | 'emailCopiedSuccess'
  | 'emailCopiedFailed'
  | 'mediaCopiedSuccess'
  | 'mediaCopiedFailed'
  | 'contacts';

export type Translations = Record<LangProps, Record<TranslationKeys, string>>;
