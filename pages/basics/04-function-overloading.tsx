import Layout from '@components/Layout';
import Code from '@components/Code';
import Title from '@components/Title';


export default function FunctionOverloading() {
  return (
    <Layout title="Function overloading">
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

      </div>


  
    </Layout>
  );
}
