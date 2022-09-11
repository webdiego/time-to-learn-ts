type TTitle = { text: string };
export default function Title({ text }: TTitle) {
  return <h3 className="mt-5 mb-2 text-xl font-medium">🌀 {text}</h3>;
}
