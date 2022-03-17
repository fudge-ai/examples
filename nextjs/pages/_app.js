import Script from 'next/script'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import '@/styles/globals.css'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Fudge from '@fudge-ai/nextjs'

Fudge.init('test8394-1627-44c9-848f-38971fcaef34')

const queryClient = new QueryClient()

function MyApp({Component, pageProps}) {
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
