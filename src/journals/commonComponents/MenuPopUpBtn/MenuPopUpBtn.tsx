import React, { useRef, useState } from 'react';
import classes from './MenuPopUpBtn.module.css';
import { ControlledMenu, MenuItem } from '@szhsin/react-menu';

type PropsType = {
  tileMenuBtn: JSX.Element;
  menuItems: string[];
  onClickMenuItem: (keyItem: string) => void;
};

const MenuPopUpBtn: React.FC<PropsType> = ({ tileMenuBtn, menuItems, onClickMenuItem }) => {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={classes.menuContainer}>
      <div
        ref={ref}
        className={classes.menuButton}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div>{tileMenuBtn}</div>
      </div>

      <ControlledMenu
        anchorRef={ref}
        align={'end'}
        state={isOpen ? 'open' : 'closed'}
        menuClassName={classes.menu}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        {menuItems.map((itemKey, ind) => (
          <MenuItem
            key={ind}
            className={classes.btnItem}
            onClick={() => {
              onClickMenuItem(itemKey);
            }}
          >
            {itemKey}
          </MenuItem>
        ))}
      </ControlledMenu>
    </div>
  );
};

export default MenuPopUpBtn;
