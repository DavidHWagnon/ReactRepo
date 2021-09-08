import logo from './twitterPic.jpg';
import twitchLogo from './img/twitchLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to David Wagnon's personal website! Feel free to look around.
        </p>
        <a
          className="App-link"
          href="https://www.twitch.tv/tymeitv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="Twitch-logo" src={twitchLogo}></img>
        </a>
      </header>
    </div>
  );
}

export default App;
