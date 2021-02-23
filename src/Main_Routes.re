open! Routes;
module T = Main_Targets;

let root = () => T.root() @--> <Welcome />;

let areaA = () =>
  T.areaA()
  @--> (
    wildcard =>
      <AreaA matchedPath={sprintf(T.areaA(), "")} unmatchedPath=wildcard />
  );

let areaB = () =>
  T.areaB()
  @--> (
    wildcard =>
      <AreaB matchedPath={sprintf(T.areaB(), "")} unmatchedPath=wildcard />
  );

let routes = one_of([root(), areaA(), areaB()]);
