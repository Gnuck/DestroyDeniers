import React, { useState } from 'react';
import './App.css';
import * as serviceWorker from './serviceWorker';
import Iframe from 'react-iframe';
import ReactGA from 'react-ga';
 
function initializeReactGA() {
    ReactGA.initialize('UA-149402647-1');
    ReactGA.pageview('/homepage');
}

initializeReactGA();

const App = () => {
  const [moreInfo, setMoreInfo] = useState(false);

  serviceWorker.unregister();
  
  const petitionClick = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Sign Petition button clicked (on page)'
    });
  }

  const aboutClick = () => {
    ReactGA.event({
      category: 'Button',
      action: 'About "?" button'
    })
  }

  var keys = {};

  window.addEventListener("keydown",
    function(e){
        keys[e.keyCode] = true;
        switch(e.keyCode){
            case 37: case 39: case 38:  case 40: // Arrow keys
            case 32: e.preventDefault(); break; // Space
            default: break; // do not block other keys
        }
    },
  false);

  window.addEventListener('keydown',
      function(e){
          keys[e.keyCode] = false;
      },
  false);

  let body;
  if (!moreInfo) {
    body = 
      <div>
        <div className="aspect-ratio">
          <div className="aspect-ratio-inner">
            <Iframe url="https://gnuck.github.io/DestroyDeniersGame/"
            width="100%"
            height="100%"
            id="myId"
            className="myClassname"
            display="initial"
            scrolling="false"
            allowFullScreen="true"
            position="relative"
          />
          </div>
        </div>
        <div className="btnWrapper">

          <div className="backBtn" onClick={petitionClick}>
          <a 
            className="petitionBtn" 
            href="https://act.nrdc.org/letter/climate-action-190528?source=WBSCLIPET&_ga=2.268940785.1658644004.1568915059-710825981.1568915059"
          >
            <p>SIGN THE PETITION</p>
          </a>
          </div>
        </div>
        <div className="btnWrapper">
          <ul className="linkWrapper">
            <li>
              <a href="https://www.nrdc.org/?_ga=2.260557133.1502811972.1569007614-2068348596.1569007614">
                Climate Change
              </a>
            </li>
            <li>
              <a href="https://globalclimatestrike.net/">
                Strikes Near Me
              </a>
            </li>
          </ul>
        </div>
        <div className="infoLinkWrapper">
          <p onClick={()=>setMoreInfo(true)}className="infoLink">?</p>
        </div>
      </div>
  } else {
    body =     
    (<div>
      <div className="credits">
        <p>Nick Milner...................Game Developer/Level Designer</p>
        <p><a href="https://chloekonnor.com/">Chloe Konnor................Writer</a></p>
        <p><a href="https://tanyakarpitskiy.format.com/">Tanya Karpitskiy..........Designer</a></p>
        <p>Daniel Thies.................Character Illustrator</p>
      </div>
      <div className="btnWrapper">
        <div 
          className="backBtn" 
          onClick={()=>
            {
              aboutClick();
              setMoreInfo(false);
            }
          }
        >
          <p>BACK</p>
        </div>
      </div>
    </div>)
  }

  return (
    <div className="App">
      {body}
    </div>

  );
}

export default App;
