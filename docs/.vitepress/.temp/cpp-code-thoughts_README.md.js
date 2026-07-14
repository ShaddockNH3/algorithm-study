import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"C++ 代码随想录","description":"","frontmatter":{},"headers":[],"relativePath":"cpp-code-thoughts/README.md","filePath":"cpp-code-thoughts/README.md","lastUpdated":null}');
const _sfc_main = { name: "cpp-code-thoughts/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="c-代码随想录" tabindex="-1">C++ 代码随想录 <a class="header-anchor" href="#c-代码随想录" aria-label="Permalink to &quot;C++ 代码随想录&quot;">​</a></h1><p>这一部分是 C++ 版本《代码随想录》的阶段性复盘，时间范围主要对应 2025 年 10 月的学习记录。</p><p>当前整理到树章节，覆盖范围包括：</p><ul><li>未完全掌握题目的复盘</li><li>数组</li><li>链表</li><li>哈希表</li><li>字符串</li><li>二叉树</li></ul><p>这部分更像是在 Go 主线之外，对 C++ 语法、指针、STL 使用和经典题写法的补充巩固。 整理时保留了原始代码和复盘语气，同时补齐标题、代码围栏语言和 Markdown 结构。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("cpp-code-thoughts/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
