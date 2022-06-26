// this is for request that reaches 'our-domain.com/news'
import { Fragment } from 'react';
import Link from 'next/link';

const NewsPage = () => {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href='/news/thefirstitem'>
                        The First Item
                    </Link>
                </li>
                <li>
                    The Second Item
                </li>
            </ul>
        </Fragment>
    );
};

export default NewsPage;