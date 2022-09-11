import 'react-modern-drawer/dist/index.css';
import Drawer from 'react-modern-drawer';
import Button from '@components/Button';
interface TDrawer {
  isOpen: boolean;
  toggleDrawer: () => void;
}

export default function DrawerMenu({ isOpen, toggleDrawer }: TDrawer) {
  return (
    <Drawer open={isOpen} onClose={toggleDrawer} direction="left" className="" size="320px">
      <div className="m-5 flex flex-col">
        <Button route="/" title="Home" />
        <Button route="/basics/01-basics" title="01-Basics" />
        <Button route="/basics/02-functions" title="02-Functions" />
        <Button route="/basics/03-functions-with-functions" title="03-Functions-with-functions" />
      </div>
    </Drawer>
  );
}
