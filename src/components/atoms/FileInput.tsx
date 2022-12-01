import { useContext } from "react";
import AppContext from "../../utils/appContext";

const FileInput = () => {
  const context = useContext(AppContext);

  const handleFileInput = (event: any) => {
    //  Opening Process
    const file = event?.target?.files[0];

    // Reading Process
    const reader = new FileReader();
    reader.readAsText(file);
    reader.addEventListener("load", () => {
      if (typeof reader.result === "string") {
        context?.onFileInput(reader.result);
      } else {
        return;
      }
    });
  };

  return (
    <div>
      <label className="btn btn-primary mr-4 rounded-xl" htmlFor="md-file">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
          />
        </svg>
      </label>
      <input
        accept=".md"
        onChange={handleFileInput}
        hidden
        type="file"
        id="md-file"
      />
    </div>
  );
};

export default FileInput;
