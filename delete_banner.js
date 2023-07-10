
//
// A script to be injected in order to remove popups.
//


//---------------------------
//      General banners
//---------------------------

// Delete fixed and sticky elements
var list_of_banners = document.querySelectorAll("body *");

list_of_banners.forEach(banner => {
    var pos = getComputedStyle(banner).position;

    if (pos === "fixed" || pos == "sticky") {
        banner.remove();
    }
});

// Find banners by identifier
var list_of_banners = document.querySelectorAll(`[id*="Cookie"], [id*="cookie"]`);

list_of_banners.forEach(banner => {
    console.log("element: ", banner)
    banner.remove();
});


//---------------------------
//       Didomi popups
//---------------------------

var didomiHost = document.querySelector('#didomi-host');

if (didomiHost) {
    didomiHost.remove();
    if (document.body.classList.contains('didomi-popup-open')){
        document.body.classList.remove('didomi-popup-open');
    }
}


//---------------------------
//       Fix scrolling
//---------------------------

document.body.style.setProperty("position", "static", "important");
document.body.style.setProperty("overflow", "scroll", "important");
document.body.style.setProperty("margin-top", "0px", "important");
