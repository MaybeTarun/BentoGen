import React, { useState } from "react";
import { LiveProvider, LivePreview, LiveError } from "react-live";
import { FaCopy } from "react-icons/fa6";
import { FaDesktop, FaMobileAlt } from "react-icons/fa";
import "../index.css";

const defaultCode = `function Bento() {
  return (
    <div className="w-full h-full p-4">
      Choose Box Count(0-8) and press Try Another.
    </div>
  );
}
`;

type Language = "react" | "next" | "vue" | "angular" | "svelte";
type SplitDirection = "cols" | "rows";

interface BentoRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

type CodeMap = Record<Language, string>;

const languages: Array<{ id: Language; label: string }> = [
  { id: "react", label: "React" },
  { id: "next", label: "Next" },
  { id: "vue", label: "Vue" },
  { id: "angular", label: "Angular" },
  { id: "svelte", label: "Svelte" },
];

const defaultCodes: CodeMap = {
  react: defaultCode,
  next: `export default function Bento() {
  return (
    <div className="w-full h-full p-4">
      Choose Box Count(0-8) and press Try Another.
    </div>
  );
}
`,
  vue: `<template>
  <div class="w-full h-full p-4">
    Choose Box Count(0-8) and press Try Another.
  </div>
</template>
`,
  angular: `import { Component } from "@angular/core";

@Component({
  selector: "app-bento",
  standalone: true,
  template: \`
    <div class="w-full h-full p-4">
      Choose Box Count(0-8) and press Try Another.
    </div>
  \`,
})
export class BentoComponent {}
`,
  svelte: `<div class="w-full h-full p-4">
  Choose Box Count(0-8) and press Try Another.
</div>
`,
};

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const clampBoxCount = (count: number) => {
  if (!Number.isFinite(count)) return 0;
  return Math.min(Math.max(Math.floor(count), 0), 8);
};

const getPossibleSplits = (
  count: number,
  widthUnits: number,
  heightUnits: number,
) => {
  const splits: Array<{
    direction: SplitDirection;
    firstUnits: number;
    firstCount: number;
    secondCount: number;
  }> = [];

  const addSplits = (direction: SplitDirection, totalUnits: number, otherUnits: number) => {
    for (let firstUnits = 1; firstUnits < totalUnits; firstUnits += 1) {
      const secondUnits = totalUnits - firstUnits;
      const firstCapacity = firstUnits * otherUnits;
      const secondCapacity = secondUnits * otherUnits;
      const minFirstCount = Math.max(1, count - secondCapacity);
      const maxFirstCount = Math.min(count - 1, firstCapacity);

      for (let firstCount = minFirstCount; firstCount <= maxFirstCount; firstCount += 1) {
        splits.push({
          direction,
          firstUnits,
          firstCount,
          secondCount: count - firstCount,
        });
      }
    }
  };

  if (widthUnits > 1) {
    addSplits("cols", widthUnits, heightUnits);
  }

  if (heightUnits > 1) {
    addSplits("rows", heightUnits, widthUnits);
  }

  return splits;
};

const createRects = (
  count: number,
  x = 1,
  y = 1,
  widthUnits = 5,
  heightUnits = 5,
): BentoRect[] => {
  if (count <= 1) {
    return [{ x, y, width: widthUnits, height: heightUnits }];
  }

  const splits = getPossibleSplits(count, widthUnits, heightUnits);
  const split = splits[randomInt(0, splits.length - 1)];

  if (split.direction === "cols") {
    return [
      ...createRects(split.firstCount, x, y, split.firstUnits, heightUnits),
      ...createRects(
        split.secondCount,
        x + split.firstUnits,
        y,
        widthUnits - split.firstUnits,
        heightUnits,
      ),
    ];
  }

  return [
    ...createRects(split.firstCount, x, y, widthUnits, split.firstUnits),
    ...createRects(
      split.secondCount,
      x,
      y + split.firstUnits,
      widthUnits,
      heightUnits - split.firstUnits,
    ),
  ];
};

const indent = (level: number) => "  ".repeat(level);

const renderJsxRect = (rect: BentoRect, level: number): string => {
  return `${indent(level)}<div
${indent(level + 1)}className="rounded-lg min-h-0"
${indent(level + 1)}style={{
${indent(level + 2)}backgroundColor: "#D1D5DB",
${indent(level + 2)}gridColumn: "${rect.x} / span ${rect.width}",
${indent(level + 2)}gridRow: "${rect.y} / span ${rect.height}",
${indent(level + 1)}}}
${indent(level)}></div>`;
};

const renderVueRect = (rect: BentoRect, level: number): string => {
  return `${indent(level)}<div
${indent(level + 1)}class="rounded-lg min-h-0"
${indent(level + 1)}:style="{
${indent(level + 2)}backgroundColor: '#D1D5DB',
${indent(level + 2)}gridColumn: '${rect.x} / span ${rect.width}',
${indent(level + 2)}gridRow: '${rect.y} / span ${rect.height}',
${indent(level + 1)}}"
${indent(level)}></div>`;
};

const renderAngularRect = (rect: BentoRect, level: number): string => {
  return `${indent(level)}<div
${indent(level + 1)}class="rounded-lg min-h-0"
${indent(level + 1)}[ngStyle]="{
${indent(level + 2)}'background-color': '#D1D5DB',
${indent(level + 2)}'grid-column': '${rect.x} / span ${rect.width}',
${indent(level + 2)}'grid-row': '${rect.y} / span ${rect.height}'
${indent(level + 1)}}"
${indent(level)}></div>`;
};

