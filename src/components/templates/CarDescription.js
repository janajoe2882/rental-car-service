/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import useGetDate from '../../utils/useGetDate';
import InfoText from '../atoms/InfoText';
import DetailInfoBox from '../molecules/DetailInfoBox';

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.2rem;
  h5 {
    font-size: 2rem;
    font-weight: bold;
  }
  h6 {
    font-size: 1.4rem;
    font-weight: bold;
  }
  p {
    text-align: right;
  }
`;

const ImageBox = styled.img`
  width: 100%;
  max-height: 250px;
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
    rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
`;
const SubTitle = styled.p`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 1.2rem;
  padding: 0.8rem 1rem;
`;

export default function CarDescription({ ...selected }) {
  const {
    brand,
    name,
    segment,
    fuelType,
    imageUrl,
    amount,
    createdAt,
    insurance,
    additionalProducts
  } = selected;

  const { dates, day, month, getdate } = useGetDate(createdAt);

  return (
    <DescriptionWrapper>
      <ImageBox alt='car_ImageBox' src={imageUrl} />
      <TitleBox>
        <h6>{brand}</h6>
        <h5>{name}</h5>
        <InfoText>월 {amount} 원</InfoText>
      </TitleBox>
      <SubTitle>차량 정보 </SubTitle>
      <DetailInfoBox label='차종' text={fuelType} />
      <DetailInfoBox label='연료' text={segment} />
      <DetailInfoBox
        label='이용 가능일'
        text={`${month}월 ${getdate}일 (${dates[day]})부터`}
      />
      <SubTitle>보험</SubTitle>
      {insurance.map((el) => (
        <DetailInfoBox label={el.name} text={el.description} />
      ))}
      <SubTitle>추가상품</SubTitle>
      {additionalProducts.map((el) => (
        <DetailInfoBox label={el.name} text={`월 ${el.amount}만원`} />
      ))}
    </DescriptionWrapper>
  );
}
