function initFE(){fixElement(300,!1,"headermain","scroll")}function dropdownInit(){$("[data-dropdownclick]").on("click",(function(e){$(this).toggleClass("active"),e.preventDefault();let i=$(this).data("dropdownclick");$("[data-dropdown].active").not($(`[data-dropdown=${i}]`)).removeClass("active"),$("[data-dropdownclick].active").not($(`[data-dropdownclick=${i}]`)).removeClass("active"),$(`[data-dropdown=${i}]`).toggleClass("active")}))}function hideText(){$(".detailparam__text").each((function(){$(this)&&$(this).height()>20&&($(this).addClass("detailparam__text_large"),$(this).on("click",(function(e){e.preventDefault(),$(this).toggleClass("active")})))}))}function mainSliderInit(){$(".mainslider__slider").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3})}function videoSliderInit(){$("[data-slider='videoslider']").each((function(){$(this).slick({dots:!1,arrows:!0,fade:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,nextArrow:$(this).closest("[data-slidercontainer]").find(".sliderarrows__right"),prevArrow:$(this).closest("[data-slidercontainer]").find(".sliderarrows__left"),responsive:[{breakpoint:1023,settings:"unslick"}]})}))}function blogSliderInit(){$("[data-slider='blogslider']").each((function(){$(this).slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:3,slidesToScroll:1,nextArrow:$(this).closest("[data-slidercontainer]").find(".sliderarrows__right"),prevArrow:$(this).closest("[data-slidercontainer]").find(".sliderarrows__left"),responsive:[{breakpoint:767,settings:{slidesToShow:2,variableWidth:!0}},{breakpoint:600,settings:{slidesToShow:1,variableWidth:!0}}]})}))}function videoPopup(){$("[data-ytlink]").click((function(){var e=$(this),i=$('<iframe frameborder="0" allow="autoplay; encrypted-media" class="iframe" id="Overlayvideo" allowfullscreen="true">').attr("src",e.data("ytlink")).css({width:400,height:300});$("#video-view").html("").append(i),$("#video-popup").show()})),$("#video-close").click((function(){$("#video-view").html(""),$("#video-popup").hide()}))}function detailsliderInit(){const e=new Swiper(".detailswiperpreview",{spaceBetween:20,scrollbar:{el:".swiper-scrollbar",draggable:!0},slidesPerView:"auto",mousewheel:!0,freeMode:!0,watchSlidesProgress:!0});new Swiper(".detailswiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:e},pagination:{el:".detailslider-pagination",clickable:!0},slidesPerView:1,effect:"fade"});$((function(){$(".zoom-box").each((function(){$(this).zoom()}))}))}function productSliderInit(){$("[data-slider='productslider']").each((function(){$(this).slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:4,slidesToScroll:1,swipe:!1,nextArrow:$(this).closest("[data-slidercontainer]").find(".sliderarrows__right"),prevArrow:$(this).closest("[data-slidercontainer]").find(".sliderarrows__left"),responsive:[{breakpoint:1400,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:1023,settings:{variableWidth:!0,nextArrow:$(this).closest(".container").find(".blockheader .sliderarrows__right"),prevArrow:$(this).closest(".container").find(".blockheader .sliderarrows__left")}}]})})),$(".productslider__modalslider").each((function(){$(this).slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,swipe:!1,nextArrow:$(this).closest(".productslider").find(".sliderarrows__right"),prevArrow:$(this).closest(".productslider").find(".sliderarrows__left"),responsive:[{breakpoint:767,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]})}))}function recipeSliderInit(){$(".recipeslider__slider").each((function(){$(this).slick({dots:!1,arrows:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,infinite:!0,swipe:!1,nextArrow:$(this).closest(".recipeslider").find(".sliderarrows__right"),prevArrow:$(this).closest(".recipeslider").find(".sliderarrows__left"),responsive:[{breakpoint:1530,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]})}))}function moreNewsSliderInit(){$(".morenews__slider").each((function(){$(this).slick({dots:!1,arrows:!0,slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,infinite:!0,swipe:!1,nextArrow:$(this).closest(".morenewsslider").find(".sliderarrows__right"),prevArrow:$(this).closest(".morenewsslider").find(".sliderarrows__left"),responsive:[{breakpoint:1530,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]})}))}function imgSliderInit(){$(".imgslider__slider").each((function(){$(this).slick({dots:!1,arrows:!0,slidesToShow:6,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,infinite:!0,nextArrow:$(this).closest(".imgslider").find(".beyond-button-next"),prevArrow:$(this).closest(".imgslider").find(".beyond-button-prev"),responsive:[{breakpoint:1530,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:767,settings:{dots:!0,slidesToShow:3,slidesToScroll:1}}]})}))}function fixElement(e,i,t,s){document.getElementById(t)&&(window.innerWidth>=1023?0===e?document.getElementById(t).classList.add(s):e&&window.addEventListener("scroll",(i=>{scroll=window.scrollY,scroll>=e?document.getElementById(t).classList.add(s):document.getElementById(t).classList.remove(s)})):0===i?document.getElementById(t).classList.add(s):i&&window.addEventListener("scroll",(e=>{scroll=window.scrollY,scroll>=i?document.getElementById(t).classList.add(s):document.getElementById(t).classList.remove(s)})))}function blockSliderInit(){new Swiper(".blockslider__container",{pagination:{el:".blockslider-pagination",clickable:!0},navigation:{nextEl:".blockslider-button-next",prevEl:".blockslider-button-prev"}})}function mobileAccordeon(){$(window).width()<1024&&$(".infobadge__main").on("click",(function(){$(this).toggleClass("active"),$(this).closest(".infobadge").find(".infobadge__accordeon").slideToggle()}))}function cardImagesSlider(){hoverSlider.init({})}function menuInit(){$("#dmenu").dmenu({menu:{align:"left"},item:{bg:!1,border:!1,subindicator:!0,fit:[{items:null,fitter:"icon-hide",order:"all"},{items:null,fitter:"icon-only",order:"all"},{items:":not(.dm-item_align-right)",fitter:"submenu",order:"rtl"},{items:":not(.dm-item_align-right)",fitter:"hide",order:"rtl"}]},submenu:{arrow:!1,border:!1,shadow:!0},subitem:{bg:!0,border:!1}})}function closeByClickOutside(e,i){$(document).click((function(t){$(t.target).closest(`${e},${i}`).length||($(i).removeClass("active"),$(e).removeClass("active"))})),$(document).keyup((function(t){"Escape"===t.key&&($(i).removeClass("active"),$(e).removeClass("active"))}))}function closeByOutsideSelect(){$(document).click((function(e){$(e.target).closest(".dropdown-select__list,.dropdown-select__title").length||$(".dropdown-select__list").hide()})),$(document).keyup((function(e){"Escape"===e.key&&$(".dropdown-select__list").hide()}))}function productListImgLisder(){$(window).width()<1024&&$(".productcard__images_mobile .productcard__img").each((function(e){$(this).slick({dots:!0,arrows:!1,slidesToShow:1,slidesToScroll:1})}))}function quantityForm(){MathUtils={roundToPrecision:function(e,i){return+(+e).toFixed(i)}},$(document).on("click","[data-quantitybtn='plus']",(function(e){let i=+parseFloat($(this).closest("[data-quantity]").find('[type="number"]').attr("step")).toFixed(1);!function(e,i){var t=e.data("field"),s=e.closest("[data-quantity]"),n=+parseFloat(s.find("input[name="+t+"]").val()).toFixed(1);console.log(n),isNaN(n)?s.find("input[name="+t+"]").val(i):s.find("input[name="+t+"]").val(MathUtils.roundToPrecision(n+i,1)),s.find("input[name="+t+"]").trigger("change")}($(this).closest("[data-quantity]").find('[data-quantitybtn="plus"]'),i)})),$(document).on("click","[data-quantitybtn='minus']",(function(e){let i=+parseFloat($(this).closest("[data-quantity]").find('[type="number"]').attr("step")).toFixed(1);!function(e,i){var t=e.data("field"),s=e.closest("[data-quantity]"),n=+parseFloat(s.find("input[name="+t+"]").val()).toFixed(1);console.log(n),!isNaN(n)&&n>i?s.find("input[name="+t+"]").val(MathUtils.roundToPrecision(n-i,1)):s.find("input[name="+t+"]").val(i),s.find("input[name="+t+"]").trigger("change")}($(this).closest("[data-quantity]").find('[data-quantitybtn="minus"]'),i)}))}$(document).ready((function(){(new WOW).init(),$(".limitheight__button").on("click",(function(e){e.preventDefault(),$(this).hide(),$(this).closest(".limitheight").toggleClass("active")})),$("[data-toggleclick='mainmenu']").on("click",(function(e){e.preventDefault(),$("[data-toggle='mainmenu']").toggleClass("active")})),$("[data-toggle='menuitems'").on("click",(function(e){e.preventDefault(),$(this).siblings("li:not(.active)").toggleClass("active"),$(this).remove()})),$(".jscatalog .js-toggler").on("click",(function(e){$(this).closest(".jscatalog").toggleClass("active"),$(this).closest(".jscatalog").siblings(".mobilemenu__level2").toggleClass("active")})),$(".mobilemenu__level2 .js-toggler").on("click",(function(e){$(this).closest(".mobilemenu__content").toggleClass("active"),$(this).closest(".mobilemenu__item").find(".mobilemenu__level3").slideToggle()})),$(".menubutton").on("click",(function(e){$(this).toggleClass("active"),$(".mobilemenu").toggleClass("active"),$(".jsbackdrop").toggleClass("active"),$(".mobilemenu__level2").removeClass("active"),$(".mobilemenu__content").removeClass("active")})),$(".jsbackdrop").on("click",(function(e){$(this).removeClass("active"),$(".mobilemenu").removeClass("active"),$(".menubutton").removeClass("active"),$(".mobilemenu__level2").removeClass("active"),$(".mobilemenu__content").removeClass("active")})),$(".haederbanner__close").on("click",(function(e){e.preventDefault(),$(this).closest(".haederbanner").hide()})),$(".reviewsblock__rating").each((function(){$(this).find("span.stars-active").css("width",24.4*$(this).find(".reviewsblock__value").text())})),$("input[type=tel]").mask("7 (999) 999-99-99"),$(".quantity").on("click",".quantity-plus",(function(e){!function(e){e.preventDefault();var i=$(e.target).data("field"),t=$(e.target).closest("div"),s=parseInt(t.find("input[name="+i+"]").val(),10);isNaN(s)?t.find("input[name="+i+"]").val(1):t.find("input[name="+i+"]").val(s+1)}(e)})),$(".quantity").on("click",".quantity-minus",(function(e){!function(e){e.preventDefault();var i=$(e.target).data("field"),t=$(e.target).closest("div"),s=parseInt(t.find("input[name="+i+"]").val(),10);!isNaN(s)&&s>1?t.find("input[name="+i+"]").val(s-1):t.find("input[name="+i+"]").val(1)}(e)})),function(e){e((function(){e("[data-tabsbutton]").on("click","li span:not(.active) ",(function(i){i.preventDefault(),e(this).addClass("active").parent().siblings().find("span").removeClass("active"),e(this).closest("[data-tabs]").find("[data-tabscontent]").removeClass("active").eq(e(this).parent().index()).addClass("active")}))}))}(jQuery),function(e){e((function(){e("[data-headertabs]").on("click","li:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest("[data-tabs]").find("[data-contenttabs]").removeClass("active").eq(e(this).index()).addClass("active")}))}))}(jQuery),function(e){e((function(){e(".sitetabs__header ul").on("click","li:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest("div.sitetabs").find("div.sitetabs__content").removeClass("active").eq(e(this).index()).addClass("active")}))}))}(jQuery),menuInit(),$(window).resize()})),window.addEventListener("load",(function(){initFE()}));