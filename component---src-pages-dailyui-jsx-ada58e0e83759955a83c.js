(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{132:function(e,t,a){"use strict";var n=a(32),r=a.n(n),i=a(1),o=a.n(i),l=a(130),c=a.n(l),m=a(133),p=a.n(m),s=a(131),u=a.n(s),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,i=r.postNode,l=r.postPath,m=r.postSEO;if(m){var s=i.frontmatter;e=s.title,t=s.description?s.description:i.excerpt,a=s.cover,n=p()(u.a.siteUrl,u.a.pathPrefix,l)}else e=u.a.siteTitle,t=u.a.siteDescription,a=u.a.siteLogo;a=p()(u.a.siteUrl,u.a.pathPrefix,a);var h=p()(u.a.siteUrl,u.a.pathPrefix),d=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return m&&d.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}),o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),o.a.createElement("meta",{property:"og:url",content:m?n:h}),m?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:a}))},t}(i.Component);t.a=h},133:function(e,t,a){var n,r,i;i=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var r=e[n];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(n>0&&(r=r.replace(/^[\/]+/,"")),r=n<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},void 0!==e&&e.exports?e.exports=i():void 0===(r="function"==typeof(n=i)?n.call(t,a,t,e):n)||(e.exports=r)},255:function(e,t,a){"use strict";a.r(t),a.d(t,"dailyUiQuery",function(){return g});var n=a(32),r=a.n(n),i=a(1),o=a.n(i),l=a(130),c=a.n(l),m=a(134),p=a.n(m),s=a(135),u=a(132),h=a(131),d=a.n(h),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(s.a,{location:this.props.location},o.a.createElement("div",{className:"index-container"},o.a.createElement(c.a,{title:d.a.siteTitle+" | Daily UI Challenge"}),o.a.createElement(u.a,null),o.a.createElement("div",{className:"section"},o.a.createElement("div",{className:"section__label"},o.a.createElement("p",null,"About"),o.a.createElement("span",null)),o.a.createElement("div",{className:"section__content section__content--centered"},o.a.createElement("p",null,"Daily UI Challenge",o.a.createElement("br",null),o.a.createElement("i",null,"Design something for 30 days straight.")),o.a.createElement("div",{className:"more-link more-link--inline"},o.a.createElement("a",{href:"/photo"},"Back to home")))),o.a.createElement("div",{className:"photo-stream"},this.props.data.allFile.edges.map(function(e){var t=e.node.childImageSharp.fluid.aspectRatio>1?"photo-stream__photo":"photo-stream__photo--portrait";return o.a.createElement("div",{className:t},o.a.createElement(p.a,{fluid:e.node.childImageSharp.fluid}))}))))},t}(o.a.Component);t.default=f;var g="814798401"}}]);
//# sourceMappingURL=component---src-pages-dailyui-jsx-ada58e0e83759955a83c.js.map