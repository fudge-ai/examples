# Fudge Next.js Example

This project shows you how to install Fudge on your Next.js app.

## Test Fudge using this project

1. Clone this repository

    ```bash
    git@github.com:fudge-ai/examples.git
    ```

1. Install dependencies

    ```bash
    cd nextjs/
    yarn
    ```

1. [Sign up](https://app.fudge.ai/login) for a free Fudge account

1. Copy your team token

1. Add it to the `.env` file in this project

## Set up Fudge in your own Next.js app

1. [Sign up](https://app.fudge.ai/login) for a free Fudge account

1. Copy your team token

1. Install the Fudge SDK

    ```bash
    yarn add @fudge-ai/nextjs
    ```

1. In your `_app.js` / `app.tsx` file, add the following code:

    ```js
    import Fudge from "@fudge-ai/nextjs"

    Fudge.init("YOUR_TEAM_TOKEN_HERE")
    ```

1. Wrap any API Routes (routes under `pages/api`) with the `withFudge` middleware:

    ```js
    import { withFudge } from "@fudge-ai/nextjs"

    // ...handler

    export default withFudge(handler)
    ```

    Here is a real-world example.

1. Run your app locally and you'll start to see sessions appear on the [Fudge dashboard](https://app.fudge.ai).

## Need help or have questions?

[Email](mailto:jacques@fudge.ai) or [DM](https://twitter.com/jacques_codes) me (Jacques, co-founder of Fudge :)

Or book a [15 minute call](https://meetings.hubspot.com/jacques-blom) with me here.
