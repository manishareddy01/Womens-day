import React, { useState } from "react";
import "./App.css";
import "./puzzle.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "./pic2.png";
 
function App() {
    const [text, setText] = useState("Unpuzzle the pieces!!");
     
    const set = () => {
        setText("Congratulations!!");
    };
     
    return (
        <div className=" bg-lavender h-screen font-poppins flex flex-col">
            <h2 className="text-3xl justify-center items-center flex p-6 mt-4">{text}</h2>
            <div className="w-full max-w-lg md:w-210 md:h-200">
              </div><JigsawPuzzle 
                imageSrc={img}
                rows={3}
                columns={3}
                onSolved={set}
                className="jigsaw-puzzle "
            />
        </div>
    );
}
 
export default App;