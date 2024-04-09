import { defineConfig } from "vitepress";
// import { defineConfig } from "@jcamp/vitepress-blog-theme/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BLS Bieb",
  description: "De bibliotheek op de Bernard Lievegoed School",
  base: "/",
  lang: "nl-NL",
  head: [
    [
      "script",
      {},
      `<!-- Matomo -->
        var _paq = window._paq = window._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="https://piwik.mountbatten.nl/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '46']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();
      <!-- End Matomo Code -->
      `,
    ],
    [
      "noscript",
      {},
      `<p><img src="https://piwik.mountbatten.nl/matomo.php?idsite=46&amp;rec=1" style="border:0;" alt="" /></p>
      `,
    ],
  ],
  themeConfig: {
    /*    blog: {
      title: "My AI Written Blog",
      description: "All these articles were written by AI!",
      defaultAuthor: "AI Writer",
      categoryIcons: {
        article: "i-[heroicons-outline/book-open]",
        tutorial: "i-[heroicons-outline/academic-cap]",
        document: "i-[heroicons-outline/annotation]",
      },
      tagIcons: {
        github: "i-[carbon/logo-github]",
        vue: "i-[carbon/logo-vue]",
      },
    },
    */
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Zoek",
            buttonAriaLabel: "Zoek in Site",
          },
          modal: {
            noResultsText: "Geen resultaten voor",
            resetButtonTitle: "Verwijder zoek",
            footer: {
              selectText: "Gaan",
              navigateText: "Navigeer",
              closeText: "Annuleer",
            },
          },
        },
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Voorpagina", link: "/" },
      { text: "Wat", link: "/wat" },
      { text: "Hoe", link: "/hoe" },
      { text: "Waarom", link: "/waarom" },
      { text: "Wie", link: "/wie" },
      /*
      { text: "Blog Home", link: "/blog/", activeMatch: "/blog/$" },
      */
    ],

    sidebar: [
      {
        text: "Project",
        items: [
          { text: "Wat", link: "/wat" },
          { text: "Hoe", link: "/hoe" },
          { text: "Waarom", link: "/waarom" },
        ],
      },
      {
        text: "Collectie",
        items: [
          { text: "Literatuur", link: "/literatuur" },
          { text: "Periode Onderwijs", link: "/periode" },
          { text: "Series", link: "/series" },
          { text: "Klassieken", link: "/klassieken" },
          { text: "Christofoor", link: "/christofoor" },
          { text: "Strips", link: "/strips" },
        ],
      },
      {
        text: "Meer weten",
        items: [{ text: "Bronnen", link: "/bronnen" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/batje/bieb" }],
    footer: {
      message:
        "Dit is een ouder initiatief, onafhankelijk van BLS of Stichting Pallas.",
      copyright: "",
    },
    externalLinkIcon: true,
    darkModeSwitchTitle: "Licht uit",
    lightModeSwitchTitle: "Licht aan",
  },
});
