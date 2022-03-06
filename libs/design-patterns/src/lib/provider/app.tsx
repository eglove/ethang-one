import { createContext, useContext, useMemo, useState } from 'react';

interface DataState {
  changeName?: (name: string) => void;
  listItem?: string;
  text?: string;
  title?: string;
}

const DataContext = createContext({});

const useDataContext = (): DataState => {
  return useContext(DataContext);
};

const DataProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  const [, setName] = useState('Ethan');

  const changeName = (name: string): void => {
    setName(name);
  };

  const data = useMemo(() => {
    return { changeName, listItem: 'listItem', text: 'text', title: 'Ethan' };
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const App = (): JSX.Element => {
  return (
    <div>
      <DataProvider>
        <SideBar />
        <Content />
      </DataProvider>
    </div>
  );
};

const SideBar = (): JSX.Element => {
  return <List />;
};

const List = (): JSX.Element => {
  return <ListItem />;
};

const Content = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Text />
    </div>
  );
};

const ListItem = (): JSX.Element => {
  const data = useDataContext();

  return <span>{data.listItem}</span>;
};

const Text = (): JSX.Element => {
  const data = useDataContext();
  return <h1>{data.text}</h1>;
};

const Header = (): JSX.Element => {
  const data = useDataContext();
  return <div>{data.title}</div>;
};
