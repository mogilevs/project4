import{a as g,S as E,i as S,f as k}from"./assets/vendor-038fdb52.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const q=document.querySelector(".mob-menu-open-btn"),l=document.querySelector(".mob-menu"),M=document.querySelector(".mob-menu-close-btn"),r=document.querySelector(".drop-menu-nav"),C=document.querySelector(".header-menu"),x=document.querySelector(".mob-menu-nav"),A=document.querySelector(".order-btn"),P=document.querySelector(".mob-order-btn");q.addEventListener("click",I);M.addEventListener("click",N);C.addEventListener("click",O);r.addEventListener("click",u);x.addEventListener("click",u);window.addEventListener("keydown",R);A.addEventListener("click",u);P.addEventListener("click",u);function I(){l.classList.add("is-open")}function N(){l.classList.remove("is-open")}function O(){r.classList.contains("drop-menu-show")?r.classList.remove("drop-menu-show"):r.classList.add("drop-menu-show")}window.onclick=function(e){!e.target.matches(".header-menu")&&!e.target.matches(".drop-menu-nav")&&r.classList.remove("drop-menu-show")};function R(e){e.key==="Escape"&&r.classList.remove("drop-menu-show")}function u(e){e.preventDefault(),l.classList.contains("is-open")&&l.classList.remove("is-open");const t=e.target.getAttribute("href").substring(1),i=document.getElementById(t);window.scrollTo({top:i.offsetTop,behavior:"smooth"})}g.defaults.baseURL="https://portfolio-js.b.goit.study/api";class j{async getReviews(){try{return(await g.get("/reviews")).data}catch{throw new Error("Error fetching reviews")}}}const h=document.querySelector(".js-reviews-list"),m=document.querySelector(".button-prev"),c=document.querySelector(".button-next"),B=document.querySelector(".swiper-container"),T=()=>{const e=document.createElement("div");e.classList.add("loader-container","js-loader-container","hidden");const t=document.createElement("span");return t.classList.add("loader","js-loader"),e.appendChild(t),B.appendChild(e),e},v=T(),d=e=>{e?v.classList.remove("hidden"):v.classList.add("hidden")};function D(e){const t=e.map(({_id:i,author:a,avatar_url:o,review:n})=>`<li class="swiper-slide" data-id="${i}">
          <div class="swiper-card">
            <div class="card-image" style="background: #e0e0e0 url('${o}') no-repeat center center; background-size: cover;"></div>
            <h3 class="card-title">${a}</h3>
            <p class="card-text">${n}</p>
          </div>
        </li>`).join("");return h.insertAdjacentHTML("beforeend",t)}async function V(){const e=new j;d(!0);try{const t=await e.getReviews();t&&t.length>0?(D(t),d(!1)):(d(!1),w(),b())}catch{d(!1),w(),b()}}const s=new E(".swiper",{initialSlide:0,speed:650,spaceBetween:16,preventClicks:!0,freeMode:!1,navigation:{nextEl:".button-next",prevEl:".button-prev"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},on:{slideChange:f}});function f(){c.disabled=s.isEnd,m.disabled=s.isBeginning}function w(){h.innerHTML='<div class="err-container"></div>';const e=document.querySelector(".err-container");lottie.loadAnimation({container:e,renderer:"svg",loop:!0,autoplay:!0,path:"./img/redcat.json"}),c.disabled=!0,m.disabled=!0}c.addEventListener("click",L);m.addEventListener("click",y);document.addEventListener("keydown",$);function $(e){e.code==="ArrowRight"&&L(),e.code==="ArrowLeft"&&y()}function L(){s.slideNext(),f()}function y(){s.slidePrev(),f()}const z=document.querySelectorAll(".swiper-slide");s.activeIndex===z.length-1&&(c.addEventListener("click",moveNext),c.disabled=!0);s.activeIndex===0&&(m.disabled=!0);function b(){return S.error({icon:!1,message:"Failed to load data. Please try again later!",backgroundColor:"#ed3b44",maxWidth:400,timeout:2e3,messageColor:"#fafafb",messageSize:"16",theme:"dark",progressBarColor:"#b51b1",position:"bottomRight"})}document.addEventListener("DOMContentLoaded",V);new k(".accordion-container-faq",{duration:400,showMultiple:!0});const U=document.querySelectorAll(".faq-show-text-button");U.forEach(e=>{e.addEventListener("click",()=>{e.querySelector(".faq-icon").classList.toggle("arrow-up")})});
//# sourceMappingURL=commonHelpers.js.map
