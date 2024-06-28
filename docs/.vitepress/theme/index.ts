// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import { VPBTheme } from "@jcamp/vitepress-blog-theme";
import "./style.css";
import CustomBlogHeader from "./CustomBlogHeader.vue";
import "viewerjs/dist/viewer.min.css";
import imageViewer from "vitepress-plugin-image-viewer";
import { useRoute } from "vitepress";
import Tweet from "vue-tweet";
import matomo from "@datagouv/vitepress-plugin-matomo";

export default {
  ...VPBTheme,
  Layout: () => {
    return h(VPBTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      //  "home-hero-info-before": () => h(CustomBlogHeader),
    });
  },
  enhanceApp({ app, router, siteData }) {
    VPBTheme.enhanceApp({ app, router, siteData });
    app.component("CustomBlogHeader", CustomBlogHeader);
    app.component("Tweet", Tweet);
    matomo({
      router: router,
      siteID: 46, // Replace with your site id
      trackerUrl: "https://piwik.mountbatten.nl", // Replace with your matomo url
    });
  },
  setup() {
    // Get route
    const route = useRoute();
    // Using
    imageViewer(route);
  },
};

// if you're not using custom components, this file can be as simple as
/*
import { VPBTheme } from '@jcamp/vitepress-blog-theme'
import './style.css'
export default VBPTheme
*/
