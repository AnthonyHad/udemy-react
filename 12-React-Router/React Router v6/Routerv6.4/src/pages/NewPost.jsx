import {
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';

import NewPostForm from '../components/NewPostForm';
import { savePost } from '../util/api';

function NewPostPage() {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation(); // gives a loading or submitting state

  function cancelHandler() {
    navigate('/blog');
  }

  return (
    <>
      {data && data.status && <p>{data.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === 'submitting'}
      />
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
      return err;
    }
    throw err;
  }
  return redirect('/blog');
}
