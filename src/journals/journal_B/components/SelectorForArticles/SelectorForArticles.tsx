import React, { useState } from 'react';
import { ArticleCategoryType } from '../../../../types/types';
import SelectorForArticlesItem from './SelectorForArticlesItem/SelectorForArticlesItem';

export type SelectorArticleCategoryType = ArticleCategoryType & { selected: boolean };

type PropsType = {
  title: string;
  items: ArticleCategoryType[];
  onSelect: (listSelectedId: string[]) => void;
};

const getAll = (items: ArticleCategoryType[]) => {
  const itemAll = items.filter((item) => item.id === '-1')[0];
  if (itemAll) {
    return itemAll.count;
  }
  return 0;
};

const convertItems = (items: ArticleCategoryType[]) => {
  return items.map((item) => {
    const selectorItem: SelectorArticleCategoryType = {
      id: item.id ? item.id : '-1',
      value: item.value,
      label: item.label,
      count: item.count,
      selected: false,
    };
    return selectorItem;
  });
};

const SelectorForArticles: React.FC<PropsType> = ({ title, items, onSelect }) => {
  const [viewAll, setViewAll] = useState(false);
  const [selectorItems, setSelectorItems] = useState<SelectorArticleCategoryType[]>(convertItems(items));

  const onChangeViewAll = () => {
    setViewAll((prev) => !prev);
    const newSelectorItems = [...selectorItems];
    newSelectorItems.forEach((item) => (item.selected = false));
    setSelectorItems(newSelectorItems);
    onSelect(selectorItems.filter((item) => item.id).map((item) => item.id));
  };

  const onToggleItem = (id: string) => {
    setViewAll(false);
    const index = selectorItems.findIndex((item) => item.id === id);
    if (index > -1) {
      const newSelectorItems = [...selectorItems];
      newSelectorItems[index].selected = !newSelectorItems[index].selected;
      setSelectorItems(newSelectorItems);
      onSelect(selectorItems.filter((item) => item.selected).map((item) => item.id));
    }
  };

  return (
    <div className="sj-widget sj-widgetspeciality">
      <div className="sj-widgetheading">
        <h3>{title}</h3>
      </div>
      <div className="sj-widgetcontent">
        <div className="sj-selectgroup">
          <span className="sj-checkbox">
            <input id="sj-viewall" type="checkbox" name="speciality" checked={viewAll} onChange={onChangeViewAll} />
            <label htmlFor="sj-viewall">
              View All<em>{`(${getAll(items)})`}</em>
            </label>
          </span>
          {selectorItems.map((item, ind) => {
            if (item.id !== '-1') {
              return <SelectorForArticlesItem key={ind} item={item} onToggleItem={onToggleItem} />;
            }
            return undefined;
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectorForArticles;
