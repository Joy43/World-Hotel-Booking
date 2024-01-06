import { MoonLoader } from "react-spinners";

const Loading = ({ smallHeight }) => {
  return (
    <div>
      <div
        className={` ${smallHeight ? "h-[250px]" : "h-[70vh]"}
      flex 
      flex-col 
      justify-center 
      items-center `}
      >
        <MoonLoader size={100} color="green" />
      </div>
    </div>
  );
};

export default Loading;
