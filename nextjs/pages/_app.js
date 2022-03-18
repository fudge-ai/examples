import Script from "next/script"
import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import "@/styles/globals.css"
import { QueryClient, QueryClientProvider } from "react-query"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Fudge from "@fudge-ai/nextjs"

if (process.env.NEXT_PUBLIC_FUDGE_KEY) {
    console.log("Fudge", Fudge)
    Fudge.init(process.env.NEXT_PUBLIC_FUDGE_KEY, { log: true })
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
    if (!process.env.NEXT_PUBLIC_FUDGE_KEY) {
        return <FudgeInstructions />
    }

    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <SEO title={process.env.siteTitle} />
                <Component {...pageProps} />
                <ToastContainer theme="colored" />
            </Layout>
        </QueryClientProvider>
    )
}

const FudgeInstructions = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="border-2 border-indigo-500 p-4 px-5 space-y-2 rounded-lg">
                <div>
                    Missing <b>NEXT_PUBLIC_FUDGE_KEY</b> environment variable.
                </div>
                <div>
                    Please{" "}
                    <a
                        href="https://app.fudge.ai"
                        rel="noreferrer noopener"
                        target="_blank"
                        className="text-blue-500 underline"
                    >
                        sign up for a free Fudge account
                    </a>{" "}
                    to get a Fudge token.
                </div>
                <div>
                    Then, add the token to this project's <b>.env</b> file.
                </div>
            </div>
        </div>
    )
}

export default MyApp
