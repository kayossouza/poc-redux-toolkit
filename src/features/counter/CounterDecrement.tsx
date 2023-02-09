import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrementByAmount,
  decrementAsync,
  decrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';
import { useNavigate } from "react-router-dom";

export function Counter() {
  const navigate = useNavigate();
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [decrementAmount, setDecrementAmount] = useState('2');

  const decrementValue = Number(decrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set decrement amount"
          value={decrementAmount}
          onChange={(e) => setDecrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(decrementByAmount(decrementValue))}
        >
          Decrement Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(decrementAsync(decrementValue))}
        >
          Decrement Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(decrementIfOdd(decrementValue))}
        >
          Decrement If Odd
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => navigate('/')}
        >
          Go to increment page
        </button>
      </div>
    </div>
  );
}
