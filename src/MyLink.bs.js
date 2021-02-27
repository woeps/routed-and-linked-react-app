'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");
var MyLinkContextProvider$RoutingExample = require("./MyLinkContextProvider.bs.js");

function MyLink(Props) {
  var route = Props.route;
  var children = Props.children;
  var linkContext = React.useContext(MyLinkContextProvider$RoutingExample.context);
  var path = linkContext.prefix + route;
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
