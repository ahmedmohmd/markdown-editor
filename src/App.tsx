import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import Content from "./components/widgets/Content";
import NavBar from "./components/widgets/NavBar";
import AppContext from "./utils/appContext";

function App() {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    themeChange(false);
  }, []);

  // Hanlder forctions
  const handleFileInput = (fileContent: string) => {
    setText(fileContent);
  };

  return (
    <AppContext.Provider
      value={{ onFileInput: handleFileInput, fileContent: text }}
    >
      <div className="flex justify-center items-center flex-col gap-6">
        <NavBar />
        <Content />
      </div>
    </AppContext.Provider>
  );
}

export default App;
