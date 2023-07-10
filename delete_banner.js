
//
// A script to be injected in order to remove popups.
//


//---------------------------
//      General banners
//---------------------------

var banner_patterns = ["cookie", "Cookie"];
var banner_containers_patterns = ["popup"];

var list_of_elements = document.querySelectorAll("body *");

list_of_elements.forEach( element => {

    // Delete fixed and sticky elements
    var pos = getComputedStyle(element).position;

    if (pos === "fixed" || pos == "sticky") {
        element.remove();
    }

    // Remove banners by identifier
    banner_patterns.forEach( pattern => {
        var regex = new RegExp(pattern);
        if (regex.test(element.id)) {
            element.remove();
        }
    });

    // Remove classnames that make banner containers
    var list_of_class_names = element.classList;

    list_of_class_names.forEach( class_name => {
        banner_containers_patterns.forEach( pattern => {
            var regex = new RegExp(pattern);
            if (regex.test(class_name)) {
                list_of_class_names.remove(class_name);
            }
        });
    });

});


//---------------------------
//       Fix scrolling
//---------------------------

document.body.style.setProperty("position", "static", "important");
document.body.style.setProperty("overflow", "scroll", "important");
document.body.style.setProperty("margin-top", "0px", "important");
