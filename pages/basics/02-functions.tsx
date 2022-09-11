import Layout from '@components/Layout';
import Code from '@components/Code';

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
        <h3 className="mb-2 text-xl font-medium">Basic function</h3>
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
        <h3 className="mt-5 mb-2 text-xl font-medium">Function as a const</h3>
        <Code
          code={'const addString = (str1: string, str2: string): string => `${str1} ${str2}`'}
        />
      </div>
      {/* Default params */}
      <div className="mt-10">
        <h3 className="mt-5 mb-2 text-xl font-medium">Default params</h3>
        <Code
          code={"const addString2 = (str1: string, str2: string = ''): string => `${str1} ${str2}`"}
        />
      </div>
      <div className="mt-10">
        <h3 className="mt-5 mb-2 text-xl font-medium">Union types</h3>
        <Code
          code={
            'const addString3 = (title: string, param: string | number): string => `${title} ${param}`'
          }
        />
      </div>
      <div className="mt-10">
        <h3 className="mt-5 mb-2 text-xl font-medium">Void</h3>
        <Code
          code={
            'const addString3 = (title: string, param: string | number): void => console.log(`${title} ${param}`)'
          }
        />
      </div>
      <div className="mt-10">
        <h3 className="mt-5 mb-2 text-xl font-medium">...rest</h3>
        <Code
          code={
            'function list(party: string, ...names: Array<string>): string {return `${party} ${names}`}'
          }
        />
      </div>
    </Layout>
  );
}
