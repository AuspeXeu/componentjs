/*
**  ComponentJS -- Component System for JavaScript <http://componentjs.com>
**  Copyright (c) 2009-2012 Ralf S. Engelschall <http://engelschall.com>
**
**  This Source Code Form is subject to the terms of the Mozilla Public
**  License, v. 2.0. If a copy of the MPL was not distributed with this
**  file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

/*  component class definition  */
_cs.comp = $cs.clazz({
    mixin: [
        $cs.pattern.id,
        $cs.pattern.name,
        $cs.pattern.data,
        $cs.pattern.tree,
        $cs.pattern.config,
        $cs.pattern.state,
        $cs.pattern.service,
        $cs.pattern.eventing,
        $cs.pattern.property,
        $cs.pattern.shadow,
        $cs.pattern.socket
    ],
    constructor: function (name, parent, children) {
        /*  component marking  */
        _cs.annotation(this, "type", "component");
        if (_cs.istypeof(name) !== "string")
            name = "<unknown>";
        this.name(name);

        /*  component tree and object attachment  */
        this.parent(_cs.istypeof(parent) === "object" ? parent : null);
        this.children(_cs.istypeof(children) === "array" ? children : []);
    },
    protos: {
        /*  create a sub-component  */
        create: function (name, clazz) {
            return $cs.create(this, name, clazz);
        },

        /*  destroy this or a sub-component  */
        destroy: function (name) {
            var comp = _cs.isdefined(name) ? $cs(this, name) : $cs(this);
            $cs.destroy(comp.path("/"));
        },

        /*  check for existance of a component  */
        exists: function () {
            return (this.name() !== "<none>");
        },

        /*  dump the component tree starting at component  */
        dump: function () {
            var dump = this.tree_dump(function (comp) {
                return "state=" + comp.state() + " " +
                       "obj=" + (comp.obj() !== null ? "yes" : "no") + " " +
                       "cfg=" + comp.cfg_dump();
            });
            _cs.log("COMPONENT TREE DUMP:\n" + dump);
        }
    }
});

