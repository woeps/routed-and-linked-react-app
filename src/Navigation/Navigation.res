let ul_li_style = {ReactDOMStyle.make(~display="inline-block", ~margin="0 0.3rem", ())}

@react.component
let make = (~links: array<(string, string)>, ~routerPrefixHack: string="") => {
  // FIXME: routePrefixHack-prop needs to be removed once the router is able to
  //      detect the already matched part of the path
  //      this is only a temprary workaround
  <ul style={ReactDOMStyle.make(~display="block", ~margin="1rem", ())}>
    {links
    ->Belt.Array.mapWithIndexU((. idx, (route, label)) =>
      <li style=ul_li_style key={idx->Js.Int.toString}>
        <MyLink routerPrefixHack route> {React.string(label)} </MyLink>
      </li>
    )
    ->React.array}
  </ul>
}
