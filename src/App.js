import React, { useState, useEffect } from 'react'
import ListItems from './components/ListItems';
import Navbar from './components/Navbar.js';
import NewsContent from './components/NewsContent.js';

function App() {

  const [newsData, setNewsData] = useState([])
  const [totalNewsResult, setTotalNewsResult] = useState();
  const [category, setCatagory] = useState('general');
  const [menu, setMenu] = useState(false)
  const [loadmore, setLoadMore] = useState(20)

  const API_KEY = '0730c4f7fcb04fb0b2958f59b4a89a8e';

  const getNews = async () => {
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${loadmore}&apiKey=${API_KEY}`)

    let data = await res.json();
    setNewsData(data.articles)
    setTotalNewsResult(data.totalResults)
    // console.log(totalNewsResult);
  }

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
