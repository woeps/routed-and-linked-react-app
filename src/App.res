/* This is the main ui which places the individual uis.
 * Individual UIs:
 *  - Area A
 *  - Area B
 */
let links = [
  (R.link(Main_Targets.root()), "Home"),
  (R.link(Main_Targets.areaA(), ""), "Area A"),
  (R.link(Main_Targets.areaB(), ""), "Area B"),
]
@react.component
let make = () => {
  <>
    <h1> {React.string("Routing Experiment")} </h1>
    <Navigation links />
    <Router routes=Main_Routes.routes />
  </>
}
