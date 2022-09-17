import Bulb from '@components/icons/Bulb';
type TResume = { text: string };

export default function Resume({ text }: TResume) {
  return (
    <div className="flex items-center space-x-4 bg-[#F8F1AE] w-fit pl-5 pr-8 py-6 rounded-lg max-w-5xl	">
      <div>
        <Bulb />
      </div>
      <h2 className="text-black dark:text-black text-sm">{text}</h2>
    </div>
  );
}
