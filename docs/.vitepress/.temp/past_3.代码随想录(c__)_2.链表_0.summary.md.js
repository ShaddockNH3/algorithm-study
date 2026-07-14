import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"0.summary","description":"","frontmatter":{},"headers":[],"relativePath":"past/3.代码随想录(c++)/2.链表/0.summary.md","filePath":"past/3.代码随想录(c++)/2.链表/0.summary.md","lastUpdated":null}');
const _sfc_main = { name: "past/3.代码随想录(c++)/2.链表/0.summary.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_0-summary" tabindex="-1">0.summary <a class="header-anchor" href="#_0-summary" aria-label="Permalink to &quot;0.summary&quot;">​</a></h1><p>链表写完总结一下，我感觉主要是理解以及应用，因为之前并不理解，也并不熟悉链表，所以写的很抽象。但是熟悉了之后就很好了。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("past/3.代码随想录(c++)/2.链表/0.summary.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _0_summary = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _0_summary as default
};
