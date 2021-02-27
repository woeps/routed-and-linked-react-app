type context = {prefix: string, path: string}
let context = React.createContext({prefix: "", path: ""})
let provider = React.Context.provider(context)

@react.component
let make = (~value: context, ~children) => {
  React.createElement(provider, {"value": value, "children": children})
}
