/* eslint-disable no-unneeded-ternary */
import React, { useState } from 'react';
import useGetList from '../../utils/useGetList';
import CategoryIem from '../atoms/CategoryItem';
import CategoryBox from '../atoms/CatogryContainer';
import { segmentKeys, segmentValues } from '../../utils/types';

export default function Category() {
  const [selected, setSeleted] = useState('');
  const { getCarList, getFilterCar } = useGetList();

  const selectCarCategory = (index) => {
    setSeleted(segmentKeys[index]);
    getFilterCar({ segment: segmentKeys[index] });
  };

  const selectAllCar = () => {
    setSeleted('ALL');
    getCarList();
  };

  return (
    <CategoryBox>
      <CategoryIem
        isSelected={selected === 'ALL'}
        onClick={() => selectAllCar()}
      >
        전체
      </CategoryIem>
      {segmentValues.map((el, i) => (
        <CategoryIem
          isSelected={selected === segmentKeys[i]}
          onClick={() => selectCarCategory(i)}
        >
          {el}
        </CategoryIem>
      ))}
    </CategoryBox>
  );
}
