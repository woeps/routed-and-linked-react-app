'use strict';

var Routes = require("@anuragsoni/routes/src/routes.bs.js");

function section1Overview(param) {
  return Routes.$slash$question((function (param) {
                return Routes.s("1", param);
              }), Routes.nil);
}

function section1Details(param) {
  return Routes.$slash$question((function (param) {
                return Routes.$slash((function (param) {
                              return Routes.s("1", param);
                            }), Routes.str, param);
              }), Routes.nil);
}

function section2Overview(param) {
  return Routes.$slash$question((function (param) {
                return Routes.s("2", param);
              }), Routes.nil);
}

function section2Details(param) {
  return Routes.$slash$question((function (param) {
                return Routes.$slash((function (param) {
                              return Routes.s("2", param);
                            }), Routes.str, param);
              }), Routes.nil);
}

exports.section1Overview = section1Overview;
exports.section1Details = section1Details;
exports.section2Overview = section2Overview;
exports.section2Details = section2Details;
/* Routes Not a pure module */
