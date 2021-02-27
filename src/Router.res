@react.component
let make = (
  ~notFound: React.element=R.s("No route matched!"),
  ~routes: Routes.router<React.element>,
) => {
  let url = Isotrope.Hooks.useUrl();
  let linkContext = React.useContext(MyLinkContextProvider.context)
  let target = (linkContext.path == "")? url : linkContext.path;
  Routes.match'(routes, ~target)->Belt.Option.getWithDefault(notFound)
}
