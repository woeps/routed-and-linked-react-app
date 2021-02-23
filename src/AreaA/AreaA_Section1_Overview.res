let route = R.link(AreaA_Targets.section1Details(), "someId")
@react.component
let make = () => {
  <>
    <h3> {R.s("AreaA:Section1:Overview")} </h3>
    <p> {R.s("This would usually show a list of many items")} </p>
    // NOTE: Links "inside" of a Router don't need the routerPrefixHack,
    //       since it was already passed to the router above and is therefore
    //       held in the context.
    <MyLink route> {R.s("Link to view a single entry in the list.")} </MyLink>
  </>
}
