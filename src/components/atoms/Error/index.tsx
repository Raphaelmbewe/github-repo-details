import { FC } from "react";
type errorProps = {
  message: string;
};

const Error: FC<errorProps> = ({
  message,
}) => {
  return (
    <div className="flex flex-col bg-transparent p-4 gap-y-4 dark:border-gray-700 border rounded-lg  w-full ">
      <div className="flex justify-between items-center">
        <p className="text-2xl text-white font-bold text-center">{message}</p>
       </div>
    </div>
  );
};
export default Error;
