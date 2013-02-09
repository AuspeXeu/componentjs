/*
**  ComponentJS -- Component System for JavaScript <http://componentjs.com>
**  Copyright (c) 2009-2013 Ralf S. Engelschall <http://engelschall.com>
**
**  This Source Code Form is subject to the terms of the Mozilla Public
**  License, v. 2.0. If a copy of the MPL was not distributed with this
**  file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

(function (GLOBAL, DOCUMENT, EXPORTS, DEFINE) {

    /*
    **  GLOBAL LIBRARY NAMESPACING
    */

    $include("component-0-glob-0-ns.js");
    $include("component-0-glob-1-version.js");

    /*
    **  COMMON UTILITY FUNCTIONALITIES
    */

    $include("component-1-util-0-runtime.js");
    $include("component-1-util-1-object.js");
    $include("component-1-util-2-array.js");
    $include("component-1-util-3-params.js");
    $include("component-1-util-4-encoding.js");
    $include("component-1-util-5-identifier.js");
    $include("component-1-util-6-proxy.js");
    $include("component-1-util-7-attribute.js");
    $include("component-1-util-8-hook.js");

    /*
    **  CLASS SYSTEM
    */

    $include("component-2-clzz-0-common.js");
    $include("component-2-clzz-1-api.js");

    /*
    **  GENERIC PATTERN TRAITS
    */

    $include("component-3-patt-0-base.js");
    $include("component-3-patt-1-tree.js");
    $include("component-3-patt-2-config.js");
    $include("component-3-patt-3-spool.js");
    $include("component-3-patt-4-property.js");
    $include("component-3-patt-5-spec.js");
    $include("component-3-patt-6-observable.js");
    $include("component-3-patt-7-event.js");
    $include("component-3-patt-8-cmd.js");
    $include("component-3-patt-9-state.js");
    $include("component-3-patt-A-service.js");
    $include("component-3-patt-B-shadow.js");
    $include("component-3-patt-C-socket.js");
    $include("component-3-patt-D-hook.js");
    $include("component-3-patt-E-marker.js");
    $include("component-3-patt-F-store.js");
    $include("component-3-patt-G-model.js");

    /*
    **  COMPONENT API
    */

    $include("component-4-comp-0-define.js");
    $include("component-4-comp-1-bootstrap.js");
    $include("component-4-comp-2-lookup.js");
    $include("component-4-comp-3-manage.js");
    $include("component-4-comp-4-states.js");

    /*
    **  GLOBAL LIBRARY EXPORTING
    */

    $include("component-5-glob-0-export.js");
    $include("component-5-glob-1-plugin.js");

})(
    /*global window:false */
    /*global global:false */
    /*global document:false */
    /*global exports:false */
    /*global define:false */
    ( typeof window   !== "undefined"
        ? window
        : ( typeof global !== "undefined"
            ? global
            : ( typeof this !== "undefined"
                ? this
                : {} ))),
    ( typeof document !== "undefined"
        ? document
        : ( typeof this !== "undefined"
            ? this 
            : {} )),
    ( typeof exports === "object"
        ? exports
        : undefined ),
    ( typeof define === "function"
        ? define
        : undefined )
);

