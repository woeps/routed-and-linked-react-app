open! MyRoutes

let root = () => empty

let areaA = () => s("a")->finalSlash(wildcard)
let areaB = () => s("b")->finalSlash(wildcard)
