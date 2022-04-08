export default function Testing() {
  const run2XHR = () => {
    const xhr1 = new XMLHttpRequest()
    xhr1.open('POST', '/api/cart')

    const xhr2 = new XMLHttpRequest()
    xhr2.open('POST', '/api/404')
    xhr2.send()

    xhr1.setRequestHeader('Example', 'belongs-on-cart-call')
    xhr1.send()
  }

  const withCredentialsXHR = () => {
    const xhr1 = new XMLHttpRequest()
    xhr1.open('GET', 'http://localhost:3004/health-check')
    xhr1.withCredentials = true
    xhr1.send()
  }

  return (
    <div>
      <div onClick={() => run2XHR()}>Run 2 XHRs</div>
      <div onClick={() => withCredentialsXHR()}>XHR withCredentials</div>
    </div>
  )
}
