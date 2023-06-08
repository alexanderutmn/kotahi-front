import React, { useRef, useState } from 'react';

import { preventDefault } from '../../../../../utils/functions';

type PropsType = {
  onSubmit?: (data: FormData) => void;
};

const HeaderSearchForm: React.FC<PropsType> = ({ onSubmit }) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    preventDefault(e);
    const form = formRef?.current;
    if (form && form.checkValidity()) {
      onSubmit && onSubmit(new FormData(form));
    }
  };

  const [value, setValue] = useState<string>('');

  const onSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form ref={formRef} className="sj-formtheme sj-formsearcmain" onSubmit={onSubmitHandler}>
      <input name="searchInput" type="search" value={value} onChange={onSetValue} placeholder="Search Here..." />
      <button type="submit" className="sj-btn sj-btnactive" id="searchSubmit">
        <span>Search</span>
      </button>
    </form>
  );
};

export default HeaderSearchForm;
