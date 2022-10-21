import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { IPost } from '../data/types';

type IData = IPost;

interface SortMenuProps {
  data: Array<keyof IData>;
  state: IData[];
  setState: Dispatch<SetStateAction<IData[]>>;
}

const SortMenu: React.FC<SortMenuProps> = ({ data, state, setState }) => {
  const [selectedSort, setSelectedSort] = useState<keyof IData>();

  const sortedData = useMemo(() => {
    if (selectedSort) {
      console.log('sorted');
      return [...state].sort((a, b) => {
        if (typeof a[selectedSort] === 'number') {
          return Number(a[selectedSort]) - Number(b[selectedSort]);
        } else {
          return String(a[selectedSort]).localeCompare(String(b[selectedSort]));
        }
      });
    }
    return state;
  }, [selectedSort]);

  useEffect(() => {
    setState(sortedData);
  }, [selectedSort]);

  return (
    <ul className="flex justify-around w-full border border-gray-500 py-2 px-4">
      {data.map((property) => (
        <li
          key={property}
          className="font-bold cursor-pointer"
          onClick={() => setSelectedSort(property as keyof IData)}
        >
          {property}
        </li>
      ))}
    </ul>
  );
};

export default SortMenu;
