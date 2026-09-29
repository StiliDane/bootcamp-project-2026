"use client";
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', marginTop: '1rem' }}>
      <p>Clicks: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </div>
  );
}