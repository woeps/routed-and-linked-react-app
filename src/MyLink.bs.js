'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");
var Router$RoutingExample = require("./Router.bs.js");

function MyLink(Props) {
  var routerPrefixHackOpt = Props.routerPrefixHack;
  var route = Props.route;
  var children = Props.children;
  var routerPrefixHack = routerPrefixHackOpt !== undefined ? routerPrefixHackOpt : "";
  var routerContext = React.useContext(Router$RoutingExample.context);
  var path = routerPrefixHack + routerContext.prefix + route;
  return React.createElement("a", {
              href: path,
              onClick: (function ($$event) {
                  if (!$$event.defaultPrevented && $$event.button === 0 && !$$event.altKey && !$$event.ctrlKey && !$$event.metaKey && !$$event.shiftKey) {
                    $$event.preventDefault();
                    return ReasonReactRouter.push(path);
                  }
                  
                })
            }, children);
}

var make = MyLink;

exports.make = make;
/* react Not a pure module */
