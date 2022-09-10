import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

interface TCode {
  code: string;
}
export default function Code({ code }: TCode) {
  React.useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <div className="my-5">
      <pre className="language-javascript max-w-4xl">
        <code>{code}</code>
      </pre>
    </div>
  );
}
