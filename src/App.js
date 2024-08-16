import './App.css';
import books from './books.jpg';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
      <header className='App-header'>
        <img src={books} className='App-books img-fluid' alt='books' />
      </header>
      <main>
      <Dictionary/>


      </main>
      <footer className='App-footer'> Coded by Edona Rexhaj</footer>
      </div>
    </div>
  );
}

