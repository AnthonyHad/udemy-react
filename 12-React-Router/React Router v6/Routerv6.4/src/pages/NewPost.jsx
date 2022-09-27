import { redirect, useNavigate } from 'react-router-dom';

import NewPostForm from '../components/NewPostForm';
import { savePost } from '../util/api';

function NewPostPage() {
  const navigate = useNavigate();

  function cancelHandler() {
    navigate('/blog');
  }

  return (
    <>
      <NewPostForm onCancel={cancelHandler} submitting={false} />
    </>
  );
}

export default NewPostPage;

//automatically generated object and uses the browser request object(mdn)
export async function action({ request }) {
  const formData = await request.formData();
  const post = {
    title: formData.get('title'),
    body: formData.get('post-text'),
  };

  try {
    savePost(post);
  } catch (err) {
    if (err.status === 422) {
      throw err;
    }
    throw err;
  }
  return redirect('/blog');
}
