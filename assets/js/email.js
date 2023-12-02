var Email = {
  
  emailJSPublicKey: "IjlemfY4pC4cRXMj8",
  serviceID: "service_f4patoq",
  templateID: "template_4woz0az",

  Init: function () {
    //  Assigned public key of emailJS
    emailjs.init(Email.emailJSPublicKey);
  },

  //  Send mail of contact page
  SendEmail: function () {
    $(".loading").show();

    if ($("#EmailForm").valid()) {
      let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      emailjs
        .send(Email.serviceID, Email.templateID, params)
        .then((res) => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
          Main.showToast();
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
  },
};
Email.Init();