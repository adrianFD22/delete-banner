
//
// A script to be injected in order to remove popups.
//


//---------------------------
//      Remove banners
//---------------------------

function remove_banners() {
    var banner_patterns = ["cookie", "Cookie"];
    var container_patterns = ["popup"];

    var banner_regexps = Array.from(banner_patterns, pattern => new RegExp(pattern), "i");
    var container_regexps = Array.from(container_patterns, pattern => new RegExp(pattern), "i");

    var list_of_elements = document.querySelectorAll("body *");


    list_of_elements.forEach( element => {

        // Delete fixed and sticky elements
        var pos = getComputedStyle(element).position;

        if (pos === "fixed" || pos == "sticky") {
            element.remove();
        }

        // Remove banners by identifier
        banner_regexps.forEach( regexps => {
            if (regexps.test(element.id)) {
                element.remove();
            }
        });

        // Remove classnames that make banner containers
        var list_of_class_names = element.classList;

        list_of_class_names.forEach( class_name => {
            container_regexps.forEach( regexp => {
                if (regexp.test(class_name)) {
                    list_of_class_names.remove(class_name);
                }
            });
        });

    });
}


//---------------------------
//       Fix scrolling
//---------------------------

function fix_scrolling() {
    document.body.style.setProperty("position", "static", "important");
    document.body.style.setProperty("overflow", "scroll", "important");
    document.body.style.setProperty("margin-top", "0px", "important");
}



//---------------------------
//          Main
//---------------------------
remove_banners();
fix_scrolling();
