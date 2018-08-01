const navbar = {
  download: {
    en: "Download",
    fr: "Télécharger"
  }
};
const features = {
  features: {
    en: "Features",
    fr: "Fonctionnalités"
  }
};

const translations = {
  ...navbar,
  ...features
};

function getUserLanguage() {
  const lang = (navigator.language || navigator.userLanguage).slice(0, 2);
  return lang === "fr" || lang === "en" ? lang : "en";
}

class Translator {
  locale = getUserLanguage();

  t = key => translations[key][this.locale] || key;

  setLanguage = language => {
    if (language === "en" || language === "fr") {
      this.locale = language;
    } else {
      console.log(`Unknown language : ${language}`);
    }
  };

  switchLanguage = () => {
    const locale = this.locale;
    if (locale === "en") {
      this.setLanguage("fr");
    } else {
      this.setLanguage("en");
    }
  };

  dateTranslate = (day, month) => {
    const locale = this.locale;
    if (locale === "en") {
      return `${month} ${day}`;
    } else {
      return `${day} ${month}`;
    }
  };
}

const translator = new Translator();

export default translator;
