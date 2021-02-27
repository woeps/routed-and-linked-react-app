/* This is the entry point for the sub ui of Area A.
 * This holds the following views:
 *  - Area A
 *      - Section 1
 *        - overview
 *        - details
 *      - Section 2
 *          - overview
 *          - details
 */

let links = [(MyRoutes.link(AreaA_Targets.section1Overview()), "Section 1")]

@react.component
let make = () => {
  <>
    <h2>
      {R.s("Area A")}
    </h2>
    <Navigation links/>
    <Router
      routes=AreaA_Routes.routes
      notFound={R.s("Please select a section in the menu.")}
    />
  </>
}
