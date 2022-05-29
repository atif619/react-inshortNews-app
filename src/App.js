import React, { useState, useEffect } from 'react'
import ListItems from './components/ListItems';
import Navbar from './components/Navbar.js';
import NewsContent from './components/NewsContent.js';
import axios from "axios";


function App() {

  const [newsData, setNewsData] = useState([])
  const [totalNewsResult, setTotalNewsResult] = useState();
  const [category, setCatagory] = useState('general');
  const [menu, setMenu] = useState(false)
  const [loadmore, setLoadMore] = useState(20)

  const API_KEY = '18c0b0149a4d440b8da40ac9719a177a';

  // const getNews = async () => {
  //   let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${loadmore}&apiKey=${API_KEY}`)

  //   let data = await res.json();
  //   setNewsData(data.articles)
  //   setTotalNewsResult(data.totalResults)
  //   // console.log(totalNewsResult);
  // }

  const getNews = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";

      const news = await axios.get(
        `${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${loadmore}&apiKey=${API_KEY}`
      );
      // console.log(news);
      setNewsData(news.data.articles);
      setTotalNewsResult(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, [category, totalNewsResult, loadmore])

  return (
    <>
      <Navbar setMenu={setMenu} menu={menu} />
      <ListItems setCatagory={setCatagory} menu={menu} setMenu={setMenu} />
      {
        totalNewsResult && (
          <NewsContent newsData={newsData} loadmore={loadmore} totalNewsResult={totalNewsResult} setLoadMore={setLoadMore} />
        )
      }

    </>

  );
}

export default App;
