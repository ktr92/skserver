/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{function e(){var e,t,i,n;e=300,t=!1,i="headermain",n="scroll",document.getElementById(i)&&(window.innerWidth>=1023?0===e?document.getElementById(i).classList.add(n):e&&window.addEventListener("scroll",(t=>{scroll=window.scrollY,scroll>=e?document.getElementById(i).classList.add(n):document.getElementById(i).classList.remove(n)})):0===t?document.getElementById(i).classList.add(n):t&&window.addEventListener("scroll",(e=>{scroll=window.scrollY,scroll>=t?document.getElementById(i).classList.add(n):document.getElementById(i).classList.remove(n)}))),$("[data-btnhidden]").each((function(){$(this).on("click",(function(e){e.preventDefault(),$(this).hide(),$(this).closest("[data-wrapper]").find("[data-hidden]").toggleClass("active")}))}))}$(document).ready((function(){(new WOW).init(),$(".limitheight__button").on("click",(function(e){e.preventDefault(),$(this).hide(),$(this).closest(".limitheight").toggleClass("active")})),$("[data-toggleclick='mainmenu']").on("click",(function(e){e.preventDefault(),$("[data-toggle='mainmenu']").toggleClass("active")})),$("[data-toggle='menuitems'").on("click",(function(e){e.preventDefault(),$(this).siblings("li:not(.active)").toggleClass("active"),$(this).remove()})),$(".jscatalog .js-toggler").on("click",(function(e){$(this).closest(".jscatalog").toggleClass("active"),$(this).closest(".jscatalog").siblings(".mobilemenu__level2").toggleClass("active")})),$(".mobilemenu__level2 .js-toggler").on("click",(function(e){$(this).closest(".mobilemenu__content").toggleClass("active"),$(this).closest(".mobilemenu__item").find(".mobilemenu__level3").slideToggle()})),$("#menuToggle").on("click",(function(e){$(this).toggleClass("active"),$(".mobilemenu").toggleClass("active"),$(".jsbackdrop").toggleClass("active"),$(".mobilemenu__level2").removeClass("active"),$(".mobilemenu__content").removeClass("active")})),$(".jsbackdrop").on("click",(function(e){$(this).removeClass("active"),$(".mobilemenu").removeClass("active"),$("#menuToggle").removeClass("active"),$(".mobilemenu__level2").removeClass("active"),$(".mobilemenu__content").removeClass("active")})),$(".haederbanner__close").on("click",(function(e){e.preventDefault(),$(this).closest(".haederbanner").hide()})),$(".reviewsblock__rating").each((function(){$(this).find("span.stars-active").css("width",24.4*$(this).find(".reviewsblock__value").text())})),$("input[type=tel]").mask("7 (999) 999-99-99"),$(".quantity").on("click",".quantity-plus",(function(e){!function(e){e.preventDefault();var t=$(e.target).data("field"),i=$(e.target).closest("div"),n=parseInt(i.find("input[name="+t+"]").val(),10);isNaN(n)?i.find("input[name="+t+"]").val(1):i.find("input[name="+t+"]").val(n+1)}(e)})),$(".quantity").on("click",".quantity-minus",(function(e){!function(e){e.preventDefault();var t=$(e.target).data("field"),i=$(e.target).closest("div"),n=parseInt(i.find("input[name="+t+"]").val(),10);!isNaN(n)&&n>1?i.find("input[name="+t+"]").val(n-1):i.find("input[name="+t+"]").val(1)}(e)})),function(e){e((function(){e("[data-tabsbutton]").on("click","li span:not(.active) ",(function(t){t.preventDefault(),e(this).addClass("active").parent().siblings().find("span").removeClass("active"),e(this).closest("[data-tabs]").find("[data-tabscontent]").removeClass("active").eq(e(this).parent().index()).addClass("active")}))}))}(jQuery),function(e){e((function(){e("[data-headertabs]").on("click","li:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest("[data-tabs]").find("[data-contenttabs]").removeClass("active").eq(e(this).index()).addClass("active")}))}))}(jQuery),function(e){e((function(){e(".sitetabs__header ul").on("click","li:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest("div.sitetabs").find("div.sitetabs__content").removeClass("active").eq(e(this).index()).addClass("active")}))}))}(jQuery),$("#dmenu").dmenu({menu:{align:"left"},item:{bg:!1,border:!1,subindicator:!0,fit:[{items:null,fitter:"icon-hide",order:"all"},{items:null,fitter:"icon-only",order:"all"},{items:":not(.dm-item_align-right)",fitter:"submenu",order:"rtl"},{items:":not(.dm-item_align-right)",fitter:"hide",order:"rtl"}]},submenu:{arrow:!1,border:!1,shadow:!0},subitem:{bg:!0,border:!1}}),$(window).resize()})),window.addEventListener("load",(function(){e()}))})(),(()=>{"use strict";e.r(t)})()})();
//# sourceMappingURL=bundle.js.map