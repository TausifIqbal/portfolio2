function sendMail(params) {
    console.log("sending mail ...");
    var tempParams = {


        message: document.getElementById("msg").value,
        from_name: document.getElementById("fromName").value,
        E_mail: document.getElementById("Email").value,
    };
    console.log(document.getElementById("fromName").value);
    console.log(document.getElementById("msg").value);
    console.log(document.getElementById("Email").value);
    emailjs.send('service_tuwkfzp', 'template_ntoztbf', tempParams)
        .then(function (res) {
            if (res.status != 200) {
                alert("ERROR")
            } else {
                if (res.response = "OK") {
                    alert("ThankYou! Your message has been sent ");
                } else {
                    alert("FAILURE!");
                }
            }
            console.log("success", res.status);
        });



}