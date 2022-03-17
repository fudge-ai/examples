import Script from "next/script"
import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import "@/styles/globals.css"
import { QueryClient, QueryClientProvider } from "react-query"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Fudge from "@fudge-ai/nextjs"

if (process.env.NEXT_PUBLIC_FUDGE_KEY) {
    Fudge.init(process.env.NEXT_PUBLIC_FUDGE_KEY)
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
    if (!process.env.NEXT_PUBLIC_FUDGE_KEY) {
        return (
            <div>
                <div>Missing NEXT_PUBLIC_FUDGE_KEY environment variable.</div>
                <div>
                    Please sign up for an account at app.fudge.ai to get your
                    token.
                </div>
            </div>
        )
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

export default MyApp
