type context = {prefix: string, path: string}
let context = React.createContext({prefix: "", path: ""})
let provider = React.Context.provider(context)

@react.component
let make = (
  ~pathPrefix: string="",
  ~path: string=Isotrope.Hooks.useUrl(),
  ~notFound: React.element=R.s("No route matched!"),
  ~routes: Routes.router<React.element>,
) => {
  let routedElement = Routes.match'(routes, ~target=path)->Belt.Option.getWithDefault(notFound)
  let matchedPath = "" // FIXME: This needs to be set to the already matched path of the rotuer
  React.createElement(
    provider,
    {"value": {prefix: pathPrefix ++ matchedPath, path: path}, "children": routedElement},
  )
}
