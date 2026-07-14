import{_ as n,o as s,c as t,a2 as p}from"./chunks/framework.wSsqAhVZ.js";const _=JSON.parse('{"title":"汉诺塔","description":"","frontmatter":{},"headers":[],"relativePath":"past/1.fzu_data&algorithms/大一/汉诺塔.md","filePath":"past/1.fzu_data&algorithms/大一/汉诺塔.md","lastUpdated":1784004070000}'),e={name:"past/1.fzu_data&algorithms/大一/汉诺塔.md"};function o(i,a,l,r,c,d){return s(),t("div",null,[...a[0]||(a[0]=[p(`<h1 id="汉诺塔" tabindex="-1">汉诺塔 <a class="header-anchor" href="#汉诺塔" aria-label="Permalink to &quot;汉诺塔&quot;">​</a></h1><p>汉诺塔的核心其实就是</p><p><code>void hanoi(int n,char from ,char to,char by)</code></p><p>实现如下：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>void hanoi(int n,char from,char to,char by){</span></span>
<span class="line"><span>    if(n==0){</span></span>
<span class="line"><span>        return ;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    hanoi(n-1,from,by,to);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    printf(&quot;%c-&gt;%c\\n&quot;,from,to);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    hanoi(n-1,by,to,from);</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,5)])])}const m=n(e,[["render",o]]);export{_ as __pageData,m as default};
