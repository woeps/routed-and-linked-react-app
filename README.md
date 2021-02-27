# Routed and linked React app

This example react app shall showcase the usage of anuragsoni/routes and tsnobip/isotrope.

A `Router` and `Link` component should automatically handle creation of correct links in nested Routers.

## Possible improvements

Currently there is no way in the routes library to retrieve the matched path before a `wildcard` path element. This makes the routes repetative and errorprone. see: https://github.com/woeps/routed-and-linked-react-app/blob/a0265b1299dcf392e7064a8e40675a2ff347f674/src/Main_Routes.re#L10

Once this gets possible, the [Router](https://github.com/woeps/routed-and-linked-react-app/blob/a0265b1299dcf392e7064a8e40675a2ff347f674/src/Router.res#L13) component will keep track of already matched paths. Therefore the [Link](https://github.com/woeps/routed-and-linked-react-app/blob/a0265b1299dcf392e7064a8e40675a2ff347f674/src/MyLink.res#L14) component is able to generate correct paths.  
All this could be achieved without passing props of `matchedPath` and `unmatchedPath` or `routerPrefixHack` around.

anuragsoni/routes#129 introduces these necessary changes. Checkout the branch `detailed-wildcard` to see usage of these improvements.

## How to start

### GitHub Pages

This example from the branch `detailed-wildcard` is deployed on GitHub Pages:  
https://woeps.github.io/routed-and-linked-react-app/

### Locally

- clone this repo
- run `npm install`
- run `npm run server`
