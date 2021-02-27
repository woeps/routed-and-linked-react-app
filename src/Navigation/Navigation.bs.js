'use strict';

var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var MyLink$RoutingExample = require("../MyLink.bs.js");

var ul_li_style = {
  display: "inline-block",
  margin: "0 0.3rem"
};

function Navigation(Props) {
  var links = Props.links;
  return React.createElement("ul", {
              style: {
                display: "block",
                margin: "1rem"
              }
            }, Belt_Array.mapWithIndexU(links, (function (idx, param) {
                    return React.createElement("li", {
                                key: idx.toString(),
                                style: ul_li_style
                              }, React.createElement(MyLink$RoutingExample.make, {
                                    route: param[0],
                                    children: param[1]
                                  }));
                  })));
}

var make = Navigation;

exports.ul_li_style = ul_li_style;
exports.make = make;
/* react Not a pure module */
