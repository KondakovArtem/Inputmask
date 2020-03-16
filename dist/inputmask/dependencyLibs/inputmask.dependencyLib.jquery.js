/*!
* dependencyLibs/inputmask.dependencyLib.jquery.js
* https://github.com/ne3Vubeki/Inputmask
* Copyright (c) 2010 - 2020 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.10-beta.3
*/

(function(factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        window.dependencyLib = factory(jQuery);
    }
})(function($) {
    return $;
});