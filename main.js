document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("contact-whatsapp");
    const menuButton = document.getElementById("view-menu-whatsapp");
    const eventsButton = document.getElementById("contact-whatsapp-events");
    const orderNowButton = document.getElementById("order-now");
    const orderNowMobileButton = document.getElementById("order-now-mobile");

    // Replace with your company's WhatsApp number
    const whatsappNumber = "+1(321)3106114"; 

    // Messages to be sent
    const orderNowMessage = "Hello, I would like to place an order.";

    function sendWhatsAppMessage(message) {
        const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }

    if (contactButton) {
        contactButton.addEventListener("click", function() {
            sendWhatsAppMessage(contactMessage);
        });
    }

    if (menuButton) {
        menuButton.addEventListener("click", function() {
            sendWhatsAppMessage(menuMessage);
        });
    }

    if (orderNowButton) {
        orderNowButton.addEventListener("click", function() {
            sendWhatsAppMessage(orderNowMessage);
        });
    }

    if (orderNowMobileButton) {
        orderNowMobileButton.addEventListener("click", function() {
            sendWhatsAppMessage(orderNowMessage);
        });
    }

    if (eventsButton) {
        eventsButton.addEventListener("click", function() {
            sendWhatsAppMessage(orderNowMessage);
        });
    }

    // Toggle mobile nav
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const closingMobileNav = document.getElementById("closing-button")

    menuToggle.addEventListener("click", function() {
        mobileNav.style.display = 'block';
    });
    
    closingMobileNav.addEventListener("click", function(){
        mobileNav.style.display = 'none';
    })

});