import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/atoms/ErrorMesssage';
import MetaBox from '../components/molecules/MetaBox';
import CarItem from '../components/oranisms/CarItem';
import Category from '../components/oranisms/Category';
import { useThemeContext } from '../utils/ThemeContext';
import { FUEL_TYPE, SEGMENT } from '../utils/types';
import useGetList from '../utils/useGetList';

function CarList() {
  const { list } = useThemeContext();
  const { isLoading, isSuccess, getCarList } = useGetList();
  const navigate = useNavigate();

  useEffect(() => {
    getCarList();
  }, []);

  return (
    <>
      <MetaBox
        name='전체차량'
        brand='B2C 차량 대여 서비스'
        img={list ? list[0].attribute.imageUrl : null}
        amount='가격을 확인해보세요'
        carId=''
      />
      <Category />
      {isLoading && <ErrorMessage>불러오는 중입니다</ErrorMessage>}
      <div>
        {!isLoading && isSuccess && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {list.map((el) => (
              <button
                type='button'
                style={{ borderBottom: '1px solid black' }}
                onClick={() => navigate(`/${el.id}`)}
              >
                <CarItem
                  brand={el.attribute.brand}
                  name={el.attribute.name}
                  segment={SEGMENT[el.attribute.segment]}
                  fuelType={FUEL_TYPE[el.attribute.fuelType]}
                  amount={el.amount.toLocaleString()}
                  thumbnail={el.attribute.imageUrl}
                />
              </button>
            ))}
          </div>
        )}
      </div>
      {!isLoading && isSuccess && list.length < 1 && (
        <ErrorMessage>차량이 없습니다</ErrorMessage>
      )}
    </>
  );
}

export default CarList;
