import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"最长递增子序列","description":"","frontmatter":{},"headers":[],"relativePath":"go-code-thoughts/10_dp/30_最长递增子序列.md","filePath":"go-code-thoughts/10_dp/30_最长递增子序列.md","lastUpdated":null}');
const _sfc_main = { name: "go-code-thoughts/10_dp/30_最长递增子序列.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="最长递增子序列" tabindex="-1">最长递增子序列 <a class="header-anchor" href="#最长递增子序列" aria-label="Permalink to &quot;最长递增子序列&quot;">​</a></h1><p>原始笔记文件为空。</p><p>这里先保留占位， 不额外补充未记录过的内容。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("go-code-thoughts/10_dp/30_最长递增子序列.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _30________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _30________ as default
};
