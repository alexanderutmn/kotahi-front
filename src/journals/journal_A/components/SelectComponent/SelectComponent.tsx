import React from 'react';
import { SelectorItemType } from '../../../../types/types';

type PropsType = {
  titlePlaceholder: string;
  items: SelectorItemType[];
  isOptional?: boolean;
  selectedItem?: SelectorItemType;
  onSelect?: (selectedItem: SelectorItemType | undefined) => void;
};

const SelectComponent: React.FC<PropsType> = ({ titlePlaceholder, items, selectedItem, onSelect, isOptional }) => {
  const onSelectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect && onSelect(items.find((item) => item.value === e.target.value));
  };

  return (
    <span className="sj-select">
      <select onChange={onSelectOption}>
        {isOptional ? <option>{titlePlaceholder}</option> : !selectedItem && <option>{titlePlaceholder}</option>}
        {items.map((item) => (
          <option key={item.id} selected={selectedItem && item.id === selectedItem.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </span>
  );
};

export default SelectComponent;
