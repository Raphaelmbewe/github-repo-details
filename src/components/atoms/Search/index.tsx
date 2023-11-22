import { FC, InputHTMLAttributes } from "react";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  transparent?: boolean;
  showCommand?: boolean;
  onClick: () => void;
}

const Search: FC<SearchBarProps> = ({ placeholder, transparent, onClick ,...props }) => {
  return (
    <div
      className={`relative w-full sm:w-[700px] rounded-[50px] py-4 flex flex-1  overflow-hidden ${
        transparent
          ? "bg-transparent border-[1px] border-white"
          : "bg-white"
      } `}
    >
      <input
        {...props}
        type="text"
        placeholder={placeholder}
        className={`text-white w-full  h-full bg-transparent placeholder:text-placeholder placeholder:text-md pl-4   rounded-[6px] focus:outline-none focus:border focus:border-none`}
      />
      <div
      onClick={onClick}
        className="absolute top-0 bottom-0 right-0 flex items-center  cursor-pointer px-6 bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M9.53191 19.0729C4.27558 19.0729 -0.00390625 14.7934 -0.00390625 9.53704C-0.00390625 4.28071 4.27558 0.0012207 9.53191 0.0012207C14.7882 0.0012207 19.0677 4.28071 19.0677 9.53704C19.0677 14.7934 14.7882 19.0729 9.53191 19.0729ZM9.53191 1.39671C5.03844 1.39671 1.39158 5.05288 1.39158 9.53704C1.39158 14.0212 5.03844 17.6774 9.53191 17.6774C14.0254 17.6774 17.6722 14.0212 17.6722 9.53704C17.6722 5.05288 14.0254 1.39671 9.53191 1.39671Z"
            fill="black"
          />
          <path
            d="M19.3041 20.0038C19.1273 20.0038 18.9506 19.9387 18.811 19.7991L16.9504 17.9385C16.6806 17.6687 16.6806 17.2221 16.9504 16.9523C17.2202 16.6826 17.6667 16.6826 17.9365 16.9523L19.7972 18.813C20.067 19.0828 20.067 19.5293 19.7972 19.7991C19.6576 19.9387 19.4809 20.0038 19.3041 20.0038Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
