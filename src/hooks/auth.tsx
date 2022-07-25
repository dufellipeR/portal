/* eslint-disable camelcase */
import { createContext, useCallback, useState, useContext, FC } from 'react';

interface User {
  CodUser: string
  Email: string
  Login: string
  Nivel: string
  Nome: string
  Valido: boolean
}

interface AuthContextData {
  user: User;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: FC = ({ children }) => {
  const [userState, setUserState] = useState({} as User);

  const updateUser = useCallback(
    (user: User) => {
      setUserState(user);
    },
    [setUserState],
  );

  console.log('USER: ', userState)

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ user: userState, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
