import { Fragment } from 'react';
import Link from 'next/link';

//domain/news

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <Link href="/news/nextjs-is-a-great-framework">
          <li>Next Js is a great Framework! </li>
        </Link>
        <li>Relationship advice</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
