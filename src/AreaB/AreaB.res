@react.component
let make = () => {
  <>
    <h2> {R.s("Area B")} </h2>
    <Router routes={Routes.one_of(list{})} />
  </>
}
