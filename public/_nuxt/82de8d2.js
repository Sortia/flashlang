(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{677:function(t,e,n){"use strict";n.r(e);n(10);var o={name:"BaseSelect",props:{items:{type:Array,default:function(){return[]}},value:{type:Number,default:null},label:{type:String,required:!0},itemText:{type:String,default:"name"},itemValue:{type:String,default:"id"},clearable:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}}},r=n(19),l=n(50),c=n.n(l),d=n(764),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.items,value:t.value,clearable:t.clearable,label:t.label,"item-text":t.itemText,"item-value":t.itemValue,disabled:t.disabled},on:{input:function(e){return t.$emit("input",e)}}})}),[],!1,null,"f33629cc",null);e.default=component.exports;c()(component,{VSelect:d.a})},680:function(t,e,n){"use strict";n(8),n(6),n(5),n(4),n(7);var o=n(0),r=n(677),l=n(82);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"Header",components:{BaseSelect:r.default},props:{pack:{type:Object,required:!0},entity:{type:String,required:!0},disabled:{type:Boolean,default:!1}},data:function(){return{rules:{name:[function(t){return!!t||'Поле "Название" обязательно для заполнения!'},function(t){return t&&t.length<=50||"Название должно быть не длиннее 50 символов!"}],description:[function(t){return!t||t.length<=50||"Описание должно быть не длиннее 50 символов!"}]}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)({languages:function(t){return t.languages.list}})),methods:{merge:function(data){this.$store.commit(this.entity+"/merge",data)}}},v=n(19),f=n(50),h=n.n(f),m=n(669),y=n(670),x=n(761),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{staticClass:"pb-2",attrs:{sm:"6",cols:"12"}},[n("v-text-field",{attrs:{disabled:t.disabled,value:t.pack.name,label:"Название",rules:t.rules.name,auto:"",autocomplete:"false"},on:{blur:function(e){return t.$emit("update")},input:function(e){return t.merge({name:e})}}})],1),t._v(" "),n("v-col",{staticClass:"pb-2",attrs:{sm:"6",cols:"12"}},[n("v-text-field",{attrs:{disabled:t.disabled,value:t.pack.description,label:"Описание",autocomplete:"false",rules:t.rules.description},on:{blur:function(e){return t.$emit("update")},input:function(e){return t.merge({description:e})}}})],1)],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"pt-0",attrs:{sm:"6",cols:"12"}},[n("base-select",{attrs:{disabled:t.disabled,items:t.languages,value:t.pack.first_lang_id,label:"Изучаемый язык"},on:{input:function(e){t.merge({first_lang_id:e}),t.$emit("update")}}})],1),t._v(" "),n("v-col",{staticClass:"pt-0",attrs:{sm:"6",cols:"12"}},[n("base-select",{attrs:{disabled:t.disabled,items:t.languages,value:t.pack.second_lang_id,label:"Родной язык"},on:{input:function(e){t.merge({second_lang_id:e}),t.$emit("update")}}})],1)],1)],1)}),[],!1,null,"25194978",null);e.a=component.exports;h()(component,{BaseSelect:n(677).default}),h()(component,{VCol:m.a,VRow:y.a,VTextField:x.a})},687:function(t,e,n){var content=n(688);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("2065bca8",content,!0,{sourceMap:!1})},688:function(t,e,n){(e=n(13)(!1)).push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=e},730:function(t,e,n){"use strict";n(8),n(6),n(5),n(4),n(7);var o=n(31),r=(n(47),n(32),n(34),n(0)),l=(n(10),n(687),n(651)),c=n(102),d=n(132),v=n(209),f=n(214),h=n(212),m=n(211),y=n(41),x=n(91),O=n(12),w=n(15),_=n(2);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(O.a)(c.a,d.a,v.a,f.a,h.a,m.a,y.a);e.a=C.extend({name:"v-dialog",directives:{ClickOutside:x.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):f.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===_.s.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(t){return!t.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(l.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:k({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=k(k({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(_.f)(this.maxWidth),width:"auto"===this.width?void 0:Object(_.f)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},732:function(t,e,n){"use strict";var o=n(133),r=n(41),l=n(12),c=n(15);e.a=Object(l.a)(o.a,r.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},762:function(t,e,n){"use strict";n(88),n(5),n(4),n(7),n(411),n(210);var o=n(1);var r,l=n(54);e.a=(r="container",o.default.extend({name:"v-".concat(r),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,o=e.children;data.staticClass="".concat(r," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,o=e.props,data=e.data,r=e.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(n||[])}),r)}})},765:function(t,e,n){"use strict";n.r(e);n(8),n(6),n(5),n(4),n(7);var o=n(0),r=n(82);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={name:"Index",components:{PackHeader:n(680).a},data:function(){return{valid:!0,dialog:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.c)({collections:function(t){return t.collections.list},collection:function(t){return t.collections.collection}})),mounted:function(){this.$store.dispatch("collections/get")},methods:{create:function(){var t=this;this.$refs.collection_form.validate()&&this.$store.dispatch("collections/create",this.collection).then((function(e){t.$notifier.showMessage({content:"Успешно!",color:"pink"}),t.$router.push("/collections/"+e.data.id)}))}}},d=n(19),v=n(50),f=n.n(v),h=n(202),m=n(193),y=n(163),x=n(669),O=n(762),w=n(730),_=n(731),j=n(732),k=n(192),C=n(670),S=n(668),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"px-5 py-3 mb-4",attrs:{elevation:"5",shaped:""}},[t._v("\n    Тут должна быть подсказка что с этими коллекциями делать...\n  ")]),t._v(" "),n("v-row",[n("v-col",{staticClass:"mb-5",attrs:{lg:"3",md:"4",sm:"6",cols:"12"},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[n("button",{staticClass:"w-100"},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[n("v-card",{staticClass:"rounded-xl d-flex align-items-start flex-column p-3 pb-1",class:{"on-hover":o},staticStyle:{"min-height":"200px"},attrs:{elevation:o?24:10}},[n("v-container",{staticStyle:{"margin-top":"50px"},attrs:{"fill-height":""}},[n("v-row",{staticClass:"justify-center align-center"},[n("v-icon",{attrs:{large:""}},[t._v("\n                  mdi-puzzle-plus\n                ")]),t._v(" "),n("span",{staticClass:"pl-4"},[t._v("Добавить")])],1)],1)],1)]}}])})],1)]),t._v(" "),n("v-dialog",{attrs:{"max-width":"1000"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n          Добавить новую коллекцию\n        ")]),t._v(" "),n("v-card-text",{staticClass:"pb-0"},[n("v-form",{ref:"collection_form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("pack-header",{attrs:{pack:t.collection,entity:"collections"}})],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.create}},[t._v("\n            Сохранить\n          ")])],1)],1)],1),t._v(" "),t._l(t.collections,(function(e){return n("v-col",{key:e.id,staticClass:"mb-5",attrs:{lg:"3",md:"4",sm:"6",cols:"12"}},[n("nuxt-link",{attrs:{to:"/collections/"+e.id}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(o){var r=o.hover;return[n("v-card",{staticClass:"rounded-xl d-flex align-items-start flex-column p-3 pb-1",class:{"on-hover":r},staticStyle:{"min-height":"200px"},attrs:{elevation:r?24:10}},[n("v-card-text",{staticClass:"pt-0 pr-2 text-right w-100 text-muted"},[n("small",[t._v(t._s(t._f("date")(e.created_at)))])]),t._v(" "),n("v-col",{staticClass:"mb-auto mt-4 p-2 w-100 text-center"},[t._v("\n              "+t._s(e.name)+"\n              "),n("v-card-text",{staticClass:"p-2 w-100 text-center text-muted"},[t._v("\n                "+t._s(e.description)+"\n              ")])],1)],1)]}}],null,!0)})],1)],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:h.a,VCard:m.a,VCardActions:y.a,VCardText:y.b,VCardTitle:y.c,VCol:x.a,VContainer:O.a,VDialog:w.a,VForm:_.a,VHover:j.a,VIcon:k.a,VRow:C.a,VSpacer:S.a})}}]);