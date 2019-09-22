import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import mainLogo from './titleImage.png';
import clearLogo from './logoClear.png';
import * as serviceWorker from './serviceWorker';
import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive';
import Iframe from 'react-iframe';
import Nav from './Nav';
 

const bodyStyle = {
  // "background-color": " #66CF7C",
}

const credits = {
  "margin-top" : "500px",
  "margin-bottom" : "300px",
  "display" : "flex",
  "flex-direction": "column",
  "justify-content" : "flex-start",
  "width" : "50%"
}

const pMargin = {
  "marginBottom" : 20,
}

const App = () => {
  const [loaded, setLoaded] = useState(false);

  serviceWorker.unregister();

  const imageClick = () => {
    setLoaded(loaded => true);
  }

  const backClick =() => {
     window.scrollTo(0, 0); 
  }

  const isDesktopOrLaptop = useMediaQuery(
     { minDeviceWidth: 1224 },
     { deviceWidth: 1600 } // `device` prop
  )
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
 
  
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

  const printStuff = () => {
    console.log('loaded iframe');
  }

  let frame;
  if (loaded) {
    if(isTabletOrMobile) {
      frame = 
        (<div className="aspect-ratio">
          <div className="aspect-ratio-inner">
          <Iframe url="https://gnuck.github.io/DestroyDeniersGame/"
          width="100%"
          height="100%"
          id="myId"
          className="myClassname"
          display="initial"
          scrolling="false"
          allowFullScreen="true"
          position="relative"/>
          </div>
        </div>);
    } else {
      frame = 
        (<div className="aspect-ratio-desktop">
          <div className="aspect-ratio-inner">
          <Iframe url="https://gnuck.github.io/DestroyDeniersGame/"
          width="100%"
          height="100%"
          id="myId"
          className="desktopFrames"
          display="initial"
          scrolling="false"
          allowFullScreen="true"
          position="relative"/>
          </div>
        </div>);
    }
  } else {
    frame = <img  className="img-frame" src={mainLogo} alt="RunForOurLives" onClick={imageClick}/>
  }

  let credits;
  if(isTabletOrMobile){
    credits = <div className="credits">
      <p>Nick Milner</p>
      <p>Game Developer</p>
      <p style={pMargin}>/Level Designer</p>
      <p>Chloe Konnor</p>
      <p style={pMargin}>Writer</p>
      <p>Tanya Karpitskiy</p>
      <p style={pMargin}>Designer</p>
      <p>Daniel Thies</p>
      <p style={pMargin}>Character Illustrator</p>
    </div>
  } else {
    credits = <div className="credits">
      <p>Nick Milner .............. Game Developer/Level Designer</p>
      <p>Chloe Konnor ............. Writer</p>
      <p>Tanya Karpitskiy ......... Designer</p>
      <p>Daniel Thies ............. Character Illustrator</p>
    </div>
  }

  return (
    <div className="App">
      <Nav />
      <div style={bodyStyle}>
        <img  className="clear-logo" src={clearLogo} alt="RunForOurLives" onClick={imageClick}/>
        {frame}
        <div className="btnWrapper">

          <div className="backBtn" onClick={backClick}>
          <a 
            className="petitionBtn" 
            href="https://act.nrdc.org/letter/climate-action-190528?source=WBSCLIPET&_ga=2.268940785.1658644004.1568915059-710825981.1568915059"
          >
            <p>SIGN THE PETITION</p>
          </a>
          </div>
        </div>
        {credits}
        <div className="btnWrapper">
          <div className="backBtn" onClick={backClick}>
            <p>BACK</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
