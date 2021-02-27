include Routes
(* ADAPTIONS FOR JS TARGET *)
(* NOTE:  since Routes.route is an abstract type it's not possible
          to implement this function more effective outside of Routes *)
let one_of_list = one_of
let one_of routes = one_of (Array.to_list routes)

(* ALIASES *)
let slash = (/)
let append = (/~)
let finalSlash = (/?)
let finalSlashRequired = (//?)
let handle = (@-->)

let link = sprintf

(* REACT SPECIFIC *)
let sub (children : React.element) parts =
    let props = MyLinkContextProvider.makeProps
        ~value:{
               prefix =
                 (("/") ^
                    (Routes.Parts.prefix parts));
               path =
                 (("/")) ^
                    (Routes.Parts.wildcard_match parts)
             }
        ~children:children
        ()
    in
    (MyLinkContextProvider.make props)


let handleSub target children = target @-->(sub children)
