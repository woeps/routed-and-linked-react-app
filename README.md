# Routed and linked React app

This example react app shall showcase the usage of anuragsoni/routes and tsnobip/isotrope.

A `Router` and `Link` component should automatically handle creation of correct links in nested Routers.

## How routing and linking works
### `MyRoutes.ml`

`MyRoutes.ml` `includes Routes` and adds the following things:

- alias `one_of_list = Routes.one_of`
- add `one_of: 'b route array -> 'b router`
- aliases for infix operators:
	- `slash = (/)`
	- `append = (/~)`
	- `finalSlash = (/?)`
	- `finalSlashRequired = (//?)`
	- `handle = (@-->)`
- alias `link = sprintf`
- add react specific `sub: React.element -> Routes.Parts.t -> React.element` function to conviniently enable sub-routing and facilitate linking.
- add `handlesub` function to simplify calls to `target @--> (sub children)`

### Coordination of React Components for better Linking and Sub-Routing
The `sub` function wraps the passed children argument with a `MyLinkContextProvider` component. The `MyLinkContextProvider` contains a contextProvider which provides the context of the routed path: A record holding the path that matched exactly and the path which matched the wildcard.

The `Router` component wraps the `Routes.match'` function in a React component and facilitates sub-routing by accessing the context and using the appropriate (sub-) path.

The `MyLink` component can be used to create links inside of the (sub-) routing space.

### Routing Example in this repo

Main Routes:
- `empty @--> <Welcome/>`
- `s("a") /? wildcard @--> sub(<AreaA />)`
- `s("b") /? wildcard @--> sub(<AreaB />)`

Sub Routes: (Area A):
- `s("1") /? nil @--> <AreaA_Section1_Overview />`
- `s("1") / str /? nil @--> (id => <AreaA_Section1_Details id />)`

`AreaA` component as a (Sub-) Router which just takes `AreaA_Routes.routes` and uses `MylinkContextProvider.context` to facilitate generation of correct full length links. If the context is "empty" the full path will be passed to `Routes.match'`, otherwise only the wildcard match will be used.

`MyLink` component takes a string (ideally by calling `Routes.sprintf someTarget`) and combines this with the context's content to generate correct links inside it's (Sub-) Routing space.

## How to start

### GitHub Pages

This example app is deployed on GitHub Pages:  
https://woeps.github.io/routed-and-linked-react-app/
### Locally

- clone this repo
- run `npm install`
- run `npm run server`
