document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("contact-whatsapp");
    const menuButton = document.getElementById("view-menu-whatsapp");

    // Replace with your company's WhatsApp number
    const whatsappNumber = "+1 (321) 310-6114"; 

    // Messages to be sent
    const contactMessage = "Hello, I would like to contact you.";
    const menuMessage = "Hello, I would like to see the menu.";

    if (contactButton) {
        contactButton.addEventListener("click", function() {
            const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(contactMessage)}`;
            window.open(url, "_blank");
        });
    }

    if (menuButton) {
        menuButton.addEventListener("click", function() {
            const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(menuMessage)}`;
            window.open(url, "_blank");
        });
    }
});