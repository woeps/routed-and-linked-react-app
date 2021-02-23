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

let links = [(R.link(AreaA_Targets.section1Overview()), "Section 1")]

@react.component
let make = (~matchedPath: string, ~unmatchedPath: string) => {
  <>
    <h2>
      {R.s("Area A[matchedPath=" ++ matchedPath ++ " | unmatchedPath=" ++ unmatchedPath ++ "]")}
    </h2>
    <Navigation links routerPrefixHack=matchedPath />
    <Router
      pathPrefix=matchedPath
      path=unmatchedPath
      routes=AreaA_Routes.routes
      notFound={R.s("Please select a section in the menu.")}
    />
  </>
}
