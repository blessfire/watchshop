(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:10,loop:!0,keyboard:{enabled:!0},navigation:{nextEl:".next-button",prevEl:".previous-button"},pagination:{el:".swiper-pagination",type:"fraction",renderFraction:function(t,e){return'0<span class="'+t+'"></span><div class="swiper-dash"></div>0<span class="'+e+'"></span>'}}});(function(t){typeof t.matches!="function"&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(e){for(var o=this,i=(o.document||o.ownerDocument).querySelectorAll(e),s=0;i[s]&&i[s]!==o;)++s;return Boolean(i[s])}),typeof t.closest!="function"&&(t.closest=function(e){for(var o=this;o&&o.nodeType===1;){if(o.matches(e))return o;o=o.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".js-open-modal"),e=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");t.forEach(function(i){i.addEventListener("click",function(s){s.preventDefault();var n=this.getAttribute("data-modal"),c=document.querySelector('.modal[data-modal="'+n+'"]');c.classList.add("active"),e.classList.add("active")})}),o.forEach(function(i){i.addEventListener("click",function(s){var n=this.closest(".modal");n.classList.remove("active"),e.classList.remove("active")})}),document.body.addEventListener("keyup",function(i){var s=i.keyCode;s==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),e.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});const d=document.querySelectorAll(".catalog__item");d.forEach(t=>{const e=t.querySelector(".catalog__like-icon");let o=!1;t.addEventListener("dblclick",()=>{o?(e.classList.remove("like-active"),o=!1):(e.classList.add("like-active"),o=!0)}),t.addEventListener("touchend",i=>{i.detail===2&&(o?(e.classList.remove("like-active"),o=!1):(e.classList.add("like-active"),o=!0))})});const u=document.querySelectorAll(".catalog__item");u.forEach(t=>{const e=t.querySelector(".catalog__item-info"),o=t.querySelector(".catalog__info-icon");let i=!1;o.addEventListener("click",s=>{s.stopPropagation(),s.detail===1&&(i?(e.classList.remove("visible"),i=!1,o.classList.remove("info-active")):(e.classList.add("visible"),i=!0,o.classList.add("info-active")))}),t.addEventListener("click",s=>{s.target===e&&i&&(e.classList.remove("visible"),i=!1,o.classList.remove("info-active"))}),o.addEventListener("touchend",s=>{s.detail===1&&(i?(e.classList.remove("visible"),i=!1,o.classList.remove("info-active")):(e.classList.add("visible"),i=!0,o.classList.add("info-active")))}),t.addEventListener("touchend",s=>{s.target===e&&i&&(e.classList.remove("visible"),i=!1,o.classList.remove("info-active"))})});const l=document.querySelectorAll(".btn-close"),r=document.querySelectorAll(".btn-open"),a=document.querySelectorAll(".sale__info-text");l.forEach((t,e)=>{t.addEventListener("click",()=>{a[e].classList.contains("hidden")||a[e].classList.add("hidden"),t.classList.contains("hidden")||t.classList.add("hidden"),r[e].classList.contains("hidden")&&r[e].classList.remove("hidden")})});r.forEach((t,e)=>{t.addEventListener("click",()=>{a[e].classList.contains("hidden")&&a[e].classList.remove("hidden"),l[e].classList.contains("hidden")&&l[e].classList.remove("hidden"),t.classList.contains("hidden")||t.classList.add("hidden")})});(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),links:document.querySelectorAll(".mobile-menu-item")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e),t.links.forEach(o=>{o.addEventListener("click",()=>{t.menu.classList.remove("is-open"),document.body.classList.remove("is-open")}),o.addEventListener("touchend",()=>{t.menu.classList.remove("is-open"),document.body.classList.remove("is-open")})});function e(){t.menu.classList.toggle("is-open"),document.body.classList.toggle("is-open")}})();