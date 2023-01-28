import * as React from 'react';
import Layout from '@components/Layout';
import Code from '@components/Code';
import Title from '@components/Title';

export default function Assertions() {
  return (
    <Layout title="Assertions">
      <p className="mt-4">
        TypeScript&apos;s type assertion is purely you telling the compiler that you know about the
        types better than it does, and that it should not second guess you. For example when we know
        that a value is an element in the DOM, but the compiler thinks that it is possibly null.
      </p>
      <Title text="Type Assertions" />
      <Code
        code={`let imgElement = document.getElementById('image') as HTMLImageElement;
let myImg = imgElement.src;
    
let inputElement = document.getElementById('input') as HTMLInputElement;
let myInput = inputElement.value;`}
      />
      <p className="mt-4">Another example</p>
      <Code
        code={`let foo = {};
foo.bar = 123; // Error: property 'bar' does not exist on {}
foo.bas = 'hello'; // Error: property 'bas' does not exist on {}`}
      />
      <p className="mt-4">
        Here the code errors because the inferred type of foo is {} i.e. an object with zero
        properties. <br />
        Therefore you are not allowed to add bar or bas to it. You can fix this simply by a type
        assertion as Foo:
      </p>
      <Code
        code={`interface Foo {
    bar: number;
    bas: string;
}

let foo = {} as Foo;
foo.bar = 123;
foo.bas = 'hello';`}
      />
    </Layout>
  );
}
