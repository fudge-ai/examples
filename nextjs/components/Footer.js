import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className="text-center py-4 space-y-4">
      <footer className="flex justify-center font-primary items-center">
        This is an example app to show the awesomeness of&nbsp;
        <a href="https://www.fudge.ai/" className="text-indigo-500 underline">
          Fudge
        </a>
        .
      </footer>
      <div>
        Debug:&nbsp;
        <button
          onClick={() => {
            window.scrollTo({top: 0})
            window.Fudge.clearSession()
          }}
        >
          Clear session
        </button>
      </div>
    </div>
  )
}

export default Footer