const renderSvelteRect = (rect: BentoRect, level: number): string => {
  return `${indent(level)}<div
${indent(level + 1)}class="rounded-lg min-h-0"
${indent(level + 1)}style="background-color: #D1D5DB; grid-column: ${rect.x} / span ${rect.width}; grid-row: ${rect.y} / span ${rect.height};"
${indent(level)}></div>`;
};

const generateBentoCode = (requestedCount: number) => {
  const safeCount = clampBoxCount(requestedCount);
  const actualCount = safeCount === 0 ? randomInt(1, 8) : safeCount;
  const rects = createRects(actualCount);

  const react = `function Bento() {
  return (
    <div
      className="grid gap-2 w-full h-full p-2"
      style={{
        gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
        gridTemplateRows: "repeat(5, minmax(0, 1fr))",
      }}
    >
${rects.map((rect) => renderJsxRect(rect, 3)).join("\n")}
    </div>
  );
}
`;

  const next = `export default function Bento() {
  return (
    <div
      className="grid gap-2 w-full h-full p-2"
      style={{
        gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
        gridTemplateRows: "repeat(5, minmax(0, 1fr))",
      }}
    >
${rects.map((rect) => renderJsxRect(rect, 3)).join("\n")}
    </div>
  );
}
`;

  const vue = `<template>
  <div
    class="grid gap-2 w-full h-full p-2"
    :style="{
      gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
      gridTemplateRows: 'repeat(5, minmax(0, 1fr))',
    }"
  >
${rects.map((rect) => renderVueRect(rect, 2)).join("\n")}
  </div>
</template>
`;

  const angular = `import { Component } from "@angular/core";
import { NgStyle } from "@angular/common";

@Component({
  selector: "app-bento",
  standalone: true,
  imports: [NgStyle],
  template: \`
    <div
      class="grid gap-2 w-full h-full p-2"
      [ngStyle]="{
        'grid-template-columns': 'repeat(5, minmax(0, 1fr))',
        'grid-template-rows': 'repeat(5, minmax(0, 1fr))'
      }"
    >
${rects.map((rect) => renderAngularRect(rect, 3)).join("\n")}
    </div>
  \`,
})
export class BentoComponent {}
`;

  const svelte = `<div
  class="grid gap-2 w-full h-full p-2"
  style="grid-template-columns: repeat(5, minmax(0, 1fr)); grid-template-rows: repeat(5, minmax(0, 1fr));"
>
${rects.map((rect) => renderSvelteRect(rect, 1)).join("\n")}
</div>
`;

  return { react, next, vue, angular, svelte };
};

const Generator = () => {
  const [codes, setCodes] = useState<CodeMap>(defaultCodes);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("react");
  const [boxCount, setBoxCount] = useState<number>(0);
  const [showPopup, setShowPopup] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const selectedCode = codes[selectedLanguage];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedCode).then(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 1000);
    });
  };

  const handleTryAnotherClick = () => {
    if (buttonDisabled) return;
    setButtonDisabled(true);

    const newCodes = generateBentoCode(boxCount);
    setCodes(newCodes);
    setTimeout(() => setButtonDisabled(false), 250);
  };

  const handleMobileClick = () => {
    setIsMobileView(true);
  };

  const handleDesktopClick = () => {
    setIsMobileView(false);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-12">
      
      <div className={`w-full ${isMobileView ? 'w-2/3 md:w-1/4' : 'md:w-1/2'}`}>
        <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-200 px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#DE6119]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFB200]"></div>
              <div className="w-3 h-3 rounded-full bg-[#9BB811]"></div>
            </div>
            <div className="flex-1 ml-4">
              <div className={`bg-white rounded px-3 py-1 text-sm text-gray-600 w-full ${isMobileView ? 'text-xs' : 'text-sm'}`}>
                bento-gen.vercel.app
              </div>
            </div>
            <FaDesktop 
              className={`ml-2 text-gray-400 hover:text-gray-600 cursor-pointer ${!isMobileView ? 'text-gray-600' : ''}`} 
              onClick={handleDesktopClick}
            />
            <FaMobileAlt 
              className={`ml-2 text-gray-400 hover:text-gray-600 cursor-pointer ${isMobileView ? 'text-gray-600' : ''}`} 
              onClick={handleMobileClick}
            />
          </div>
          <div className="relative w-full" style={{ paddingBottom: isMobileView ? "150%" : "56.25%"}}>
            <div className="absolute inset-0 bg-white overflow-auto">
              <LiveProvider code={codes.react} scope={{ React }}>
                <LivePreview className="w-full h-full" />
                <LiveError className="text-red-500 text-sm p-2" />
              </LiveProvider>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between gap-3">
            <div className="flex flex-wrap items-center justify-start gap-1">
              {languages.map((language) => (
                <button
                  key={language.id}
                  type="button"
                  onClick={() => setSelectedLanguage(language.id)}
                  className={`px-2 py-1 rounded text-[0.7rem] md:text-xs font-mono ${
                    selectedLanguage === language.id
                      ? "bg-white text-gray-900"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {language.label}
                </button>
              ))}
            </div>
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
            <pre className="w-full bg-gray-900 text-gray-300 font-mono p-2">
              {selectedCode}
            </pre>
          </div>
        </div>

        
        <div className="flex justify-center items-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <label htmlFor="boxCount" className="text-sm md:text-[1rem]">
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
              onChange={(e) => setBoxCount(clampBoxCount(Number(e.target.value)))}
            />
          </div>
          <button
            onClick={handleTryAnotherClick}
            className={`w-fit text-black text-sm md:text-[1rem] z-20 fontJetBrains ml-4 flex items-center border-2 py-2 px-6 rounded-full hover:bg-blue-300 ${buttonDisabled ? 'cursor-not-allowed' : ''}`}
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
