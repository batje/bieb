// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import { VPBTheme } from "@jcamp/vitepress-blog-theme";
import "./style.css";
import CustomBlogHeader from "./CustomBlogHeader.vue";
import "viewerjs/dist/viewer.min.css";
import imageViewer from "vitepress-plugin-image-viewer";
import { useRoute } from "vitepress";

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
