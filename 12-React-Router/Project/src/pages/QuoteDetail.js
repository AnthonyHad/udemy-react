import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Anthony',
    text: 'Learning React is super duper fun!',
  },
  {
    id: 'q2',
    author: 'Max',
    text: 'Learning React is super duper nuper fun!',
  },
  {
    id: 'q3',
    author: 'Jo',
    text: 'Learning React is super duper nuper super fun!',
  },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
