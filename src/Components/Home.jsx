import Chatlists from "./Chatlists";
import Chatboard from "./Chatboard";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden  h-full">
      <div className="flex">
        <div className="w-[32%] ">
          <Chatlists />
        </div>
        <div className="w-[68%] ">
          <Chatboard />
        </div>
      </div>
    </div>
  );
};

export default Home;
