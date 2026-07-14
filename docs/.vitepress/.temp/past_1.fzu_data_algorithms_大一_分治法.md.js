import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"分治法","description":"","frontmatter":{},"headers":[],"relativePath":"past/1.fzu_data&algorithms/大一/分治法.md","filePath":"past/1.fzu_data&algorithms/大一/分治法.md","lastUpdated":null}');
const _sfc_main = { name: "past/1.fzu_data&algorithms/大一/分治法.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="分治法" tabindex="-1">分治法 <a class="header-anchor" href="#分治法" aria-label="Permalink to &quot;分治法&quot;">​</a></h1><p>核心思路其实就是将问题规模缩小，将规模为n的问题分解为更小的问题，如n-1个问题以及另外一个之类的。</p><p><a href="https://zh.wikipedia.org/wiki/%E5%88%86%E6%B2%BB%E6%B3%95" target="_blank" rel="noreferrer">原文链接</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("past/1.fzu_data&algorithms/大一/分治法.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ___ as default
};
