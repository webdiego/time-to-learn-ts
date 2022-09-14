import Layout from '@components/Layout';
import Code from '@components/Code';
import Title from '@components/Title';

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
  // function coordinate(obj: Coordinate): Coordinate;
  // function coordinate(x: number, y: number): Coordinate;
  function coordinate(arg1: unknown, arg2?: unknown): Coordinate {
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
  console.log(coordinate({ x: 10, y: 25 }));
  //If the func takes two params
  console.log(coordinate(10, 20));
  return (
    <Layout title="Function overloading">
      <div className="mt-10">
        <p>We define the types</p>
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
        <p>Or we can also define this function that take an two params </p>
        <Code
          code={`function coordinateFromNumbers(x: number, y: number): Coordinate {
    return {
      x,
      y,
    };
  }`}
        />
        <p>How can we abstract this function?</p>
        <Code
          code={`  function coordinate(obj: Coordinate): Coordinate;
  function coordinate(x: number, y: number): Coordinate;
  function coordinate(arg1: unknown, arg2?: unknown): Coordinate;`}
        />
        <p>Are the same function, are returning the same object</p>
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
      </div>
    </Layout>
  );
}
