import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"pta 2 SquenceList","description":"","frontmatter":{},"headers":[],"relativePath":"past/1.fzu_data&algorithms/大二/pta_2_SquenceList.md","filePath":"past/1.fzu_data&algorithms/大二/pta_2_SquenceList.md","lastUpdated":null}');
const _sfc_main = { name: "past/1.fzu_data&algorithms/大二/pta_2_SquenceList.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pta-2-squencelist" tabindex="-1">pta 2 SquenceList <a class="header-anchor" href="#pta-2-squencelist" aria-label="Permalink to &quot;pta 2 SquenceList&quot;">​</a></h1><p>这道编程题没什么好说的，其实就是直接一个非常简单的思路，记录一下就行了。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("past/1.fzu_data&algorithms/大二/pta_2_SquenceList.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pta_2_SquenceList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pta_2_SquenceList as default
};
