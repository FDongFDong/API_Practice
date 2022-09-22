import React from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '../components/Common/AppBar';
import qs from 'query-string';

const HospitalDetailPage = () => {
  const { search } = useLocation();
  console.log(useLocation());
  console.log(search);
  const parsedData = qs.parse(search);
  console.log(parsedData.ykiho);
  return <AppBar title={'병원 상세 정보'}></AppBar>;
};

export default HospitalDetailPage;
