import{a as O,N as x,K as V,b,i as p,S as L,P as j,A as I}from"./assets/vendor-a4caa47b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{O({targets:".glass-effect",translateX:52,duration:1e3,loop:!0,easing:"linear"})});const D={modules:[x,V],navigation:{nextEl:".aboutme-swiper-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},loop:!0,slidesPerView:"auto",speed:350,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}};function R(e){document.querySelector(".aboutme-swiper-btn").addEventListener("click",()=>{e.slideNext()})}function z(e){e.on("slideChange",()=>{document.querySelectorAll(".aboutme-swiper-item").forEach(t=>{t.classList.remove("swiper-slide-active")}),e.slides[e.activeIndex].classList.add("swiper-slide-active")})}const v=document.querySelector(".covers"),U={rootMargin:"0px",threshold:0};function $(e){e.forEach(t=>{t.isIntersecting?v.classList.add("animate"):v.classList.remove("animate")})}const K=new IntersectionObserver($,U),o={commentsElem:document.getElementById("comments"),emailElem:document.getElementById("email"),successMessage:document.getElementById("successMessage"),errorMessage:document.getElementById("errorMessage"),formElem:document.querySelector(".js-submit-form"),backdrop:document.querySelector(".backdrop"),modalCloseBtn:document.querySelector(".modal-close-btn")},B=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,_="https://portfolio-js.b.goit.study/api/requests/";function F(){o.backdrop.classList.add("is-open"),document.body.classList.add("no-scroll")}function y(){o.backdrop.classList.remove("is-open"),document.body.classList.remove("no-scroll")}const H=document.querySelector(".mob-menu-open-btn"),d=document.querySelector(".mob-menu"),Y=document.querySelector(".mob-menu-close-btn"),c=document.querySelector(".drop-menu-nav"),Z=document.querySelector(".header-menu"),G=document.querySelector(".mob-menu-nav"),W=document.querySelector(".order-btn"),X=document.querySelector(".mob-order-btn");H.addEventListener("click",J);Y.addEventListener("click",Q);Z.addEventListener("click",ee);c.addEventListener("click",u);G.addEventListener("click",u);window.addEventListener("keydown",te);W.addEventListener("click",u);X.addEventListener("click",u);function J(){d.classList.add("is-open")}function Q(){d.classList.remove("is-open")}function ee(){c.classList.contains("drop-menu-show")?c.classList.remove("drop-menu-show"):c.classList.add("drop-menu-show")}window.onclick=function(e){!e.target.matches(".header-menu")&&!e.target.matches(".drop-menu-nav")&&c.classList.remove("drop-menu-show")};function te(e){e.key==="Escape"&&c.classList.remove("drop-menu-show")}function u(e){e.preventDefault(),d.classList.contains("is-open")&&d.classList.remove("is-open");const t=e.target.getAttribute("href").substring(1),r=document.getElementById(t);window.scrollTo({top:r.offsetTop,behavior:"smooth"})}b.defaults.baseURL="https://portfolio-js.b.goit.study/api";class oe{async getReviews(){try{return(await b.get("/reviews")).data}catch{throw new Error("Error fetching reviews")}}}const C=document.querySelector(".js-reviews-list"),P=document.querySelector(".button-prev"),A=document.querySelector(".button-next"),se=document.querySelector(".review-swiper-container");document.addEventListener("DOMContentLoaded",ie);const ne=()=>{const e=document.createElement("div");e.classList.add("loader-container","js-loader-container","hidden");const t=document.createElement("span");return t.classList.add("loader","js-loader"),e.appendChild(t),se.appendChild(e),A.disabled=!0,P.disabled=!0,document.querySelectorAll(".swiper-button-lock").forEach(i=>{i.style.display="block"}),e},h=ne(),l=e=>{e?h.classList.remove("hidden"):h.classList.add("hidden")};function re(e){const t=e.map(({_id:r,author:i,avatar_url:s,review:n})=>`<li class="swiper-slide review-swiper-slide" data-id="${r}">
          <div class="swiper-card">
            <div class="card-image" style="background: #e0e0e0 url('${s}') no-repeat center center; background-size: cover;"></div>
            <h3 class="card-title">${i}</h3>
            <p class="card-text">${n}</p>
          </div>
        </li>`).join("");return C.insertAdjacentHTML("beforeend",t)}async function ie(){const e=new oe;l(!0);try{const t=await e.getReviews();t&&t.length>0?(re(t),l(!1)):(l(!1),S(),k())}catch{l(!1),S(),k()}}function S(){C.innerHTML='<div class="err-container"></div>';const e=document.querySelector(".err-container");lottie.loadAnimation({container:e,renderer:"svg",loop:!0,autoplay:!0,path:"./img/redcat.json"}),A.disabled=!0,P.disabled=!0,document.querySelectorAll(".swiper-button-lock").forEach(r=>{r.style.display="block"})}function k(){return p.error({icon:!1,message:"Failed to load data. Please try again later!",backgroundColor:"#ed3b44",maxWidth:400,timeout:2e3,messageColor:"#fafafb",messageSize:"16",theme:"dark",progressBarColor:"#b51b1",position:"bottomRight"})}new L(".review-swiper",{initialSlide:0,speed:400,spaceBetween:16,modules:[x,j],preventClicks:!0,freeMode:!1,slidesPerGroup:1,navigation:{nextEl:".button-next",prevEl:".button-prev"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}});new I(".accordion-container-faq",{duration:400,showMultiple:!0});const ae=document.querySelectorAll(".faq-show-text-button");ae.forEach(e=>{e.addEventListener("click",()=>{e.querySelector(".faq-icon").classList.toggle("arrow-up")})});const a=new L(".projects-swiper",{direction:"horizontal",navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},initialSlide:0,mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!1}}),f=document.querySelector(".swiper-btn-prev"),w=document.querySelector(".swiper-btn-next"),M=document.querySelector(".turn-right"),q=document.querySelector(".turn-left");w.addEventListener("click",N);f.addEventListener("click",T);document.addEventListener("keydown",ce);function ce(e){e.code==="ArrowRight"&&N(),e.code==="ArrowLeft"&&T()}function N(){a.slideNext(),E()}function T(){a.slidePrev(),E()}function E(){a.isEnd?(w.classList.add("swiper-button-disabled"),M.classList.add("swiper-svg-disabled"),a.allowSlideNext=!1):(w.classList.remove("swiper-button-disabled"),M.classList.remove("swiper-svg-disabled"),a.allowSlideNext=!0),a.isBeginning?(f.classList.add("swiper-button-disabled"),q.classList.add("swiper-svg-disabled"),a.allowSlidePrev=!1):(f.classList.remove("swiper-button-disabled"),q.classList.remove("swiper-svg-disabled"),a.allowSlidePrev=!0)}E();new I(".accordion-container-abm");const le=document.querySelectorAll(".down-icons");le.forEach(e=>{e.addEventListener("click",()=>{e.querySelector(".icons").classList.toggle("active-up")})});const de=document.getElementById("ac-6");de.classList.add("is-active");const ue=document.getElementById("tab-1");ue.style.height="auto";const g=document.querySelector(".go-top");g.addEventListener("click",me);function me(){window.scrollY>0&&window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",pe);function pe(){window.scrollY>100?g.classList.add("go-top--show"):g.classList.remove("go-top--show")}document.addEventListener("DOMContentLoaded",()=>{const e=new L(".aboutme-swiper-wrapper",D);R(e),z(e)});K.observe(v);o.commentsElem.addEventListener("blur",function(){const t=o.commentsElem.value;t.length>10&&(o.commentsElem.value=t.substring(0,10)+"...")});o.emailElem.addEventListener("input",function(){o.successMessage.style.display="none",o.errorMessage.style.display="none";const e=o.emailElem.value.trim();if(e===""){o.emailElem.classList.remove("success"),o.emailElem.classList.remove("error");return}B.test(e)?(o.emailElem.classList.add("success"),o.emailElem.classList.remove("error"),o.successMessage.style.display="block"):(o.emailElem.classList.add("error"),o.emailElem.classList.remove("success"),o.errorMessage.style.display="block")});o.commentsElem.addEventListener("input",function(){localStorage.setItem("comments",o.commentsElem.value)});o.emailElem.addEventListener("input",function(){localStorage.setItem("email",o.emailElem.value)});document.addEventListener("DOMContentLoaded",function(){const e=localStorage.getItem("comments"),t=localStorage.getItem("email");e&&(o.commentsElem.value=e),t&&(o.emailElem.value=t)});o.modalCloseBtn.addEventListener("click",y);o.backdrop.addEventListener("click",function(e){e.target===e.currentTarget&&y()});document.addEventListener("keydown",function(e){e.key==="Escape"&&y()});o.formElem.addEventListener("submit",async function(e){e.preventDefault();const t=o.emailElem.value.trim(),r=o.commentsElem.value;if(!B.test(t)){p.error({title:"Error:",message:"Invalid email address"});return}try{(await b.post(_,{email:t,comment:r})).status===201&&(F(),o.successMessage.style.display="none",o.emailElem.classList.remove("success"),o.formElem.reset(),localStorage.removeItem("email"),localStorage.removeItem("comments"))}catch{p.error({title:"Error:",message:"Error sending request. Try again."})}});
//# sourceMappingURL=commonHelpers.js.map
