import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"pta n Stack","description":"","frontmatter":{},"headers":[],"relativePath":"past/1.fzu_data&algorithms/大二/pta_n_Stack.md","filePath":"past/1.fzu_data&algorithms/大二/pta_n_Stack.md","lastUpdated":null}');
const _sfc_main = { name: "past/1.fzu_data&algorithms/大二/pta_n_Stack.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pta-n-stack" tabindex="-1">pta n Stack <a class="header-anchor" href="#pta-n-stack" aria-label="Permalink to &quot;pta n Stack&quot;">​</a></h1><p>先看看课件</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("past/1.fzu_data&algorithms/大二/pta_n_Stack.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pta_n_Stack = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pta_n_Stack as default
};
