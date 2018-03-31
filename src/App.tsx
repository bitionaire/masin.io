import * as React from 'react';
import './App.css';

const logo = require('./assets/masinio.svg');
const sound = require('./assets/sound.svg');

class App extends React.Component {

  audio: HTMLAudioElement | null;

  render() {
    return (
      <>
        <audio ref={(audio) => this.audio = audio}>
          <source src="/masinio.mp3"/>
        </audio>

        <div className="app">
          <header className="app__header">
            <img src={logo} className="app__logo" aria-hidden="true" />
            <h1 className="app__title">
              masin.io
            </h1>
          </header>
          <main className="app__main">
            <p>
              The [maʃɪneio]
              <button
                type="button"
                className="app__sound-button"
                onClick={() => this.audio && this.audio.play()}
              >
                <img src={sound} />
              </button>
              is a shelter for a small
              design & software development team since 2017.
            </p>
            <p>
              Creators of{' '}
              <a
                className="app__link"
                href="https://scrumlr.io"
                target="_blank"
              >
                scrumlr.io
              </a> and <a
                className="app__link"
                href="https://github.com/masinio/changeloggen"
                target="_blank"
              >
                changeloggen
              </a>.
            </p>
          </main>
        </div>
      </>
    );
  }
}

export default App;
