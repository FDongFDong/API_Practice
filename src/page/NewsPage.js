import axios from 'axios';
import React, { useState } from 'react';
import AppBar from '../components/Common/AppBar';
import NewsList from '../components/news/NewsList';
import SearchInput from '../components/news/SearchInput';

const NewsPage = () => {
  const [searchInput, setSearchInput] = useState('');
  // 1. searchInput 데이터를 newsSearch 컴포넌트로 부터 받아오기
  const [searchList, setSearchList] = useState([]);
  // 2. axios를 통해서 데이터를 요청하여 내역 searchList 채우기
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };
  const handleClick = () => {
    const api = '608cf1fcc1044cf8a552d15847786bb3';
    const url = `https://newsapi.org/v2/everything?q=${searchInput}&sortBy=publishedAt&from=2022=09-22&apiKey=${api}`;
    axios.get(url).then(function (response) {
      console.log(response.data.articles);
      setSearchList(response.data.articles);
    });
  };
  return (
    <div>
      hi
      <AppBar title={'뉴스 검색'}></AppBar>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      <NewsList searchList={searchList}></NewsList>
    </div>
  );
};

export default NewsPage;
