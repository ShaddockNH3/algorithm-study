import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"pta ok","description":"","frontmatter":{},"headers":[],"relativePath":"past/1.fzu_data&algorithms/大二/pta_ok.md","filePath":"past/1.fzu_data&algorithms/大二/pta_ok.md","lastUpdated":null}');
const _sfc_main = { name: "past/1.fzu_data&algorithms/大二/pta_ok.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pta-ok" tabindex="-1">pta ok <a class="header-anchor" href="#pta-ok" aria-label="Permalink to &quot;pta ok&quot;">​</a></h1><h2 id="pta-tree-binary-tree" tabindex="-1">pta_tree&amp;binary_tree <a class="header-anchor" href="#pta-tree-binary-tree" aria-label="Permalink to &quot;pta_tree&amp;binary_tree&quot;">​</a></h2><p>某二叉树的后序和中序遍历序列正好一样，则该二叉树中的任何结点一定都无右孩子。</p><p>√</p><p>一棵度为4的树T中，若有20个度为4的结点，10个度为3的结点，1个度为2的结点，10个度为1的结点，则树T的叶子结点个数是( )。</p><p>82？</p><p>bfs</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("past/1.fzu_data&algorithms/大二/pta_ok.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pta_ok = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pta_ok as default
};
