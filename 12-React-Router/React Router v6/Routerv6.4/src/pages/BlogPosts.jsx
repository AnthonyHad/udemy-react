import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Posts from '../components/Posts';
import { getPosts } from '../util/api';

function BlogPostsPage() {
  const loaderData = useLoaderData();
  return (
    <>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={loaderData} />
    </>
  );
}

export default BlogPostsPage;

//This function is used inside the App folder which contains our routes
// and is passed as a prop to the route which gets us here and then is passed to the component
//no need to worry about the loading state because data is fetched behind the scenes
export function loader() {
  return getPosts();
}
