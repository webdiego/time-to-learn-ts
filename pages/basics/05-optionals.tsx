import Layout from '@components/Layout';
import Code from '@components/Code';
import Title from '@components/Title';
type User = {
  id: number;
  info?: {
    email?: string;
  };
};

function getEmail(user: User, callback?: () => void): string {
  callback?.();
  return user.info?.email ?? '';
}

export default function Basic() {
  return (
    <Layout title="Optionals">
      <Title text="Optionals parameters" />
      <Code
        code={`function printNumber(a: number, b: number, c?: number): number {
  if (c) {
    return a + b + c;
  }
  return a + b;
}`}
      />
      <Title text="Optionals fields" />
      <Code
        code={`type User = {
  id: number;
  info?: {
    email?: string;
  };
};
function getEmail(user: User): string {
  return user?.info?.email ?? '';
}`}
      />
      <Title text="Optionals callback" />
      <Code
        code={`function getEmail(user: User, callback?: () => void): string {
  callback?.();
  return user.info?.email ?? '';
}`}
      />
    </Layout>
  );
}
