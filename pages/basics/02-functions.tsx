import Layout from '@components/Layout';
import Code from '@components/Code';
import Title from '@components/Title';

function product(a: number, b: number): number {
  return a * b;
}

const addString = (str1: string, str2: string): string => `${str1} ${str2}`;
const addString2 = (str1: string, str2: string = ''): string => `${str1} ${str2}`;
const addString3 = (str1: string, str2: string | number): string => `${str1} ${str2}`;
const addString4 = (title: string, param: string | number): void =>
  console.log(`${title} ${param}`);

function list(party: string, ...names: Array<string>): string {
  return `${party} ${names}`;
}

const a = list('diego', 'h', 'sse');

export default function Basic() {
  return (
    <Layout title="Functions">
      <div className="mt-10">
        <Title text="Basic function" />
        <p>
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
      </div>
      {/* Function as a const */}
      <div className="mt-10">
        <Title text="Function as a const" />
        <Code
          code={'const addString = (str1: string, str2: string): string => `${str1} ${str2}`'}
        />
      </div>
      {/* Default params */}
      <div className="mt-10">
        <Title text="Default params" />
        <Code
          code={"const addString2 = (str1: string, str2: string = ''): string => `${str1} ${str2}`"}
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
