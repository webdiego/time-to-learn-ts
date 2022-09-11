import React from 'react';
import Prism from 'prismjs';

interface TCode {
  code: string;
}
export default function Code({ code }: TCode) {
  React.useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <div className="my-5">
      <pre className="language-javascript max-w-5xl">
        <code>{code}</code>
      </pre>
    </div>
  );
}
