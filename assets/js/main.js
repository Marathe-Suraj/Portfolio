var Main = {
  toast: document.querySelector(".toast"),
  closeIcon: document.querySelector(".close"),
  progress: document.querySelector(".progress"),

  Init: function () {
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
          Email.SendEmail();
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
  },

  // Toaster
  showToast: function () {
    let timer1, timer2;

    Main.toast.classList.add("active");
    Main.progress.classList.add("active");

    timer1 = setTimeout(() => {
      Main.toast.classList.remove("active");
    }, 5000);

    timer2 = setTimeout(() => {
      Main.progress.classList.remove("active");
    }, 5000);

    Main.closeIcon.addEventListener("click", () => {
      Main.toast.classList.remove("active");

      setTimeout(() => {
        Main.progress.classList.remove("active");
      }, 300);

      clearTimeout(timer1);
      clearTimeout(timer2);
    });
  },
};
Main.Init();