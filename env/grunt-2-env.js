/*
**  ComponentJS -- Component System for JavaScript <http://componentjs.com>
**  Copyright (c) 2009-2014 Ralf S. Engelschall <http://engelschall.com>
**
**  This Source Code Form is subject to the terms of the Mozilla Public
**  License (MPL), version 2.0. If a copy of the MPL was not distributed
**  with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

/* global module: true */
module.exports = function (grunt) {
    /*  build environment  */
    grunt.extendConfig({
        jshint: {
            "env": [ "Gruntfile.js", "Gruntfile.d/*.js" ]
        },
        eslint: {
            "env": [ "Gruntfile.js", "Gruntfile.d/*.js" ]
        },
        jsonlint: {
            "env": {
                src: [ "jshint.json", "eslint.json" ]
            }
        },
        mkdir: {
            "env": {
                options: {
                    create: [ "bld" ]
                }
            }
        },
        clean: {
            "env": [ "bld", "cov" ]
        }
    });

    /*  common task aliasing  */
    grunt.registerTask("env-build", [
        "jshint:env",
        "eslint:env",
        "jsonlint:env",
        "mkdir:env"
    ]);
    grunt.registerTask("env-clean", [
        "clean:env"
    ]);
};

