import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1.BFS","description":"","frontmatter":{},"headers":[],"relativePath":"past/1.fzu_data&algorithms/校内自学/1.BFS.md","filePath":"past/1.fzu_data&algorithms/校内自学/1.BFS.md","lastUpdated":null}');
const _sfc_main = { name: "past/1.fzu_data&algorithms/校内自学/1.BFS.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-bfs" tabindex="-1">1.BFS <a class="header-anchor" href="#_1-bfs" aria-label="Permalink to &quot;1.BFS&quot;">​</a></h1><p>原始笔记文件为空，暂时没有可整理内容。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("past/1.fzu_data&algorithms/校内自学/1.BFS.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1_BFS = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1_BFS as default
};
