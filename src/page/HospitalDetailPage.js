import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '../components/Common/AppBar';
import qs from 'query-string';
import axios from 'axios';
import SearchInput from '../components/news/SearchInput';

const HospitalDetailPage = () => {
  const [result, setResult] = useState([]);
  const { search } = useLocation();
  const parsedData = qs.parse(search);
  const ykiho = parsedData.ykiho;
  useEffect(() => {
    getHospitalDetailData();
  }, []);

  const getHospitalDetailData = () => {
    const option = {
      method: 'GET',
      url: 'http://apis.data.go.kr/B551182/hospDiagInfoService1/getClinicTop5List1',
      params: {
        ServiceKey:
          'kgV8g6x1QMseU0yjZqv5z/hgFXaSL1bbnapIoJqUTys+NYRqhLbky0ZhIuJLbxDg4PCmMEZzQRc9FqC5fUNy3g==',
        numOfRows: '1',
        pageNo: '1',
        ykiho: ykiho,
      },
    };
    axios(option).then(({ data }) => {
      console.log(data.response.body.items.item);
      setResult(data.response.body.items.item);
    });
  };

  // };
  {
    /*
            1.POST-MAN 을 통해서 '병원진료정보 조회서비스' 테스트.
            2.요청 리스폰스를 확인 후 소스 코드 작성
             - NEWS api 와 동일한 형태의 리스트 작성
             1. 구성요소 만들기 인풋, 버튼
             2. 이벤트 바인딩
             3. aixos 요청 작성하기 
        */
  }
  return (
    <div>
      <AppBar title={'병원 상세 정보'}></AppBar>
      <div>
        {result !== undefined && (
          <>
            <p>{result.mfrnIntrsIlnsCdNm1}</p>
            <p>{result.mfrnIntrsIlnsCdNm2}</p>
            <p>{result.mfrnIntrsIlnsCdNm3}</p>
            <p>{result.mfrnIntrsIlnsCdNm4}</p>
            <p>{result.mfrnIntrsIlnsCdNm5}</p>
          </>
        )}
        {result === undefined && (
          <>
            <p>현재 등록된 데이터가 없습니다</p>
          </>
        )}
      </div>
    </div>
  );
};
export default HospitalDetailPage;
