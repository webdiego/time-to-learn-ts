import Layout from '@components/Layout';
import Code from '@components/Code';
import Title from '@components/Title';

export default function Basic() {
  return (
    <Layout title="Basic types">
      {/* ARRAYS */}
      <Title text="Arrays" />
      <p className="mt-2">Different ways to write array types</p>
      <Code code={`const names: string[] = ['Diego', 'Jorge', 'Andrew']`} />
      <Code code={`const days: Array<number> = [1, 2, 3];`} />
      {/* OBJECTS */}
      <Title text="Objects" />
      <p className="mt-2">Different ways to define an object</p>
      <Code
        code={`const info: {
  name: string;
  type: string;
} = {
  name: 'Michelangelo',
  type: 'Ninja',
};`}
      />
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
