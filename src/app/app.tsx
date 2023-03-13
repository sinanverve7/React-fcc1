// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import styles from './app.module.scss';

export function App() {
  const [quotes, setQuotes] = useState<QuoteObj[]>([]);
  const [quote, setQuote] = useState(``);
  const [author, setAuthor] = useState(``);

  useEffect(() => {
    // make an API call on component mount
    fetchData();

    // select a random quote on component mount if quotes array is not empty
    if (quotes.length) {
      const quoteObj = selectRandomQuote(quotes);
      setQuote(quoteObj.quote);
      setAuthor(quoteObj.author);
    }
  }, []);
  useEffect(() => {
    // select a random quote when quotes are updated
    if (quotes.length) {
      const quoteObj = selectRandomQuote(quotes);
      setQuote(quoteObj.quote);
      setAuthor(quoteObj.author);
    }
  }, [quotes]);

  const handleClick = () => {
    // select a random quote on button click
    const quoteObj = selectRandomQuote(quotes);
    setQuote(quoteObj.quote);
    setAuthor(quoteObj.author);
  };
  const selectRandomQuote = (quotesArray: QuoteObj[]) => {
    const quoteIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[quoteIndex];
  };

  const fetchData = async () => {
    const url =
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.quotes);
    setQuotes(data.quotes);
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles['quote-box']}`} id="quote-box">
        <p id="text" className={`${styles['text']}`}>
          {quote}
        </p>
        <p id="author" className={`${styles.author}`}>
          - {author}
        </p>
        <div className={`${styles['btns']}`}>
          <p className={`${styles['new-quote']}`}>
            <a
              className={`${styles['tweet-quote']}`}
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${encodeURIComponent(
                `${quote} ${author}`
              )}"`}
              id="tweet-quote"
            ></a>
          </p>
          <p
            onClick={handleClick}
            id="new-quote"
            className={`${styles['new-quote']}`}
          >
            New quote
          </p>
        </div>
      </div>
    </div>
  );
}
interface QuoteObj {
  quote: string;
  author: string;
}
