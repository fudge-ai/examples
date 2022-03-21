# Fudge Next.js Example

This project shows you how to install Fudge on your Next.js app.

## Test Fudge using this project

1. Clone this repository

   ```bash
   git clone git@github.com:fudge-ai/examples.git fudge-examples
   ```

1. Install dependencies

   ```bash
   cd fudge-examples/nextjs/
   yarn
   ```

1. [Sign up](https://app.fudge.ai/login) for a free Fudge account

1. Copy your team token

1. Replace `YOUR_FUDGE_TEAM_TOKEN` in [pages/\_app.js](./pages/_app.js#L15) with your team token

1. Run `yarn dev` to run the example app

1. Try to add a product to the cart

1. Open the [Fudge Dashboard](https://app.fudge.ai) to see the session

## Set up Fudge in your own Next.js app

1. [Sign up](https://app.fudge.ai/login) for a free Fudge account

1. Copy your team token

1. Install the Fudge SDK

   ```bash
   yarn add @fudge-ai/nextjs
   # or
   npm i @fudge-ai/nextjs
   ```

1. In your [`_app.js` / `app.tsx`](./pages/_app.js#L10), add the following code:

   ```js
   import Fudge, {FudgeWrapper} from '@fudge-ai/nextjs'

   Fudge.init('YOUR_TEAM_TOKEN_HERE')
   ```

   Real example [here](./pages/_app.js#L10)

1. In your [`_app.js` / `app.tsx`](./pages/_app.js#L21), wrap your app with FudgeWrapper:

   ```jsx
   import Fudge, {FudgeWrapper} from '@fudge-ai/nextjs'

   function MyApp({Component, pageProps}) {
     return <FudgeWrapper>{/* Your App */}</FudgeWrapper>
   }
   ```

   Real example [here](./pages/_app.js#L21)

1. Wrap any [API Routes](./pages/api/cart.ts#L42) (routes under `pages/api`) with the `withFudge` middleware:

   ```js
   import {withFudge} from '@fudge-ai/nextjs'

   // ...handler

   export default withFudge(handler)
   ```

   Real example [here](./pages/api/cart.ts#L42)

1. Run your app locally and you'll start to see sessions appear on the [Fudge Dashboard](https://app.fudge.ai).

## Need help or have questions?

[Email](mailto:jacques@fudge.ai) or [DM](https://twitter.com/jacques_codes) me (Jacques, co-founder of Fudge :)

Or book a [15 minute call](https://meetings.hubspot.com/jacques-blom) with me here.
