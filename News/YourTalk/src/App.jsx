import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import NewsCard from './NewsCard.jsx';
import About from './About.jsx'; 
import More from './More.jsx'; 

function App() {
  const [newsData, setNewsData] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-04-15&sortBy=publishedAt&apiKey=a82f7f06f14a4d78a56df19f56816ec3");
    const json = await data.json();
    console.log(json);
    setNewsData(json.articles);
  }

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/more' element={<More />} />
        </Routes>
        
        {newsData === null ? (
          <div>Loading</div>
        ) : (
          <div className='news'>
            {newsData.map((data) => (
              <NewsCard key={data.publishedAt} resData={data} />
            ))}
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
