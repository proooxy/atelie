(this["webpackJsonpprojeto-screen"]=this["webpackJsonpprojeto-screen"]||[]).push([[0],{56:function(n,e,t){"use strict";t.r(e);var r,c=t(1),o=t.n(c),i=t(39),a=t.n(i),l=t(6),s=t(7),d=Object(s.a)(r||(r=Object(l.a)(["\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n    *, input, button{\n        font-family: 'Castoro', sans-serif;\n    }\n\n"]))),b=t(45),u=t(28),j=o.a.createContext({}),p=t(58),f=t(43);function h(){var n=Object(c.useContext)(j).wrapperRef,e=Object(f.a)(0),t=Object(f.a)(0);return Object(c.useEffect)((function(){var r=n.current;if(r){var c=function(){var n=r.scrollTop,c=r.scrollHeight-r.offsetHeight;e.set(n),t.set(n/c)};return r.addEventListener("scroll",c),function(){return null===r||void 0===r?void 0:r.removeEventListener("scroll",c)}}}),[]),{scrollY:e,scrollYProgress:t}}var g,x,m,O,v=t(57),k=Object(s.b)(v.a.div)(g||(g=Object(l.a)(["\n    position: sticky;\n    top:0;\n    height: 100vh;\n    margin-top: -100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    \n\n"]))),y=t(2),z=function(n){var e=n.model,t=n.children,r=Object(c.useCallback)((function(){var n,t;return{offsetTop:null===(n=e.sectionRef.current)||void 0===n?void 0:n.offsetTop,offsetHeight:null===(t=e.sectionRef.current)||void 0===t?void 0:t.offsetHeight}}),[e.sectionRef]),o=Object(c.useState)(r()),i=Object(u.a)(o,2),a=i[0],l=i[1];Object(c.useLayoutEffect)((function(){function n(){window.requestAnimationFrame((function(){return l(r())}))}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]);var s=h().scrollY,d=Object(p.a)(s,(function(n){return(n-a.offsetTop)/a.offsetHeight})),b=Object(p.a)(d,[-.42,-.05,.05,.42],[0,1,1,0]),j=Object(p.a)(b,(function(n){return n>0?"auto":"none"}));return Object(y.jsx)(k,{style:{opacity:b,pointerEvents:j},children:t})},w=s.b.div(x||(x=Object(l.a)(["\n    height: 100vh;\n    \n    scroll-snap-type: y mandatory;\n    overflow-y: scroll;\n"]))),M=s.b.div(m||(m=Object(l.a)(["\n    position: sticky;\n    top:0;\n    left:0;\n    right: 0;\n    bottom: 0;\n"]))),N=function(n){var e=n.children,t=Object(c.useRef)(null),r=Object(c.useState)([]),o=Object(u.a)(r,2),i=o[0],a=o[1],l=Object(c.useCallback)((function(n){a((function(e){return[].concat(Object(b.a)(e),[n])}))}),[]),s=Object(c.useCallback)((function(n){a((function(e){return e.filter((function(e){return e.modelName!==n}))}))}),[]),d=Object(c.useCallback)((function(n){return i.find((function(e){return e.modelName===n}))||null}),[i]);return Object(y.jsx)(j.Provider,{value:{wrapperRef:t,registeredModels:i,registerModel:l,unregisterModel:s,getModelByName:d},children:Object(y.jsxs)(w,{ref:t,children:[Object(y.jsx)(M,{children:i.map((function(n){return Object(y.jsx)(z,{model:n,children:n.overlayNode},n.modelName)}))}),e]})})},C=t(20),E=t(46);var R,A,S,H,T,Y,B,F,L=s.b.div(O||(O=Object(l.a)(["\n    height: 100vh;\n    scroll-snap-align: start;\n"]))),P=["modelName","overlayNode","children"],V=function(n){var e=n.modelName,t=n.overlayNode,r=n.children,o=Object(E.a)(n,P),i=function(n){var e=Object(c.useContext)(j),t=e.registerModel,r=e.unregisterModel,o=e.getModelByName;return Object(c.useEffect)((function(){return function(){return r(n)}}),[n,r]),{registerModel:t,getModel:Object(c.useCallback)((function(){return o(n)}),[o,n])}}(e).registerModel,a=Object(c.useRef)(null);return Object(c.useEffect)((function(){a.current&&i({modelName:e,overlayNode:t,sectionRef:a})}),[e,t,i]),Object(y.jsx)(L,Object(C.a)(Object(C.a)({ref:a},o),{},{children:r}))},q=s.b.div(R||(R=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    flex: 1;\n"]))),I=s.b.div(A||(A=Object(l.a)(["\n    margin-top: 16.5vh;\n    text-align: center;\n\n    >h1 {\n        font-weight: 700;\n        font-size: 40px;\n        line-height: 48px;\n        color: #393c41;\n    }\n\n    >h2 {\n        font-weight: normal;\n        font-size: 14px;\n        line-height: 20px;\n        color: #5c5e63;\n    }\n\n"]))),J=s.b.div(S||(S=Object(l.a)(["\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   margin-bottom: 130px;\n\n   >a {\n    background: #1a1720;\n       color: #fff;\n       opacity: 0.8;\n       font-size: 12px;\n       font-weight: 500;\n       letter-spacing: 0.4px;\n       text-transform: uppercase;\n       padding: 13px 40px;\n       border-radius: 20px;\n       border: none;\n       outline: 0;\n       cursor: pointer;\n\n       &.white {\n           background: #fff;\n           color: #1a1720;\n           opacity: 0.65;\n\n           \n       }\n       & + button {\n               margin: 10px 0 0;\n           }\n\n   }  \n\n   > button {\n       background: #1a1720;\n       color: #fff;\n       opacity: 0.8;\n       font-size: 12px;\n       font-weight: 500;\n       letter-spacing: 0.4px;\n       text-transform: uppercase;\n       padding: 13px 40px;\n       border-radius: 20px;\n       border: none;\n       outline: 0;\n       cursor: pointer;\n\n       &.white {\n           background: #fff;\n           color: #1a1720;\n           opacity: 0.65;\n\n           \n       }\n       & + button {\n               margin: 10px 0 0;\n           }\n   }\n\n   @media (min-width: 600px) {\n       flex-direction: row;\n       margin-bottom: 90px;\n\n       >button + button {\n           margin: 0 0 0 10px;\n       }\n   }\n"]))),W=function(n){var e=n.label,t=n.description;return Object(y.jsxs)(q,{children:[Object(y.jsxs)(I,{children:[Object(y.jsx)("h1",{children:e}),Object(y.jsx)("h2",{children:t})]}),Object(y.jsx)(J,{children:Object(y.jsx)("button",{type:"button",onClick:function(n){n.preventDefault(),window.location.href="https://api.whatsapp.com/send?phone=5582999351374&text=Ol%C3%A1%2C%20Gostaria%20de%20falar%20com%20o%20pessoal%20do%20Ateli%C3%AA%20Beleza%20Fashion..."},children:"Entre em contato"})})]})},_=s.b.div(H||(H=Object(l.a)([""]))),D=s.b.header(T||(T=Object(l.a)(["\nposition: fixed;\ntop:0;\nleft:0;\nright: 0;\n\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\n\npadding: 0 20px;\nmin-height: 52px ;\n\n"]))),G=Object(s.b)((function(n){Object.assign({},n);return Object(y.jsxs)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"142.000000pt",height:"27.000000pt",viewBox:"0 0 142.000000 27.000000",preserveAspectRatio:"xMidYMid meet",children:[Object(y.jsx)("metadata",{children:"Created by potrace 1.16, written by Peter Selinger 2001-2019"}),Object(y.jsxs)("g",{transform:"translate(0.000000,27.000000) scale(0.008328,-0.008108)",fill:"#000000",stroke:"none",children:[Object(y.jsx)("path",{d:"M3675 3048 c-79 -31 -256 -75 -357 -88 -120 -16 -118 -15 -118 -45 0\r\n-14 6 -27 13 -29 6 -2 35 -9 62 -15 81 -19 87 -30 96 -178 10 -160 10 -1457 0\r\n-1612 -7 -106 -9 -115 -34 -137 -14 -12 -51 -28 -82 -34 -52 -11 -55 -13 -55\r\n-41 l0 -29 344 0 344 0 6 22 c7 29 2 33 -65 52 -64 18 -87 39 -100 93 -14 59\r\n-13 1848 1 1956 7 49 8 93 4 97 -5 4 -31 -1 -59 -12z"}),Object(y.jsx)("path",{d:"M12075 3039 c-82 -27 -283 -67 -377 -75 -61 -5 -79 -10 -83 -24 -11\r\n-34 5 -47 64 -54 70 -8 97 -25 112 -74 16 -51 25 -1594 11 -1742 -13 -123 -26\r\n-141 -117 -160 -52 -11 -55 -13 -55 -41 l0 -29 350 0 350 0 0 29 c0 26 -4 30\r\n-47 40 -76 19 -100 31 -114 59 -18 35 -31 863 -15 902 15 34 92 71 164 77 89\r\n8 165 -18 223 -75 75 -75 81 -107 87 -436 2 -154 1 -322 -3 -374 -9 -114 -22\r\n-134 -109 -152 -52 -11 -56 -13 -56 -40 l0 -29 328 -3 c180 -2 335 1 345 5 9\r\n4 17 18 17 32 0 20 -7 25 -53 35 -74 15 -113 41 -121 80 -3 18 -6 197 -6 399\r\n0 277 -4 382 -14 433 -30 138 -99 238 -201 288 -44 22 -63 25 -165 25 -102 0\r\n-124 -3 -193 -29 -42 -15 -116 -52 -163 -82 -48 -30 -89 -54 -92 -54 -2 0 -2\r\n222 1 493 4 394 8 500 20 532 25 70 13 76 -88 44z"}),Object(y.jsx)("path",{d:"M9200 2837 c-24 -7 -248 -11 -702 -10 l-668 0 0 -28 c0 -26 3 -28 73\r\n-39 131 -22 159 -44 171 -132 11 -73 7 -1515 -4 -1588 -12 -83 -42 -115 -121\r\n-124 -106 -13 -109 -15 -109 -47 l0 -29 445 0 445 0 0 28 c0 28 -1 29 -96 44\r\n-109 18 -141 36 -159 89 -8 23 -15 155 -20 385 -7 315 -6 351 9 363 13 11 64\r\n12 266 6 233 -7 253 -9 282 -29 39 -27 66 -78 81 -156 11 -59 12 -60 44 -60\r\nl33 0 -1 233 c0 127 3 267 7 310 l7 78 -33 -3 c-31 -3 -34 -6 -50 -63 -24 -88\r\n-46 -128 -83 -150 -29 -18 -57 -21 -287 -25 -140 -3 -261 -3 -269 -1 -12 4\r\n-13 66 -9 394 l5 391 24 19 c21 17 40 18 269 15 226 -3 248 -5 280 -24 62 -36\r\n99 -114 124 -267 12 -70 13 -72 43 -75 29 -3 30 -1 37 44 3 26 6 70 6 98 1 49\r\n21 235 36 324 6 40 5 42 -17 41 -13 -1 -40 -6 -59 -12z"}),Object(y.jsx)("path",{d:"M64 2831 c-2 -2 -4 -16 -4 -31 0 -25 3 -27 75 -38 88 -14 128 -32\r\n152 -69 27 -41 36 -422 26 -1094 -10 -620 -11 -628 -65 -663 -12 -8 -54 -20\r\n-93 -26 -121 -20 -115 -18 -115 -49 l0 -28 293 -6 c462 -11 661 -9 764 8 324\r\n53 536 212 598 452 22 84 20 236 -5 315 -49 158 -194 276 -399 326 -39 9 -71\r\n19 -71 22 0 3 31 17 68 32 134 55 247 176 273 292 19 87 8 230 -23 298 -56\r\n120 -164 201 -319 237 -77 19 -128 20 -617 23 -294 2 -536 1 -538 -1z m846\r\n-107 c201 -45 308 -209 298 -452 -3 -82 -8 -107 -31 -155 -33 -66 -94 -122\r\n-151 -140 -25 -7 -101 -12 -191 -12 l-150 0 -3 195 c-2 107 0 273 3 369 9 206\r\n11 211 101 211 30 0 86 -7 124 -16z m45 -876 c81 -17 170 -66 224 -123 93 -98\r\n127 -198 125 -370 -3 -220 -68 -356 -202 -422 -49 -24 -69 -28 -142 -28 -78 0\r\n-92 3 -155 35 -57 29 -74 43 -94 80 l-25 44 -4 397 -5 398 34 4 c47 6 184 -2\r\n244 -15z"}),Object(y.jsx)("path",{d:"M13533 2730 c-44 -9 -118 -43 -128 -60 -13 -21 -16 -108 -5 -149 6\r\n-24 24 -57 40 -73 25 -25 36 -28 92 -28 88 0 133 15 162 53 39 52 51 108 37\r\n171 -10 46 -17 56 -44 69 -44 20 -104 27 -154 17z"}),Object(y.jsx)("path",{d:"M13695 2151 c-61 -27 -229 -69 -330 -82 -118 -15 -117 -14 -113 -45\r\n3 -28 8 -32 71 -60 73 -32 72 -25 71 -514 -1 -370 -4 -440 -17 -472 -18 -42\r\n-52 -63 -120 -73 -44 -7 -47 -9 -47 -36 l0 -29 350 0 350 0 0 29 c0 27 -4 30\r\n-52 41 -65 13 -96 33 -109 68 -7 17 -10 237 -10 609 0 321 -1 583 -2 582 -1 0\r\n-20 -8 -42 -18z"}),Object(y.jsx)("path",{d:"M2548 2138 c-276 -27 -495 -213 -565 -478 -22 -86 -22 -287 0 -390 9\r\n-41 37 -115 61 -165 98 -197 261 -295 496 -296 111 -1 168 11 267 56 93 43\r\n153 84 236 164 60 57 67 68 67 103 0 44 -10 47 -53 14 -95 -71 -200 -100 -339\r\n-94 -86 3 -103 8 -171 41 -50 25 -90 53 -117 85 -77 86 -134 229 -128 319 l3\r\n48 45 3 c371 21 717 54 751 73 24 13 25 55 1 61 -13 4 -22 22 -31 64 -20 91\r\n-84 215 -141 274 -91 94 -222 134 -382 118z m19 -99 c65 -24 126 -110 156\r\n-219 25 -89 29 -136 13 -149 -15 -12 -411 -35 -429 -24 -6 3 -7 33 -4 77 19\r\n225 136 364 264 315z"}),Object(y.jsx)("path",{d:"M4608 2138 c-276 -27 -495 -213 -565 -478 -22 -86 -22 -287 0 -390 9\r\n-41 37 -115 61 -165 98 -197 261 -295 496 -296 111 -1 168 11 267 56 93 43\r\n153 84 236 164 60 57 67 68 67 103 0 44 -10 47 -53 14 -95 -71 -200 -100 -339\r\n-94 -86 3 -103 8 -171 41 -50 25 -90 53 -117 85 -77 86 -134 229 -128 319 l3\r\n48 45 3 c371 21 717 54 751 73 24 13 25 55 1 61 -13 4 -22 22 -31 64 -20 91\r\n-84 215 -141 274 -91 94 -222 134 -382 118z m19 -99 c65 -24 126 -110 156\r\n-219 25 -89 29 -136 13 -149 -15 -12 -411 -35 -429 -24 -6 3 -7 33 -4 77 19\r\n225 136 364 264 315z"}),Object(y.jsx)("path",{d:"M7080 2139 c-86 -13 -230 -76 -351 -154 -62 -40 -67 -46 -92 -114\r\n-33 -88 -33 -102 -4 -129 32 -30 44 -28 62 14 8 20 31 63 51 96 46 76 95 101\r\n195 100 115 0 209 -55 254 -146 30 -62 46 -197 27 -233 -8 -14 -52 -33 -159\r\n-67 -81 -26 -213 -68 -293 -94 l-145 -47 -25 -50 c-22 -44 -25 -63 -25 -156 0\r\n-102 1 -108 38 -182 85 -171 228 -212 420 -120 48 23 107 56 132 73 25 17 49\r\n29 54 26 5 -3 11 -19 14 -34 8 -41 52 -89 93 -102 22 -8 73 -11 129 -8 78 3\r\n102 8 156 35 78 39 118 78 129 129 5 21 8 40 6 41 -1 2 -27 -1 -56 -7 -61 -12\r\n-91 -1 -124 43 -20 28 -21 39 -21 370 0 293 -3 352 -18 411 -34 132 -104 222\r\n-214 273 -59 27 -166 42 -233 32z m141 -872 c-2 -111 -7 -209 -12 -218 -11\r\n-22 -61 -39 -111 -39 -118 0 -208 102 -208 236 0 94 12 118 73 145 72 31 251\r\n89 257 82 3 -2 3 -95 1 -206z"}),Object(y.jsx)("path",{d:"M9840 2139 c-86 -13 -230 -76 -351 -154 -62 -40 -67 -46 -92 -114\r\n-33 -88 -33 -102 -4 -129 32 -30 44 -28 62 14 8 20 31 63 51 96 46 76 95 101\r\n195 100 115 0 209 -55 254 -146 30 -62 46 -197 27 -233 -8 -14 -52 -33 -159\r\n-67 -81 -26 -213 -68 -293 -94 l-145 -47 -25 -50 c-22 -44 -25 -63 -25 -156 0\r\n-102 1 -108 38 -182 85 -171 228 -212 420 -120 48 23 107 56 132 73 25 17 49\r\n29 54 26 5 -3 11 -19 14 -34 8 -41 52 -89 93 -102 22 -8 73 -11 129 -8 78 3\r\n102 8 156 35 78 39 118 78 129 129 5 21 8 40 6 41 -1 2 -27 -1 -56 -7 -61 -12\r\n-91 -1 -124 43 -20 28 -21 39 -21 370 0 293 -3 352 -18 411 -34 132 -104 222\r\n-214 273 -59 27 -166 42 -233 32z m141 -872 c-2 -111 -7 -209 -12 -218 -11\r\n-22 -61 -39 -111 -39 -118 0 -208 102 -208 236 0 94 12 118 73 145 72 31 251\r\n89 257 82 3 -2 3 -95 1 -206z"}),Object(y.jsx)("path",{d:"M14679 2139 c-174 -15 -324 -83 -444 -204 -132 -132 -180 -255 -178\r\n-460 1 -211 60 -365 187 -490 124 -123 261 -175 461 -176 225 -1 403 72 538\r\n221 107 118 157 265 157 460 0 208 -54 354 -175 476 -136 136 -313 192 -546\r\n173z m109 -115 c116 -58 193 -203 227 -427 27 -182 16 -408 -25 -526 -42 -118\r\n-107 -171 -211 -171 -167 0 -296 173 -339 455 -26 163 -8 437 33 535 61 143\r\n188 197 315 134z"}),Object(y.jsx)("path",{d:"M16010 2135 c-58 -34 -235 -82 -402 -110 -33 -5 -38 -9 -38 -34 0\r\n-23 7 -31 49 -49 76 -35 83 -48 92 -165 10 -124 10 -484 0 -664 -8 -162 -17\r\n-180 -107 -203 -52 -13 -59 -18 -62 -43 l-3 -27 350 0 351 0 0 29 c0 29 -3 31\r\n-61 42 -74 15 -97 32 -109 84 -5 22 -10 221 -11 443 l-2 403 23 24 c62 66 223\r\n91 307 47 54 -28 96 -81 117 -145 37 -113 45 -721 11 -804 -14 -32 -32 -41\r\n-123 -59 -27 -6 -32 -11 -32 -35 l0 -29 339 0 339 0 6 26 c4 15 6 28 4 29 -2\r\n1 -28 10 -59 19 -91 26 -102 40 -110 137 -4 46 -8 224 -8 394 -1 340 -9 406\r\n-58 504 -63 123 -155 183 -294 189 -125 6 -205 -22 -369 -132 -46 -31 -85 -56\r\n-88 -56 -2 0 -3 44 -1 97 4 107 -1 117 -51 88z"}),Object(y.jsx)("path",{d:"M10951 2125 c-130 -37 -229 -116 -279 -223 -23 -50 -27 -70 -27 -157\r\n0 -88 3 -107 27 -157 46 -99 146 -186 323 -283 181 -99 235 -158 235 -255 0\r\n-104 -74 -164 -201 -164 -54 0 -78 6 -132 32 -102 50 -162 134 -203 280 -16\r\n57 -19 62 -46 62 l-28 0 0 -88 c0 -49 3 -137 7 -195 l6 -106 46 -16 c136 -45\r\n365 -59 488 -30 151 36 270 124 326 242 29 61 32 77 32 158 -1 183 -72 264\r\n-361 414 -185 96 -246 161 -246 262 0 120 110 191 247 160 106 -24 172 -103\r\n197 -234 12 -66 13 -67 44 -67 l31 0 7 98 c4 53 11 129 17 167 6 39 12 75 13\r\n80 2 14 -98 24 -299 30 -133 4 -182 2 -224 -10z"}),Object(y.jsx)("path",{d:"M5366 2093 c-54 -279 -68 -365 -60 -372 5 -5 20 -11 35 -14 24 -6 27\r\n-1 63 82 42 100 93 167 145 189 26 11 87 16 219 20 100 2 182 2 182 -2 0 -30\r\n-185 -357 -442 -783 -107 -177 -188 -322 -188 -336 l0 -24 218 -6 c119 -4 339\r\n-7 488 -7 270 0 271 0 292 23 36 39 141 372 123 390 -5 5 -23 6 -40 2 -27 -6\r\n-37 -18 -68 -78 -53 -107 -102 -176 -147 -209 l-41 -30 -192 4 c-106 2 -195 7\r\n-198 10 -4 4 31 73 78 155 251 441 517 940 517 970 l0 22 -462 4 c-255 2 -475\r\n7 -489 11 -24 7 -28 5 -33 -21z"})]})]})}))(Y||(Y=Object(l.a)(["\nheight: 17px;\ncursor: pointer;\n\n\n"]))),K=Object(s.b)(v.a.footer)(B||(B=Object(l.a)(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  ul {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    li {\n      list-style: none;\n      font-size: 18px;\n      & + li {\n        margin: 10px 0 0;\n      }\n      a {\n        text-decoration: none;\n        color: #393c41;\n        &:hover {\n          color: #000;\n        }\n      }\n    }\n  }\n  margin-bottom: 50px;\n  @media (min-width: 600px) {\n    margin-bottom: 58px;\n    ul {\n      flex-direction: row;\n      li + li {\n        margin: 0 0 0 30px;\n      }\n    }\n  }\n"]))),Q=function(){var n=h().scrollYProgress,e=Object(p.a)(n,[.8,.95],[0,1]);return Object(y.jsxs)(_,{children:[Object(y.jsx)(D,{children:Object(y.jsx)(G,{})}),Object(y.jsx)(K,{style:{opacity:e},children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"https://instagram.com/noiva.ateliebelezafashion?utm_medium=copy_link",children:"Instagram"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"https://goo.gl/maps/SySR4Ao8HYdwrQt7A",children:"Venha Visitar"})})]})})]})},Z=s.b.div(F||(F=Object(l.a)(['\n\nh2{\n   \n}\n\n.colored:nth-child(1) {\n    background-image: url("https://i.ibb.co/WFwvHn2/img-bg.jpg");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n\n}\n\n\n\n\n.colored:nth-child(2) {\n    background-image: url("https://i.ibb.co/8KNxVYd/img-bg-2.jpg");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n\n.colored:nth-child(3) {\n    background-image: url("https://i.ibb.co/hLrWrZS/make-bg2.jpg");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n\n.colored:nth-child(4) {\n    background-image: url("https://i.ibb.co/cvbFxqx/img-bg-Recuperado.jpg");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;;\n}\n\n\n.colored:nth-child(5) {\n    background-image: url("https://i.ibb.co/1n9bRT6/Sem-T-tulo-3.jpg");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;;\n}\n.colored:nth-child(6) {\nbackground: #90f29c;\n}\n.colored:nth-child(7) {\nbackground: #77e68c;\n}\n\n']))),U=function(){return Object(y.jsx)(Z,{children:Object(y.jsxs)(N,{children:[Object(y.jsx)("div",{children:["Ateli\xea Beleza Fashion","Vestidos","Maquiagem","Ternos","Entre em Contato"].map((function(n){return Object(y.jsx)(V,{className:"colored",modelName:n,overlayNode:Object(y.jsx)(W,{label:n,description:""})},n)}))}),Object(y.jsx)(Q,{})]})})};var X=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(U,{}),Object(y.jsx)(d,{})]})};a.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(X,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.ba4f97f9.chunk.js.map