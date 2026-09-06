/**
 * 🎯 Translates a key using the provided translations object.
 * @param {string} key ➡️ The key to translate.
 * @param {any} translations ➡️ The translations object.
 * @returns {string} 📤 The translated value or the key if not found.
 */
const fn = (key: string, translations: any) => {
    if (!translations || typeof translations !== 'object') return key;
    return translations[key] || key;
};

export default fn;
