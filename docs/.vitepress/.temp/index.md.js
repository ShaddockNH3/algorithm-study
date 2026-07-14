import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"算法学习笔记","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":null}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="算法学习笔记" tabindex="-1">算法学习笔记 <a class="header-anchor" href="#算法学习笔记" aria-label="Permalink to &quot;算法学习笔记&quot;">​</a></h1><p>这里是算法与数据结构学习记录的整理版。内容按时间和学习阶段分为三部分：</p><ol><li><a href="/past/">past</a>：早期草稿与 C++ 学习记录。</li><li><a href="/go-code-thoughts/">Go 代码随想录</a>：以 Go 重新系统刷题的主线笔记。</li><li><a href="/cpp-code-thoughts/">C++ 代码随想录</a>：C++ 版本的阶段性复盘，整理到树章节。</li></ol><p>这些文档保留了原始学习过程中的思路、错因、调试痕迹和代码实现，同时统一为更适合阅读和部署的 Markdown 格式。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
