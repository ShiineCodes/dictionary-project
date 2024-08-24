import './App.css';
import books from './books.png';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
      <header className='App-header'>
        <img src={books} className='App-books img-fluid' alt='books' />
      </header>
      <main>
      <Dictionary defaultKeyword="mountain"/>


      </main>
      <footer className='App-footer'> Coded by Edona Rexhaj </footer>
      </div>
    </div>
  );
}

