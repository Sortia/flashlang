(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{677:function(t,e,n){"use strict";n.r(e);n(10);var r={name:"BaseSelect",props:{items:{type:Array,default:function(){return[]}},value:{type:Number,default:null},label:{type:String,required:!0},itemText:{type:String,default:"name"},itemValue:{type:String,default:"id"},clearable:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}}},o=n(19),l=n(50),c=n.n(l),d=n(764),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.items,value:t.value,clearable:t.clearable,label:t.label,"item-text":t.itemText,"item-value":t.itemValue,disabled:t.disabled},on:{input:function(e){return t.$emit("input",e)}}})}),[],!1,null,"f33629cc",null);e.default=component.exports;c()(component,{VSelect:d.a})},679:function(t,e,n){var content=n(692);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("d05ef632",content,!0,{sourceMap:!1})},680:function(t,e,n){"use strict";n(8),n(6),n(5),n(4),n(7);var r=n(0),o=n(677),l=n(82);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"Header",components:{BaseSelect:o.default},props:{pack:{type:Object,required:!0},entity:{type:String,required:!0},disabled:{type:Boolean,default:!1}},data:function(){return{rules:{name:[function(t){return!!t||'Поле "Название" обязательно для заполнения!'},function(t){return t&&t.length<=50||"Название должно быть не длиннее 50 символов!"}],description:[function(t){return!t||t.length<=50||"Описание должно быть не длиннее 50 символов!"}]}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)({languages:function(t){return t.languages.list}})),methods:{merge:function(data){this.$store.commit(this.entity+"/merge",data)}}},f=n(19),h=n(50),v=n.n(h),m=n(669),y=n(670),x=n(761),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{staticClass:"pb-2",attrs:{sm:"6",cols:"12"}},[n("v-text-field",{attrs:{disabled:t.disabled,value:t.pack.name,label:"Название",rules:t.rules.name,auto:"",autocomplete:"false"},on:{blur:function(e){return t.$emit("update")},input:function(e){return t.merge({name:e})}}})],1),t._v(" "),n("v-col",{staticClass:"pb-2",attrs:{sm:"6",cols:"12"}},[n("v-text-field",{attrs:{disabled:t.disabled,value:t.pack.description,label:"Описание",autocomplete:"false",rules:t.rules.description},on:{blur:function(e){return t.$emit("update")},input:function(e){return t.merge({description:e})}}})],1)],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"pt-0",attrs:{sm:"6",cols:"12"}},[n("base-select",{attrs:{disabled:t.disabled,items:t.languages,value:t.pack.first_lang_id,label:"Изучаемый язык"},on:{input:function(e){t.merge({first_lang_id:e}),t.$emit("update")}}})],1),t._v(" "),n("v-col",{staticClass:"pt-0",attrs:{sm:"6",cols:"12"}},[n("base-select",{attrs:{disabled:t.disabled,items:t.languages,value:t.pack.second_lang_id,label:"Родной язык"},on:{input:function(e){t.merge({second_lang_id:e}),t.$emit("update")}}})],1)],1)],1)}),[],!1,null,"25194978",null);e.a=component.exports;v()(component,{BaseSelect:n(677).default}),v()(component,{VCol:m.a,VRow:y.a,VTextField:x.a})},682:function(t,e,n){"use strict";n.r(e);var r={name:"Tooltip",props:{text:{type:String,required:!0}}},o=(n(691),n(19)),l=n(50),c=n.n(l),d=n(192),f=n(0),h=(n(10),n(693),n(102)),v=n(23),m=n(133),y=n(132),x=n(209),_=n(190),O=n(41),w=n(2),k=n(15),C=n(12),j=Object(C.a)(v.a,m.a,y.a,x.a,_.a,O.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),r=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||n?o=r+e.width/2-content.width/2:(this.left||this.right)&&(o=r+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,r=0;return this.top||this.bottom?r=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(r=n+e.height/2-content.height/2),this.nudgeTop&&(r-=parseInt(this.nudgeTop)),this.nudgeBottom&&(r+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(r+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(w.f)(this.maxWidth),minWidth:Object(w.f)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(w.p)(this,"activator",!0)&&Object(k.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=h.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===w.s.esc&&(t.getActivator(e),t.runDelay("close"))},e},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(f.a)(t,this.contentClass,!0),Object(f.a)(t,"menuable__content__active",this.isActive),Object(f.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"tooltip-icon",attrs:{small:""}},"v-icon",o,!1),r),[t._v("\n      mdi-information-outline\n    ")])]}}])},[t._v(" "),n("span",[t._v(t._s(t.text))])])}),[],!1,null,"272713ba",null);e.default=component.exports;c()(component,{VIcon:d.a,VTooltip:j})},685:function(t,e,n){"use strict";n.r(e);n(10);var r={name:"Flashcard",components:{Tooltip:n(682).default},props:{entity:{type:String,required:!0},disabled:{type:Boolean,default:!1},flashcard:{type:Object,required:!0},index:{type:Number,required:!0}},data:function(){return{rules:[function(t){return!!t||"Поле обязательно для заполнения"},function(t){return t&&t.length<=25||"Поле должно быть не длиннее 25 символов"}]}},methods:{removeFlashcard:function(t){this.$store.commit(this.entity+"/removeFlashcard",t),this.$emit("update")},mergeFlashcard:function(data){this.$store.commit(this.entity+"/mergeFlashcard",data)}}},o=(n(755),n(19)),l=n(50),c=n.n(l),d=n(193),f=n(669),h=n(654),v=(n(83),n(757),n(60)),m=n(23),y=n(133),x=n(147),_=n(254),O=n(17),w=n(2),k=n(12),C=Object(k.a)(m.a,y.a,_.a,x.a,O.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var t=this.$props,e=t.dark,n=t.large,r=t.light,o=t.medium,small=t.small;return{dark:e,large:n,light:r,medium:o,size:t.size,small:small,xLarge:t.xLarge,xSmall:t.xSmall}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){this.internalValue=t}},methods:{createClickFn:function(i){var t=this;return function(e){if(!t.readonly){var n=t.genHoverIndex(e,i);t.clearable&&t.internalValue===n?t.internalValue=0:t.internalValue=n}}},createProps:function(i){var t={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(t.isHalfHovered=!t.isHovered&&(this.hoverIndex-i)%1>0,t.isHalfFilled=!t.isFilled&&(this.internalValue-i)%1>0),t},genHoverIndex:function(t,i){var e=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(e=!e),i+(e?.5:1)},getIconName:function(t){var e=this.isHovering?t.isHovered:t.isFilled,n=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(t){if(this.halfIncrements){var rect=t.target&&t.target.getBoundingClientRect();if(rect&&t.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(t,i){var e=this;this.runDelay("open",(function(){e.hoverIndex=e.genHoverIndex(t,i)}))},onMouseLeave:function(){var t=this;this.runDelay("close",(function(){return t.hoverIndex=-1}))},genItem:function(i){var t=this,e=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(e);var n={click:e.click};return this.hover&&(n.mouseenter=function(e){return t.onMouseEnter(e,i)},n.mouseleave=this.onMouseLeave,this.halfIncrements&&(n.mousemove=function(e){return t.onMouseEnter(e,i)})),this.$createElement(v.a,this.setTextColor(this.getColor(e),{attrs:{tabindex:-1},directives:this.directives,props:this.iconProps,on:n}),[this.getIconName(e)])}},render:function(t){var e=this,n=Object(w.g)(Number(this.length)).map((function(i){return e.genItem(i)}));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}}),j=n(670),$=n(761),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fieldset",{attrs:{disabled:t.disabled}},[n("v-card",{staticClass:"rounded-xl",attrs:{elevation:"10"}},[t.disabled?t._e():n("div",[n("v-row",{staticClass:"mb-3 pt-3 mx-4",attrs:{"no-gutters":""}},["packs"===t.entity?n("v-col",{attrs:{cols:"10"}},[n("v-rating",{attrs:{color:"warning",hover:"","background-color":"grey",length:"5",size:"23",value:t.flashcard.status_id},on:{input:function(e){t.mergeFlashcard({status_id:e,index:t.index}),t.$emit("update")}}}),t._v(" "),0===t.index?n("tooltip",{attrs:{text:"Чем лучше изучено слово (больше звезд) - тем реже оно попадается на тренировках"}}):t._e()],1):t._e(),t._v(" "),n("v-col",[n("span",{staticClass:"float-right"},[n("i",{staticClass:"nc-icon nc-simple-remove",on:{click:function(e){return t.removeFlashcard(t.index)}}})])])],1),t._v(" "),n("v-divider",{staticClass:"mx-4"})],1),t._v(" "),n("v-row",{staticClass:"my-1 mx-4",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pb-0 pt-2",attrs:{cols:"12",sm:"12"}},[n("v-row",[n("v-col",{attrs:{lg:"4",cols:"12"}},[n("v-text-field",{attrs:{value:t.flashcard.first_side,label:"Слово",rules:t.rules,autocomplete:"false"},on:{blur:function(e){return t.$emit("update")},input:function(e){return t.mergeFlashcard({first_side:e,index:t.index})}}})],1),t._v(" "),n("v-col",{attrs:{lg:"4",cols:"12"}},[n("v-text-field",{attrs:{value:t.flashcard.transcription,label:"Транскрипция",autocomplete:"false"},on:{blur:function(e){return t.$emit("update")},input:function(e){return t.mergeFlashcard({transcription:e,index:t.index})}}})],1),t._v(" "),n("v-col",{attrs:{lg:"4",cols:"12"}},[n("v-text-field",{attrs:{value:t.flashcard.second_side,label:"Перевод",rules:t.rules,autocomplete:"false"},on:{blur:function(e){return t.$emit("update")},input:function(e){return t.mergeFlashcard({second_side:e,index:t.index})}}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{Tooltip:n(682).default}),c()(component,{VCard:d.a,VCol:f.a,VDivider:h.a,VRating:C,VRow:j.a,VTextField:$.a})},691:function(t,e,n){"use strict";var r=n(679);n.n(r).a},692:function(t,e,n){(e=n(13)(!1)).push([t.i,".tooltip-icon[data-v-272713ba]{vertical-align:top}",""]),t.exports=e},693:function(t,e,n){var content=n(694);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("133fd770",content,!0,{sourceMap:!1})},694:function(t,e,n){(e=n(13)(!1)).push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=e},704:function(t,e,n){var content=n(756);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("bb7eb628",content,!0,{sourceMap:!1})},715:function(t,e,n){"use strict";n(8),n(6),n(5),n(4),n(7),n(47);var r=n(0),o=n(82);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={name:"Translate",props:{pack:{type:Object,required:!0},entity:{type:String,required:!0}},data:function(){return{dictionary:{word:"",translate:"",transcription:"",options:[],synonyms:[]}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({languages:function(t){return t.languages.list}})),methods:{translate:function(){var t=this;if(!this.enteredLanguages())return this.$notifier.showMessage({content:"Сначала выберите языки!",color:"pink"});this.$axios.get("api/dictionary/translate",{params:{word:this.dictionary.word,from:this.languages.find((function(e){return e.id===t.pack.first_lang_id})).code,to:this.languages.find((function(e){return e.id===t.pack.second_lang_id})).code}}).then((function(e){t.dictionary.translate=e.data.translate,t.dictionary.transcription=e.data.transcription,t.dictionary.synonyms=e.data.synonyms})).catch((function(e){406===e.response.status?t.$notifier.showMessage({content:"Слово или словосочетание не найдено!",color:"pink"}):t.$notifier.showMessage({content:"Упс... Что-то пошло не так!",color:"pink"})}))},choose:function(t){this.dictionary.translate=t},addFlashcard:function(){this.$store.commit(this.entity+"/newFlashcard",{first_side:this.dictionary.word,second_side:this.dictionary.translate,transcription:this.dictionary.transcription}),this.$emit("update"),this.resetForm()},resetForm:function(){this.dictionary.word="",this.dictionary.translate="",this.dictionary.transcription="",this.dictionary.synonyms=[]},enteredLanguages:function(){return this.pack.first_lang_id&&this.pack.second_lang_id}}},d=n(19),f=n(50),h=n.n(f),v=n(202),m=n(193),y=n(669),x=n(670),_=n(761),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"px-5 py-2 mt-5",attrs:{elevation:"10",shaped:""}},[n("v-row",[n("v-col",{attrs:{lg:"4",md:"12"}},[n("v-text-field",{attrs:{label:"Слово для перевода"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.translate(e)}},model:{value:t.dictionary.word,callback:function(e){t.$set(t.dictionary,"word",e)},expression:"dictionary.word"}})],1),t._v(" "),n("v-col",{attrs:{lg:"4",md:"12"}},[n("v-text-field",{attrs:{label:"Транскрипция"},model:{value:t.dictionary.transcription,callback:function(e){t.$set(t.dictionary,"transcription",e)},expression:"dictionary.transcription"}})],1),t._v(" "),n("v-col",{attrs:{lg:"4",md:"12"}},[n("v-text-field",{attrs:{label:"Перевод"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addFlashcard(e)}},model:{value:t.dictionary.translate,callback:function(e){t.$set(t.dictionary,"translate",e)},expression:"dictionary.translate"}})],1)],1),t._v(" "),n("v-row",{staticClass:"mt-1"},[n("v-col",{attrs:{lg:"7",cols:"12"}},[t.dictionary.synonyms.length?n("span",[t._v("\n        Синонимы:\n        "),t._l(t.dictionary.synonyms,(function(e,r){return n("span",{key:r},[n("v-btn",{staticClass:"mx-3 my-2",attrs:{elevation:"3"},on:{click:function(n){return t.choose(e)}}},[t._v("\n            "+t._s(e)+"\n          ")])],1)}))],2):t._e()]),t._v(" "),n("v-col",{staticClass:"pt-0",attrs:{lg:"5",cols:"12"}},[n("span",{staticClass:"float-right ml-5"},[n("v-btn",{staticClass:"big-color-btn",attrs:{color:"success",elevation:"10","x-large":""},on:{click:t.addFlashcard}},[t._v("\n          Добавить\n        ")])],1),t._v(" "),n("span",{staticClass:"float-right"},[n("v-btn",{staticClass:"big-color-btn",attrs:{color:"primary",elevation:"10","x-large":""},on:{click:t.translate}},[t._v("\n          Перевести\n        ")])],1)])],1)],1)}),[],!1,null,"b62e2320",null);e.a=component.exports;h()(component,{VBtn:v.a,VCard:m.a,VCol:y.a,VRow:x.a,VTextField:_.a})},755:function(t,e,n){"use strict";var r=n(704);n.n(r).a},756:function(t,e,n){(e=n(13)(!1)).push([t.i,".v-rating{display:contents}",""]),t.exports=e},757:function(t,e,n){var content=n(758);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("59204df2",content,!0,{sourceMap:!1})},758:function(t,e,n){(e=n(13)(!1)).push([t.i,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),t.exports=e}}]);