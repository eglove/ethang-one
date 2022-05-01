import { User } from 'firebase/auth';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

interface IUserContext {
  currentUser?: User | undefined;
  setCurrentUser?: Dispatch<SetStateAction<User | undefined>>;
}

export const UserContext = createContext<IUserContext>({});

interface UserProviderProperties {
  children: JSX.Element | JSX.Element[];
}

export function UserProvider({
  children,
}: UserProviderProperties): JSX.Element {
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const value = useMemo(() => {
    return { currentUser, setCurrentUser };
  }, [currentUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
