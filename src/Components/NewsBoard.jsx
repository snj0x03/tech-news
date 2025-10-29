// import { useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
    const articles = [{
        title: "cat",
        description: "I like cats."
    }, {
        title: "money",
        description: "I want money."
    }];

    return (
        <div>
            <h1>Tech News</h1>
            {articles.map((news) => {
                return <NewsItem title={news.title} description={news.description}></NewsItem>
            })}
        </div>
    )
}

export default NewsBoard