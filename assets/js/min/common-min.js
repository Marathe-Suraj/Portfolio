var Common={lucreskillTechJoiningDate:"2021-01",lucreskillTechLeavingDate:"2021-09",hbitsJoiningDate:"2021-01",hbitsLeavingDate:new Date,birthDate:"1999-09",currentDate:new Date,Init:function(){let e=parseFloat(parseFloat(Common.calculateDateDifference(Common.lucreskillTechJoiningDate,Common.lucreskillTechLeavingDate))+parseFloat(Common.calculateDateDifference(Common.hbitsJoiningDate,Common.hbitsLeavingDate))).toFixed(1);$(".TotalExperience").text(e),$(".Age").text(parseInt(Common.calculateDateDifference(Common.birthDate,Common.currentDate))),$(".CopyrightYear").text(Common.currentDate.getFullYear());const t=Common.select("#preloader");t&&window.addEventListener("load",(()=>{t.remove()})),Common.on("click",".mobile-nav-toggle",(function(e){Common.select("body").classList.toggle("mobile-nav-active"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")}));const o=Common.select(".typed");if(o){let e=o.getAttribute("data-typed-items");e=e.split(","),new Typed(".typed",{strings:e,loop:!0,typeSpeed:50,backSpeed:50,backDelay:2e3})}const n=Common.select(".skills-content");n&&new Waypoint({element:n,offset:"80%",handler:function(e){Common.select(".progress .progress-bar",!0).forEach((e=>{e.style.width=e.getAttribute("aria-valuenow")+"%"}))}}),window.addEventListener("load",(()=>{AOS.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1})})),$("#DownloadResume").bind("click",(function(){window.open("./assets/attachments/Suraj Resume - SD.pdf","_blank")}));const a=Common.select(".back-to-top");if(a){const e=()=>{window.scrollY>100?a.classList.add("active"):a.classList.remove("active")};window.addEventListener("load",e),Common.onscroll(document,e)}window.addEventListener("load",Common.navbarlinksActive),Common.onscroll(document,Common.navbarlinksActive)},select:function(e,t=!1){return e=e.trim(),t?[...document.querySelectorAll(e)]:document.querySelector(e)},on:function(e,t,o,n=!1){let a=Common.select(t,n);a&&(n?a.forEach((t=>t.addEventListener(e,o))):a.addEventListener(e,o))},onscroll:function(e,t){e.addEventListener("scroll",t)},navbarlinksActive:function(){var e=Common.select("#navbar .scrollto",!0);let t=window.scrollY+200;e.forEach((e=>{if(!e.hash)return;let o=Common.select(e.hash);o&&(t>=o.offsetTop&&t<=o.offsetTop+o.offsetHeight?e.classList.add("active"):e.classList.remove("active"))}))},calculateDateDifference:function(e,t){const o=new Date(`${e}-01`),n=new Date(`${t}-01`);return`${n.getUTCFullYear()-o.getUTCFullYear()}.${n.getUTCMonth()-o.getUTCMonth()}`}};Common.Init();