chordpro-loader
===============

chordpro-loader for webpack using a fork of [chordprojs](https://github.com/gilyes/chordprojs).

## Installation

`yarn add chordpro-loader`

## Usage

This loader uses a fork of [chordprojs](https://github.com/gilyes/chordprojs) to transform [chordpro](https://www.chordpro.org) files into the JSON format:
```json
{
  "html": "..unstyled html..",
  "parseResult": {}
}
```
Here is a default style to use with the generated html [chordprojs.css](https://github.com/oztexanJAM/chordprojs/blob/master/lib/chordpro.css)

It's probably best served in conjunction with [json-loader](https://github.com/webpack/json-loader)

### Webpack 2
```javascript
{
    module: {
        rules: [{
                test: /\.(pro|cho|chordpro)$/,
                use: [
                    {
                        loader: "json-loader"
                    },
                    {
                        loader: "chordpro-loader",
                    }
                ]
            }]
    }
}
```

## License

[MIT](https://github.com/gilyes/chordprojs/blob/master/LICENSE)
