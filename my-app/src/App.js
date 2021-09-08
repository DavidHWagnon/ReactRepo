import logo from './twitterPic.jpg';
import twitchLogo from './img/twitchLogo.png';
import twitterLogo from './img/twitterLogo.png';
import githubLogo from './img/githubLogo.png';
import linkedinLogo from './img/linkedinLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="transparent">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to David Wagnon's personal website! Feel free to look around.
          </p>
          <div className="social-row">
            <a
              className="App-link"
              href="https://www.linkedin.com/in/david-wagnon-19036720b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-logo" src={linkedinLogo}></img>
            </a>
            <a
              className="App-link"
              href="https://github.com/DavidHWagnon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-logo" src={githubLogo}></img>
            </a>
            <a
              className="App-link"
              href="https://twitter.com/Tymeitv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-logo" src={twitterLogo}></img>
            </a>
            <a
              className="App-link"
              href="https://www.twitch.tv/tymeitv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-logo" src={twitchLogo}></img>
            </a>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
