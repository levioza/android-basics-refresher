(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{VdjM:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return o}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var i=n("/FXl"),r=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/helpers/screen-utility.mdx"}});var s={_frontmatter:c},l=r.a;function o(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(i.b)(l,a({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"description"},"Description"),Object(i.b)("p",null,"This code snippet presents a utility class that could help you get the width and the height of a screen in density independent pixels."),Object(i.b)("h2",{id:"code"},"Code"),Object(i.b)("h3",{id:"screenutilityjava"},"ScreenUtility.java"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{className:"language-java"}),"public class ScreenUtility {\n\n    float dpWidth;\n    float dpHeight;\n\n    public ScreenUtility(Activity activity) {\n        Display display = activity.getWindowManager().getDefaultDisplay();\n        DisplayMetrics outMetrics = new DisplayMetrics();\n        display.getMetrics(outMetrics);\n\n        float density = activity.getResources().getDisplayMetrics().density;\n\n        dpWidth = outMetrics.widthPixels / density;\n        dpHeight = outMetrics.heightPixels / density;\n    }\n\n    public float getDpWidth() {\n        return dpWidth;\n    }\n\n    public float getDpHeight() {\n        return dpHeight;\n    }\n}\n")))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/helpers/screen-utility.mdx"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-helpers-screen-utility-mdx-b09716d4366cb4510528.js.map