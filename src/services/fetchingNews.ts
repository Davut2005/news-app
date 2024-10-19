import axios from "axios";

export const url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=b1cdba7e3f704dd4bbdd18bf5785fb97';

export interface News {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {id: string, name: string};
    title: string
    url: string;
    urlToImage: string;
}

export interface Data {
    articles: News[],
    totalResults: number
} 

export const fetchNews = async () : Promise<Data> => {
    const res = await axios.get<Data>( url )
    console.log(res.data.articles);
    return res.data
}