import axios from 'axios';
import React, { useState } from 'react';
import AppBar from '../components/Common/AppBar';
import SearchInput from '../components/news/SearchInput';

const PharmacyPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [pharmacyList, setPharmacyList] = useState([]);
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };
  const handleClick = () => {
    const option = {
      method: 'GET',
      url: 'http://apis.data.go.kr/B551182/pharmacyInfoService/getParmacyBasisList',
      params: {
        ServiceKey:
          'kgV8g6x1QMseU0yjZqv5z/hgFXaSL1bbnapIoJqUTys+NYRqhLbky0ZhIuJLbxDg4PCmMEZzQRc9FqC5fUNy3g==',
        emdongNm: searchInput,
      },
    };
    axios(option).then((response) => {
      console.log(response.data);
      console.log(response.data.response.body.items.item);
      setPharmacyList(response.data.response.body.items.item);
    });
  };
  return (
    <div>
      <AppBar title={'약국 검색'}></AppBar>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      {pharmacyList.map((pharmacy) => {
        return <p>{pharmacy.yadmNm}</p>;
      })}
    </div>
  );
};

export default PharmacyPage;
