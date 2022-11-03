import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../components/atoms/ErrorMesssage';
import MetaBox from '../components/molecules/MetaBox';
import CarDescription from '../components/templates/CarDescription';
import useCarDescription from '../utils/useCarDescription';

function CardDescription() {
  const { carId } = useParams();

  const { getCarDescription, isLoading, noResult, selectedCar } =
    useCarDescription(Number(carId));

  useEffect(() => {
    getCarDescription();
  }, []);

  return (
    <>
      {isLoading && <ErrorMessage>불러오는 중입니다</ErrorMessage>}
      {!isLoading && !noResult && selectedCar && (
        <div>
          <MetaBox
            name={selectedCar.name}
            brand={selectedCar.brand}
            img={selectedCar.imageUrl}
            amount={selectedCar.amount}
            carId={carId}
          />
          <div>
            <CarDescription {...selectedCar} />
          </div>
        </div>
      )}
      {noResult && <ErrorMessage>결과가 없습니다</ErrorMessage>}
    </>
  );
}

export default CardDescription;
