
import React from 'react';

export default function Badge({ count }: { count: number }): JSX.Element {
  return (
    <div role="status" aria-label="Count" className="badge">{`Books: ${count}`}</div>
  );
}
