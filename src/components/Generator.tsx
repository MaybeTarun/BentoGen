import React, { useState } from "react";
import { LiveProvider, LivePreview, LiveError } from "react-live";
import { FaCopy } from "react-icons/fa6";
import { FaSyncAlt } from "react-icons/fa";
import "../index.css";

const defaultCode = `function Bento() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="p-2 w-full h-full grid grid-cols-[55%_1fr] gap-2">
        <div className="grid grid-rows-[55%_1fr] gap-2">
          <div className="bg-[#222831] rounded-lg"></div>
          <div className="bg-[#76ABAE] rounded-lg"></div>
        </div>
        <div className="grid grid-rows-[25%_1fr] gap-2">
          <div className="bg-[#0d0d0d] rounded-lg"></div>
          <div className="bg-[#31363F] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
`;

const Generator = () => {
  const [code, setCode] = useState<string>(defaultCode);
  const [boxCount, setBoxCount] = useState<number>(0);
  const [showPopup, setShowPopup] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 1000);
    });
  };

  const generateCodeForBoxCount = () => {
    switch (boxCount) {
      case 0:
        return `function Bento() {
  return (
    <div className="w-full h-full">
      <div className="p-2 w-full h-full grid grid-cols-[55%_1fr] gap-2">
        <div className="grid grid-rows-[55%_1fr] gap-2">
          <div className="bg-gray-300 rounded-lg"></div>
          <div className="bg-gray-300 rounded-lg"></div>
        </div>
        <div className="grid grid-rows-[25%_1fr] gap-2">
          <div className="bg-gray-300 rounded-lg"></div>
          <div className="bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
        `;
      case 1:
        return `function Bento() {
  return (
    <div className="w-full h-full p-2">
      <div className="bg-gray-300 rounded-lg w-full h-full"></div>
    </div>
  );
}
        `;

      case 2:
        const randomValue = Math.floor(Math.random() * 9) * 5 + 10;
        return `function Bento() {
  return (
    <div className="w-full h-full grid grid-cols-[${randomValue}%_1fr] p-2 gap-2">
      <div className="bg-gray-300 rounded-lg w-full h-full"></div>
      <div className="bg-gray-300 rounded-lg w-full h-full"></div>
    </div>
  );
}
        `;

      case 3:
        return `function Bento() {
  return (
    <div className="w-full h-full p-2 gap-2">
      <div className="bg-gray-300 rounded-lg w-full h-full"></div>
    </div>
  );
}
        `;

      case 4:
        return `function Bento() {
  return (
    <div className="w-full h-full p-2 gap-2">
      <div className="bg-gray-300 rounded-lg w-full h-full"></div>
    </div>
  );
}
        `;

      case 5:
        return `function Bento() {
  return (
    <div className="w-full h-full p-2 gap-2">
      <div className="bg-gray-300 rounded-lg w-full h-full"></div>
    </div>
  );
}
        `;
        

      case 6:
        return `function Bento() {
  return (
    <div className="w-full h-full p-2 gap-2">
      <div className="bg-gray-300 rounded-lg w-full h-full"></div>
    </div>
  );
}
        `;

      case 7:
        return `function Bento() {
  return (
    <div className="w-full h-full p-2 gap-2">
      <div className="bg-gray-300 rounded-lg w-full h-full"></div>
    </div>
  );
}
        `;

      case 8:
        return `function Bento() {
  return (
    <div className="w-full h-full p-2 gap-2">
      <div className="bg-gray-400 rounded-lg w-full h-full"></div>
    </div>
  );
}
        `;

      default:
        return defaultCode;
    }
  };

  const handleTryAnotherClick = () => {
    if (buttonDisabled) return;
    setButtonDisabled(true);

    const newCode = generateCodeForBoxCount();
    setCode(newCode);
    setTimeout(() => setButtonDisabled(false), 1000);
  };

  const refreshPreview = () => {
    setCode(code);
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 pt-12">
      
      <div className="w-full md:w-1/2">
        <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-200 px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 ml-4">
              <div className="bg-white rounded px-3 py-1 text-sm text-gray-600 w-full">
                bento-gen.vercel.app
              </div>
            </div>
            <FaSyncAlt className={`ml-2 text-gray-400 hover:text-gray-600 cursor-pointer transition-transform duration-500 ${isRotating ? 'rotate-360' : ''}`}
            onClick={refreshPreview} 
            />
          </div>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute inset-0 bg-white overflow-auto">
              <LiveProvider code={code} scope={{ React }}>
                <LivePreview className="w-full h-full" />
                <LiveError className="text-red-500 text-sm p-2" />
              </LiveProvider>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
            <div className="text-gray-400 text-sm font-mono">bento.jsx</div>
            <div className="relative">
              <button
                onClick={copyToClipboard}
                className="text-gray-400 hover:text-white"
              >
                <FaCopy />
              </button>
              {showPopup && (
                <div className="absolute -top-0 right-0 bg-gray-700 text-white text-xs rounded px-2 py-1">
                  Copied!
                </div>
              )}
            </div>
          </div>
          <div
            className="p-4 font-mono text-sm"
            style={{
              height: "calc(15 * 1.5rem)",
              overflowY: "auto",
            }}
          >
            <pre className="w-full bg-gray-900 text-gray-300 font-mono p-2 overflow-x-auto">
              {code}
            </pre>
          </div>
        </div>

        
        <div className="flex justify-center items-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <label htmlFor="boxCount" className="">
              Box Count:
            </label>
            <input
              type="number"
              id="boxCount"
              min="0"
              max="8"
              className="w-16 px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="0-8"
              value={boxCount}
              onChange={(e) => setBoxCount(Number(e.target.value))}
            />
          </div>
          <button
            onClick={handleTryAnotherClick}
            className={`w-fit text-black z-20 fontJetBrains ml-4 flex items-center border-2 py-2 px-6 rounded-full hover:bg-blue-300 ${buttonDisabled ? 'cursor-not-allowed' : ''}`}
            disabled={buttonDisabled}
          >
            Try Another
          </button>
        </div>
      </div>
    </div>
  );
};

export default Generator;
