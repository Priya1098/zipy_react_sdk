import { ReactComponent as AppStoreSvg} from '../images/appstore.svg'
import { ReactComponent as GooglePlaySvg} from '../images/googleplay.svg'
 
function AppStore() {
    return (
        <div className="container">
            <section id="app">
                <h2>Download app demo text</h2>
                <div id="store-logos">
                    <span>
                        <AppStoreSvg/>
                    </span>
                    <span>
                        <GooglePlaySvg/>
                    </span>
                </div>
            </section>
            <div style={{ textAlign: 'center' }}>
        <div> Different Origin Domain </div>
        <iframe
          id="iframe-app-same-origin"
          title="IFrame POC Demo"
          src='https://iframe-app.onrender.com'
          style={{
            border: '5px solid gray',
            borderRadius: '10px',
            width: '90%',
            height: '400px',
            boxShadow: '2px 0px 10px 1px red'
          }}
        />
      </div>
        </div>
    )
}

export default AppStore