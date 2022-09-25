import { Link, Outlet } from 'react-router-dom';

//routes inherit from parent components/routes
const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="new-user">New User</Link>
      <Outlet />
    </section>
  );
};

export default Welcome;
