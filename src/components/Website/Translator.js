const navbar = {
  download: {
    en: "Download",
    fr: "Télécharger"
  },
  features: {
    en: "Features",
    fr: "Fonctionnalités"
  }
};

const landing = {
  description: {
    en: "Get legal advice for free and instantly with a simple photo.",
    fr:
      "Obtenez des conseils légaux gratuitement et instantanément avec une simple photo."
  },
  start: {
    en: "START NOW !",
    fr: "DÉBUTER !"
  }
};
const downloadComponent = {
  rights: {
    en: "Be aware of your rights today.",
    fr: "Prémunissez-vous contre les injustices."
  },
  available: {
    en:
      "Our app is available on any mobile device! Download now to get started!",
    fr:
      "Notre application est disponible sur n'importe quel appareil mobile! Téléchargez maintenant pour commencer!"
  }
};
const featuresComponent = {
  complete: {
    en: "A complete platform",
    fr: "Une plateforme complète"
  },
  checkOut: {
    en: "",
    fr: ""
  },
  instant: {
    en: "Instant capture",
    fr: "Lecture instantanée"
  },
  instantPar: {
    en:
      "Scan a ticket with your mobile device to instantly know all there is to know about your infraction.",
    fr:
      "Scannez une contravention avec votre appareil mobile pour savoir instantanément tout ce qu'il y a à savoir sur votre infraction."
  },
  chat: {
    en: "Chat",
    fr: "Clavardage"
  },
  messagingPar: {
    en: "Chat with a lawyer to have assistance in your defense.",
    fr:
      "Clavardez avec un avocat afin d'avoir de l'assistance pour contester votre contravention."
  },
  databse: {
    en: "Complete database",
    fr: "Repertoire complet"
  },
  databsePar: {
    en:
      "Access a complete directory of road offenses in Montréal (constituent elements of the offense, possible defenses, etc.).",
    fr:
      "Accèder à un repertoire complet des infractions de la route à Montréal (éléments constitutifs de l'infraction, exceptions prévues par la loi, etc)."
  },
  save: {
    en: "Save",
    fr: "Épargnez"
  },
  savePar: {
    en: "Save demerits points, legal fees, insurance costs. Keep your license.",
    fr:
      "Épargnez des points d'inaptitude, des frais légaux, les frais d'assurance. Conserver votre permis."
  }
};
const callToAction = {
  fight: {
    en: "Fight",
    fr: "Contestez"
  },
  tickets: {
    en: "your ticket!",
    fr: "votre contravention!"
  }
};
const footer = {
  rightsReserved: {
    en: "2018 Photo Ticket Inc. All Rights Reserved.",
    fr: "2018 Photo Ticket Inc. Tous droits réservés."
  },
  privacy: {
    en: "Privacy",
    fr: "Confidentialité"
  },
  terms: {
    en: "Terms",
    fr: "Termes"
  }
};
const law = {
  landingMessage1: {
    en: "Save your demerit points.",
    fr: "Sauvez vos points d'inaptitude."
  },
  landingMessage2: {
    en: "Reduce the price of your fines.",
    fr: "Réduisez le montant de vos amendes."
  }
};
const translations = {
  ...navbar,
  ...landing,
  ...downloadComponent,
  ...featuresComponent,
  ...callToAction,
  ...footer,
  ...law
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
