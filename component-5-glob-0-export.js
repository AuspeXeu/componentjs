/*
**  ComponentJS -- Component System for JavaScript <http://componentjs.com>
**  Copyright (c) 2009-2013 Ralf S. Engelschall <http://engelschall.com>
**
**  This Source Code Form is subject to the terms of the Mozilla Public
**  License, v. 2.0. If a copy of the MPL was not distributed with this
**  file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

/*  export our global API...  */
if (   (   typeof EXPORTS === "object"
        && typeof GLOBAL.ComponentJS_export === "undefined")
    || (   typeof GLOBAL.ComponentJS_export !== "undefined"
        && GLOBAL.ComponentJS_export === "CommonJS"        ))
    /*  ...to scoped CommonJS environment  */
    EXPORTS.ComponentJS = $cs;
else if (   (   typeof DEFINE === "function"
             && typeof DEFINE.amd === "object"
             && typeof GLOBAL.ComponentJS_export === "undefined")
         || (   typeof GLOBAL.ComponentJS_export !== "undefined"
             && GLOBAL.ComponentJS_export === "AMD"             ))
    /*  ...to scoped AMD environment  */
    DEFINE("ComponentJS", function () {
        return $cs;
    });
else {
    /*  ...to regular global environment  */
    var name = "ComponentJS";

    /*  (with optionally configured symbol name via
        HTML tag <script data-symbol="<name>" [...]>)  */
    var s = DOCUMENT.getElementsByTagName("script");
    var regex = new RegExp("^(?:.*/)?component(?:-[0-9]+(?:\\.[0-9]+)*)?(?:-min)?\\.js$");
    for (var i = 0; i < s.length; i++) {
        var src = s[i].getAttribute("src");
        if (src !== null) {
            if (regex.exec(src)) {
                var data = s[i].getAttribute("data-symbol");
                if (data !== null) {
                    name = data;
                    break;
                }
            }
        }
    }

    $cs.symbol(name);
}

