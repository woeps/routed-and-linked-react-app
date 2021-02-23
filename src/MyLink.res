/*
 * Heavily inspired from Alexey Fedoseev's MinimaHQ /safe-routing-blog-app-example
 */

/**
 * The Link component allows you to navigate to the routes defined in your application.
 */
@react.component
let make = (~routerPrefixHack: string="", ~route, ~children) => {
  // FIXME: routerPrefixHack-prop needs to be removed once the router is able to
  //      detect the already matched part of the path
  //      this is only a temprary workaround
  let routerContext = React.useContext(Router.context)
  let path = routerPrefixHack ++ routerContext.prefix ++ route
  <a
    href=path
    onClick={event =>
      if (
        !(event->ReactEvent.Mouse.defaultPrevented) &&
        event->ReactEvent.Mouse.button == 0 &&
        !(event->ReactEvent.Mouse.altKey) &&
        !(event->ReactEvent.Mouse.ctrlKey) &&
        !(event->ReactEvent.Mouse.metaKey) &&
        !(event->ReactEvent.Mouse.shiftKey)
      ) {
        event->ReactEvent.Mouse.preventDefault
        path->ReasonReactRouter.push
      }}>
    children
  </a>
}
