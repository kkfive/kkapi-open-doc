import{_ as s,c as n,o as a,d as l}from"./app.1f7f19a8.js";const g=JSON.parse('{"title":"\u8BC4\u8BBA\u8BF4\u660E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E","link":"#\u8BF4\u660E","children":[]},{"level":2,"title":"\u6DFB\u52A0\u8BC4\u8BBA","slug":"\u6DFB\u52A0\u8BC4\u8BBA","link":"#\u6DFB\u52A0\u8BC4\u8BBA","children":[]},{"level":2,"title":"\u5355\u4E2Aspeak\u9875\u9762","slug":"\u5355\u4E2Aspeak\u9875\u9762","link":"#\u5355\u4E2Aspeak\u9875\u9762","children":[]}],"relativePath":"posts/ispeak/comment.md","lastUpdated":1661653724000}'),p={name:"posts/ispeak/comment.md"},e=l(`<h1 id="\u8BC4\u8BBA\u8BF4\u660E" tabindex="-1">\u8BC4\u8BBA\u8BF4\u660E <a class="header-anchor" href="#\u8BC4\u8BBA\u8BF4\u660E" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u6B64\u90E8\u5206\u6559\u7A0B\u4EC5\u9002\u7528\u4E8E<code>4.4.0</code>\u53CA\u4E4B\u540E\u7684\u7248\u672C\uFF08\u5982\u65E0\u7279\u6B8A\u8BF4\u660E\uFF09</p></div><h2 id="\u8BF4\u660E" tabindex="-1">\u8BF4\u660E <a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a></h2><ol><li>\u9996\u5148\u8C08\u8C08\u4E3A\u4EC0\u4E48\u8981\u5C06\u521D\u59CB\u5316\u8BC4\u8BBA\u4FEE\u6539\u4E3A\u56DE\u8C03\u51FD\u6570\uFF0C\u7531\u7528\u6237\u81EA\u884C\u53BB\u521D\u59CB\u5316\u3002</li></ol><p>\u8FD9\u4E2A\u95EE\u9898\u4E00\u662F\u4E3A\u4E86\u517C\u5BB9\u591A\u4E2A\u8BC4\u8BBA\uFF0C\u800C\u4E0D\u662F\u53EA\u662F\u5C40\u9650\u4E8E\u67D0\u51E0\u4E2A\u8BC4\u8BBA\u7CFB\u7EDF\uFF1B\u4E8C\u662F\u4E3A\u4E86\u80FD\u591F\u81EA\u5B9A\u4E49\u7684\u5B58\u50A8\u8BC4\u8BBA\u7684key\uFF08\u4E3A\u4E86\u90AE\u4EF6\u901A\u77E5\u5185\u70B9\u51FB\u8BC4\u8BBA\u540E\u8FD8\u80FD\u5B9A\u4F4D\u8BE5\u8BC4\u8BBA\uFF09</p><ol start="2"><li>\u5982\u4F55\u4F7F\u7528</li></ol><p>\u4F7F\u7528\u4E0A\u65E0\u7591\u662F\u589E\u52A0\u4E86\u95E8\u69DB\uFF0C\u53C8\u7528\u6237\u81EA\u884C\u53BB\u7FFB\u9605\u5BF9\u5E94\u8BC4\u8BBA\u7684\u6587\u6863\u3002\u4E14\u8FD8\u9700\u8981\u7528\u6237\u7684\u4E00\u5B9A\u7F16\u7A0B\u80FD\u529B\u3002</p><h2 id="\u6DFB\u52A0\u8BC4\u8BBA" tabindex="-1">\u6DFB\u52A0\u8BC4\u8BBA <a class="header-anchor" href="#\u6DFB\u52A0\u8BC4\u8BBA" aria-hidden="true">#</a></h2><p>\u672C\u6587\u5DF2artalk\u8BC4\u8BBA\u4E3A\u4F8B\uFF0C<strong>\u4F46\u4E0D\u4EE3\u8868\u53EA\u80FD\u7528artalk\uFF01\uFF01\uFF01</strong></p><p>\u8BF7\u8BA4\u771F\u9605\u8BFB\u5E76\u7406\u89E3\u6CE8\u91CA\uFF0C\u5176\u4ED6\u8BC4\u8BBA\u57FA\u672C\u4E00\u6837\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#C9D1D9;">ispeak</span></span>
<span class="line"><span style="color:#C9D1D9;">  .</span><span style="color:#D2A8FF;">init</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">// \u5728ispeak\u521D\u59CB\u5316\u65F6\u4F20\u5165\u521D\u59CB\u5316\u8BC4\u8BBA\u51FD\u6570</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#D2A8FF;">comment</span><span style="color:#C9D1D9;">: </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> (</span><span style="color:#FFA657;">speak</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u5373\u4E3A\u8BE5\u6761speak\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> { </span><span style="color:#79C0FF;">_id</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">title</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">content</span><span style="color:#C9D1D9;"> } </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> speak </span><span style="color:#8B949E;">// \u53D6\u51FA\u8BE5speak\u7684\u552F\u4E00id\uFF0C\u6807\u9898\u548C\u5185\u5BB9</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">contentSub</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> content.</span><span style="color:#D2A8FF;">substring</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">30</span><span style="color:#C9D1D9;">) </span><span style="color:#8B949E;">// \u622A\u53D6\u5185\u5BB9\u524D30\u4E2A\u5B57\u7B26</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u521D\u59CB\u5316artalk\u8BC4\u8BBA</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Artalk</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">      el: </span><span style="color:#A5D6FF;">&#39;.ispeak-comment&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#8B949E;">// \u9ED8\u8BA4\u60C5\u51B5\u4E0B ipseak \u751F\u6210class\u4E3A ispeak-comment \u7684div</span></span>
<span class="line"><span style="color:#C9D1D9;">      pageKey: </span><span style="color:#A5D6FF;">&#39;/speak/info.html?q=&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> _id,, </span><span style="color:#8B949E;">// \u624B\u52A8\u4F20\u5165\u5F53\u524Dspeak\u7684\u552F\u4E00id</span></span>
<span class="line"><span style="color:#C9D1D9;">      pageTitle: title </span><span style="color:#FF7B72;">||</span><span style="color:#C9D1D9;"> contentSub, </span><span style="color:#8B949E;">// \u624B\u52A8\u4F20\u5165\u5F53\u524Dspeak\u7684\u6807\u9898(\u7531\u4E8Econtent\u53EF\u80FD\u8FC7\u957F\uFF0C\u56E0\u6B64\u622A\u53D6\u524D30\u4E2A\u5B57\u7B26)</span></span>
<span class="line"><span style="color:#C9D1D9;">      server: </span><span style="color:#A5D6FF;">&#39;https://api.antmoe.com/artalk/&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      site: </span><span style="color:#A5D6FF;">&#39;speak&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#8B949E;">// \u4F60\u7684\u7AD9\u70B9\u540D</span></span>
<span class="line"><span style="color:#C9D1D9;">    })</span></span>
<span class="line"><span style="color:#C9D1D9;">  }</span></span>
<span class="line"><span style="color:#C9D1D9;">})</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#24292F;">ispeak</span></span>
<span class="line"><span style="color:#24292F;">  .</span><span style="color:#8250DF;">init</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#6E7781;">// \u5728ispeak\u521D\u59CB\u5316\u65F6\u4F20\u5165\u521D\u59CB\u5316\u8BC4\u8BBA\u51FD\u6570</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">comment</span><span style="color:#24292F;">: </span><span style="color:#CF222E;">function</span><span style="color:#24292F;"> (</span><span style="color:#953800;">speak</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// \u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u5373\u4E3A\u8BE5\u6761speak\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> { </span><span style="color:#0550AE;">_id</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">title</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">content</span><span style="color:#24292F;"> } </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> speak </span><span style="color:#6E7781;">// \u53D6\u51FA\u8BE5speak\u7684\u552F\u4E00id\uFF0C\u6807\u9898\u548C\u5185\u5BB9</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">contentSub</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> content.</span><span style="color:#8250DF;">substring</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">0</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">30</span><span style="color:#24292F;">) </span><span style="color:#6E7781;">// \u622A\u53D6\u5185\u5BB9\u524D30\u4E2A\u5B57\u7B26</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// \u521D\u59CB\u5316artalk\u8BC4\u8BBA</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">Artalk</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">      el: </span><span style="color:#0A3069;">&#39;.ispeak-comment&#39;</span><span style="color:#24292F;">, </span><span style="color:#6E7781;">// \u9ED8\u8BA4\u60C5\u51B5\u4E0B ipseak \u751F\u6210class\u4E3A ispeak-comment \u7684div</span></span>
<span class="line"><span style="color:#24292F;">      pageKey: </span><span style="color:#0A3069;">&#39;/speak/info.html?q=&#39;</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">+</span><span style="color:#24292F;"> _id,, </span><span style="color:#6E7781;">// \u624B\u52A8\u4F20\u5165\u5F53\u524Dspeak\u7684\u552F\u4E00id</span></span>
<span class="line"><span style="color:#24292F;">      pageTitle: title </span><span style="color:#CF222E;">||</span><span style="color:#24292F;"> contentSub, </span><span style="color:#6E7781;">// \u624B\u52A8\u4F20\u5165\u5F53\u524Dspeak\u7684\u6807\u9898(\u7531\u4E8Econtent\u53EF\u80FD\u8FC7\u957F\uFF0C\u56E0\u6B64\u622A\u53D6\u524D30\u4E2A\u5B57\u7B26)</span></span>
<span class="line"><span style="color:#24292F;">      server: </span><span style="color:#0A3069;">&#39;https://api.antmoe.com/artalk/&#39;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">      site: </span><span style="color:#0A3069;">&#39;speak&#39;</span><span style="color:#24292F;"> </span><span style="color:#6E7781;">// \u4F60\u7684\u7AD9\u70B9\u540D</span></span>
<span class="line"><span style="color:#24292F;">    })</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">})</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u5173\u4E8E<code>pageKey</code>\u5982\u4F55\u586B\u5199\uFF1F</p><p>\u8BE5\u5C5E\u6027\u4E3A<strong>\u9875\u9762\u5730\u5740</strong>\uFF08\u76F8\u5BF9\u8DEF\u5F84 / \u5B8C\u6574 URL\uFF09\uFF0C\u4F46\u662F\u6211\u4EEC\u7684ispeak\u7684\u9875\u9762\u5730\u5740\u662F\u4E0D\u4F1A\u53D8\u7684\uFF0C\u56E0\u6B64\u8FD9\u91CC\u9700\u8981\u624B\u52A8\u4F20\u5165\u8BE5\u5C5E\u6027\uFF08\u5176\u4ED6\u8BC4\u8BBA\u81EA\u884C\u67E5\u627E\u6587\u6863\uFF0C\u5BFB\u627E\u5176\u5BF9\u5E94\u5C5E\u6027\uFF09\u3002</p><p>\u8FD9\u91CC\u6211\u586B\u5199\u7684\u662F<code>&#39;/speak/info.html/#/&#39; + _id</code>,\u4E3A\u4E86\u70B9\u51FB\u8BC4\u8BBA\u80FD\u591F\u5230\u5BF9\u5E94\u7684speak\u9875\u9762\uFF0C\u56E0\u6B64\u9700\u8981\u5728speak\u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6<code>info.md</code>\uFF0C\u8BE5\u9875\u9762\u7684\u4F5C\u7528\u5C31\u662F\u5C55\u793A\u5F53\u524D\u4F20\u5165id\u7684\u8BC4\u8BBA\u5185\u5BB9\u3002</p></blockquote><h2 id="\u5355\u4E2Aspeak\u9875\u9762" tabindex="-1">\u5355\u4E2Aspeak\u9875\u9762 <a class="header-anchor" href="#\u5355\u4E2Aspeak\u9875\u9762" aria-hidden="true">#</a></h2><p>\u5373\u4E3A\u4E0A\u9762\u6240\u8FF0\u7684<code>info.md</code>\u9875\u9762\uFF0C\u5176\u4E3B\u8981\u4F5C\u7528\u5C31\u662F\u5C55\u793A\u5355\u6761speak\u548C\u5176\u5BF9\u5E94\u7684\u8BC4\u8BBA\u3002</p><p>\u53C2\u8003\u5185\u5BB9\uFF1A</p><div class="language-markdown"><button class="copy"></button><span class="lang">markdown</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#C9D1D9;">---</span></span>
<span class="line"><span style="color:#7EE787;">title</span><span style="color:#C9D1D9;">: </span><span style="color:#A5D6FF;">Speak</span></span>
<span class="line"><span style="color:#7EE787;">date</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">2022-08-21 14:11:00</span></span>
<span class="line"><span style="color:#7EE787;">update</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">2022-08-21 14:11:00</span></span>
<span class="line"><span style="color:#7EE787;">top_img</span><span style="color:#C9D1D9;">: </span><span style="color:#A5D6FF;">https://tva1.sinaimg.cn/large/005B3XPgly1ghkxqgvmy0j30zk0irn2q.jpg</span></span>
<span class="line"><span style="color:#7EE787;">aside</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">false</span></span>
<span class="line"><span style="color:#7EE787;">comments</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">false</span></span>
<span class="line"><span style="color:#7EE787;">description</span><span style="color:#C9D1D9;">: </span><span style="color:#A5D6FF;">\u6B22\u8FCE\u6765\u5230\u5C0F\u5EB7\u7684Speak\u9875\u9762\uFF0C\u5FEB\u6765\u770B\u770B\u5C0F\u5EB7\u5206\u4EAB\u4E86\u4EC0\u4E48speak\uFF01</span></span>
<span class="line"><span style="color:#C9D1D9;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">&lt;!-- CSS --&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;link href=&quot;https://unpkg.com/artalk@2.3.4/dist/Artalk.css&quot; rel=&quot;stylesheet&quot;&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css&quot; /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;div class=&#39;content&#39;&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;img src=&#39;https://bu.dusays.com/2022/05/01/626e88f349943.gif&#39;&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">{% btn &#39;https://www.antmoe.com/speak/&#39;,\u67E5\u770B\u5168\u90E8,far fa-hand-point-right,block center blue larger %}</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;hr /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;div class=&#39;ispeak-comment&#39;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#8B949E;">&lt;!-- JS --&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;script src=&quot;https://unpkg.com/artalk@2.3.4/dist/Artalk.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;script src=&quot;https://unpkg.com/marked@4.0.18/marked.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;script src=&quot;https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  const searchParams = new URLSearchParams(window.location.search);</span></span>
<span class="line"><span style="color:#C9D1D9;">  const speakId = searchParams.get(&#39;q&#39;);</span></span>
<span class="line"><span style="color:#C9D1D9;">  const path = window.location.pathname;</span></span>
<span class="line"><span style="color:#C9D1D9;">  const apiURL = &#39;https://kkapi.vercel.app/api/ispeak&#39;;</span></span>
<span class="line"><span style="color:#C9D1D9;">  const markedRender = (body, loading_img=&#39;https://bu.dusays.com/2022/05/01/626e88f349943.gif&#39;) =&gt; {</span></span>
<span class="line"><span style="color:#C9D1D9;">    const renderer = {</span></span>
<span class="line"><span style="color:#C9D1D9;">      image(href, title, text) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        return \`&lt;a href=&quot;\${href}&quot; target=&quot;_blank&quot; data-fancybox=&quot;group&quot; class=&quot;fancybox&quot;&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">            &lt;img speak-src=&quot;\${href}&quot; src=\${loading_img} alt=&#39;\${text}&#39;&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">            &lt;/a&gt;\`</span></span>
<span class="line"><span style="color:#C9D1D9;">      }</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">    marked.setOptions({</span></span>
<span class="line"><span style="color:#C9D1D9;">      renderer: new marked.Renderer(),</span></span>
<span class="line"><span style="color:#C9D1D9;">      highlight: function (code) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        if (hljs) {</span></span>
<span class="line"><span style="color:#C9D1D9;">          return hljs.highlightAuto(code).value</span></span>
<span class="line"><span style="color:#C9D1D9;">        } else {</span></span>
<span class="line"><span style="color:#C9D1D9;">          return code</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"><span style="color:#C9D1D9;">      },</span></span>
<span class="line"><span style="color:#C9D1D9;">      pedantic: false,</span></span>
<span class="line"><span style="color:#C9D1D9;">      gfm: true,</span></span>
<span class="line"><span style="color:#C9D1D9;">      tables: true,</span></span>
<span class="line"><span style="color:#C9D1D9;">      breaks: true,</span></span>
<span class="line"><span style="color:#C9D1D9;">      sanitize: false,</span></span>
<span class="line"><span style="color:#C9D1D9;">      smartLists: true,</span></span>
<span class="line"><span style="color:#C9D1D9;">      smartypants: false,</span></span>
<span class="line"><span style="color:#C9D1D9;">      xhtml: false</span></span>
<span class="line"><span style="color:#C9D1D9;">    })</span></span>
<span class="line"><span style="color:#C9D1D9;">    marked.use({ renderer })</span></span>
<span class="line"><span style="color:#C9D1D9;">    return marked.parse(body)</span></span>
<span class="line"><span style="color:#C9D1D9;">  }</span></span>
<span class="line"><span style="color:#C9D1D9;">  fetch(</span><span style="color:#79C0FF;">\`\${apiURL}/get/\${speakId}\`</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"><span style="color:#C9D1D9;">  .then(response =&gt; response.json())</span></span>
<span class="line"><span style="color:#C9D1D9;">  .then(res =&gt; {</span></span>
<span class="line"><span style="color:#C9D1D9;">    const data = res.data;</span></span>
<span class="line"><span style="color:#C9D1D9;">    if(data){</span></span>
<span class="line"><span style="color:#C9D1D9;">      const {title,content} = data;</span></span>
<span class="line"><span style="color:#C9D1D9;">      const contentSub = content.substring(0, 30);</span></span>
<span class="line"><span style="color:#C9D1D9;">      document.querySelector(&#39;.content&#39;).innerHTML = markedRender(content);</span></span>
<span class="line"><span style="color:#C9D1D9;">      if(title){</span></span>
<span class="line"><span style="color:#C9D1D9;">        document.title = title;</span></span>
<span class="line"><span style="color:#C9D1D9;">      }</span></span>
<span class="line"><span style="color:#C9D1D9;">      new Artalk({</span></span>
<span class="line"><span style="color:#C9D1D9;">        el: &#39;.ispeak-comment&#39;,</span></span>
<span class="line"><span style="color:#C9D1D9;">        pageKey: path + &#39;?q=&#39; + speakId,</span></span>
<span class="line"><span style="color:#C9D1D9;">        pageTitle: title || contentSub,</span></span>
<span class="line"><span style="color:#C9D1D9;">        server: &#39;https://api.antmoe.com/artalk/&#39;,</span></span>
<span class="line"><span style="color:#C9D1D9;">        site: &#39;speak&#39;, // \u4F60\u7684\u7AD9\u70B9\u540D</span></span>
<span class="line"><span style="color:#C9D1D9;">        useBackendConf: true,</span></span>
<span class="line"><span style="color:#C9D1D9;">      })</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">  });</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#24292F;">---</span></span>
<span class="line"><span style="color:#116329;">title</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">Speak</span></span>
<span class="line"><span style="color:#116329;">date</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">2022-08-21 14:11:00</span></span>
<span class="line"><span style="color:#116329;">update</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">2022-08-21 14:11:00</span></span>
<span class="line"><span style="color:#116329;">top_img</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">https://tva1.sinaimg.cn/large/005B3XPgly1ghkxqgvmy0j30zk0irn2q.jpg</span></span>
<span class="line"><span style="color:#116329;">aside</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">false</span></span>
<span class="line"><span style="color:#116329;">comments</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">false</span></span>
<span class="line"><span style="color:#116329;">description</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">\u6B22\u8FCE\u6765\u5230\u5C0F\u5EB7\u7684Speak\u9875\u9762\uFF0C\u5FEB\u6765\u770B\u770B\u5C0F\u5EB7\u5206\u4EAB\u4E86\u4EC0\u4E48speak\uFF01</span></span>
<span class="line"><span style="color:#24292F;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;">&lt;!-- CSS --&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;link href=&quot;https://unpkg.com/artalk@2.3.4/dist/Artalk.css&quot; rel=&quot;stylesheet&quot;&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;div class=&#39;content&#39;&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;img src=&#39;https://bu.dusays.com/2022/05/01/626e88f349943.gif&#39;&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292F;">{% btn &#39;https://www.antmoe.com/speak/&#39;,\u67E5\u770B\u5168\u90E8,far fa-hand-point-right,block center blue larger %}</span></span>
<span class="line"><span style="color:#24292F;">&lt;hr /&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;div class=&#39;ispeak-comment&#39;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#6E7781;">&lt;!-- JS --&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;script src=&quot;https://unpkg.com/artalk@2.3.4/dist/Artalk.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;script src=&quot;https://unpkg.com/marked@4.0.18/marked.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;script src=&quot;https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292F;">  const searchParams = new URLSearchParams(window.location.search);</span></span>
<span class="line"><span style="color:#24292F;">  const speakId = searchParams.get(&#39;q&#39;);</span></span>
<span class="line"><span style="color:#24292F;">  const path = window.location.pathname;</span></span>
<span class="line"><span style="color:#24292F;">  const apiURL = &#39;https://kkapi.vercel.app/api/ispeak&#39;;</span></span>
<span class="line"><span style="color:#24292F;">  const markedRender = (body, loading_img=&#39;https://bu.dusays.com/2022/05/01/626e88f349943.gif&#39;) =&gt; {</span></span>
<span class="line"><span style="color:#24292F;">    const renderer = {</span></span>
<span class="line"><span style="color:#24292F;">      image(href, title, text) {</span></span>
<span class="line"><span style="color:#24292F;">        return \`&lt;a href=&quot;\${href}&quot; target=&quot;_blank&quot; data-fancybox=&quot;group&quot; class=&quot;fancybox&quot;&gt;</span></span>
<span class="line"><span style="color:#24292F;">            &lt;img speak-src=&quot;\${href}&quot; src=\${loading_img} alt=&#39;\${text}&#39;&gt;</span></span>
<span class="line"><span style="color:#24292F;">            &lt;/a&gt;\`</span></span>
<span class="line"><span style="color:#24292F;">      }</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">    marked.setOptions({</span></span>
<span class="line"><span style="color:#24292F;">      renderer: new marked.Renderer(),</span></span>
<span class="line"><span style="color:#24292F;">      highlight: function (code) {</span></span>
<span class="line"><span style="color:#24292F;">        if (hljs) {</span></span>
<span class="line"><span style="color:#24292F;">          return hljs.highlightAuto(code).value</span></span>
<span class="line"><span style="color:#24292F;">        } else {</span></span>
<span class="line"><span style="color:#24292F;">          return code</span></span>
<span class="line"><span style="color:#24292F;">        }</span></span>
<span class="line"><span style="color:#24292F;">      },</span></span>
<span class="line"><span style="color:#24292F;">      pedantic: false,</span></span>
<span class="line"><span style="color:#24292F;">      gfm: true,</span></span>
<span class="line"><span style="color:#24292F;">      tables: true,</span></span>
<span class="line"><span style="color:#24292F;">      breaks: true,</span></span>
<span class="line"><span style="color:#24292F;">      sanitize: false,</span></span>
<span class="line"><span style="color:#24292F;">      smartLists: true,</span></span>
<span class="line"><span style="color:#24292F;">      smartypants: false,</span></span>
<span class="line"><span style="color:#24292F;">      xhtml: false</span></span>
<span class="line"><span style="color:#24292F;">    })</span></span>
<span class="line"><span style="color:#24292F;">    marked.use({ renderer })</span></span>
<span class="line"><span style="color:#24292F;">    return marked.parse(body)</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">  fetch(</span><span style="color:#0550AE;">\`\${apiURL}/get/\${speakId}\`</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">  .then(response =&gt; response.json())</span></span>
<span class="line"><span style="color:#24292F;">  .then(res =&gt; {</span></span>
<span class="line"><span style="color:#24292F;">    const data = res.data;</span></span>
<span class="line"><span style="color:#24292F;">    if(data){</span></span>
<span class="line"><span style="color:#24292F;">      const {title,content} = data;</span></span>
<span class="line"><span style="color:#24292F;">      const contentSub = content.substring(0, 30);</span></span>
<span class="line"><span style="color:#24292F;">      document.querySelector(&#39;.content&#39;).innerHTML = markedRender(content);</span></span>
<span class="line"><span style="color:#24292F;">      if(title){</span></span>
<span class="line"><span style="color:#24292F;">        document.title = title;</span></span>
<span class="line"><span style="color:#24292F;">      }</span></span>
<span class="line"><span style="color:#24292F;">      new Artalk({</span></span>
<span class="line"><span style="color:#24292F;">        el: &#39;.ispeak-comment&#39;,</span></span>
<span class="line"><span style="color:#24292F;">        pageKey: path + &#39;?q=&#39; + speakId,</span></span>
<span class="line"><span style="color:#24292F;">        pageTitle: title || contentSub,</span></span>
<span class="line"><span style="color:#24292F;">        server: &#39;https://api.antmoe.com/artalk/&#39;,</span></span>
<span class="line"><span style="color:#24292F;">        site: &#39;speak&#39;, // \u4F60\u7684\u7AD9\u70B9\u540D</span></span>
<span class="line"><span style="color:#24292F;">        useBackendConf: true,</span></span>
<span class="line"><span style="color:#24292F;">      })</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">  });</span></span>
<span class="line"><span style="color:#24292F;">  </span></span>
<span class="line"><span style="color:#24292F;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,16),o=[e];function t(c,r,i,y,D,F){return a(),n("div",null,o)}const C=s(p,[["render",t]]);export{g as __pageData,C as default};
