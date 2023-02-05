import { useState } from "react";
import axios from <axios<

function App() {

  const [prompt, setPrompt] = useState("")

  console.log(prompt)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-extrabold">AI Art Gasless mints</h1>
      {/* Create an input box and button saying next beside it */}
      <div className="flex items-center justify-center gap-4">
        <input
          className="border-2 border-black rounded-md p-2"
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Enter a prompt"
        />
        <button className="bg-black text-white rounded-md p-2">Next</button>
      </div>
    </div>
  );
}

export default App;
