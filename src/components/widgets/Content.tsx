import { saveAs } from "file-saver";
import { FC, useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

import AppContext from "../../utils/appContext";

const Content: FC = () => {
  const context = useContext(AppContext);
  const [text, setText] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  useEffect(() => {
    setText(context?.fileContent || "");
  }, [context?.fileContent]);

  return (
    <div className="container mx-auto px-4 w-full h-full flex flex-col justify-center items-center gap-4 mb-16 mt-8">
      <div className="w-full flex justify-start items-center gap-2">
        <div className="flex justify-center items-center gap-4">
          <div>
            <input
              type="text"
              id="file-name"
              placeholder="Enter a file name..."
              className="input  focus:border-violet-500 border-2 border-slate-300/75 dark:border-slate-500/50  !outline-none w-full rounded-xl"
              onChange={(event: any) => setFileName(event.target.value)}
            />
          </div>

          <button
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-sm px-5 py-[0.9rem]  text-center"
            onClick={() => {
              const downloadable = new Blob([text], {
                type: "text/html",
              });

              saveAs(downloadable, `${fileName}.md`);
            }}
          >
            Download
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-stretch gap-5 w-full h-full">
        <textarea
          onChange={(event) => setText(event.target.value)}
          className="textarea  overflow-auto w-full lg:w-[40%] max-h-[75vh] bg-slate-50 dark:bg-[#191d24] rounded-2xl text-xl"
          cols={40}
          rows={30}
          value={text}
          style={{ resize: "none" }}
        ></textarea>

        <p className="prose text-lg overflow-auto break-words max-h-[75vh] dark:bg-[#191d24] bg-slate-50 w-full lg:min-w-[60%] p-5  grow-0 rounded-2xl">
          <ReactMarkdown
            className="w-full"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeSanitize]}
            components={{
              a: ({ node, ...props }) => (
                <a
                  target="_blank"
                  className="text-blue-500 font-semibold"
                  {...props}
                />
              ),
            }}
          >
            {text}
          </ReactMarkdown>
        </p>
      </div>
    </div>
  );
};

export default Content;
