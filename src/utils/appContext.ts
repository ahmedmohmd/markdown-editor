import { createContext } from "react";

interface AppContextType {
  onFileInput: (fileContent: string) => void;
  fileContent: string;
}

const AppContext = createContext<AppContextType | null>(null);

export default AppContext;
