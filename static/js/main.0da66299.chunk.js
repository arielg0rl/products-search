(this["webpackJsonpproducts-search"]=this["webpackJsonpproducts-search"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(9),r=c.n(s),o=c(2),i=(c(15),c(16),c(17),c(18),c(19),c(8)),l=c(6),u=c.n(l),j=c(10),d=function(){var e=Object(j.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://findify-assets.s3.amazonaws.com/test-task").concat(t));case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("Couldn't load data");case 5:return e.next=7,c.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=c(0),f=function(e){e.selectedFilters;return Object(b.jsx)("div",{})},O=c(7),v=c.n(O),_=function(e){var t=e.onFilterSelect,c=e.colorCodes,n=e.facet,s=n.values.slice(0,6),r=Object(a.useState)(s),i=Object(o.a)(r,2),l=i[0],u=i[1],j=Object(a.useState)(!1),d=Object(o.a)(j,2),f=d[0],O=d[1],_=Object(a.useState)(!1),m=Object(o.a)(_,2),p=m[0],h=m[1],x=Object(a.useState)(!0),N=Object(o.a)(x,2),k=N[0],g=N[1],w=Object(a.useState)("More"),C=Object(o.a)(w,2),S=C[0],y=C[1],F=function(){f&&(h(!0),O(!1),u(n.values),y("Less")),p&&(u(s),y("More"),O(!0),h(!1))},M=function(e){var t=c.find((function(t){return e===t.name}))||null;return"Multicolor"===e?t?{backgroundImage:"url(".concat(t.code,")"),backgroundSize:"cover"}:{backgroundColor:"white"}:"White"===e?t?{backgroundColor:t.code,border:"1px solid black"}:{backgroundColor:"white"}:t?{backgroundColor:t.code}:{backgroundColor:"white"}};return Object(b.jsx)("div",{className:"facet",children:Object(b.jsxs)("div",{className:"facet__wrapper",children:[Object(b.jsxs)("div",{className:"facet__head",children:[Object(b.jsx)("div",{className:"facet__name",children:n.name}),k?Object(b.jsx)("div",{className:"facet__button facet__button-open",onClick:function(){g(!1),O(!0)}}):Object(b.jsx)("div",{className:"facet__button facet__button-close",onClick:function(){h(!1),g(!0),O(!1),u(s),y("More")}})]}),!k&&Object(b.jsxs)("div",{className:"facet__options",children:[l.map((function(e){return Object(b.jsxs)(b.Fragment,{children:["text"===n.type&&Object(b.jsxs)("div",{className:"facet__option",children:[Object(b.jsxs)("div",{className:"facet__option-wrapper",children:[Object(b.jsx)("div",{className:v()("facet__box",{}),onClick:function(){return t(e.value)}}),Object(b.jsx)("div",{className:"facet__value",children:e.value})]}),Object(b.jsxs)("div",{className:"facet__count",children:["(",e.count,")"]})]},e.value),"color"===n.type&&Object(b.jsxs)("div",{className:"facet__option",children:[Object(b.jsxs)("div",{className:"facet__option-wrapper",children:[Object(b.jsx)("div",{style:M(e.value),className:"facet__color",onClick:function(){return t(M(e.value))}}),Object(b.jsx)("div",{className:"facet__value",children:e.value})]}),Object(b.jsxs)("div",{className:"facet__count",children:["(",e.count,")"]})]},e.value),"range"===n.type&&Object(b.jsxs)("div",{className:"facet__option",children:[Object(b.jsx)("section",{className:"range-slider",children:Object(b.jsx)("input",{type:"range",value:0,min:0,max:100,step:1,onChange:F})}),Object(b.jsx)("button",{children:"go"})]},e.value)]})})),Object(b.jsx)("div",{className:"facet__more-button",onClick:F,children:Object(b.jsx)("div",{className:v()("facet__more-button-word",{"facet__more-button-word--plus":"More"===S}),children:S})})]})]},n.name)})},m=function(e){var t=e.facets,c=Object(a.useState)([]),n=Object(o.a)(c,2),s=n[0],r=n[1],l=Object(a.useState)([]),u=Object(o.a)(l,2),j=u[0],O=u[1];Object(a.useEffect)((function(){d("/test_color_mapping.json").then((function(e){r(e)}))}),[]);var v=function(e){"string"===typeof e&&O([].concat(Object(i.a)(j),[{type:"material",value:e}])),O([].concat(Object(i.a)(j),[{type:"color",value:e}]))};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"Filters",children:[Object(b.jsx)("div",{className:"Filters__section",children:"filters"}),Object(b.jsx)(f,{selectedFilters:j})]}),t.map((function(e){return Object(b.jsx)(_,{onFilterSelect:v,colorCodes:s,facet:e},e.name)}))]})},p=function(e){e.items;return Object(b.jsx)("div",{})};var h=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),r=Object(o.a)(s,2),i=r[0],l=r[1];return Object(a.useEffect)((function(){d("/test_response.json").then((function(e){n(e.items),l(e.facets)}))}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"App__heading",children:"Search results"}),Object(b.jsx)(m,{facets:i}),Object(b.jsx)(p,{items:c})]})};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.0da66299.chunk.js.map