import '../global.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useMemo } from 'react';

import { SocketContext, SocketStore } from '../store/socket-store';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const socketStore = useMemo(() => {
    return new SocketStore();
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
      const canvas = document.querySelector('#Matrix') as HTMLCanvasElement;
      const context = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'absolute';
      canvas.style.zIndex = '-1';

      const katakana =
        'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
      const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const nums = '0123456789';

      const alphabet = katakana + latin + nums;
      const fontSize = 16;
      const columns = canvas.width / fontSize;

      const rainDrops = [];

      for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
      }

      const draw = (): void => {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = '#0F0';
        context.font = String(fontSize) + 'px monospace';

        for (let index = 0; index < rainDrops.length; index++) {
          const text = alphabet.charAt(
            Math.floor(Math.random() * alphabet.length)
          );
          context.fillText(text, index * fontSize, rainDrops[index] * fontSize);

          if (
            rainDrops[index] * fontSize > canvas.height &&
            Math.random() > 0.975
          ) {
            rainDrops[index] = 0;
          }

          rainDrops[index]++;
        }
      };

      setInterval(draw, 30);
    }
  }, []);

  return (
    <SocketContext.Provider value={socketStore}>
      <Head>
        <title>EthanG</title>
      </Head>
      <main className="app">
        <canvas id="Matrix" />
        <Component {...pageProps} />
      </main>
    </SocketContext.Provider>
  );
};

export default App;
