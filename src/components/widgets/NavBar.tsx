import FileInput from "../atoms/FileInput";
import ThemeToggler from "../atoms/ThemeToggler";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 container mx-auto px-4 py-4">
      <div className="flex-1">
        <span className="ml-4 light:text-slate-600 dark:text-slate-100 text-xl font-semibold">
          Markdown Editor
        </span>
      </div>
      <div className="flex-none gap-2">
        <FileInput />
        <ThemeToggler />
      </div>
    </div>
  );
};

export default NavBar;
