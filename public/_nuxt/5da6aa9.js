(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{713:function(t,e,o){"use strict";o.r(e);o(8),o(6),o(5),o(4),o(7);var n=o(0),r=o(82),c=o(685),header=o(680),l=o(715);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"CollectionForm",components:{Flashcard:c.default,PackHeader:header.a,PackTranslate:l.a},data:function(){return{valid:!0,rules:{name:[function(t){return!!t||'Поле "Название" обязательно для заполнения!'},function(t){return t&&t.length<=50||"Название должно быть не длиннее 50 символов!"}],description:[function(t){return!t||t.length<=50||"Описание должно быть не длиннее 50 символов!"}]}}},computed:f({},Object(r.c)({collection:function(t){return t.collections.collection}})),beforeDestroy:function(){this.$store.commit("collections/setCollection",{flashcards:[]})},methods:f(f({},Object(r.b)({merge:"collections/merge"})),{},{validate:function(){return this.$refs.collection_form.validate()},save:function(){var t=this;this.validate()&&this.$store.dispatch("collections/update",this.collection).then((function(e){t.$router.push("/collections/"+e.data.id)}))},copy:function(){var t=this;this.$axios.post("/api/collections/".concat(this.$route.params.id,"/copy")).then((function(e){t.$notifier.showMessage({content:"Успешно!",color:"pink"}),t.$router.push("/packs/"+e.data.id)}))},isCreator:function(){return this.collection.user_id===this.$auth.user.id}})},v=o(19),m=o(50),O=o.n(m),y=o(202),w=o(193),C=o(669),j=o(731),k=o(670),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",[o("v-col",{attrs:{lg:"12"}},[o("v-form",{ref:"collection_form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-card",{staticClass:"px-5 pb-2",attrs:{elevation:"10",shaped:""}},[o("pack-header",{attrs:{pack:t.collection,entity:"collections",disabled:!t.isCreator()},on:{update:t.save}})],1),t._v(" "),t.isCreator()?o("pack-translate",{attrs:{pack:t.collection,entity:"collections"},on:{update:t.save}}):t._e(),t._v(" "),o("v-row",{staticClass:"pt-4 mt-5"},t._l(t.collection.flashcards,(function(e,n){return o("v-col",{key:n,attrs:{md:"6",cols:"12"}},[o("flashcard",{attrs:{entity:"collections",flashcard:e,index:n,disabled:!t.isCreator()},on:{update:t.save}})],1)})),1),t._v(" "),o("div",{staticClass:"mt-4"},[o("span",{staticClass:"float-right"},[o("v-btn",{attrs:{color:"primary",elevation:"10","x-large":""},on:{click:t.copy}},[t._v("\n            Копировать\n          ")])],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{Flashcard:o(685).default}),O()(component,{VBtn:y.a,VCard:w.a,VCol:C.a,VForm:j.a,VRow:k.a})},781:function(t,e,o){"use strict";o.r(e);var n={name:"Create",components:{CollectionForm:o(713).default},mounted:function(){this.$store.dispatch("collections/show",this.$route.params)}},r=o(19),component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("CollectionForm")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollectionForm:o(713).default})}}]);