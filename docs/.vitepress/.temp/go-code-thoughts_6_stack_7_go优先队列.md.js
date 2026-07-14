import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Go 优先队列","description":"","frontmatter":{},"headers":[],"relativePath":"go-code-thoughts/6_stack/7_go优先队列.md","filePath":"go-code-thoughts/6_stack/7_go优先队列.md","lastUpdated":null}');
const _sfc_main = { name: "go-code-thoughts/6_stack/7_go优先队列.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="go-优先队列" tabindex="-1">Go 优先队列 <a class="header-anchor" href="#go-优先队列" aria-label="Permalink to &quot;Go 优先队列&quot;">​</a></h1><p>原始文件为空，当前没有可整理的正文内容。</p><p>这个位置先作为占位页保留，避免章节目录缺失。</p><p>后续可以补充 Go 标准库 <code>container/heap</code> 的优先队列用法。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("go-code-thoughts/6_stack/7_go优先队列.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _7_go____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _7_go____ as default
};
