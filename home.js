"use strict";
var ajaxLib_1 = require("./ajaxLib");
var Home;
(function (Home) {
    var HomeContainer = (function () {
        function HomeContainer(value) {
            var animal = new ajaxLib_1.AjaxContainer();
            var el = document.getElementById('grid1');
            $(el).css({ "color": "blue" });
        }
        return HomeContainer;
    }());
    Home.HomeContainer = HomeContainer;
})(Home || (Home = {}));
window.onload = function () {
    var object1 = new Home.HomeContainer("ram");
};
//# sourceMappingURL=home.js.map