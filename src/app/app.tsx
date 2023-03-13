// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect } from 'react';
import styles from './app.module.scss';

export function App() {
  const quote = `Twenty years from now you will be more disappointed by the things that
  you didn’t do than by the ones you did do, so throw off the bowlines,
  sail away from safe harbor, catch the trade winds in your sails.
  Explore, Dream, Discover.`;


  return (
    <div className={`${styles.container}`}>
      <div className={`${styles['quote-box']}`} id="quote-box">
        <p id="text" className={`${styles['text']}`}>
          {quote}
        </p>
        <p id="author" className={`${styles.author}`}>
          - Mark Twain
        </p>
        <div className={`${styles['btns']}`}>
          <p className={`${styles['new-quote']}`}>
            <a
              className={`${styles['tweet-quote']}`}
              href={`twitter.com/intent/tweet/"https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=${encodeURIComponent(quote)}`}
              id="tweet-quote"
            ></a>
          </p>
          <p id="new-quote" className={`${styles['new-quote']}`}>
            New quote
          </p>
        </div>
      </div>
    </div>
  );
}
