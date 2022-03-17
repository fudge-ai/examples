import Script from "next/script"
import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import "@/styles/globals.css"
import { QueryClient, QueryClientProvider } from "react-query"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Fudge from "@fudge-ai/nextjs"

if (!process.env.NEXT_PUBLIC_FUDGE_KEY) {
    throw new Error(
        "Missing NEXT_PUBLIC_FUDGE_KEY environment variable. Please sign up for an account at app.fudge.ai to get your token."
    )
}

Fudge.init(process.env.NEXT_PUBLIC_FUDGE_KEY)

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
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
