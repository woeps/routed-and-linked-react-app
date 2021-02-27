let ul_li_style = {ReactDOMStyle.make(~display="inline-block", ~margin="0 0.3rem", ())}

@react.component
let make = (~links: array<(string, string)>) => {
  <ul style={ReactDOMStyle.make(~display="block", ~margin="1rem", ())}>
    {links
    ->Belt.Array.mapWithIndexU((. idx, (route, label)) =>
      <li style=ul_li_style key={idx->Js.Int.toString}>
        <MyLink route> {React.string(label)} </MyLink>
      </li>
    )
    ->React.array}
  </ul>
}
