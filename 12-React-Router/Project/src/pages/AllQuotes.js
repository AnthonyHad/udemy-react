import QuoteList from '../components/quotes/QuoteList';

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
