import logo from "./extensions/favicon.png";

const config = {
  head:{
    favicon: logo,
  },

  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Wongames",
      "app.components.LeftMenu.navbrand.workplace": "Testing",
      "Auth.form.welcome.title": "Welcome auth title",
      "Auth.form.welcome.subtitle": "Welcome auth subtitle",
      "Settings.profile.form.section.experience.interfaceLanguageHelp":
      "This is interface language help",
    },
  },
  tutorials: false,
};

const bootstrap = (app) => {
  console.log(app);
}

export default {
  config,
  bootstrap
}
