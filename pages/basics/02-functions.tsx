import Layout from '@components/Layout';
import Code from '@components/Code';
import Title from '@components/Title';

export default function Basic() {
  return (
    <Layout title="Functions">
      <div className="mt-10">
        <Title text="Basic function" />
        <p className="mt-4">
          We define the types inside a function, without say what should return, in this case is
          inferring a type of number by default
        </p>
        <Code
          code={`function product(a: number, b: number) {
  return a * b;
}`}
        />

        <p>Defining what should return</p>
        <Code
          code={`function product(a: number, b: number): number {
  return a * b;
}`}
        />
        <p>Other way is define the types outside the function</p>
        <Code
          code={`type Product = (a: number, b: number) => number;

let product: Product = (a, b) => {
  return a * b;
}; 

// or

let productInline: Product = (a, b) => a * b;
`}
        />
      </div>

      {/* Default params */}
      <div className="mt-10">
        <Title text="Default params" />
        <Code
          code={"const addString2 = (str1: string, str2: string = ''): string => `${str1} ${str2}`"}
        />
        <Code
          code={`const sumAll = (a: number = 2, b: number, c: number = 5): number => a + b + c;

console.log(sumAll(2, 2, 4));
console.log(sumAll(2, 2));
console.log(sumAll(2)); // we get error because were not passing the second argument
console.log(sumAll(undefined, 2)); 
console.log(sumAll(undefined, 2, undefined));

`}
        />
      </div>
      <div className="mt-10">
        <Title text="Union types" />
        <Code
          code={
            'const addString3 = (title: string, param: string | number): string => `${title} ${param}`'
          }
        />
      </div>
      <div className="mt-10">
        <Title text="Void" />
        <Code
          code={
            'const addString3 = (title: string, param: string | number): void => console.log(`${title} ${param}`)'
          }
        />
      </div>
      <div className="mt-10">
        <Title text="...rest" />
        <Code
          code={
            'function list(party: string, ...names: Array<string>): string {return `${party} ${names}`}'
          }
        />
      </div>
    </Layout>
  );
}
