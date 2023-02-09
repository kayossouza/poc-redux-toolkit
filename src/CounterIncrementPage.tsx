import { CounterIncrement } from './features/counter/CounterIncrement';
import './App.css';

function CounterIncrementPage() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterIncrement />
      </header>
    </div>
  );
}

export default CounterIncrementPage;
