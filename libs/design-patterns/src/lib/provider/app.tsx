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

function DataProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  // eslint-disable-next-line react/hook-use-state
  const [, setName] = useState('Ethan');

  const changeName = (name: string): void => {
    setName(name);
  };

  const data = useMemo(() => {
    return { changeName, listItem: 'listItem', text: 'text', title: 'Ethan' };
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export function App(): JSX.Element {
  return (
    <div>
      <DataProvider>
        <SideBar />
        <Content />
      </DataProvider>
    </div>
  );
}

function SideBar(): JSX.Element {
  return <List />;
}

function List(): JSX.Element {
  return <ListItem />;
}

function Content(): JSX.Element {
  return (
    <div>
      <Header />
      <Text />
    </div>
  );
}

function ListItem(): JSX.Element {
  const data = useDataContext();

  return <span>{data.listItem}</span>;
}

function Text(): JSX.Element {
  const data = useDataContext();
  return <h1>{data.text}</h1>;
}

function Header(): JSX.Element {
  const data = useDataContext();
  return <div>{data.title}</div>;
}
