import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className="pt-8 max-w-screen-md">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex-justify-center">
            <img src={"src/chess.jpeg"} className="max-w=96" />
          </div>
          <div className="pt-16">
            <div className="flex justify-center">
              <h1 className="text-4xl font-bold text-white">
                Play Chess Online on the #2 Site!
              </h1>
            </div>

            <div className="mt-8 flex justify-center">
              <Button onClick={() => navigate("/game")}>
                Play Online
              </Button>
            </div>

            <div className="mt-3 flex justify-center">
              <button className="px-8 py-3 text-xl bg-gray-600 hover:bg-gray-800 text-white font-bold rounded">
                <div>Play Computer</div>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
