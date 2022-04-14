import Script from 'next/script'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import '@/styles/globals.css'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Fudge, {FudgeWrapper} from '@fudge-ai/nextjs'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

/**
 * 👋 Fudge Setup
 * Step 1 - Initialize Fudge monitoring.
 * This configures Fudge with your token.
 */
Fudge.init('165e36f4-e6ba-4229-9e5d-c1c440959cfe')

const queryClient = new QueryClient()

function MyApp({Component, pageProps}) {
  const {query} = useRouter()

  const [time, setTime] = useState(() => new Date().toLocaleTimeString())
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    /**
     * 👋 Fudge Setup
     * Step 2 - Wrap your app with FudgeWrapper.
     * This adds the browser tracking script to your app (using next/script).
     */
    <FudgeWrapper>
      <QueryClientProvider client={queryClient}>
        {query.tab && query.tab !== 'undefined' && (
          <div className="bg-blue-600 text-white font-bold p-3 text-center">
            TAB: {query.tab}, TIME: {time}
          </div>
        )}
        <Layout>
          <SEO title={process.env.siteTitle} />
          <Component {...pageProps} />
          <ToastContainer theme="colored" />
        </Layout>
      </QueryClientProvider>
    </FudgeWrapper>
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
          Please{' '}
          <a href="https://app.fudge.ai" rel="noreferrer noopener" target="_blank" className="text-blue-500 underline">
            sign up for a free Fudge account
          </a>{' '}
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
