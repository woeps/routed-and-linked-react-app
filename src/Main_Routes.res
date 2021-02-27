open! MyRoutes
module T = Main_Targets

let root = () => T.root()->handle(<Welcome />)

let areaA = () => T.areaA()->handleSub(<AreaA />)

let areaB = () => T.areaB()->handleSub(<AreaB />)

let routes = one_of([root(), areaA(), areaB()])
