import { useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="container h-full h-48 m-auto flex flex-col align-middle justify-center">
      <h1 className="text-3xl font-bold mb-4">CODSOFT CALCOLATOR</h1>
      <div className="flex flex-col mb-4">
        <label htmlFor="num1">First Number</label>
        <input
          type="text"
          name="num1"
          onChange={(e) => setNum1(parseInt(e.target.value))}
          id="num1"
          className="border border-none bg-stone-200 rounded-md"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="" htmlFor="num2">
          Second Number
        </label>
        <input
          type="text"
          id="num2"
          onChange={(e) => setNum2(parseInt(e.target.value))}
          name="num1"
          className="border border-none bg-stone-200 rounded-md"
        />
      </div>
      <div className="flex gap-4 mb-4 justify-center my-4">
        <span
          className="inline-block px-4 py-2 bg-gray-700 text-white rounded-md"
          onClick={() => {
            setResult(num1 + num2);
          }}
        >
          +
        </span>
        <span
          className="inline-block px-4 py-2 bg-gray-700 text-white rounded-md"
          onClick={() => setResult(num1 - num2)}
        >
          -
        </span>
        <span
          className="inline-block px-4 py-2 bg-gray-700 text-white rounded-md"
          onClick={() =>
            setResult(num2 === 0 ? "can't divition by zero" : num1 / num2)
          }
        >
          /
        </span>
        <span
          className="inline-block px-4 py-2 bg-gray-700 text-white rounded-md"
          onClick={() => setResult(num1 * num2)}
        >
          x
        </span>
      </div>
      <h3 className=" shadow-lg mt-4 text-white text-center text-lg rounded-md">
        {result}
      </h3>
    </div>
  );
}

export default App;
