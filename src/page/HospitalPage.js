import { hasUnreliableEmptyValue } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React, { useState } from 'react';
import AppBar from '../components/Common/AppBar';
import SearchInput from '../components/news/SearchInput';

const HospitalPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [hospitalList, setHospitalList] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };
  const handleClick = () => {
    const option = {
      method: 'GET',
      url: 'http://apis.data.go.kr/B551182/hospInfoService1/getHospBasisList1',
      params: {
        ServiceKey:
          'kgV8g6x1QMseU0yjZqv5z/hgFXaSL1bbnapIoJqUTys+NYRqhLbky0ZhIuJLbxDg4PCmMEZzQRc9FqC5fUNy3g==',
        emdongNm: searchInput,
      },
    };
    axios(option).then((response) => {
      console.log(response.data);
      setHospitalList(response.data.response.body.items.item);
    });
  };

  return (
    <div>
      <AppBar title={'병원 검색'}></AppBar>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      {hospitalList.map((hospital) => {
        return <p>{hospital.yadmNm}</p>;
      })}
    </div>
  );
};

export default HospitalPage;
