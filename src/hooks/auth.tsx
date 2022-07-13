/* eslint-disable camelcase */
import { createContext, useCallback, useState, useContext, FC } from 'react';

interface User {
  user: string
}

interface AuthState {
  user: User;
}

interface AuthContextData {
  user: User;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: FC = ({ children }) => {
  const [data, setData] = useState({} as AuthState);

  console.log('CONTEXT DATA: ', data)

  const updateUser = useCallback(
    (user: User) => {
      setData({
        user,
      });
    },
    [setData],
  );

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ user: data.user, updateUser }}
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
