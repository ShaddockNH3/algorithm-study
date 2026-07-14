import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"汉诺塔","description":"","frontmatter":{},"headers":[],"relativePath":"past/1.fzu_data&algorithms/大一/汉诺塔.md","filePath":"past/1.fzu_data&algorithms/大一/汉诺塔.md","lastUpdated":null}');
const _sfc_main = { name: "past/1.fzu_data&algorithms/大一/汉诺塔.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="汉诺塔" tabindex="-1">汉诺塔 <a class="header-anchor" href="#汉诺塔" aria-label="Permalink to &quot;汉诺塔&quot;">​</a></h1><p>汉诺塔的核心其实就是</p><p><code>void hanoi(int n,char from ,char to,char by)</code></p><p>实现如下：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>void hanoi(int n,char from,char to,char by){</span></span>
<span class="line"><span>    if(n==0){</span></span>
<span class="line"><span>        return ;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    hanoi(n-1,from,by,to);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    printf(&quot;%c-&gt;%c\\n&quot;,from,to);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    hanoi(n-1,by,to,from);</span></span>
<span class="line"><span>}</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("past/1.fzu_data&algorithms/大一/汉诺塔.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ___ as default
};
