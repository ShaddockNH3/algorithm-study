import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"多重背包","description":"","frontmatter":{},"headers":[],"relativePath":"go-code-thoughts/10_dp/20_多重背包(先跳).md","filePath":"go-code-thoughts/10_dp/20_多重背包(先跳).md","lastUpdated":null}');
const _sfc_main = { name: "go-code-thoughts/10_dp/20_多重背包(先跳).md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="多重背包" tabindex="-1">多重背包 <a class="header-anchor" href="#多重背包" aria-label="Permalink to &quot;多重背包&quot;">​</a></h1><p>原始笔记文件为空。</p><p>这里先保留占位， 不额外补充未记录过的内容。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("go-code-thoughts/10_dp/20_多重背包(先跳).md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20_________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _20_________ as default
};
