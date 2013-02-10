/*
**  ComponentJS -- Component System for JavaScript <http://componentjs.com>
**  Copyright (c) 2009-2013 Ralf S. Engelschall <http://engelschall.com>
**
**  This Source Code Form is subject to the terms of the Mozilla Public
**  License, v. 2.0. If a copy of the MPL was not distributed with this
**  file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

/*  internal bootstrapping flag  */
_cs.bootstrapped = false;

/*  initialize library  */
$cs.bootstrap = function () {
    /*  sanity check environment  */
    if (_cs.bootstrapped)
        throw _cs.exception("bootstrap", "library already bootstrapped");

    /*  give plugins a chance to modify the component class definition  */
    _cs.hook("ComponentJS:bootstrap:comp:mixin",  "none", _cs.comp_mixins);
    _cs.hook("ComponentJS:bootstrap:comp:protos", "none", _cs.comp_protos);

    /*  lazy define component class
        (to give plugins a chance to have added mixins)  */
    _cs.comp = $cs.clazz({
        mixin:   _cs.comp_mixins,
        cons:    _cs.comp_cons,
        protos:  _cs.comp_protos
    });

    /*  create singleton component: root of the tree */
    _cs.root = new _cs.comp("<root>", null, []);

    /*  create singleton component: special return value on lookups */
    _cs.none = new _cs.comp("<none>", null, []);

    /*  reasonable error catching for _cs.none usage
        ATTENTION: method "exists" intentionally is missing here,
                   because it is required to be called on _cs.none, of course!  */
    var methods = [
        "call", "create", "destroy", "guard", "hook", "invoke",
        "latch", "link", "model", "observe", "plug", "property",
        "publish", "register", "service_enabled", "socket", "spool",
        "spooled", "state", "state_compare", "store", "subscribe",
        "subscribers", "touch", "unlatch", "unobserve", "unplug",
        "unregister", "unspool", "unsubscribe", "value", "values"
    ];
    _cs.foreach(methods, function (method) {
        _cs.none[method] = function () {
            throw _cs.exception(method, "no such component " +
                "(you are calling method \"" + method + "\" on component \"<none>\")");
        };
    });

    /*  give plugins a chance to bootstrap, too  */
    _cs.hook("ComponentJS:bootstrap", "none");

    /*  set new state  */
    _cs.bootstrapped = true;
    return;
};

/*  shutdown library  */
$cs.shutdown = function () {
    /*  sanity check environment  */
    if (!_cs.bootstrapped)
        throw _cs.exception("shutdown", "library still not bootstrapped");

    /*  give plugins a chance to shutdown, too  */
    _cs.hook("ComponentJS:shutdown", "none");

    /*  destroy singleton "<none>" component
        (its "destroy" method was intentionally killed above!)  */
    _cs.none = null;

    /*  destroy singleton "<root>" component
        (its "destroy" method will destroy while component tree!)  */
    _cs.root.destroy();
    _cs.root = null;

    /*  destroy component class  */
    _cs.comp = null;

    /*  set new state  */
    _cs.bootstrapped = false;
    return;
};

