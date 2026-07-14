import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1.绪论","description":"","frontmatter":{},"headers":[],"relativePath":"past/1.fzu_data&algorithms/课内，纯c/1.绪论.md","filePath":"past/1.fzu_data&algorithms/课内，纯c/1.绪论.md","lastUpdated":null}');
const _sfc_main = { name: "past/1.fzu_data&algorithms/课内，纯c/1.绪论.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-绪论" tabindex="-1">1.绪论 <a class="header-anchor" href="#_1-绪论" aria-label="Permalink to &quot;1.绪论&quot;">​</a></h1><ol><li><p>绪论</p></li><li><p>基本数据结构：表，下推式对战，队列</p></li><li><p>排序与选择</p></li><li><p>树，二叉搜索树，线段树，序列书</p></li><li><p>集合，散列表，优先队列</p></li><li><p>并查集</p></li><li><p>图</p></li></ol><p>重点：</p><ul><li><p>理解算法的概念</p></li><li><p>掌握算法在最坏情况、最好情况和平均情况下的计算复杂性概念</p></li><li><p>掌握算法复杂性的渐近性态的数学表述</p></li><li><p>熟悉数据类型、抽象数据类型和数据结构的概念、三者的区别和 联系</p></li></ul><p>算法+数据结构=程序</p><p>基本的逻辑结构：</p><p>线性结构，集合结构，树形结构，图形结构</p><p>常见的物理结构：</p><p>数组结构，记录结构，指针结构</p><h2 id="算法复杂性" tabindex="-1">算法复杂性 <a class="header-anchor" href="#算法复杂性" aria-label="Permalink to &quot;算法复杂性&quot;">​</a></h2><p>时间复杂度和空间复杂度</p><p>算法复杂度依赖于问题规模和问题输入</p><p>最好，最坏和平均计算复杂度</p><p>Ω：渐近下界符号</p><p>O：渐近上界符号</p><h2 id="顺序搜索算法实例" tabindex="-1">顺序搜索算法实例 <a class="header-anchor" href="#顺序搜索算法实例" aria-label="Permalink to &quot;顺序搜索算法实例&quot;">​</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("past/1.fzu_data&algorithms/课内，纯c/1.绪论.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1___ as default
};
