'use strict';

var React = require("react");

var context = React.createContext({
      prefix: "",
      path: ""
    });

var provider = context.Provider;

function MyLinkContextProvider(Props) {
  var value = Props.value;
  var children = Props.children;
  return React.createElement(provider, {
              value: value,
              children: children
            });
}

var make = MyLinkContextProvider;

exports.context = context;
exports.provider = provider;
exports.make = make;
/* context Not a pure module */
