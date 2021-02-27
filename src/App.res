/* This is the main ui which places the individual uis.
 * Individual UIs:
 *  - Area A
 *  - Area B
 */
let links = [
  (MyRoutes.link(Main_Targets.root()), "Home"),
  (MyRoutes.link(Main_Targets.areaA(), Routes.Parts.of_parts("")), "Area A"),
  (MyRoutes.link(Main_Targets.areaB(), Routes.Parts.of_parts("")), "Area B"),
]
@react.component
let make = () => {
  <>
    <h1> {React.string("Routing Experiment - Detailed Wildcard")} </h1>
    <Navigation links />
    <Router routes=Main_Routes.routes />
  </>
}
