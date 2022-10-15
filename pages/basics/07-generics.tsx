import Layout from '@components/Layout';
import Code from '@components/Code';
import Resume from '@components/Resume';
import Title from '@components/Title';

export default function Generics() {
  function aGenericFunction<T>(array: T[]): T {
    const diceRoll = Math.floor(Math.random() * array.length);
    return array[diceRoll];
  }

  const genericsNumber = aGenericFunction([12, 22]);
  const genericsString = aGenericFunction(['Michelangelo', 'Donatello', 'Raffaello']);
  console.log(genericsNumber);
  return (
    <Layout title="Generics">
      <div className="mt-10">
        <Resume text="Generic give the ability to a function to accept a type that is passed in when the function is used, which improves code flexibility, makes components reusable, and removes duplication." />
        <Code
          code={`  function aGenericFunction<T>(array: T[]): T {
    const diceRoll = Math.floor(Math.random() * array.length);
    return array[diceRoll];
  }`}
        />
        <p className="mt-4">When we run this function</p>
        <Code code={`const genericsNumber = aGenericFunction([12, 22]);`} />
        <p className="mt-4">We get these types</p>
        <Code code={`aGenericFunction<string>(array: string[]): string`} />
        <p className="mt-10">When we run this function</p>
        <Code
          code={`const genericsString = aGenericFunction(['Michelangelo', 'Donatello', 'Raffaello']);`}
        />

        <Code code={`aGenericFunction<string>(array: string[]): string`} />
        <p className="mt-4">Because the types are inferred!</p>
      </div>
    </Layout>
  );
}
