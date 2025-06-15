import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import translationEN from "./locales/en/translation.json"
import translationUZ from "./locales/uz/translation.json"
import translationRU from "./locales/ru/translation.json"
import translationFR from "./locales/fr/translation.json"

const resources = {
    en: { translation: translationEN },
    uz: { translation: translationUZ },
    ru: { translation: translationRU },
    fr: { translation: translationFR }
}

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // default til
    fallbackLng: "en",
    interpolation: { escapeValue: false }
})

export default i18n
