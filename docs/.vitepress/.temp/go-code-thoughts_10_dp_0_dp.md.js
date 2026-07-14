import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"动态规划方法论","description":"","frontmatter":{},"headers":[],"relativePath":"go-code-thoughts/10_dp/0_dp.md","filePath":"go-code-thoughts/10_dp/0_dp.md","lastUpdated":null}');
const _sfc_main = { name: "go-code-thoughts/10_dp/0_dp.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="动态规划方法论" tabindex="-1">动态规划方法论 <a class="header-anchor" href="#动态规划方法论" aria-label="Permalink to &quot;动态规划方法论&quot;">​</a></h1><p>动态规划和贪心的一个重要区别是：</p><p>动态规划通常由前一个状态推导出当前状态。</p><p>贪心通常是在当前局部直接做出最优选择。</p><h2 id="dp-五步法" tabindex="-1">DP 五步法 <a class="header-anchor" href="#dp-五步法" aria-label="Permalink to &quot;DP 五步法&quot;">​</a></h2><p>做动态规划题时，可以按下面五步拆解：</p><ol><li>确定 <code>dp</code> 数组以及下标的含义。</li><li>确定递推公式。</li><li>确定 <code>dp</code> 数组如何初始化。</li><li>确定遍历顺序。</li><li>举例推导 <code>dp</code> 数组。</li></ol><h2 id="调试检查" tabindex="-1">调试检查 <a class="header-anchor" href="#调试检查" aria-label="Permalink to &quot;调试检查&quot;">​</a></h2><p>写完后可以问自己：</p><ul><li>这道题是否举例推导了状态转移公式？</li><li>是否打印过 <code>dp</code> 数组？</li><li>打印出来的 <code>dp</code> 数组是否和预期一致？</li></ul><h2 id="本篇总结" tabindex="-1">本篇总结 <a class="header-anchor" href="#本篇总结" aria-label="Permalink to &quot;本篇总结&quot;">​</a></h2><p>DP 题最重要的是状态定义。</p><p>状态定义清楚之后， 递推公式、初始化和遍历顺序才有依据。</p><p>如果卡住， 先用小样例手动推一遍 <code>dp</code> 数组。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("go-code-thoughts/10_dp/0_dp.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _0_dp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _0_dp as default
};
