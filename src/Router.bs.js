'use strict';

var React = require("react");
var Routes = require("@anuragsoni/routes/src/routes.bs.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Hooks$Isotrope = require("@tsnobip/isotrope/src/Hooks.bs.js");

var context = React.createContext({
      prefix: "",
      path: ""
    });

var provider = context.Provider;

function Router(Props) {
  var pathPrefixOpt = Props.pathPrefix;
  var pathOpt = Props.path;
  var notFoundOpt = Props.notFound;
  var routes = Props.routes;
  var pathPrefix = pathPrefixOpt !== undefined ? pathPrefixOpt : "";
  var path = pathOpt !== undefined ? pathOpt : Hooks$Isotrope.useUrl(undefined, undefined);
  var notFound = notFoundOpt !== undefined ? Caml_option.valFromOption(notFoundOpt) : "No route matched!";
  var routedElement = Belt_Option.getWithDefault(Routes.match$prime(routes, path), notFound);
  return React.createElement(provider, {
              value: {
                prefix: pathPrefix + "",
                path: path
              },
              children: routedElement
            });
}

var make = Router;

exports.context = context;
exports.provider = provider;
exports.make = make;
/* context Not a pure module */
