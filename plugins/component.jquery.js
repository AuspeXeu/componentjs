/*
**  ComponentJS -- Component System for JavaScript <http://componentjs.com>
**  Copyright (c) 2009-2013 Ralf S. Engelschall <http://engelschall.com>
**
**  This Source Code Form is subject to the terms of the Mozilla Public
**  License, v. 2.0. If a copy of the MPL was not distributed with this
**  file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

/*
 *  This is a small ComponentJS plugin which adds some jQuery-specific
 *  functionality to the otherwise fully UI toolkit independent ComponentJS
 *  core framework.
 */

ComponentJS.plugin(function (_cs, $cs, GLOBAL, DOCUMENT) {
    /*
     *  SPECIALIZED JQUERY SOCKET SUPPORT
     */

    /*  define the extra trait for components  */
    var trait = $cs.trait({
        protos: {
            socket: function () {
                /*  determine parameters  */
                var params = $cs.params("socket", arguments, {
                    name:   {         def: "default"       },
                    scope:  {         def: null            },
                    ctx:    { pos: 0, def: null, req: true },
                    plug:   { pos: 1, def: null            }, /*  removed "req: true"  */
                    unplug: { pos: 2, def: null            }, /*  removed "req: true"  */
                    type:   {         def: "jquery"        }  /*  added  */
                });

                /*  create pass-through information  */
                var arg = _cs.extend({}, params);
                delete arg.type;

                /*  optionally change behaviour  */
                if (params.type === "jquery") {
                    /*  provide specialized jQuery socket functionality  */
                    arg.plug   = function (el) { $(this).append(el); };
                    arg.unplug = function (el) { $(el).remove();     };
                }

                /*  pass-through execution to original/base method  */
                return this.base(arg);
            }
        }
    });

    /*  mixin this trait to all components  */
    _cs.latch("ComponentJS:bootstrap:comp:mixin", function (mixins) {
        mixins.push(trait);
    });
});
