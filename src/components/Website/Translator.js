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
    en:
      "Photo Ticket is a mobile app allowing you to fight a ticket for free and instantly!",
    fr:
      "Photo Ticket est une application mobile permettant de contester un ticket gratuitement et instantanément!"
  },
  start: {
    en: "START NOW !",
    fr: "DÉBUTER !"
  }
};
const downloadComponent = {
  rights: {
    en: "Be aware of your rights today.",
    fr: "Prémunissez vous contre les injustices."
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
      "Scannez un ticket avec votre appareil mobile pour savoir instantanément tout ce qu'il y a à savoir sur votre infraction."
  },
  chat: {
    en: "Chat",
    fr: "Clavardage"
  },
  messagingPar: {
    en: "Chat with a lawyer to have assistance in your defense.",
    fr:
      "Clavardez avec un avocat afin d'avoir de l'assistance pour contester votre ticket."
  },
  databse: {
    en: "Complete database",
    fr: "Repertoire complet"
  },
  databsePar: {
    en:
      "Access a complete directory of road offenses in Monréal (constituent elements of the offense, possible defenses, etc.).",
    fr:
      "Accèder à un repertoire complet des infractions de la route à Monréal (éléments constitutifs de l'infraction, moyens de défense possible, etc)."
  },
  save: {
    en: "Save",
    fr: "Épargnez"
  },
  savePar: {
    en: "Save demerits points, legal fees, insurance costs. Keep your license.",
    fr:
      "Épargnez des points, des frais légaux, les frais d'assurance. Conserver votre permis."
  }
};

const callToAction = {
  fight: {
    en: "Fight",
    fr: "Contester"
  },
  tickets: {
    en: "your ticket!",
    fr: "votre ticket!"
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
const translations = {
  ...navbar,
  ...landing,
  ...downloadComponent,
  ...featuresComponent,
  ...callToAction,
  ...footer
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
