import Layout from '@components/Layout';
import Code from '@components/Code';
import Resume from '@components/Resume';
import Title from '@components/Title';

export default function UtilityTypes() {
  type Person = {
    name: string;
    age: number;
    location?: string;
  };

  const guest: Record<string, number> = {
    name: 2,
    age: 30,
  };
  return (
    <Layout title="Utility types">
      <div className="mt-10">
        <Resume text="TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types." />
        <Title text="Omit" />
        <p className="mt-4">Omit removes keys from an object type.</p>
        <Code
          code={`type Person ={
  name: string;
  age: number;
  location?: string;
}

const guest: Omit<Person, 'age' | 'location'> = {
  name: 'Diego'
};
`}
        />
        <p className="mt-4">
          Age and location are removed from the type and they can&apos;t be defined here
        </p>
      </div>
      <div className="mt-10">
        <Title text="Pick" />
        <p className="mt-4">Pick removes all keys and grabs only the specified ones.</p>
        <Code
          code={`const guest: Pick<Person, 'name'> = { 
  name: 'Diego',
};
`}
        />
      </div>
      <div className="mt-10">
        <Title text="Required" />
        <p className="mt-4">Required changes all the properties in an object to be required.</p>
        <Code
          code={` const guest: Required<Person> = {
    name: 'Diego',
    age: 30,
    location: 'Madrid',
  };
`}
        />
        <p className="mt-4">
          Location property is optional but with Required, we specify that all properties are
          required.
        </p>
      </div>
      <div className="mt-10">
        <Title text="Partial" />
        <p className="mt-4">Partial changes all the properties in an object to be optional.</p>
        <Code code={`const guest: Partial<Person> = {};`} />
        <p className="mt-4">
          As in this case, we don&apos;t define any property, all of them are optional.
        </p>
        <Code
          code={`const guest: Partial<Person> & { name: string } = {
  name: 'Diego',
};`}
        />
        <p className="mt-4">
          In this case, we set all properties to be optional and we add name property as required.
        </p>
      </div>
      <div className="mt-10">
        <Title text="Record" />
        <p className="mt-4">
          Record is a shortcut to defining an object type with a specific key type and value type.
        </p>
        <Code code={`const guest: Partial<Person> = {};`} />
        <p className="mt-4">
          As in this case, we don&apos;t define any property, all of them are optional.
        </p>
        <Code
          code={`const guest: Record<string,number> = {
  height: 180,
  age:30
};`}
        />
        <p className="my-4">
          We set properties to be string and value to be number. We can&apos;t define other types.
        </p>
        <Resume text="Record<string, number> is equivalent to { [key: string]: number }" />
      </div>
    </Layout>
  );
}
