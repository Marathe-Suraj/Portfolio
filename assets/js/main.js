(function () {
  //  Easy selector helper function
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  //  Easy event listener function
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  //  Easy on scroll event listener
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  //  Navbar links active state on scroll
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
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
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  //  Back to top button
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  //  Mobile nav toggle
  on("click", ".mobile-nav-toggle", function (e) {
    select("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  //  Preloader
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  //  Hero type effect
  const typed = select(".typed");
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
  let skilsContent = select(".skills-content");
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: "80%",
      handler: function (direction) {
        let progress = select(".progress .progress-bar", true);
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
})();

//  Assigned public key of emailJS
(function () {
  emailjs.init("djJVVX9kepWe_HTSK");
})();

//  Send mail of contact page
const SendEmail = function () {
  $(".loading").show();
  if ($("#EmailForm").valid()) {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    const serviceID = "service_f4patoq";
    const templateID = "template_4woz0az";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        showToast();
        $(".loading").hide();
      })
      .catch((err) => {
        $(".loading").hide();
        $(".error-message").show();
        setTimeout(function () {
          $(".error-message").hide();
        }, 3000);
      });
  } else {
    $(".loading").hide();
    $(".error-message").show();
    setTimeout(function () {
      $(".error-message").hide();
    }, 3000);
  }
};

//  Validate mail of contact page
$("#SendMessage").click(function () {
  $("#EmailForm").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      subject: {
        required: true,
      },
      message: {
        required: true,
      },
    },
    highlight: function (element) {
      $(element).addClass("FormValidationError");
    },
    unhighlight: function (element) {
      $(element).removeClass("FormValidationError");
    },
    errorPlacement: function () {
      return false;
    },
    submitHandler: function () {
      SendEmail();
    },
    messages: {
      name: {
        required: "",
      },
      email: {
        required: "",
      },
      subject: {
        required: "",
      },
      message: {
        required: "",
      },
    },
  });
});

// Download Resume
$("#DownloadResume").bind("click", function () {
  window.open("./assets/attachments/Suraj Resume - SD.pdf", "_blank");
});

// Toaster

const showToast = function () {
  toast = document.querySelector(".toast");
  (closeIcon = document.querySelector(".close")),
    (progress = document.querySelector(".progress"));

  let timer1, timer2;

  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 5000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);

  closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(() => {
      progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
  });
};
