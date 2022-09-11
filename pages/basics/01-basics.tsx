import Layout from '@components/Layout';
import Code from '@components/Code';

const names: string[] = ['Diego', 'Jorge', 'Andrew'];

const days: Array<number> = [1, 2, 3];

const info: {
  name: string;
  type: string;
} = {
  name: 'Michelangelo',
  type: 'Ninja',
};

interface TInfo {
  name: string;
  type: string;
}

const ninja: TInfo = {
  name: 'Michelangelo',
  type: 'Ninja',
};
export default function Basic() {
  return (
    <Layout title="Basics">
      {/* ARRAYS */}
      <h3 className="my-5 text-xl font-medium">Arrays</h3>
      <p>Different ways to write array types</p>
      <Code code={`const names: string[] = ['Diego', 'Jorge', 'Andrew']`} />
      <p>Using the generics types</p>
      <Code code={`const days: Array<number> = [1, 2, 3];`} />
      {/* OBJECTS */}
      <h3 className="my-5 text-xl font-medium">Objects</h3>
      <p>Different ways to define an object</p>
      <Code
        code={`const info: {
  name: string;
  type: string;
} = {
  name: 'Michelangelo',
  type: 'Ninja',
};`}
      />
      <p>Using the generics types</p>
      <Code
        code={`interface TInfo {
  name: string;
  type: string;
}

const ninja: TInfo = {
  name: 'Michelangelo',
  type: 'Ninja',
};`}
      />
    </Layout>
  );
}