import Router, { useRouter } from 'next/router';

//domain/news/abc

function DetailPage() {
  //renders twice to get the concrete url value
  const router = useRouter();

  // console.log(router.query.newsId);

  const newsId = router.query.newsId;

  //send a request to the backend API
  //to fetch the news item with newsId

  return <h1>The Something Page</h1>;
}

export default DetailPage;
