import 'react-modern-drawer/dist/index.css';
import Drawer from 'react-modern-drawer';
import Button from '@components/Button';
interface TDrawer {
  isOpen: boolean;
  toggleDrawer: () => void;
  theme?: string;
}

export default function DrawerMenu({ isOpen, toggleDrawer, theme }: TDrawer) {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="left"
      size="320px"
      style={{ background: theme === 'dark' ? '#475569' : 'white' }}
    >
      <div className="m-5 flex flex-col ">
        <Button route="/" title="Home" />
        <Button route="/basics/01-basic-types" title="01-Basic-types" />
        <Button route="/basics/02-functions" title="02-Functions" />
        <Button route="/basics/03-functions-with-functions" title="03-Functions-with-functions" />
        <Button route="/basics/04-function-overloading" title="04-Function-overloading" />
        <Button route="/basics/05-optionals" title="05-Optionals" />
      </div>
    </Drawer>
  );
}
