import './App.css';
import books from './books.png';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <header className='App-header'>
          <img src={books} className='App-books img-fluid' alt='books' />
        </header>
        <main>
          <Dictionary defaultKeyword='mountain' />
        </main>
        <footer className='App-footer'>
          {' '}
          Coded by Edona Rexhaj and is open-sourced on{' '}
          <a href='https://github.com/ShiineCodes/dictionary-project'>
            Github
          </a>{' '}
          and hosted on{' '}
          <a href='https://main--keen-concha-0847f2.netlify.app/'>Netlify</a>{' '}
        </footer>
      </div>
    </div>
  );
}
