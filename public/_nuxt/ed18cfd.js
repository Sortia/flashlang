(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{675:function(t,e,n){var content=n(676);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("2d62e390",content,!0,{sourceMap:!1})},676:function(t,e,n){(e=n(13)(!1)).push([t.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=e},684:function(t,e,n){"use strict";n(8),n(6),n(5),n(4),n(7);var r=n(0),o=(n(10),n(675),n(165)),c=n(129),l=n(60),d=n(207),h=n(208),f=n(2),m=n(15);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return w(w({},o.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(m.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:o.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(c.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(l.a,{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(h.a,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(d.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=o.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(f.f)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},686:function(t,e,n){"use strict";n(8),n(6),n(5),n(4),n(7);var r=n(0),o=n(131),c=n(130),l=n(67),d=n(2),h=n(12),f=Object(h.a)(o.a,Object(c.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:l.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(d.f)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(d.f)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),m=n(409),v=n(58);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=Object(h.a)(f,v.a);e.a=O.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(m.a,{staticClass:"v-carousel__item",props:y(y({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(d.o)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}})},700:function(t,e,n){var content=n(748);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("d26dd780",content,!0,{sourceMap:!1})},709:function(t,e,n){"use strict";n.r(e);n(164),n(28),n(32),n(34);var r={name:"ConstructorItem",props:{flashcard:{type:Object,required:!0}},data:function(){return{answer:[],blocked:[],letters:[],show_trans:!1}},watch:{answer:function(){this.answer.includes(null)||this.answer.join("")!==this.flashcard.back&&(this.answer=this.answer.map((function(){return null})),this.blocked=this.answer.map((function(){return null})))}},mounted:function(){this.answer=this.flashcard.back.split("").map((function(){return null})),this.letters=this.flashcard.back.split("").sort((function(){return Math.random()>.5?-1:1})),console.log(this.answer,this.flashcard)},methods:{hint:function(){var t=this.flashcard.back.substr(this.answer.indexOf(null),1);return{index:this.letters.findIndex((function(e){return e===t})),letter:t}}}},o=(n(747),n(19)),c=n(50),l=n.n(c),d=n(202),h=n(193),f=n(163),m=n(669),v=n(192),w=n(670),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container p-5"},[n("div",{staticClass:"flashcard-card px-5 pt-4"},[n("v-btn",{staticClass:"flashcard-hint",attrs:{elevation:"8"},on:{click:function(e){t.$set(t.blocked,t.hint().index,!0),t.$set(t.answer,t.answer.indexOf(null),t.hint().letter)}}},[n("v-icon",{attrs:{large:""}},[t._v("\n        mdi-help\n      ")])],1),t._v(" "),n("div",{staticClass:"face face1"},[n("div",{staticClass:"content"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"text-center h4"},[t._v("\n              "+t._s(t.flashcard.front)+"\n            ")]),t._v(" "),t.flashcard.back===t.flashcard.second_side&&t.flashcard.transcription?n("p",{staticClass:"text-center transcription-bot"},[t._v("\n              ["+t._s(t.flashcard.transcription)+"]\n            ")]):t._e()])],1),t._v(" "),n("div",{staticClass:"row justify-content-center mb-4"},t._l(t.answer,(function(e,r){return n("v-card",{key:r,staticClass:"card-letter m-2",attrs:{color:"#229288"},on:{click:function(n){t.$set(t.answer,r,null),t.$set(t.blocked,t.letters.indexOf(e),null)}}},[n("v-card-title",{staticClass:"text-center d-block"},[t._v("\n              "+t._s(e)+"\n            ")])],1)})),1),t._v(" "),t.answer.join("")===t.flashcard.back&&t.flashcard.transcription&&t.flashcard.back===t.flashcard.first_side?n("p",{staticClass:"text-center transcription-bot"},[t._v("\n          ["+t._s(t.flashcard.transcription)+"]\n        ")]):t._e()],1)]),t._v(" "),n("div",{staticClass:"face face2"},[n("div",{staticClass:"content"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center mb-4"},t._l(t.letters,(function(e,r){return n("v-card",{key:r,staticClass:"card-letter m-2",attrs:{disabled:t.blocked[r],color:"#1e75b9"},on:{click:function(n){t.$set(t.blocked,r,!0),t.$set(t.answer,t.answer.indexOf(null),e)}}},[n("v-card-title",{staticClass:"text-center d-block"},[t._v("\n                "+t._s(e)+"\n              ")])],1)})),1)])])])],1)])}),[],!1,null,"d3bd0bf8",null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardTitle:f.c,VCol:m.a,VIcon:v.a,VRow:w.a})},747:function(t,e,n){"use strict";var r=n(700);n.n(r).a},748:function(t,e,n){(e=n(13)(!1)).push([t.i,".flashcard-hint[data-v-d3bd0bf8]{right:37px;top:35px;position:absolute;z-index:100;border-radius:50%;background-color:#615f5f;min-width:0!important;padding:0!important}.flashcard-hint i[data-v-d3bd0bf8]{color:#948e84!important;font-size:22px!important;padding:7px!important}.container[data-v-d3bd0bf8]{width:100%;max-width:1100px;position:relative;display:flex;justify-content:space-between}.container .flashcard-card[data-v-d3bd0bf8]{width:100%;position:relative;cursor:pointer}.container .flashcard-card .face[data-v-d3bd0bf8]{height:350px;transition:.5s}.container .flashcard-card .face.face1[data-v-d3bd0bf8]{position:relative;background:#444040;display:flex;justify-content:center;align-items:center;z-index:1;transform:translateY(150px);color:#fff;background:#efbc55;transform:translateY(0)}.container .flashcard-card .face.face1 .content[data-v-d3bd0bf8]{padding:40px;opacity:.9;transition:.5s}.container .flashcard-card .face.face1 .content p[data-v-d3bd0bf8]{font-weight:400}.container .flashcard-card .face.face1 .content[data-v-d3bd0bf8]{opacity:1}.container .flashcard-card .face.face1 .content img[data-v-d3bd0bf8]{max-width:100px}.container .flashcard-card .face.face1 .content h3[data-v-d3bd0bf8]{margin:10px 0 0;padding:0;color:#fff;text-align:center;font-size:1.5em}.container .flashcard-card .face.face2[data-v-d3bd0bf8]{position:relative;background:#fff;display:flex;justify-content:center;align-items:center;padding:20px;box-sizing:border-box;box-shadow:0 20px 20px rgba(0,0,0,.8);transform:translateY(-200px);color:#000!important;transform:translateY(0)}.container .flashcard-card .face.face2 .content p[data-v-d3bd0bf8]{margin:0;padding:0}.container .flashcard-card .face.face2 .content a[data-v-d3bd0bf8]{margin:15px 0 0;display:inline-block;text-decoration:none;font-weight:900;color:#333;padding:5px;border:1px solid #333;background:#333;color:#fff}.card-letter[data-v-d3bd0bf8]{width:65px;height:65px;color:#fff}.letter[data-v-d3bd0bf8]{font-size:24px!important;align-items:flex-start}",""]),t.exports=e},776:function(t,e,n){"use strict";n.r(e);n(8),n(6),n(5),n(4),n(7);var r=n(0),o=n(82);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"Constructor",components:{ConstructorItem:n(709).default},layout:"trainings",data:function(){return{right:{}}},computed:l(l({},Object(o.c)({pack:function(t){return t.packs.pack},items:function(t){return t.trainings.items},packs:function(t){return t.packs.list}})),{},{choices:function(){var t=this,e=this.packs.map((function(t){return t.flashcards})).flat();return(e=e.filter((function(e){return e.id!==t.right.id})).sort((function(){return Math.random()>.5?-1:1})).slice(0,3)).push(this.right),e.sort((function(){return Math.random()>.5?-1:1}))}}),watch:{pack:function(){this.addItem(),this.addItem()}},created:function(){var t=this;this.$bus.$on("test-event",(function(){t.$store.commit("trainings/remove"),t.$store.dispatch("packs/show",{id:t.pack.id})}))},mounted:function(){var t=this;this.$store.dispatch("packs/get").then((function(){t.$store.commit("packs/setPack",t.packs[0])}))},methods:{rightTest:function(){this.addItem(),setTimeout((function(){return document.querySelector(".v-window__next button").click()}),125)},addItem:function(){var t=this;if(this.pack.flashcards){var e=this.pack.flashcards.filter((function(e){return 0===t.items.length||t.pack.flashcards.length<2||e.id!==t.items[t.items.length-1].id}));this.right=this.$random.from(e),this.$store.commit("trainings/add",this.right)}}}},h=n(19),f=n(50),m=n.n(f),v=n(193),w=n(684),y=n(686),O=n(669),_=n(670),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"h-100",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"h-100",attrs:{lg:"12"}},[n("v-card",{staticClass:"p-5 h-100"},[n("v-carousel",{attrs:{height:"100%","hide-delimiters":""},on:{change:t.addItem}},t._l(t.items,(function(e,i){return n("v-carousel-item",{key:i,staticClass:"h-100",attrs:{light:""}},[n("ConstructorItem",{attrs:{flashcard:e},on:{right:t.rightTest}})],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{ConstructorItem:n(709).default}),m()(component,{VCard:v.a,VCarousel:w.a,VCarouselItem:y.a,VCol:O.a,VRow:_.a})}}]);