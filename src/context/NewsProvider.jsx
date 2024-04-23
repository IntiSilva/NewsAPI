import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

const NewsContext = createContext();

const NewsProvider = ({children}) => {
    const [category, setCategory] = useState('news');
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [totalNews, setTotalNews] = useState(0);
    const [loading, setLoading] = useState(false);

    const apiKey = import.meta.env.VITE_NEWSCATCHER_KEY;

    // Function to introduce a delay
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            // Ensure only one request is sent at the initial load or category change, resetting the page to 1
            if (page === 1 || category) {
                const url = `https://api.newscatcherapi.com/v2/latest_headlines?lang=en&page_size=20&topic=${category}`;
                console.log("Fetching news with URL:", url);
                try {
                    await delay(1000);  // Delay the request by 1000 milliseconds (1 second)
                    const response = await axios.get(url, {
                        headers: {
                            'x-api-key': apiKey
                        }
                    });
                    console.log("API Response:", response.data);
                    setNews(response.data.articles);
                    setTotalNews(response.data.total_hits);
                } catch (error) {
                    console.error("Failed to fetch news:", error);
                    console.log("Error details:", error.response ? error.response.data : 'No response data');
                } finally {
                    setLoading(false);
                }
            }
            // Handling page changes separately while keeping the same category
            if (page !== 1) {
                const paginatedUrl = `https://api.newscatcherapi.com/v2/latest_headlines?lang=en&page_size=20&topic=${category}&page=${page}`;
                console.log("Fetching news with URL (paginated):", paginatedUrl);
                try {
                    await delay(1000);  // Ensure a delay before the next paginated request
                    const paginatedResponse = await axios.get(paginatedUrl, {
                        headers: {
                            'x-api-key': apiKey
                        }
                    });
                    console.log("Paginated API Response:", paginatedResponse.data);
                    setNews(paginatedResponse.data.articles);
                    setTotalNews(paginatedResponse.data.total_hits);
                } catch (error) {
                    console.error("Failed to fetch paginated news:", error);
                    console.log("Paginated error details:", error.response ? error.response.data : 'No response data');
                }
            }
        };
        fetchNews();
    }, [category, page, apiKey]);

    const handleChangeCategory = e => {
        setCategory(e.target.value);
        setPage(1);  // Reset the page to 1 on category change to avoid pagination issues
    };

    const handleChangePage = (e, value) => {
        setPage(value);
    };

    return(
        <NewsContext.Provider
            value={{
                category,
                handleChangeCategory,
                news,
                totalNews,
                handleChangePage,
                page,
                loading
            }}
        >
            {children}
        </NewsContext.Provider>
    );
};

export {
    NewsProvider
};

export default NewsContext;
