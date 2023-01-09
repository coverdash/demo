# coverdash-demo

<img align="right" width="150" height="150" alt="Logo" src="https://coverdash.s3.amazonaws.com/logo/coverdash_logo_shield_green_150x150_padding.png">

Coverdash Demo React Project

[![NPM version][npm]][npm-url]

[npm]: https://img.shields.io/static/v1?label=npm&message=v0.0.35&color=blue
[npm-url]: https://www.npmjs.com/package/react-chartjs-2

<br />
<a href="#quickstart">Quickstart</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#screenshot">Screenshot</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#props">Props</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://docs.coverdash.com">Docs</a>
<br />

<hr />

## Quickstart

Install this library with peer dependencies:

```bash
pnpm add @coverdash/quotes
# or
yarn add @coverdash/quotes
# or
npm i @coverdash/quotes
```

Then, import and use the component:

```jsx
import CoverdashQuotes from "@coverdash/quotes";

<CoverdashQuotes license="xxxx-xxx-xxxx-xxx-xxxx-xxx-xxxx" />
```

## Screenshot

<img width="1200" alt="image" src="https://user-images.githubusercontent.com/17967465/211365245-02f8f4e1-619a-4b1b-afaf-337a2a30116f.png">

## Props

| Prop        | Required/Optional    | Default | Description |
| ----------- | ----------- | ----------- | ----------- |
| `license`   | `Required`  | - | Required to enable the quote experience |
| `allowScroll`   | `Optional`  | `false` | Allows scrolling inside the component |
| `autoResize`   | `Optional`  | `false` | Auto resizes the component to match the height of the inner webpage |
| `reset`   | `Optional`  | `false` | Trigger reset of the quote experience whenever the parent page is reloaded |

## Links

- [About Coverdash](https://www.coverdash.com/about)
