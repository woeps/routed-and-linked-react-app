'use strict';

var React = require("react");
var Routes = require("@anuragsoni/routes/src/routes.bs.js");
var AreaA_Targets$RoutingExample = require("./AreaA_Targets.bs.js");
var AreaA_Section1_Details$RoutingExample = require("./AreaA_Section1_Details.bs.js");
var AreaA_Section1_Overview$RoutingExample = require("./AreaA_Section1_Overview.bs.js");

function section1Overview(param) {
  return Routes.$at$neg$neg$great(AreaA_Targets$RoutingExample.section1Overview(undefined), React.createElement(AreaA_Section1_Overview$RoutingExample.make, {}));
}

function section1Details(param) {
  return Routes.$at$neg$neg$great(AreaA_Targets$RoutingExample.section1Details(undefined), (function (id) {
                return React.createElement(AreaA_Section1_Details$RoutingExample.make, {
                            id: id
                          });
              }));
}

var routes = Routes.one_of({
      hd: section1Overview(undefined),
      tl: {
        hd: section1Details(undefined),
        tl: /* [] */0
      }
    });

var T;

exports.T = T;
exports.section1Overview = section1Overview;
exports.section1Details = section1Details;
exports.routes = routes;
/* routes Not a pure module */
