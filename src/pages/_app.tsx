import '../styles/global.scss'

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import style from  '../styles/app.module.scss'
import { PlayerContextProvide } from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }) {
    return (
      <PlayerContextProvide>
        <div className={style.Wrapper}>
          <main> 
          <Header />
          <Component {...pageProps} />
          </main>
          <Player/>
        </div>
      </PlayerContextProvide>
  )
}

export default MyApp
