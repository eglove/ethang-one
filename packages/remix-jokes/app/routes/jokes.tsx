import { Outlet } from 'remix';

const Jokes = (): JSX.Element => {
  return (
    <div>
      <h1>J🤪KES</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Jokes;
