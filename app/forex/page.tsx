"use client";

import React, { useState, useEffect } from "react";
import "./forex.css";
import Link from "next/link";

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
}

const Forex = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=forex&apiKey=f02ab78ce0284cea93ee8a265203609d` // API key hardcoded here
        );
        const data = await response.json();
        setNews(data.articles || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading news...</div>;
  }

  if (news.length === 0) {
    return <div>No forex news available at the moment.</div>;
  }

  return (
    <div className="stock-news-container">
      <div>
        <ul className="nav">
          <li className="dropdown">
            News
            <ul className="dropdown-menu">
              <li>
                <Link href="/stock">Stock News</Link>
              </li>
              <li>
                <Link href="/forex">Forex News</Link>
              </li>
              <li>
                <Link href="/crypto">Crypto News</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            Markets
            <ul className="dropdown-menu">
              <li>
                <Link href="#need1">S&P</Link>
              </li>
              <li>
                <Link href="#need2">EURO</Link>
              </li>
              <li>
                <Link href="#need3">JPY</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link target="_blank" href="https://subhankaladiportfolio.vercel.app/">
              My-Portfolio
            </Link>
          </li>
        </ul>
      </div>

      <div className="news-list">
        {news.map((article, index) => (
          <div key={index} className="news-item">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="news-image"
              />
            )}
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forex;
