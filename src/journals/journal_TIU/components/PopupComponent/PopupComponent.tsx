import classNames from 'classnames';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createRoot, Root } from 'react-dom/client';

import classes from './PopupComponent.module.css';

type PropsType = {
  popupId: string;
  popupRoot: Root;
  onClose: (result: boolean | FormData) => void;
  innerForm: JSX.Element;
};

const PopupComponent: React.FC<PropsType> = ({ popupId, popupRoot, onClose, innerForm }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const close = useCallback(
    (result: boolean | FormData) => {
      setVisible(false);
      onClose(result);
      const div = document.getElementById(popupId);
      if (div) {
        setTimeout(() => {
          popupRoot.unmount();
          div.parentNode?.removeChild(div);
        }, 500);
      }
    },
    [onClose, popupId, popupRoot]
  );

  const onSubmitHandler = useCallback(
    (data: FormData | boolean) => {
      if (data) {
        close(data);
      } else {
        close(false);
      }
    },
    [close]
  );

  const extendedInnerForm = useMemo(
    () => React.cloneElement(innerForm, { onSubmit: onSubmitHandler }),
    [innerForm, onSubmitHandler]
  );

  const onCancelHandler = () => {
    close(false);
  };

  return (
    <div className={classNames('sj-searcharea', classes.container, { [classes.visible]: visible })}>
      <button type="button" className="close" onClick={onCancelHandler}>
        ×
      </button>
      {extendedInnerForm}
    </div>
  );
};

interface IShowPopup {
  innerForm: JSX.Element;
  onConfirm: (data: boolean | FormData) => void;
  onClose?: () => void;
}

export const showPopup = ({ innerForm, onConfirm, onClose }: IShowPopup) => {
  new Promise<boolean | FormData>((resolve) => {
    const div = document.createElement('div');
    div.id = 'popup' + new Date().getTime();
    document.body.append(div);
    const popupDiv = document.getElementById(div.id)!;
    const popupRoot = createRoot(popupDiv);
    popupRoot.render(<PopupComponent popupId={div.id} popupRoot={popupRoot} onClose={resolve} innerForm={innerForm} />);
  }).then((result) => {
    if (result) {
      onConfirm(result);
    } else {
      onClose && onClose();
    }
  });
};
