// this is for request that reaches 'our-domain.com/news/<dynamic path>'
import { useRouter } from 'next/router';

const DetailPage = () => {
    const router = useRouter();

    const newsId = router.query.newsId;

    // send a request to the backend API
    // to patch the news item with newsId
    
    return (
        <h1>The Detail Page</h1>
    );
};

export default DetailPage;