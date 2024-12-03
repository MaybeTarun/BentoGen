import React, { useState } from "react";
import * as Babel from "@babel/standalone";
import { FaCopy, FaArrowRightLong } from "react-icons/fa6";
import { FaSyncAlt } from "react-icons/fa";
import '../index.css';

const defaultCode = `function Bento() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="p-4 w-full h-full grid grid-cols-[55%_1fr] gap-2">
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
}`;

const Generator = () => {
    const [code, setCode] = useState(defaultCode);
    const [boxCount, setBoxCount] = useState<number>(0);
    const [wantNavbar, setWantNavbar] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [isRotating, setIsRotating] = useState(false);
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(code).then(() => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
      });
    };
  
    const refreshPreview = () => {
      setCode(code);
      setIsRotating(true);
      setTimeout(() => setIsRotating(false), 1000);
    };

  const Preview = () => {
    try {
      const transformedCode = Babel.transform(code, {
        presets: ["react"],
        filename: "bento.jsx",
      }).code || "";

      const finalCode = `
        ${transformedCode}
        return Bento();
      `;

      const scope = { React };
      const func = new Function(...Object.keys(scope), finalCode);

      return func(...Object.values(scope));
    } catch (err) {
      const error = err as Error;
      console.error("Preview error:", error);
      return (
        <div className="text-red-500 p-4">
          Error rendering preview: {error.message}
        </div>
      );
    }
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
            <FaSyncAlt
                  className={`ml-2 text-gray-400 hover:text-gray-600 cursor-pointer transition-transform duration-500 ${isRotating ? 'rotate' : ''}`}
                  onClick={refreshPreview} 
            />
          </div>

          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute inset-0 bg-white overflow-auto">
              <Preview />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4">
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
            <div className="text-gray-400 text-sm font-mono">bento.jsx</div>
            <div className="relative">
              <button onClick={copyToClipboard} className="text-gray-400 hover:text-white">
                <FaCopy />
              </button>
              {showPopup && (
                <div className="absolute -top-0 right-0 bg-gray-700 text-white text-xs rounded px-2 py-1">
                  Copied!
                </div>
              )}
            </div>
          </div>
          <div className="p-4 font-mono text-sm">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full bg-gray-900 text-gray-300 font-mono p-2 focus:outline-none overflow-x-auto"
              rows={15}
              wrap="off"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <label htmlFor="boxCount" className="text-sm md:text-[1rem]">Box Count:</label>
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
          <div className="flex items-center gap-2">
            <label htmlFor="wantNavbar" className="text-sm md:text-[1rem]">Navbar:</label>
            <input
              type="checkbox"
              id="wantNavbar"
              className="h-4 w-4 text-blue-300 border-gray-300 rounded focus:ring-blue-400"
              checked={wantNavbar}
              onChange={() => setWantNavbar(!wantNavbar)}
            />
          </div>
          </div>
          <div className="relative flex items-center mt-2 md:mt-0">
            <div
              className={`absolute ${isHovered ? "w-[10rem]" : "w-10"} h-10 bg-blue-300 rounded-full z-10 transition-all duration-500`}
            ></div>
            <button
              onClick={() => setCode(defaultCode)}
              className="w-fit text-black z-20 fontJetBrains ml-4 flex items-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Try Another
              <FaArrowRightLong
                className={`z-20 ml-2 ${isHovered ? "-rotate-90 transition-transform duration-500" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
