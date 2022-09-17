import Layout from '@components/Layout';
import Code from '@components/Code';
import Resume from '@components/Resume';
interface Coordinate {
  x: number;
  y: number;
}
export default function FunctionOverloading() {
  interface Coordinate {
    x: number;
    y: number;
  }
  function coordinateFromObject(obj: Coordinate): Coordinate {
    return {
      ...obj,
    };
  }
  function coordinateFromNumbers(x: number, y: number): Coordinate {
    return {
      x,
      y,
    };
  }
  function coordinate(str: string): Coordinate;
  function coordinate(obj: Coordinate): Coordinate;
  function coordinate(x: number, y: number): Coordinate;
  function coordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord = {
      x: 0,
      y: 0,
    };

    if (typeof arg1 === 'object') {
      coord = {
        ...(arg1 as Coordinate),
      };
    } else if (typeof arg1 === 'string') {
      (arg1 as string).split(',').forEach((str) => {
        const [key, value] = str.split(':');
        coord[key as 'x' | 'y'] = parseInt(value, 10);
      });
    } else {
      coord = {
        x: arg1 as number,
        y: arg2 as number,
      };
    }
    return coord;
  }
  //If the func takes one param (obj)
  console.log(coordinate({ x: 10, y: 25 }));
  //If the func takes two params
  console.log(coordinate(10, 20));
  //If the func takes a string
  console.log(coordinate('x:10,y:25'));
  return (
    <Layout title="Function overloading">
      <div className="mt-10">
        <Resume text="You can have multiple functions with the same name but different parameter types and return type. " />

        <Code
          code={`interface Coordinate {
    x: number;
    y: number;
  }`}
        />
        <p>We define this function that take an object </p>
        <Code
          code={`function coordinateFromObject(obj: Coordinate): Coordinate {
    return {
      ...obj,
    };
  }`}
        />
        <p>we can also define this function that take an two params </p>
        <Code
          code={`function coordinateFromNumbers(x: number, y: number): Coordinate {
    return {
      x,
      y,
    };
  }`}
        />
        <p>How can we abstract / expand the possibility of this function?</p>
        <Code
          code={`function coordinate(obj: Coordinate): Coordinate;
function coordinate(x: number, y: number): Coordinate;
function coordinate(arg1: unknown, arg2?: unknown): Coordinate;`}
        />
        <p>
          Is the same functions, is returning the same object, but we defined our possible different
          scenario with different params.
        </p>
        <Code
          code={`function coordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord = {
      x: 0,
      y: 0,
    };

    if (typeof arg1 === 'object') {
      coord = {
        ...(arg1 as Coordinate),
      };
    } else {
      coord = {
        x: arg1 as number,
        y: arg2 as number,
      };
    }
    return coord;
  }
  //If the func takes one param (obj)
  console.log(coordinate( { x: 10 , y: 25 } ));
  //If the func takes two params
  console.log(coordinate( 10 , 20 ));`}
        />
        <p>and if the function can take also a string?</p>
        <Code
          code={`function coordinate(str: string): Coordinate;
function coordinate(obj: Coordinate): Coordinate;
function coordinate(x: number, y: number): Coordinate;

function coordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord = {
      x: 0,
      y: 0,
    };

    if (typeof arg1 === 'object') {
      coord = {
        ...(arg1 as Coordinate),
      };
    } else if (typeof arg1 === 'string') {
      (arg1 as string).split(',').forEach((str) => {
        const [key, value] = str.split(':');
        coord[key as 'x' | 'y'] = parseInt(value, 10);
      });
    } else {
      coord = {
        x: arg1 as number,
        y: arg2 as number,
      };
    }
    return coord;
  }
  //If the func takes one param (obj)
  console.log(coordinate({ x: 10, y: 25 }));
  //If the func takes two params
  console.log(coordinate(10, 20));
  //If the func take one param and is a string
  console.log(coordinate('x:10,y:25'));`}
        />
      </div>
    </Layout>
  );
}
