import Layout from '@components/Layout';
import Code from '@components/Code';
import Title from '@components/Title';
function printText(text: number, callback: () => void): void {
  console.log(text);
  callback();
}
type TCallbackFunction = (el: number) => number;

function arrayMutate(numbers: number[], callback: TCallbackFunction): number[] {
  return numbers.map(callback);
}
const product: TCallbackFunction = (number) => number * 2;

arrayMutate([1, 2, 3], (el) => el * 2);

function addNumber(number: number): (val: number) => number {
  return (val: number) => val + number;
}
const addFive = addNumber(5);
console.log(addFive(10));

export default function FunctionsWithFunctions() {
  return (
    <Layout title="Functions with functions">
      <div className="mt-10">
        <Title text="Callbacks" />
        <p>
          We define the types inside a function, without say what should return, in this case is
          inferring a type of number by default
        </p>
        <Code
          code={`function printText(text: number, callback: () => void): void {
  console.log(text);
  callback();
}`}
        />

        <p>Defining params for a callback</p>
        <Code
          code={`function arrayMutate(numbers: number[], callback: (el: number) => number): number[] {
  return numbers.map(callback);
}

//Example
arrayMutate([1, 2, 3], (el) => el * 2);`}
        />
      </div>
      {/* Function as a type */}
      <div className="mt-10">
        <Title text="Function as a type" />
        <p>We define the types</p>
        <Code code={'type TCallbackFunction = (el: number) => number'} />
        <Code
          code={`function arrayMutate(numbers: number[], callback: TCallbackFunction): number[] {
  return numbers.map(callback);
}

//Example
arrayMutate([1, 2, 3], (el) => el * 2);`}
        />
        <p>Obviously we can use the types for callback and use elsewhere</p>
        <Code code={'const product: TCallbackFunction = (number) => number * 2'} />
      </div>

      {/* Function that return function */}
      <div className="mt-10">
        <Title text="Function that return function" />
        <Code
          code={`function addNumber(number: number): (val: number) => number {
  return (val: number) => (val + number);
}
const addFive = addNumber(5);
console.log(addFive(10));
//Result
15`}
        />
      </div>
    </Layout>
  );
}
