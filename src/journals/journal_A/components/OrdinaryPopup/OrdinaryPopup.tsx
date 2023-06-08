import React, { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react';
import classes from './OrdinaryPopup.module.css';
import classNames from 'classnames';

export type RefOrdinaryPopup = {
  showPopup: () => void;
  closePopup: () => void;
} | null;

type PropsType = {
  contentForm: JSX.Element;
  onConfirmForm?: (data: FormData) => void;
};

const OrdinaryPopup = forwardRef<RefOrdinaryPopup, PropsType>(({ contentForm, onConfirmForm }: PropsType, ref) => {
  const [active, setActive] = useState(false);
  const refPopup = useRef<HTMLDivElement>(null);

  const onCloseHandler = useCallback(() => {
    setActive(false);
  }, []);

  useImperativeHandle(ref, () => ({
    showPopup() {
      setActive(true);
    },
    closePopup() {
      setActive(false);
    },
  }));

  const extendContentForm = useMemo(
    () => React.cloneElement(contentForm, { onConfirm: onConfirmForm, onClose: onCloseHandler, isActive: active }),
    [contentForm, onConfirmForm, onCloseHandler, active]
  );

  if (active) {
    document.body.classList.add(classes.stopScroll);
  } else {
    document.body.classList.remove(classes.stopScroll);
  }

  return (
    <>
      {
        <div
          ref={refPopup}
          className={classNames(classes.container, { [classes.active]: active })}
          onClick={onCloseHandler}
        >
          <div className={classes.content} onClick={(e) => e.stopPropagation()}>
            {extendContentForm}
          </div>
        </div>
      }
    </>
  );
});

export default OrdinaryPopup;
