import React from 'react';
import axios from 'axios';

const AxiosComponent = () => {
  const handleClick = () => {
    const url =
      'https://newsapi.org/v2/everything?apiKey=608cf1fcc1044cf8a552d15847786bb3&q=apple&language=ko&sortBy=publishedAt&from=2022-09-21';
    axios.get(url).then(function (response) {
      console.log(response);
    });
  };
  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
    </div>
  );
};

export default AxiosComponent;
