import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCart from '../Home/NewsCart/NewsCart';

const CategoryNews = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
            <h4>catecory is:{categoryNews.length}</h4>
            {
                categoryNews.map(news => <NewsCart
                key={news._id}
                news={news}
                ></NewsCart>)
            }
        </div>
    );
};

export default CategoryNews;