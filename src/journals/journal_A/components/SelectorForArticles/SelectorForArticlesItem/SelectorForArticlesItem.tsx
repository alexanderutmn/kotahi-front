import React from 'react';
import { SelectorArticleCategoryType } from '../SelectorForArticles';

type PropsType = {
  item: SelectorArticleCategoryType;
  onToggleItem: (id: string) => void;
};

const SelectorForArticlesItem: React.FC<PropsType> = ({ item, onToggleItem }) => {
  const onChange = () => {
    onToggleItem(item.id);
  };

  return (
    <span className="sj-checkbox">
      <input id={item.id} type="checkbox" name="speciality" checked={item.selected} onChange={onChange} />
      <label htmlFor={item.id}>
        {item.label}
        <em>{`(${item.count})`}</em>
      </label>
    </span>
  );
};

export default SelectorForArticlesItem;
