import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"回溯模板","description":"","frontmatter":{},"headers":[],"relativePath":"go-code-thoughts/8_backtracking/0_模板.md","filePath":"go-code-thoughts/8_backtracking/0_模板.md","lastUpdated":null}');
const _sfc_main = { name: "go-code-thoughts/8_backtracking/0_模板.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="回溯模板" tabindex="-1">回溯模板 <a class="header-anchor" href="#回溯模板" aria-label="Permalink to &quot;回溯模板&quot;">​</a></h1><p>回溯法可以抽象成一棵树。</p><p>在这棵树里：</p><ul><li><code>for</code> 循环负责横向遍历本层可以选择的元素。</li><li>递归负责纵向进入下一层。</li><li>回溯负责撤销当前选择，继续尝试本层的下一个元素。</li></ul><h2 id="通用模板" tabindex="-1">通用模板 <a class="header-anchor" href="#通用模板" aria-label="Permalink to &quot;通用模板&quot;">​</a></h2><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">void</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> backtracking</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(参数) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">    if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> (终止条件) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        存放结果;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">        return</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    }</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">    for</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        处理节点;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">        backtracking</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(路径，选择列表);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        回溯，撤销处理结果;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre></div><h2 id="理解方式" tabindex="-1">理解方式 <a class="header-anchor" href="#理解方式" aria-label="Permalink to &quot;理解方式&quot;">​</a></h2><p>回溯法抽象成树形结构之后， 遍历过程就是：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>for 循环横向遍历</span></span>
<span class="line"><span>递归纵向遍历</span></span>
<span class="line"><span>回溯不断调整结果集</span></span></code></pre></div><p><code>for</code> 循环的长度可以理解为树的宽度， 递归的深度可以理解为树的高度。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("go-code-thoughts/8_backtracking/0_模板.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _0___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _0___ as default
};
