import Layout from '@components/Layout';
import Code from '@components/Code';
import Resume from '@components/Resume';
import Title from '@components/Title';

type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinates(c1: ThreeDCoordinate, c2: ThreeDCoordinate): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}
// console.log(add3DCoordinates([1, 2, 4], [20, 3, 4]));
type Team = [number, string, string, string?];
const companyTeam: Team[] = [
  [0, 'Jorge', 'jorge@'],
  [1, 'Kent', 'kent@'],
  [2, 'Alex', 'alex@', 'CEO'],
];
type NumberProjects = [Team, ...number[]];

const projectMadeEachMonth: NumberProjects[] = [
  [companyTeam[0], 2],
  [companyTeam[1], 2, 1],
  [companyTeam[2], 3, 0, 1, 8],
];
const monthOne =
  projectMadeEachMonth[0][1] + projectMadeEachMonth[1][1] + projectMadeEachMonth[2][1];
const monthTwo = projectMadeEachMonth[1][2] + projectMadeEachMonth[2][2];
const monthThree = projectMadeEachMonth[0][3];

export default function Tuples() {
  return (
    <Layout title="Tuples">
      <div className="mt-10">
        <Resume text="Tuples are arrays that can have different types,and where the order in which they are indexed is important." />
        <Title text="Tuples where all the params have the same type" />
        <Code
          code={`type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinates(c1: ThreeDCoordinate, c2: ThreeDCoordinate): ThreeDCoordinate {
  return [
  c1[0] + c2[0], 
  c1[1] + c2[1], 
  c1[2] + c2[2]
];
}`}
        />
        <Title text="Tuples where the params can have different type and/or optional" />

        <Code
          code={`type Team = [number, string, string, string?];
const companyTeam: Team[] = [
  [0, 'Jorge', 'jorge@'],
  [1, 'Kent', 'kent@'],
  [2, 'Alex', 'alex@', 'CEO'],
];`}
        />
        <Title text="...Tuples" />
        <p>
          When you have a set of known types at the beginning of a tuple and then an unknown length,
          you can use the spread operator to indicate that it can have any length and the extra
          indexes
        </p>
        <Code
          code={`type Team = [number, string, string, string?];
const companyTeam: Team[] = [
  [0, 'Jorge', 'jorge@'],
  [1, 'Kent', 'kent@'],
  [2, 'Alex', 'alex@', 'CEO'],
];

type NumberProjects = [Team, ...number[]];

const projectMadeEachMonth: NumberProjects[] = [
  [companyTeam[0], 2],
  [companyTeam[1], 2, 1],
  [companyTeam[2], 3, 0, 1, 8],
];
const monthOne =
  projectMadeEachMonth[0][1] + projectMadeEachMonth[1][1] + projectMadeEachMonth[2][1];
const monthTwo = projectMadeEachMonth[1][2] + projectMadeEachMonth[2][2];
const monthThree = projectMadeEachMonth[0][3];`}
        />
      </div>
    </Layout>
  );
}
