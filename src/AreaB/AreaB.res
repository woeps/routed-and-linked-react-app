@react.component
let make = (~matchedPath: string, ~unmatchedPath: string) => {
  <>
    <h2> {R.s("Area B")} </h2>
    <Router pathPrefix=matchedPath path=unmatchedPath routes={Routes.one_of(list{})} />
  </>
}
