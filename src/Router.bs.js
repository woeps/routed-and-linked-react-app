'use strict';

var React = require("react");
var Routes = require("@anuragsoni/routes/src/routes.bs.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Hooks$Isotrope = require("@tsnobip/isotrope/src/Hooks.bs.js");
var MyLinkContextProvider$RoutingExample = require("./MyLinkContextProvider.bs.js");

function Router(Props) {
  var notFoundOpt = Props.notFound;
  var routes = Props.routes;
  var notFound = notFoundOpt !== undefined ? Caml_option.valFromOption(notFoundOpt) : "No route matched!";
  var url = Hooks$Isotrope.useUrl(undefined, undefined);
  var linkContext = React.useContext(MyLinkContextProvider$RoutingExample.context);
  var target = linkContext.path === "" ? url : linkContext.path;
  return Belt_Option.getWithDefault(Routes.match$prime(routes, target), notFound);
}

var make = Router;

exports.make = make;
/* react Not a pure module */
