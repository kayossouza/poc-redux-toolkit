import { Counter } from './features/counter/CounterDecrement';
import './App.css';

function CounterDecrementPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default CounterDecrementPage;
