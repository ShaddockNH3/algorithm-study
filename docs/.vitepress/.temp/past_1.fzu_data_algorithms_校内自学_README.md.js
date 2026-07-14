import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"README","description":"","frontmatter":{},"headers":[],"relativePath":"past/1.fzu_data&algorithms/校内自学/README.md","filePath":"past/1.fzu_data&algorithms/校内自学/README.md","lastUpdated":null}');
const _sfc_main = { name: "past/1.fzu_data&algorithms/校内自学/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="readme" tabindex="-1">README <a class="header-anchor" href="#readme" aria-label="Permalink to &quot;README&quot;">​</a></h1><h2 id="algorithm-for-beast" tabindex="-1">algorithm_for_beast <a class="header-anchor" href="#algorithm-for-beast" aria-label="Permalink to &quot;algorithm_for_beast&quot;">​</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("past/1.fzu_data&algorithms/校内自学/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
