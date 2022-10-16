import Layout from '@components/Layout';
import Code from '@components/Code';
import Resume from '@components/Resume';
import Title from '@components/Title';

export default function Enums() {
  enum CardinalDirections {
    North,
    East,
    South,
    West,
  }

  let currentDirection = CardinalDirections.North;

  // North is the first value so it logs '0'
  console.log(currentDirection);

  enum PlayerState {
    play = 'play',
    pause = 'pause',
    stop = 'stop',
  }

  const isPlaying = (state: string) => state === PlayerState.play;

  console.log(isPlaying(PlayerState.pause));

  return (
    <Layout title="Enums">
      <div className="mt-10">
        <Resume text="An enum is a special 'class' that represents a group of constants" />
        <Title text="Numeric Enums - Default" />
        <p className="mt-4">
          By default, enums will initialize the first value to 0 and add 1 to each additional value
        </p>
        <Code
          code={`enum CardinalDirections {
  North,
  East,
  South,
  West
};

// North is the first value so it logs 0, South will be 2
let currentDirection = CardinalDirections.North
console.log(currentDirection); // 0

`}
        />
        <Title text="Numeric Enums - Initialized" />
        <p className="mt-4">
          You can set the value of the first numeric enum and have it auto increment from that
        </p>
        <Code
          code={`enum CardinalDirections {
  North = 1,
  East,
  South,
  West
};

console.log(CardinalDirections.North); // 1
console.log(CardinalDirections.South); // 3


`}
        />
        <Title text="Numeric Enums - Fully Initialized" />
        <p className="mt-4">
          You can assign unique number values for each enum value. Then the values will not
          incremented automatically
        </p>
        <Code
          code={`enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

console.log(StatusCodes.NotFound); // 404
console.log(StatusCodes.Success); // 200


`}
        />
        <Title text="String Enums" />
        <p className="mt-4">
          You can assign unique number values for each enum value. Then the values will not
          incremented automatically
        </p>
        <Code
          code={`enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};

console.log(CardinalDirections.North); // "North"

console.log(CardinalDirections.West); // "West"
`}
        />
      </div>
      <Resume text="You can mix and match string and numeric enum values, but it's not recommended" />
    </Layout>
  );
}
