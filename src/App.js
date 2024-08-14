import './App.css';
import books from './books.jpg';

export default function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={books} className='App-books img-fluid' alt='books' />
      </header>
    </div>
  );
}

