import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Past","description":"","frontmatter":{},"headers":[],"relativePath":"past/index.md","filePath":"past/index.md","lastUpdated":null}');
const _sfc_main = { name: "past/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="past" tabindex="-1">Past <a class="header-anchor" href="#past" aria-label="Permalink to &quot;Past&quot;">​</a></h1><p>这一部分是早期算法学习草稿，主要覆盖 2024 年 7 月到 2025 年 6 月之间的记录。</p><p>内容比较杂，保留了当时的学习现场：</p><ul><li><code>0_dsacpp(2024暑假)</code>：数据结构与算法课程、DSA C++ 笔记和相关图片。</li><li><code>1.fzu_data&amp;algorithms</code>：福州大学课程、校内数据结构实验、PTA、洛谷和自学记录。</li><li><code>2.hot100(c++)</code>：LeetCode Hot 100 的 C++ 练习。</li><li><code>3.代码随想录(c++)</code>：较早期的 C++ 代码随想录笔记。</li></ul><p>这部分不是最终版教程，而是过去的草稿、尝试和复盘。 整理时尽量保留原来的思路和错误记录，只把 Markdown 格式、图片引用和明显 AI 口吻做了规范化处理。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("past/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
