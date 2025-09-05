import { createContext, ReactNode, useContext, useState } from "react";

type User = {
  name: string;
  oracle: string;
  password: string;

  // Add other user fields if needed
};

type User2={
savings: string;
loanBalance:string;
softloanBalance:string;
}


type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;

  user2: User2 | null;
  setUser2: React.Dispatch<React.SetStateAction<User2 | null>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [user2, setUser2] = useState<User2 | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser, user2, setUser2 }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
