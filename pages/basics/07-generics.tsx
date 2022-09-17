import Layout from '@components/Layout';
import Code from '@components/Code';
import Resume from '@components/Resume';
import Title from '@components/Title';

export default function Generics() {
  function aGenericFunction<T>(arg: T): T {
    console.log(arg);
    return arg;
  }

  const genericsNumber = aGenericFunction(2);
  const genericsString = aGenericFunction('Hello World');

  return (
    <Layout title="Generics">
      <div className="mt-10">
        <Resume text="Generic give the ability to a function to accept a type that is passed in when the function is used, which improves code flexibility, makes components reusable, and removes duplication." />
        <Code
          code={` function aGenericFunction<T>(arg: T): T {
    return arg;
  }`}
        />
      </div>
    </Layout>
  );
}
