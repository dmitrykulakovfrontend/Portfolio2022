// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import en from "locales/en/translation.json";
import ru from "locales/ru/translation.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    resources: {
      en: typeof en;
      ru: typeof ru;
    };
  }
}
