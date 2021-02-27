'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Routes = require("@anuragsoni/routes/src/routes.bs.js");
var MyLinkContextProvider$RoutingExample = require("./MyLinkContextProvider.bs.js");

function one_of(routes) {
  return Routes.one_of($$Array.to_list(routes));
}

function sub(children, parts) {
  return MyLinkContextProvider$RoutingExample.make({
              value: {
                prefix: "/" + Routes.Parts.prefix(parts),
                path: "/" + Routes.Parts.wildcard_match(parts)
              },
              children: children
            });
}

function handleSub(target, children) {
  return Routes.$at$neg$neg$great(target, (function (param) {
                return sub(children, param);
              }));
}

var Parts = Routes.Parts;

var $$int = Routes.$$int;

var int32 = Routes.int32;

var int64 = Routes.int64;

var str = Routes.str;

var bool = Routes.bool;

var s = Routes.s;

var wildcard = Routes.wildcard;

var nil = Routes.nil;

var empty = Routes.empty;

var pattern = Routes.pattern;

var custom = Routes.custom;

var $slash = Routes.$slash;

var $slash$tilde = Routes.$slash$tilde;

var $slash$question = Routes.$slash$question;

var $slash$slash$question = Routes.$slash$slash$question;

var $at$neg$neg$great = Routes.$at$neg$neg$great;

var map = Routes.map;

var match$prime = Routes.match$prime;

var ksprintf = Routes.ksprintf;

var sprintf = Routes.sprintf;

var pp_target = Routes.pp_target;

var pp_route = Routes.pp_route;

var add_route = Routes.add_route;

var union = Routes.union;

var one_of_list = Routes.one_of;

var slash = Routes.$slash;

var append = Routes.$slash$tilde;

var finalSlash = Routes.$slash$question;

var finalSlashRequired = Routes.$slash$slash$question;

var handle = Routes.$at$neg$neg$great;

var link = Routes.sprintf;

exports.Parts = Parts;
exports.$$int = $$int;
exports.int32 = int32;
exports.int64 = int64;
exports.str = str;
exports.bool = bool;
exports.s = s;
exports.wildcard = wildcard;
exports.nil = nil;
exports.empty = empty;
exports.pattern = pattern;
exports.custom = custom;
exports.$slash = $slash;
exports.$slash$tilde = $slash$tilde;
exports.$slash$question = $slash$question;
exports.$slash$slash$question = $slash$slash$question;
exports.$at$neg$neg$great = $at$neg$neg$great;
exports.map = map;
exports.match$prime = match$prime;
exports.ksprintf = ksprintf;
exports.sprintf = sprintf;
exports.pp_target = pp_target;
exports.pp_route = pp_route;
exports.add_route = add_route;
exports.union = union;
exports.one_of_list = one_of_list;
exports.one_of = one_of;
exports.slash = slash;
exports.append = append;
exports.finalSlash = finalSlash;
exports.finalSlashRequired = finalSlashRequired;
exports.handle = handle;
exports.link = link;
exports.sub = sub;
exports.handleSub = handleSub;
/* Routes Not a pure module */
