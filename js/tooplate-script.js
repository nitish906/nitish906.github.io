function sendMail() {
    event.preventDefault();

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value)) {
        
        var params = {
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,        
            message:document.getElementById("message").value     
        };

        const serviceId = "service_c5dl9fw";
        const templateId = "template_pxdm9hc";

        emailjs.send(serviceId, templateId, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";    
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your message sent successfully, I will get back to you soon. Thank you")
            })
        .catch((err) => console.log(err));
    }
    else {
        alert("You have entered an invalid email address!")
    }
}