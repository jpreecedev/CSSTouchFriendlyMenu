(function () {

    if (Modernizr.touch) {
        var menus = document.querySelectorAll('nav ul li');
        var last;

        for (var i = 0; i < menus.length; i++) {
            menus[i].addEventListener("click", function () {

                //Close all menus
                if (last != this) {
                    remove(document.querySelectorAll("nav ul"), "hovered");
                    remove(document.querySelectorAll('nav ul li'), "focused");
                }

                //Apply focused style to menu item
                toggle(this, "focused");
                
                //Display the "drop down" menu
                toggle(this.querySelector("ul"), "hovered");

                last = this;
            });
        };

        var toggle = function (element, cssClass) {
            if (element == undefined || !element.classList) return;

            element.classList.toggle(cssClass);
        };

        var remove = function (element, cssClass) {

            var elements = getElements(element);

            for (var removeIndex = 0; removeIndex < elements.length; removeIndex++) {
                var item = elements[removeIndex];
                if (item.classList) {
                    item.classList.remove(cssClass);
                };
            }
        };

        var getElements = function (element) {
            if (!element.length)
                return [element];

            return element;
        };
    }
})();