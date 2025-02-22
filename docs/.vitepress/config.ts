//import { defineConfig } from "vitepress";
import { defineConfig } from "@jcamp/vitepress-blog-theme/config";
// import { defineConfig } from "@jcamp/vitepress-blog-theme/config";
//import commonjs from "vite-plugin-commonjs";
//import { esbuildCommonjs, viteCommonjs } from "@originjs/vite-plugin-commonjs";
//import vue from "@vitejs/plugin-vue";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BLS Bieb",
  description: "De bibliotheek op de Bernard Lievegoed School",
  base: "/",
  lang: "nl-NL",
  head: [
    [
      "link",
      {
        rel: "icon",
        sizes: "16x16",
        type: "image/x-icon",
        href: "/icons8-book-cute-color-16.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        sizes: "132x32",
        type: "image/x-icon",
        href: "/icons8-book-cute-color-32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        sizes: "96x96",
        type: "image/x-icon",
        href: "/icons8-book-cute-color-96.png",
      },
    ],
  ],
  themeConfig: {
    blog: {
      title: "De BLS Bieb Blog",
      description:
        "Tips en weetjes over de bieb en leesonderwijs op de BLS en daarbuiten",
      defaultAuthor: "Reinier",
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
      { text: "Openingstijden", link: "open" },
      { text: "Wat", link: "/wat" },
      { text: "Hoe", link: "/hoe" },
      { text: "Waarom", link: "/waarom" },
      { text: "Wie", link: "/wie" },

      { text: "Blog", link: "/blog/", activeMatch: "/blog/$" },
      {
        text: "Handleidingen",
        link: "/handleidingen/",
        activeMatch: "/handleidingen/$",
      },
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
      {
        text: "Handleidingen",
        items: [{ text: "Sneltoetsen", link: "/handleidingen/sneltoetsen" }],
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
    markdown: {
      container: {
        tipLabel: "Laatste Blog Post",
        warningLabel: "Waarschuwing",
        dangerLabel: "Pas Op",
        infoLabel: "Info",
        detailsLabel: "Details",
      },
    },
  },
  /*  vite: {
    plugins: [
      //      viteCommonjs({
      //        include: ["vue-plugin-load-script"],
      //      }),
    ],
    optimizeDeps: { exclude: ["vue-plugin-load-script"] },
    build: {
      rollupOptions: {
        plugins: [
          //          commonjs({
          //            filter(id) {
          // `node_modules` is exclude by default, so we need to include it explicitly
          // https://github.com/vite-plugin/vite-plugin-commonjs/blob/v0.7.0/src/index.ts#L125-L127
          //              console.log(id);
          //              console.log("here we are");
          //             return true;
          //             if (id.includes("node_modules/vue-plugin-load-script")) {
          //              return true;
          //           }
          //        },
          //        }),
        ],
      },
    },
  },*/
});
