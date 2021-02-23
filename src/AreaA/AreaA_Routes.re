open! Routes;
module T = AreaA_Targets;

let section1Overview = () =>
  T.section1Overview() @--> <AreaA_Section1_Overview />;
let section1Details = () =>
  T.section1Details() @--> (id => <AreaA_Section1_Details id />);

let routes = one_of([section1Overview(), section1Details()]);
