import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Go 代码随想录","description":"","frontmatter":{},"headers":[],"relativePath":"go-code-thoughts/README.md","filePath":"go-code-thoughts/README.md","lastUpdated":null}');
const _sfc_main = { name: "go-code-thoughts/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="go-代码随想录" tabindex="-1">Go 代码随想录 <a class="header-anchor" href="#go-代码随想录" aria-label="Permalink to &quot;Go 代码随想录&quot;">​</a></h1><p>这一部分是从 2025 年 7 月 1 日开始，用 Go 重新系统学习《代码随想录》的整理稿。</p><p>覆盖范围包括：</p><ul><li>数组</li><li>链表</li><li>哈希表</li><li>字符串</li><li>栈与队列</li><li>二叉树</li><li>回溯</li><li>贪心</li><li>动态规划</li><li>图论</li></ul><p>这部分是当前最完整、最系统的一条主线。整理时保留了原来的学习体验、卡住的位置、修正过程和代码实现，并把每篇文档调整成适合阅读的 Markdown 结构。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("go-code-thoughts/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
