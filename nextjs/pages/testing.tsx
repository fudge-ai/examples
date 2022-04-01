export default function Testing() {
  const runXHR = () => {
    const xhr1 = new XMLHttpRequest()
    xhr1.open('POST', '/api/cart')

    const xhr2 = new XMLHttpRequest()
    xhr2.open('POST', '/api/404')
    xhr2.send()

    xhr1.setRequestHeader('Example', 'belongs-on-cart-call')
    xhr1.send()
  }

  return (
    <div>
      <div onClick={() => runXHR()}>Run 2 XHRs</div>
    </div>
  )
}
