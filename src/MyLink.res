/*
 * Heavily inspired from Alexey Fedoseev's MinimaHQ /safe-routing-blog-app-example
 */

/**
 * The Link component allows you to navigate to the routes defined in your application.
 */
@react.component
let make = (~route, ~children) => {
  let linkContext = React.useContext(MyLinkContextProvider.context)
  let path = linkContext.prefix ++ route

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
