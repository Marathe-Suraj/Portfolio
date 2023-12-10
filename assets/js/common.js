var Common = {
  lucreskillTechJoiningDate: "2021-01",
  lucreskillTechLeavingDate: "2021-09",
  hbitsJoiningDate: "2021-01",
  hbitsLeavingDate: new Date(),
  birthDate: "1999-09",
  currentDate: new Date(),

  Init: function () {

    // Scrollbar get stick on the top
    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();    
      if (scrollTop >= 100) {
          $('.navbar').addClass('solid-nav');
      } else {
          $('.navbar').removeClass('solid-nav');
      }    
    });

    // Hide navbar on click of the links
    $('.navLinks a').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });

    // Total experiance dynamic calculation
    let TotalExperiance = parseFloat(
      parseFloat(
        Common.calculateDateDifference(
          Common.lucreskillTechJoiningDate,
          Common.lucreskillTechLeavingDate
        )
      ) +
        parseFloat(
          Common.calculateDateDifference(
            Common.hbitsJoiningDate,
            Common.hbitsLeavingDate
          )
        )
    ).toFixed(1);
    $(".TotalExperience").text(TotalExperiance);

    // Age dynamic calculation
    $(".Age").text(
      parseInt(
        Common.calculateDateDifference(Common.birthDate, Common.currentDate)
      )
    );

    // Footer year dynamic calculation
    $(".CopyrightYear").text(Common.currentDate.getFullYear());

    //  Preloader
    const preloader = Common.select("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }

    //  Mobile nav toggle
    Common.on("click", ".mobile-nav-toggle", function (e) {
      Common.select("body").classList.toggle("mobile-nav-active");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });

    //  Hero type effect
    const typed = Common.select(".typed");
    if (typed) {
      let typed_strings = typed.getAttribute("data-typed-items");
      typed_strings = typed_strings.split(",");
      new Typed(".typed", {
        strings: typed_strings,
        loop: true,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
      });
    }

    //  Skills animation
    const skilsContent = Common.select(".skills-content");
    if (skilsContent) {
      new Waypoint({
        element: skilsContent,
        offset: "80%",
        handler: function (direction) {
          let progress = Common.select(".progress .progress-bar", true);
          progress.forEach((el) => {
            el.style.width = el.getAttribute("aria-valuenow") + "%";
          });
        },
      });
    }

    //  Animation on scroll
    window.addEventListener("load", () => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    });

    // Download Resume
    $("#DownloadResume").bind("click", function () {
      window.open("./assets/attachments/Suraj Resume - SD.pdf", "_blank");
    });

    //  Back to top button
    const backtotop = Common.select(".back-to-top");
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add("active");
        } else {
          backtotop.classList.remove("active");
        }
      };
      window.addEventListener("load", toggleBacktotop);
      Common.onscroll(document, toggleBacktotop);
    };
    window.addEventListener("load", Common.navbarlinksActive);
    Common.onscroll(document, Common.navbarlinksActive);
  },

  //  Easy selector helper function
  select: function (el, all = false) {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  },

  //  Easy event listener function
  on: function (type, el, listener, all = false) {
    let selectEl = Common.select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  },

  //  Easy on scroll event listener
  onscroll: function (el, listener) {
    el.addEventListener("scroll", listener);
  },

  //  Navbar links active state on scroll
  
  navbarlinksActive: function () {
    var navbarlinks = Common.select("#navbar .scrollto", true);
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = Common.select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  },

  // Total experiance calculation
  calculateDateDifference: function (startDate, endDate) {
    const start = new Date(`${startDate}-01`);
    const end = new Date(`${endDate}-01`);

    const years = end.getUTCFullYear() - start.getUTCFullYear();
    const months = end.getUTCMonth() - start.getUTCMonth();

    return `${years}.${months}`;
  }
};
Common.Init();