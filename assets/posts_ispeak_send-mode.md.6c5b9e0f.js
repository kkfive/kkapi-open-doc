import{_ as s,c as n,o as a,d as l}from"./app.1f7f19a8.js";const F=JSON.parse('{"title":"\u53D1\u9001\u65B9\u5F0F\u53C2\u8003","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7F51\u9875\u7AEF\u53D1\u9001","slug":"\u7F51\u9875\u7AEF\u53D1\u9001","link":"#\u7F51\u9875\u7AEF\u53D1\u9001","children":[]},{"level":2,"title":"\u540E\u53F0\u53D1\u9001","slug":"\u540E\u53F0\u53D1\u9001","link":"#\u540E\u53F0\u53D1\u9001","children":[]},{"level":2,"title":"ios \u5FEB\u6377\u6307\u4EE4","slug":"ios-\u5FEB\u6377\u6307\u4EE4","link":"#ios-\u5FEB\u6377\u6307\u4EE4","children":[]},{"level":2,"title":"ios/Mac \u5E94\u7528 Taio","slug":"ios-mac-\u5E94\u7528-taio","link":"#ios-mac-\u5E94\u7528-taio","children":[]},{"level":2,"title":"Utools \u53D1\u9001","slug":"utools-\u53D1\u9001","link":"#utools-\u53D1\u9001","children":[]}],"relativePath":"posts/ispeak/send-mode.md","lastUpdated":1661614081000}'),p={name:"posts/ispeak/send-mode.md"},o=l(`<h1 id="\u53D1\u9001\u65B9\u5F0F\u53C2\u8003" tabindex="-1">\u53D1\u9001\u65B9\u5F0F\u53C2\u8003 <a class="header-anchor" href="#\u53D1\u9001\u65B9\u5F0F\u53C2\u8003" aria-hidden="true">#</a></h1><h2 id="\u7F51\u9875\u7AEF\u53D1\u9001" tabindex="-1">\u7F51\u9875\u7AEF\u53D1\u9001 <a class="header-anchor" href="#\u7F51\u9875\u7AEF\u53D1\u9001" aria-hidden="true">#</a></h2><p>GitHub\u5F00\u6E90\u4ED3\u5E93\uFF1A<a href="https://github.com/kkfive/speak-biubiu" target="_blank" rel="noreferrer">https://github.com/kkfive/speak-biubiu</a></p><h2 id="\u540E\u53F0\u53D1\u9001" tabindex="-1">\u540E\u53F0\u53D1\u9001 <a class="header-anchor" href="#\u540E\u53F0\u53D1\u9001" aria-hidden="true">#</a></h2><p>\u8FDB\u5165\u540E\u53F0\u65B0\u589E\u5373\u53EF</p><p><img src="https://file.acs.pw/picGo/2022/02/27/20220227135930.png" alt="image-20220227135930033"></p><h2 id="ios-\u5FEB\u6377\u6307\u4EE4" tabindex="-1">ios \u5FEB\u6377\u6307\u4EE4 <a class="header-anchor" href="#ios-\u5FEB\u6377\u6307\u4EE4" aria-hidden="true">#</a></h2><p>\u5FEB\u6377\u6307\u4EE4\u94FE\u63A5\uFF1A<a href="https://www.icloud.com/shortcuts/5a03f4209c3e4b42bb75bbea2eaf57db" target="_blank" rel="noreferrer">https://www.icloud.com/shortcuts/5a03f4209c3e4b42bb75bbea2eaf57db</a></p><p><img src="https://file.acs.pw/picGo/2022/02/27/20220227140332.png" alt="image-20220227140332782"></p><p>\u5728\u6B64\u5904\u5C06\u4F60\u7684\u914D\u7F6E\u4FE1\u606F\u586B\u5199\u5373\u53EF</p><h2 id="ios-mac-\u5E94\u7528-taio" tabindex="-1">ios/Mac \u5E94\u7528 Taio <a class="header-anchor" href="#ios-mac-\u5E94\u7528-taio" aria-hidden="true">#</a></h2><p>\u53C2\u8003\u52A8\u4F5C</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#c9d1d9;">{</span></span>
<span class="line"><span style="color:#c9d1d9;">  &quot;actions&quot; : [</span></span>
<span class="line"><span style="color:#c9d1d9;">    {</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;type&quot; : &quot;@flow.set-variable&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;value&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;\u4F60\u7684token&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        },</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;name&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;token&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    },</span></span>
<span class="line"><span style="color:#c9d1d9;">    {</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;type&quot; : &quot;@editor.get-text&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;fallback&quot; : 1,</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;filename&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;$&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#c9d1d9;">            {</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;value&quot; : &quot;@editor.file-name&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">            }</span></span>
<span class="line"><span style="color:#c9d1d9;">          ]</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    },</span></span>
<span class="line"><span style="color:#c9d1d9;">    {</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;type&quot; : &quot;@flow.set-variable&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;value&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;$&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#c9d1d9;">            {</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;value&quot; : &quot;@input&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">            }</span></span>
<span class="line"><span style="color:#c9d1d9;">          ]</span></span>
<span class="line"><span style="color:#c9d1d9;">        },</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;name&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;content&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    },</span></span>
<span class="line"><span style="color:#c9d1d9;">    {</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;type&quot; : &quot;@flow.set-variable&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;value&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;\u4F60\u7684api\u5730\u5740&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        },</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;name&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;api&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    },</span></span>
<span class="line"><span style="color:#c9d1d9;">    {</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;type&quot; : &quot;@flow.set-variable&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;value&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;\u4F60\u7684\u7528\u6237id&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        },</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;name&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;userId&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    },</span></span>
<span class="line"><span style="color:#c9d1d9;">    {</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;type&quot; : &quot;@util.request&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;body&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        },</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;url&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;$\\/ispeak\\/tag\\/list?userId=$&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#c9d1d9;">            {</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;location&quot; : 25,</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;value&quot; : &quot;userId&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">            },</span></span>
<span class="line"><span style="color:#c9d1d9;">            {</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;value&quot; : &quot;api&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">            }</span></span>
<span class="line"><span style="color:#c9d1d9;">          ]</span></span>
<span class="line"><span style="color:#c9d1d9;">        },</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;method&quot; : 0,</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;headers&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;{\\n  \\&quot;Content-Type\\&quot;: \\&quot;application\\/json\\&quot;\\n}&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    },</span></span>
<span class="line"><span style="color:#c9d1d9;">    {</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;type&quot; : &quot;@flow.javascript&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;script&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;\\/\\/ Get input\\nconst text = $actions.inputValue;\\n\\/\\/ Resolve with output\\nconst textJson = JSON.parse(text);\\nconst selectData = []\\nconst selectMap = {}\\ntextJson.data.forEach(item=&gt;{\\n  selectData.push(item.name)\\n  selectMap[item.name] = item._id\\n})\\n$actions.setVar(\\&quot;selectMap\\&quot;,selectMap)\\n$actions.resolve(selectData.join(\\&quot;\\\\n\\&quot;));\\n\\n\\/\\/ Exception handling:\\n\\/\\/  $actions.reject(\\&quot;Error\\&quot;);\\n\\/\\/  $actions.finish();&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    },</span></span>
<span class="line"><span style="color:#c9d1d9;">    {</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;type&quot; : &quot;@ui.menu&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;prompt&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        },</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;selectAllByDefault&quot; : false,</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;multiValue&quot; : false,</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;lines&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;$&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#c9d1d9;">            {</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;value&quot; : &quot;@input&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">            }</span></span>
<span class="line"><span style="color:#c9d1d9;">          ]</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    },</span></span>
<span class="line"><span style="color:#c9d1d9;">    {</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;type&quot; : &quot;@flow.set-variable&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;value&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;$&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#c9d1d9;">            {</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;value&quot; : &quot;@input&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">            }</span></span>
<span class="line"><span style="color:#c9d1d9;">          ]</span></span>
<span class="line"><span style="color:#c9d1d9;">        },</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;name&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;selectTag&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    },</span></span>
<span class="line"><span style="color:#c9d1d9;">    {</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;type&quot; : &quot;@flow.javascript&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;script&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;\\/\\/ Get input\\nconst text = $actions.inputValue;\\nconst selectMap = $actions.getVar(\\&quot;selectMap\\&quot;)\\n$actions.setVar(\\&quot;tag\\&quot;,selectMap[text])\\n\\/\\/ Resolve with output\\n$actions.resolve(selectMap[text]);\\n\\n\\/\\/ Exception handling:\\n\\/\\/  $actions.reject(\\&quot;Error\\&quot;);\\n\\/\\/  $actions.finish();&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    },</span></span>
<span class="line"><span style="color:#c9d1d9;">    {</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;type&quot; : &quot;@ui.menu&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;prompt&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;\u9009\u62E9\u53EF\u89C1\u7C7B\u578B&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        },</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;selectAllByDefault&quot; : false,</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;multiValue&quot; : false,</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;lines&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;\u516C\u5F00\\n\u767B\u5F55\u53EF\u89C1\\n\u4EC5\u81EA\u5DF1\u53EF\u89C1&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    },</span></span>
<span class="line"><span style="color:#c9d1d9;">    {</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;type&quot; : &quot;@flow.set-variable&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;value&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;$&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#c9d1d9;">            {</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;value&quot; : &quot;@input&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">            }</span></span>
<span class="line"><span style="color:#c9d1d9;">          ]</span></span>
<span class="line"><span style="color:#c9d1d9;">        },</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;name&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;selectType&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    },</span></span>
<span class="line"><span style="color:#c9d1d9;">    {</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;type&quot; : &quot;@flow.javascript&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;script&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;\\/\\/ Get input\\nconst text = $actions.inputValue;\\n\\nconst typeMap = {\\n  \\&quot;\u516C\u5F00\\&quot;:\\&quot;0\\&quot;,\\n  \\&quot;\u767B\u5F55\u53EF\u89C1\\&quot;:\\&quot;1\\&quot;,\\n  \\&quot;\u4EC5\u81EA\u5DF1\u53EF\u89C1\\&quot;:\\&quot;2\\&quot;,\\n}\\n$actions.setVar(\\&quot;type\\&quot;,typeMap[text])\\n\\/\\/ Resolve with output\\n$actions.resolve(typeMap[text]);\\n\\n\\/\\/ Exception handling:\\n\\/\\/  $actions.reject(\\&quot;Error\\&quot;);\\n\\/\\/  $actions.finish();&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    },</span></span>
<span class="line"><span style="color:#c9d1d9;">    {</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;type&quot; : &quot;@ui.render-text&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;title&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        },</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;fullScreen&quot; : false,</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;text&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;\u6807\u7B7E\uFF1A$\\n\u53EF\u89C1\u5EA6\uFF1A$\\n\u5185\u5BB9\uFF1A$&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#c9d1d9;">            {</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;location&quot; : 14,</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;value&quot; : &quot;content&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">            },</span></span>
<span class="line"><span style="color:#c9d1d9;">            {</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;location&quot; : 9,</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;value&quot; : &quot;selectType&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">            },</span></span>
<span class="line"><span style="color:#c9d1d9;">            {</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;location&quot; : 3,</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;value&quot; : &quot;selectTag&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">            }</span></span>
<span class="line"><span style="color:#c9d1d9;">          ]</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    },</span></span>
<span class="line"><span style="color:#c9d1d9;">    {</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;type&quot; : &quot;@ui.confirm&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;text&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;\u662F\u5426\u786E\u8BA4&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    },</span></span>
<span class="line"><span style="color:#c9d1d9;">    {</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;type&quot; : &quot;@flow.javascript&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;script&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;const api = $actions.getVar(\\&quot;api\\&quot;)\\nconst tag = $actions.getVar(\\&quot;tag\\&quot;)\\nconst content = $actions.getVar(\\&quot;content\\&quot;)\\nconst type = $actions.getVar(\\&quot;type\\&quot;)\\nconst token = $actions.getVar(\\&quot;token\\&quot;)\\nconst obj = {\\n    type:type,\\n    tag:tag,\\n    content:content,\\n    token:token\\n  }\\n  $actions.resolve(JSON.stringify(obj))&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    },</span></span>
<span class="line"><span style="color:#c9d1d9;">    {</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;type&quot; : &quot;@util.request&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;body&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;$&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#c9d1d9;">            {</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;value&quot; : &quot;@input&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">            }</span></span>
<span class="line"><span style="color:#c9d1d9;">          ]</span></span>
<span class="line"><span style="color:#c9d1d9;">        },</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;url&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;$\\/ispeak\\/addByToken&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#c9d1d9;">            {</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#c9d1d9;">              &quot;value&quot; : &quot;api&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">            }</span></span>
<span class="line"><span style="color:#c9d1d9;">          ]</span></span>
<span class="line"><span style="color:#c9d1d9;">        },</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;method&quot; : 1,</span></span>
<span class="line"><span style="color:#c9d1d9;">        &quot;headers&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">          &quot;value&quot; : &quot;{\\n  \\&quot;Content-Type\\&quot;: \\&quot;application\\/json\\&quot;\\n}&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;">  ],</span></span>
<span class="line"><span style="color:#c9d1d9;">  &quot;buildVersion&quot; : 1,</span></span>
<span class="line"><span style="color:#c9d1d9;">  &quot;name&quot; : &quot;\u5C06\u6587\u672C\u53D1\u9001\u5230speak&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">  &quot;clientMinVersion&quot; : 1,</span></span>
<span class="line"><span style="color:#c9d1d9;">  &quot;summary&quot; : &quot;&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">  &quot;icon&quot; : {</span></span>
<span class="line"><span style="color:#c9d1d9;">    &quot;glyph&quot; : &quot;wand.and.stars&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">    &quot;color&quot; : &quot;#FE824B&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">  },</span></span>
<span class="line"><span style="color:#c9d1d9;">  &quot;clientVersion&quot; : 722</span></span>
<span class="line"><span style="color:#c9d1d9;">}</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#24292f;">{</span></span>
<span class="line"><span style="color:#24292f;">  &quot;actions&quot; : [</span></span>
<span class="line"><span style="color:#24292f;">    {</span></span>
<span class="line"><span style="color:#24292f;">      &quot;type&quot; : &quot;@flow.set-variable&quot;,</span></span>
<span class="line"><span style="color:#24292f;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">        &quot;value&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;\u4F60\u7684token&quot;</span></span>
<span class="line"><span style="color:#24292f;">        },</span></span>
<span class="line"><span style="color:#24292f;">        &quot;name&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;token&quot;</span></span>
<span class="line"><span style="color:#24292f;">        }</span></span>
<span class="line"><span style="color:#24292f;">      }</span></span>
<span class="line"><span style="color:#24292f;">    },</span></span>
<span class="line"><span style="color:#24292f;">    {</span></span>
<span class="line"><span style="color:#24292f;">      &quot;type&quot; : &quot;@editor.get-text&quot;,</span></span>
<span class="line"><span style="color:#24292f;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">        &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#24292f;">        &quot;fallback&quot; : 1,</span></span>
<span class="line"><span style="color:#24292f;">        &quot;filename&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;$&quot;,</span></span>
<span class="line"><span style="color:#24292f;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#24292f;">            {</span></span>
<span class="line"><span style="color:#24292f;">              &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#24292f;">              &quot;value&quot; : &quot;@editor.file-name&quot;</span></span>
<span class="line"><span style="color:#24292f;">            }</span></span>
<span class="line"><span style="color:#24292f;">          ]</span></span>
<span class="line"><span style="color:#24292f;">        }</span></span>
<span class="line"><span style="color:#24292f;">      }</span></span>
<span class="line"><span style="color:#24292f;">    },</span></span>
<span class="line"><span style="color:#24292f;">    {</span></span>
<span class="line"><span style="color:#24292f;">      &quot;type&quot; : &quot;@flow.set-variable&quot;,</span></span>
<span class="line"><span style="color:#24292f;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">        &quot;value&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;$&quot;,</span></span>
<span class="line"><span style="color:#24292f;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#24292f;">            {</span></span>
<span class="line"><span style="color:#24292f;">              &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#24292f;">              &quot;value&quot; : &quot;@input&quot;</span></span>
<span class="line"><span style="color:#24292f;">            }</span></span>
<span class="line"><span style="color:#24292f;">          ]</span></span>
<span class="line"><span style="color:#24292f;">        },</span></span>
<span class="line"><span style="color:#24292f;">        &quot;name&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;content&quot;</span></span>
<span class="line"><span style="color:#24292f;">        }</span></span>
<span class="line"><span style="color:#24292f;">      }</span></span>
<span class="line"><span style="color:#24292f;">    },</span></span>
<span class="line"><span style="color:#24292f;">    {</span></span>
<span class="line"><span style="color:#24292f;">      &quot;type&quot; : &quot;@flow.set-variable&quot;,</span></span>
<span class="line"><span style="color:#24292f;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">        &quot;value&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;\u4F60\u7684api\u5730\u5740&quot;</span></span>
<span class="line"><span style="color:#24292f;">        },</span></span>
<span class="line"><span style="color:#24292f;">        &quot;name&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;api&quot;</span></span>
<span class="line"><span style="color:#24292f;">        }</span></span>
<span class="line"><span style="color:#24292f;">      }</span></span>
<span class="line"><span style="color:#24292f;">    },</span></span>
<span class="line"><span style="color:#24292f;">    {</span></span>
<span class="line"><span style="color:#24292f;">      &quot;type&quot; : &quot;@flow.set-variable&quot;,</span></span>
<span class="line"><span style="color:#24292f;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">        &quot;value&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;\u4F60\u7684\u7528\u6237id&quot;</span></span>
<span class="line"><span style="color:#24292f;">        },</span></span>
<span class="line"><span style="color:#24292f;">        &quot;name&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;userId&quot;</span></span>
<span class="line"><span style="color:#24292f;">        }</span></span>
<span class="line"><span style="color:#24292f;">      }</span></span>
<span class="line"><span style="color:#24292f;">    },</span></span>
<span class="line"><span style="color:#24292f;">    {</span></span>
<span class="line"><span style="color:#24292f;">      &quot;type&quot; : &quot;@util.request&quot;,</span></span>
<span class="line"><span style="color:#24292f;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">        &quot;body&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;&quot;</span></span>
<span class="line"><span style="color:#24292f;">        },</span></span>
<span class="line"><span style="color:#24292f;">        &quot;url&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;$\\/ispeak\\/tag\\/list?userId=$&quot;,</span></span>
<span class="line"><span style="color:#24292f;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#24292f;">            {</span></span>
<span class="line"><span style="color:#24292f;">              &quot;location&quot; : 25,</span></span>
<span class="line"><span style="color:#24292f;">              &quot;value&quot; : &quot;userId&quot;</span></span>
<span class="line"><span style="color:#24292f;">            },</span></span>
<span class="line"><span style="color:#24292f;">            {</span></span>
<span class="line"><span style="color:#24292f;">              &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#24292f;">              &quot;value&quot; : &quot;api&quot;</span></span>
<span class="line"><span style="color:#24292f;">            }</span></span>
<span class="line"><span style="color:#24292f;">          ]</span></span>
<span class="line"><span style="color:#24292f;">        },</span></span>
<span class="line"><span style="color:#24292f;">        &quot;method&quot; : 0,</span></span>
<span class="line"><span style="color:#24292f;">        &quot;headers&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;{\\n  \\&quot;Content-Type\\&quot;: \\&quot;application\\/json\\&quot;\\n}&quot;</span></span>
<span class="line"><span style="color:#24292f;">        }</span></span>
<span class="line"><span style="color:#24292f;">      }</span></span>
<span class="line"><span style="color:#24292f;">    },</span></span>
<span class="line"><span style="color:#24292f;">    {</span></span>
<span class="line"><span style="color:#24292f;">      &quot;type&quot; : &quot;@flow.javascript&quot;,</span></span>
<span class="line"><span style="color:#24292f;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">        &quot;script&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;\\/\\/ Get input\\nconst text = $actions.inputValue;\\n\\/\\/ Resolve with output\\nconst textJson = JSON.parse(text);\\nconst selectData = []\\nconst selectMap = {}\\ntextJson.data.forEach(item=&gt;{\\n  selectData.push(item.name)\\n  selectMap[item.name] = item._id\\n})\\n$actions.setVar(\\&quot;selectMap\\&quot;,selectMap)\\n$actions.resolve(selectData.join(\\&quot;\\\\n\\&quot;));\\n\\n\\/\\/ Exception handling:\\n\\/\\/  $actions.reject(\\&quot;Error\\&quot;);\\n\\/\\/  $actions.finish();&quot;</span></span>
<span class="line"><span style="color:#24292f;">        }</span></span>
<span class="line"><span style="color:#24292f;">      }</span></span>
<span class="line"><span style="color:#24292f;">    },</span></span>
<span class="line"><span style="color:#24292f;">    {</span></span>
<span class="line"><span style="color:#24292f;">      &quot;type&quot; : &quot;@ui.menu&quot;,</span></span>
<span class="line"><span style="color:#24292f;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">        &quot;prompt&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;&quot;</span></span>
<span class="line"><span style="color:#24292f;">        },</span></span>
<span class="line"><span style="color:#24292f;">        &quot;selectAllByDefault&quot; : false,</span></span>
<span class="line"><span style="color:#24292f;">        &quot;multiValue&quot; : false,</span></span>
<span class="line"><span style="color:#24292f;">        &quot;lines&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;$&quot;,</span></span>
<span class="line"><span style="color:#24292f;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#24292f;">            {</span></span>
<span class="line"><span style="color:#24292f;">              &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#24292f;">              &quot;value&quot; : &quot;@input&quot;</span></span>
<span class="line"><span style="color:#24292f;">            }</span></span>
<span class="line"><span style="color:#24292f;">          ]</span></span>
<span class="line"><span style="color:#24292f;">        }</span></span>
<span class="line"><span style="color:#24292f;">      }</span></span>
<span class="line"><span style="color:#24292f;">    },</span></span>
<span class="line"><span style="color:#24292f;">    {</span></span>
<span class="line"><span style="color:#24292f;">      &quot;type&quot; : &quot;@flow.set-variable&quot;,</span></span>
<span class="line"><span style="color:#24292f;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">        &quot;value&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;$&quot;,</span></span>
<span class="line"><span style="color:#24292f;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#24292f;">            {</span></span>
<span class="line"><span style="color:#24292f;">              &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#24292f;">              &quot;value&quot; : &quot;@input&quot;</span></span>
<span class="line"><span style="color:#24292f;">            }</span></span>
<span class="line"><span style="color:#24292f;">          ]</span></span>
<span class="line"><span style="color:#24292f;">        },</span></span>
<span class="line"><span style="color:#24292f;">        &quot;name&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;selectTag&quot;</span></span>
<span class="line"><span style="color:#24292f;">        }</span></span>
<span class="line"><span style="color:#24292f;">      }</span></span>
<span class="line"><span style="color:#24292f;">    },</span></span>
<span class="line"><span style="color:#24292f;">    {</span></span>
<span class="line"><span style="color:#24292f;">      &quot;type&quot; : &quot;@flow.javascript&quot;,</span></span>
<span class="line"><span style="color:#24292f;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">        &quot;script&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;\\/\\/ Get input\\nconst text = $actions.inputValue;\\nconst selectMap = $actions.getVar(\\&quot;selectMap\\&quot;)\\n$actions.setVar(\\&quot;tag\\&quot;,selectMap[text])\\n\\/\\/ Resolve with output\\n$actions.resolve(selectMap[text]);\\n\\n\\/\\/ Exception handling:\\n\\/\\/  $actions.reject(\\&quot;Error\\&quot;);\\n\\/\\/  $actions.finish();&quot;</span></span>
<span class="line"><span style="color:#24292f;">        }</span></span>
<span class="line"><span style="color:#24292f;">      }</span></span>
<span class="line"><span style="color:#24292f;">    },</span></span>
<span class="line"><span style="color:#24292f;">    {</span></span>
<span class="line"><span style="color:#24292f;">      &quot;type&quot; : &quot;@ui.menu&quot;,</span></span>
<span class="line"><span style="color:#24292f;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">        &quot;prompt&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;\u9009\u62E9\u53EF\u89C1\u7C7B\u578B&quot;</span></span>
<span class="line"><span style="color:#24292f;">        },</span></span>
<span class="line"><span style="color:#24292f;">        &quot;selectAllByDefault&quot; : false,</span></span>
<span class="line"><span style="color:#24292f;">        &quot;multiValue&quot; : false,</span></span>
<span class="line"><span style="color:#24292f;">        &quot;lines&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;\u516C\u5F00\\n\u767B\u5F55\u53EF\u89C1\\n\u4EC5\u81EA\u5DF1\u53EF\u89C1&quot;</span></span>
<span class="line"><span style="color:#24292f;">        }</span></span>
<span class="line"><span style="color:#24292f;">      }</span></span>
<span class="line"><span style="color:#24292f;">    },</span></span>
<span class="line"><span style="color:#24292f;">    {</span></span>
<span class="line"><span style="color:#24292f;">      &quot;type&quot; : &quot;@flow.set-variable&quot;,</span></span>
<span class="line"><span style="color:#24292f;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">        &quot;value&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;$&quot;,</span></span>
<span class="line"><span style="color:#24292f;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#24292f;">            {</span></span>
<span class="line"><span style="color:#24292f;">              &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#24292f;">              &quot;value&quot; : &quot;@input&quot;</span></span>
<span class="line"><span style="color:#24292f;">            }</span></span>
<span class="line"><span style="color:#24292f;">          ]</span></span>
<span class="line"><span style="color:#24292f;">        },</span></span>
<span class="line"><span style="color:#24292f;">        &quot;name&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;selectType&quot;</span></span>
<span class="line"><span style="color:#24292f;">        }</span></span>
<span class="line"><span style="color:#24292f;">      }</span></span>
<span class="line"><span style="color:#24292f;">    },</span></span>
<span class="line"><span style="color:#24292f;">    {</span></span>
<span class="line"><span style="color:#24292f;">      &quot;type&quot; : &quot;@flow.javascript&quot;,</span></span>
<span class="line"><span style="color:#24292f;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">        &quot;script&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;\\/\\/ Get input\\nconst text = $actions.inputValue;\\n\\nconst typeMap = {\\n  \\&quot;\u516C\u5F00\\&quot;:\\&quot;0\\&quot;,\\n  \\&quot;\u767B\u5F55\u53EF\u89C1\\&quot;:\\&quot;1\\&quot;,\\n  \\&quot;\u4EC5\u81EA\u5DF1\u53EF\u89C1\\&quot;:\\&quot;2\\&quot;,\\n}\\n$actions.setVar(\\&quot;type\\&quot;,typeMap[text])\\n\\/\\/ Resolve with output\\n$actions.resolve(typeMap[text]);\\n\\n\\/\\/ Exception handling:\\n\\/\\/  $actions.reject(\\&quot;Error\\&quot;);\\n\\/\\/  $actions.finish();&quot;</span></span>
<span class="line"><span style="color:#24292f;">        }</span></span>
<span class="line"><span style="color:#24292f;">      }</span></span>
<span class="line"><span style="color:#24292f;">    },</span></span>
<span class="line"><span style="color:#24292f;">    {</span></span>
<span class="line"><span style="color:#24292f;">      &quot;type&quot; : &quot;@ui.render-text&quot;,</span></span>
<span class="line"><span style="color:#24292f;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">        &quot;title&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;&quot;</span></span>
<span class="line"><span style="color:#24292f;">        },</span></span>
<span class="line"><span style="color:#24292f;">        &quot;fullScreen&quot; : false,</span></span>
<span class="line"><span style="color:#24292f;">        &quot;text&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;\u6807\u7B7E\uFF1A$\\n\u53EF\u89C1\u5EA6\uFF1A$\\n\u5185\u5BB9\uFF1A$&quot;,</span></span>
<span class="line"><span style="color:#24292f;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#24292f;">            {</span></span>
<span class="line"><span style="color:#24292f;">              &quot;location&quot; : 14,</span></span>
<span class="line"><span style="color:#24292f;">              &quot;value&quot; : &quot;content&quot;</span></span>
<span class="line"><span style="color:#24292f;">            },</span></span>
<span class="line"><span style="color:#24292f;">            {</span></span>
<span class="line"><span style="color:#24292f;">              &quot;location&quot; : 9,</span></span>
<span class="line"><span style="color:#24292f;">              &quot;value&quot; : &quot;selectType&quot;</span></span>
<span class="line"><span style="color:#24292f;">            },</span></span>
<span class="line"><span style="color:#24292f;">            {</span></span>
<span class="line"><span style="color:#24292f;">              &quot;location&quot; : 3,</span></span>
<span class="line"><span style="color:#24292f;">              &quot;value&quot; : &quot;selectTag&quot;</span></span>
<span class="line"><span style="color:#24292f;">            }</span></span>
<span class="line"><span style="color:#24292f;">          ]</span></span>
<span class="line"><span style="color:#24292f;">        }</span></span>
<span class="line"><span style="color:#24292f;">      }</span></span>
<span class="line"><span style="color:#24292f;">    },</span></span>
<span class="line"><span style="color:#24292f;">    {</span></span>
<span class="line"><span style="color:#24292f;">      &quot;type&quot; : &quot;@ui.confirm&quot;,</span></span>
<span class="line"><span style="color:#24292f;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">        &quot;text&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;\u662F\u5426\u786E\u8BA4&quot;</span></span>
<span class="line"><span style="color:#24292f;">        }</span></span>
<span class="line"><span style="color:#24292f;">      }</span></span>
<span class="line"><span style="color:#24292f;">    },</span></span>
<span class="line"><span style="color:#24292f;">    {</span></span>
<span class="line"><span style="color:#24292f;">      &quot;type&quot; : &quot;@flow.javascript&quot;,</span></span>
<span class="line"><span style="color:#24292f;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">        &quot;script&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;const api = $actions.getVar(\\&quot;api\\&quot;)\\nconst tag = $actions.getVar(\\&quot;tag\\&quot;)\\nconst content = $actions.getVar(\\&quot;content\\&quot;)\\nconst type = $actions.getVar(\\&quot;type\\&quot;)\\nconst token = $actions.getVar(\\&quot;token\\&quot;)\\nconst obj = {\\n    type:type,\\n    tag:tag,\\n    content:content,\\n    token:token\\n  }\\n  $actions.resolve(JSON.stringify(obj))&quot;</span></span>
<span class="line"><span style="color:#24292f;">        }</span></span>
<span class="line"><span style="color:#24292f;">      }</span></span>
<span class="line"><span style="color:#24292f;">    },</span></span>
<span class="line"><span style="color:#24292f;">    {</span></span>
<span class="line"><span style="color:#24292f;">      &quot;type&quot; : &quot;@util.request&quot;,</span></span>
<span class="line"><span style="color:#24292f;">      &quot;parameters&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">        &quot;body&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;$&quot;,</span></span>
<span class="line"><span style="color:#24292f;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#24292f;">            {</span></span>
<span class="line"><span style="color:#24292f;">              &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#24292f;">              &quot;value&quot; : &quot;@input&quot;</span></span>
<span class="line"><span style="color:#24292f;">            }</span></span>
<span class="line"><span style="color:#24292f;">          ]</span></span>
<span class="line"><span style="color:#24292f;">        },</span></span>
<span class="line"><span style="color:#24292f;">        &quot;url&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;$\\/ispeak\\/addByToken&quot;,</span></span>
<span class="line"><span style="color:#24292f;">          &quot;tokens&quot; : [</span></span>
<span class="line"><span style="color:#24292f;">            {</span></span>
<span class="line"><span style="color:#24292f;">              &quot;location&quot; : 0,</span></span>
<span class="line"><span style="color:#24292f;">              &quot;value&quot; : &quot;api&quot;</span></span>
<span class="line"><span style="color:#24292f;">            }</span></span>
<span class="line"><span style="color:#24292f;">          ]</span></span>
<span class="line"><span style="color:#24292f;">        },</span></span>
<span class="line"><span style="color:#24292f;">        &quot;method&quot; : 1,</span></span>
<span class="line"><span style="color:#24292f;">        &quot;headers&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">          &quot;value&quot; : &quot;{\\n  \\&quot;Content-Type\\&quot;: \\&quot;application\\/json\\&quot;\\n}&quot;</span></span>
<span class="line"><span style="color:#24292f;">        }</span></span>
<span class="line"><span style="color:#24292f;">      }</span></span>
<span class="line"><span style="color:#24292f;">    }</span></span>
<span class="line"><span style="color:#24292f;">  ],</span></span>
<span class="line"><span style="color:#24292f;">  &quot;buildVersion&quot; : 1,</span></span>
<span class="line"><span style="color:#24292f;">  &quot;name&quot; : &quot;\u5C06\u6587\u672C\u53D1\u9001\u5230speak&quot;,</span></span>
<span class="line"><span style="color:#24292f;">  &quot;clientMinVersion&quot; : 1,</span></span>
<span class="line"><span style="color:#24292f;">  &quot;summary&quot; : &quot;&quot;,</span></span>
<span class="line"><span style="color:#24292f;">  &quot;icon&quot; : {</span></span>
<span class="line"><span style="color:#24292f;">    &quot;glyph&quot; : &quot;wand.and.stars&quot;,</span></span>
<span class="line"><span style="color:#24292f;">    &quot;color&quot; : &quot;#FE824B&quot;</span></span>
<span class="line"><span style="color:#24292f;">  },</span></span>
<span class="line"><span style="color:#24292f;">  &quot;clientVersion&quot; : 722</span></span>
<span class="line"><span style="color:#24292f;">}</span></span>
<span class="line"><span style="color:#24292f;"></span></span></code></pre></div><h2 id="utools-\u53D1\u9001" tabindex="-1">Utools \u53D1\u9001 <a class="header-anchor" href="#utools-\u53D1\u9001" aria-hidden="true">#</a></h2><p>utools\u53D1\u9001\u4F9D\u8D56\u4E8E\u63D2\u4EF6\u5FEB\u6377\u547D\u4EE4</p><p><img src="https://file.acs.pw/picGo/2022/02/27/20220227140556.png" alt="image-20220227140556245"></p><p>\u53C2\u8003\u4EE3\u7801</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">axios</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">require</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;axios&#39;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">api</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;\u4F60\u7684api\u5730\u5740&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">token</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;\u4F60\u7684token&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">userId</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;\u4F60\u7684\u7528\u6237id&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">params</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  token,</span></span>
<span class="line"><span style="color:#C9D1D9;">  userId,</span></span>
<span class="line"><span style="color:#C9D1D9;">  content: </span><span style="color:#A5D6FF;">\`{{subinput}}\`</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">tagList</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> []</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">typeList</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> [</span></span>
<span class="line"><span style="color:#C9D1D9;">  { title: </span><span style="color:#A5D6FF;">&#39;\u516C\u5F00\u663E\u793A&#39;</span><span style="color:#C9D1D9;">, description: </span><span style="color:#A5D6FF;">&#39;0&#39;</span><span style="color:#C9D1D9;"> },</span></span>
<span class="line"><span style="color:#C9D1D9;">  { title: </span><span style="color:#A5D6FF;">&#39;\u767B\u5F55\u663E\u793A&#39;</span><span style="color:#C9D1D9;">, description: </span><span style="color:#A5D6FF;">&#39;1&#39;</span><span style="color:#C9D1D9;"> },</span></span>
<span class="line"><span style="color:#C9D1D9;">  { title: </span><span style="color:#A5D6FF;">&#39;\u4EC5\u81EA\u5DF1\u663E\u793A&#39;</span><span style="color:#C9D1D9;">, description: </span><span style="color:#A5D6FF;">&#39;2&#39;</span><span style="color:#C9D1D9;"> }</span></span>
<span class="line"><span style="color:#C9D1D9;">]</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">showCommentList</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> [</span></span>
<span class="line"><span style="color:#C9D1D9;">  { title: </span><span style="color:#A5D6FF;">&#39;\u5141\u8BB8\u8BC4\u8BBA&#39;</span><span style="color:#C9D1D9;">, description: </span><span style="color:#A5D6FF;">&#39;1&#39;</span><span style="color:#C9D1D9;"> },</span></span>
<span class="line"><span style="color:#C9D1D9;">  { title: </span><span style="color:#A5D6FF;">&#39;\u4E0D\u5141\u8BB8\u8BC4\u8BBA&#39;</span><span style="color:#C9D1D9;">, description: </span><span style="color:#A5D6FF;">&#39;0&#39;</span><span style="color:#C9D1D9;"> }</span></span>
<span class="line"><span style="color:#C9D1D9;">]</span></span>
<span class="line"><span style="color:#FF7B72;">async</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">main</span><span style="color:#C9D1D9;">() {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">list</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">await</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">getTagList</span><span style="color:#C9D1D9;">()</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;"> (list.code </span><span style="color:#FF7B72;">===</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">    list.data.</span><span style="color:#D2A8FF;">forEach</span><span style="color:#C9D1D9;">((</span><span style="color:#FFA657;">tag</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">      tagList.</span><span style="color:#D2A8FF;">push</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">        title: tag.name,</span></span>
<span class="line"><span style="color:#C9D1D9;">        description: tag._id</span></span>
<span class="line"><span style="color:#C9D1D9;">      })</span></span>
<span class="line"><span style="color:#C9D1D9;">    })</span></span>
<span class="line"><span style="color:#C9D1D9;">  } </span><span style="color:#FF7B72;">else</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    quickcommand.</span><span style="color:#D2A8FF;">showMessageBox</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;\u83B7\u53D6\u6807\u7B7E\u5931\u8D25&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;fail&#39;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"><span style="color:#C9D1D9;">  }</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">tag</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">await</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">userSelect</span><span style="color:#C9D1D9;">(tagList)</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">type</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">await</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">userSelect</span><span style="color:#C9D1D9;">(typeList)</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">showComment</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">await</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">userSelect</span><span style="color:#C9D1D9;">(showCommentList)</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">sendResult</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">await</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">sendBiuBiu</span><span style="color:#C9D1D9;">({ tag, type, </span><span style="color:#FF7B72;">...</span><span style="color:#C9D1D9;">params })</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;"> (sendResult.code </span><span style="color:#FF7B72;">===</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">    quickcommand.</span><span style="color:#D2A8FF;">showMessageBox</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;\u53D1\u9001\u6210\u529F&#39;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"><span style="color:#C9D1D9;">  } </span><span style="color:#FF7B72;">else</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(sendResult)</span></span>
<span class="line"><span style="color:#C9D1D9;">    quickcommand.</span><span style="color:#D2A8FF;">showMessageBox</span><span style="color:#C9D1D9;">(sendResult.message, </span><span style="color:#A5D6FF;">&#39;fail&#39;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"><span style="color:#C9D1D9;">  }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">userSelect</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">optionsList</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">Promise</span><span style="color:#C9D1D9;">((</span><span style="color:#FFA657;">resolve</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    quickcommand</span></span>
<span class="line"><span style="color:#C9D1D9;">      .</span><span style="color:#D2A8FF;">showSelectList</span><span style="color:#C9D1D9;">(optionsList, { optionType: </span><span style="color:#A5D6FF;">&#39;json&#39;</span><span style="color:#C9D1D9;"> })</span></span>
<span class="line"><span style="color:#C9D1D9;">      .</span><span style="color:#D2A8FF;">then</span><span style="color:#C9D1D9;">((</span><span style="color:#FFA657;">choise</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">resolve</span><span style="color:#C9D1D9;">(choise.description)</span></span>
<span class="line"><span style="color:#C9D1D9;">      })</span></span>
<span class="line"><span style="color:#C9D1D9;">  })</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">getTagList</span><span style="color:#C9D1D9;">() {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">Promise</span><span style="color:#C9D1D9;">((</span><span style="color:#FFA657;">resolve</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">reject</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    axios</span></span>
<span class="line"><span style="color:#C9D1D9;">      .</span><span style="color:#D2A8FF;">get</span><span style="color:#C9D1D9;">(api </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;/ispeak/tag/list&#39;</span><span style="color:#C9D1D9;">, {</span></span>
<span class="line"><span style="color:#C9D1D9;">        params: {</span></span>
<span class="line"><span style="color:#C9D1D9;">          userId</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"><span style="color:#C9D1D9;">      })</span></span>
<span class="line"><span style="color:#C9D1D9;">      .</span><span style="color:#D2A8FF;">then</span><span style="color:#C9D1D9;">((</span><span style="color:#FFA657;">result</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">resolve</span><span style="color:#C9D1D9;">(result.data)</span></span>
<span class="line"><span style="color:#C9D1D9;">      })</span></span>
<span class="line"><span style="color:#C9D1D9;">      .</span><span style="color:#D2A8FF;">catch</span><span style="color:#C9D1D9;">((</span><span style="color:#FFA657;">e</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">reject</span><span style="color:#C9D1D9;">()</span></span>
<span class="line"><span style="color:#C9D1D9;">      })</span></span>
<span class="line"><span style="color:#C9D1D9;">  })</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">async</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">sendBiuBiu</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">obj</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> { </span><span style="color:#79C0FF;">data</span><span style="color:#C9D1D9;"> } </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">await</span><span style="color:#C9D1D9;"> axios.</span><span style="color:#D2A8FF;">post</span><span style="color:#C9D1D9;">(api </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;/ispeak/addByToken&#39;</span><span style="color:#C9D1D9;">, obj)</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> data</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// quickcommand.showMessageBox(&#39;success&#39;)</span></span>
<span class="line"><span style="color:#D2A8FF;">main</span><span style="color:#C9D1D9;">()</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">axios</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">require</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;axios&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">api</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;\u4F60\u7684api\u5730\u5740&#39;</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">token</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;\u4F60\u7684token&#39;</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">userId</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;\u4F60\u7684\u7528\u6237id&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">params</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  token,</span></span>
<span class="line"><span style="color:#24292F;">  userId,</span></span>
<span class="line"><span style="color:#24292F;">  content: </span><span style="color:#0A3069;">\`{{subinput}}\`</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">tagList</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> []</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">typeList</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> [</span></span>
<span class="line"><span style="color:#24292F;">  { title: </span><span style="color:#0A3069;">&#39;\u516C\u5F00\u663E\u793A&#39;</span><span style="color:#24292F;">, description: </span><span style="color:#0A3069;">&#39;0&#39;</span><span style="color:#24292F;"> },</span></span>
<span class="line"><span style="color:#24292F;">  { title: </span><span style="color:#0A3069;">&#39;\u767B\u5F55\u663E\u793A&#39;</span><span style="color:#24292F;">, description: </span><span style="color:#0A3069;">&#39;1&#39;</span><span style="color:#24292F;"> },</span></span>
<span class="line"><span style="color:#24292F;">  { title: </span><span style="color:#0A3069;">&#39;\u4EC5\u81EA\u5DF1\u663E\u793A&#39;</span><span style="color:#24292F;">, description: </span><span style="color:#0A3069;">&#39;2&#39;</span><span style="color:#24292F;"> }</span></span>
<span class="line"><span style="color:#24292F;">]</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">showCommentList</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> [</span></span>
<span class="line"><span style="color:#24292F;">  { title: </span><span style="color:#0A3069;">&#39;\u5141\u8BB8\u8BC4\u8BBA&#39;</span><span style="color:#24292F;">, description: </span><span style="color:#0A3069;">&#39;1&#39;</span><span style="color:#24292F;"> },</span></span>
<span class="line"><span style="color:#24292F;">  { title: </span><span style="color:#0A3069;">&#39;\u4E0D\u5141\u8BB8\u8BC4\u8BBA&#39;</span><span style="color:#24292F;">, description: </span><span style="color:#0A3069;">&#39;0&#39;</span><span style="color:#24292F;"> }</span></span>
<span class="line"><span style="color:#24292F;">]</span></span>
<span class="line"><span style="color:#CF222E;">async</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">main</span><span style="color:#24292F;">() {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">list</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">await</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">getTagList</span><span style="color:#24292F;">()</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">if</span><span style="color:#24292F;"> (list.code </span><span style="color:#CF222E;">===</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">0</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">    list.data.</span><span style="color:#8250DF;">forEach</span><span style="color:#24292F;">((</span><span style="color:#953800;">tag</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">      tagList.</span><span style="color:#8250DF;">push</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">        title: tag.name,</span></span>
<span class="line"><span style="color:#24292F;">        description: tag._id</span></span>
<span class="line"><span style="color:#24292F;">      })</span></span>
<span class="line"><span style="color:#24292F;">    })</span></span>
<span class="line"><span style="color:#24292F;">  } </span><span style="color:#CF222E;">else</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">    quickcommand.</span><span style="color:#8250DF;">showMessageBox</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;\u83B7\u53D6\u6807\u7B7E\u5931\u8D25&#39;</span><span style="color:#24292F;">, </span><span style="color:#0A3069;">&#39;fail&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">tag</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">await</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">userSelect</span><span style="color:#24292F;">(tagList)</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">type</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">await</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">userSelect</span><span style="color:#24292F;">(typeList)</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">showComment</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">await</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">userSelect</span><span style="color:#24292F;">(showCommentList)</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">sendResult</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">await</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">sendBiuBiu</span><span style="color:#24292F;">({ tag, type, </span><span style="color:#CF222E;">...</span><span style="color:#24292F;">params })</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">if</span><span style="color:#24292F;"> (sendResult.code </span><span style="color:#CF222E;">===</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">0</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">    quickcommand.</span><span style="color:#8250DF;">showMessageBox</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;\u53D1\u9001\u6210\u529F&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">  } </span><span style="color:#CF222E;">else</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">    console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(sendResult)</span></span>
<span class="line"><span style="color:#24292F;">    quickcommand.</span><span style="color:#8250DF;">showMessageBox</span><span style="color:#24292F;">(sendResult.message, </span><span style="color:#0A3069;">&#39;fail&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">userSelect</span><span style="color:#24292F;">(</span><span style="color:#953800;">optionsList</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Promise</span><span style="color:#24292F;">((</span><span style="color:#953800;">resolve</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">    quickcommand</span></span>
<span class="line"><span style="color:#24292F;">      .</span><span style="color:#8250DF;">showSelectList</span><span style="color:#24292F;">(optionsList, { optionType: </span><span style="color:#0A3069;">&#39;json&#39;</span><span style="color:#24292F;"> })</span></span>
<span class="line"><span style="color:#24292F;">      .</span><span style="color:#8250DF;">then</span><span style="color:#24292F;">((</span><span style="color:#953800;">choise</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#8250DF;">resolve</span><span style="color:#24292F;">(choise.description)</span></span>
<span class="line"><span style="color:#24292F;">      })</span></span>
<span class="line"><span style="color:#24292F;">  })</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">getTagList</span><span style="color:#24292F;">() {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Promise</span><span style="color:#24292F;">((</span><span style="color:#953800;">resolve</span><span style="color:#24292F;">, </span><span style="color:#953800;">reject</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">    axios</span></span>
<span class="line"><span style="color:#24292F;">      .</span><span style="color:#8250DF;">get</span><span style="color:#24292F;">(api </span><span style="color:#CF222E;">+</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;/ispeak/tag/list&#39;</span><span style="color:#24292F;">, {</span></span>
<span class="line"><span style="color:#24292F;">        params: {</span></span>
<span class="line"><span style="color:#24292F;">          userId</span></span>
<span class="line"><span style="color:#24292F;">        }</span></span>
<span class="line"><span style="color:#24292F;">      })</span></span>
<span class="line"><span style="color:#24292F;">      .</span><span style="color:#8250DF;">then</span><span style="color:#24292F;">((</span><span style="color:#953800;">result</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#8250DF;">resolve</span><span style="color:#24292F;">(result.data)</span></span>
<span class="line"><span style="color:#24292F;">      })</span></span>
<span class="line"><span style="color:#24292F;">      .</span><span style="color:#8250DF;">catch</span><span style="color:#24292F;">((</span><span style="color:#953800;">e</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#8250DF;">reject</span><span style="color:#24292F;">()</span></span>
<span class="line"><span style="color:#24292F;">      })</span></span>
<span class="line"><span style="color:#24292F;">  })</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">async</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">sendBiuBiu</span><span style="color:#24292F;">(</span><span style="color:#953800;">obj</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> { </span><span style="color:#0550AE;">data</span><span style="color:#24292F;"> } </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">await</span><span style="color:#24292F;"> axios.</span><span style="color:#8250DF;">post</span><span style="color:#24292F;">(api </span><span style="color:#CF222E;">+</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;/ispeak/addByToken&#39;</span><span style="color:#24292F;">, obj)</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> data</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;">// quickcommand.showMessageBox(&#39;success&#39;)</span></span>
<span class="line"><span style="color:#8250DF;">main</span><span style="color:#24292F;">()</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,18),t=[o];function e(c,r,y,u,i,q){return a(),n("div",null,t)}const D=s(p,[["render",e]]);export{F as __pageData,D as default};
