const config = {
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Wongames",
      "app.components.LeftMenu.navbrand.workplace": "Dashboard",
      "Auth.form.welcome.title": "Welcome to Wongames API",
      "Auth.form.welcome.subtitle": "Discover different games!",
      "Settings.profile.form.section.experience.interfaceLanguageHelp":
      "This is interface language help",
    },
  },
  tutorials: false,
};

const bootstrap = (app:any) => {
  console.log(app);
}

export default {
  config,
  bootstrap
}
