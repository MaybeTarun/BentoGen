import grid1 from '../assets/grid1.png';
import grid2 from '../assets/grid2.png';
import grid3 from '../assets/grid3.png';
import grid4 from '../assets/grid4.png';
import grid5 from '../assets/grid5.png';
import grid6 from '../assets/grid6.png';

export type CodeLanguage = "react" | "next" | "vue" | "angular" | "svelte";

export const codeLanguages: Array<{ id: CodeLanguage; label: string }> = [
  { id: "react", label: "React" },
  { id: "next", label: "Next" },
  { id: "vue", label: "Vue" },
  { id: "angular", label: "Angular" },
  { id: "svelte", label: "Svelte" },
];

const design1Code: Record<CodeLanguage, string> = {
  react: `function Bento() {
  return (
    <div
      className="grid w-full h-full"
      style={{
        gap: "4px",
        gridTemplateColumns: "0.82fr 0.88fr 1fr",
        gridTemplateRows: "1.08fr 0.86fr 0.64fr",
      }}
    >
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridColumn: "1 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridRow: "2 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
    </div>
  );
}`,
  next: `export default function Bento() {
  return (
    <div
      className="grid w-full h-full"
      style={{
        gap: "4px",
        gridTemplateColumns: "0.82fr 0.88fr 1fr",
        gridTemplateRows: "1.08fr 0.86fr 0.64fr",
      }}
    >
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridColumn: "1 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridRow: "2 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
    </div>
  );
}`,
  vue: `<template>
  <div
    class="grid w-full h-full"
    :style="{
      gap: '4px',
      gridTemplateColumns: '0.82fr 0.88fr 1fr',
      gridTemplateRows: '1.08fr 0.86fr 0.64fr',
    }"
  >
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB', gridColumn: '1 / span 2' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB', gridRow: '2 / span 2' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
  </div>
</template>`,
  angular: `import { Component } from "@angular/core";
import { NgStyle } from "@angular/common";

@Component({
  selector: "app-bento",
  standalone: true,
  imports: [NgStyle],
  template: \`
    <div
      class="grid w-full h-full"
      [ngStyle]="{
        gap: '4px',
        'grid-template-columns': '0.82fr 0.88fr 1fr',
        'grid-template-rows': '1.08fr 0.86fr 0.64fr'
      }"
    >
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB', 'grid-column': '1 / span 2' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB', 'grid-row': '2 / span 2' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
    </div>
  \`,
})
export class BentoComponent {}`,
  svelte: `<div
  class="grid w-full h-full"
  style="gap: 4px; grid-template-columns: 0.82fr 0.88fr 1fr; grid-template-rows: 1.08fr 0.86fr 0.64fr;"
>
  <div class="rounded-lg" style="background-color: #D1D5DB; grid-column: 1 / span 2;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB; grid-row: 2 / span 2;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
</div>`,
};

const design2Code: Record<CodeLanguage, string> = {
  react: `function Bento() {
  return (
    <div
      className="grid w-full h-full"
      style={{
        gap: "4px",
        gridTemplateColumns: "0.95fr 1fr 1fr 0.95fr",
        gridTemplateRows: "1fr 0.8fr 0.8fr 0.85fr",
      }}
    >
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridRow: "1 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridRow: "1 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridColumn: "2 / span 2", gridRow: "2 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridRow: "3 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridColumn: "3 / span 2" }}></div>
    </div>
  );
}`,
  next: `export default function Bento() {
  return (
    <div
      className="grid w-full h-full"
      style={{
        gap: "4px",
        gridTemplateColumns: "0.95fr 1fr 1fr 0.95fr",
        gridTemplateRows: "1fr 0.8fr 0.8fr 0.85fr",
      }}
    >
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridRow: "1 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridRow: "1 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridColumn: "2 / span 2", gridRow: "2 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridRow: "3 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridColumn: "3 / span 2" }}></div>
    </div>
  );
}`,
  vue: `<template>
  <div
    class="grid w-full h-full"
    :style="{
      gap: '4px',
      gridTemplateColumns: '0.95fr 1fr 1fr 0.95fr',
      gridTemplateRows: '1fr 0.8fr 0.8fr 0.85fr',
    }"
  >
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB', gridRow: '1 / span 2' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB', gridRow: '1 / span 2' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB', gridColumn: '2 / span 2', gridRow: '2 / span 2' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB', gridRow: '3 / span 2' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB', gridColumn: '3 / span 2' }"></div>
  </div>
</template>`,
  angular: `import { Component } from "@angular/core";
import { NgStyle } from "@angular/common";

@Component({
  selector: "app-bento",
  standalone: true,
  imports: [NgStyle],
  template: \`
    <div
      class="grid w-full h-full"
      [ngStyle]="{
        gap: '4px',
        'grid-template-columns': '0.95fr 1fr 1fr 0.95fr',
        'grid-template-rows': '1fr 0.8fr 0.8fr 0.85fr'
      }"
    >
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB', 'grid-row': '1 / span 2' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB', 'grid-row': '1 / span 2' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB', 'grid-column': '2 / span 2', 'grid-row': '2 / span 2' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB', 'grid-row': '3 / span 2' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB', 'grid-column': '3 / span 2' }"></div>
    </div>
  \`,
})
export class BentoComponent {}`,
  svelte: `<div
  class="grid w-full h-full"
  style="gap: 4px; grid-template-columns: 0.95fr 1fr 1fr 0.95fr; grid-template-rows: 1fr 0.8fr 0.8fr 0.85fr;"
>
  <div class="rounded-lg" style="background-color: #D1D5DB; grid-row: 1 / span 2;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB; grid-row: 1 / span 2;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB; grid-column: 2 / span 2; grid-row: 2 / span 2;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB; grid-row: 3 / span 2;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB; grid-column: 3 / span 2;"></div>
</div>`,
};

const design3Code: Record<CodeLanguage, string> = {
  react: `function Bento() {
  return (
    <div
      className="grid w-full h-full"
      style={{
        gap: "4px",
        gridTemplateColumns: "1.25fr 0.86fr 0.82fr",
        gridTemplateRows: "0.9fr 0.28fr 1.14fr",
      }}
    >
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridColumn: "1 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridRow: "2 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridRow: "2 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
    </div>
  );
}`,
  next: `export default function Bento() {
  return (
    <div
      className="grid w-full h-full"
      style={{
        gap: "4px",
        gridTemplateColumns: "1.25fr 0.86fr 0.82fr",
        gridTemplateRows: "0.9fr 0.28fr 1.14fr",
      }}
    >
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridColumn: "1 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridRow: "2 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridRow: "2 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
    </div>
  );
}`,
  vue: `<template>
  <div
    class="grid w-full h-full"
    :style="{
      gap: '4px',
      gridTemplateColumns: '1.25fr 0.86fr 0.82fr',
      gridTemplateRows: '0.9fr 0.28fr 1.14fr',
    }"
  >
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB', gridColumn: '1 / span 2' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB', gridRow: '2 / span 2' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB', gridRow: '2 / span 2' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
  </div>
</template>`,
  angular: `import { Component } from "@angular/core";
import { NgStyle } from "@angular/common";

@Component({
  selector: "app-bento",
  standalone: true,
  imports: [NgStyle],
  template: \`
    <div
      class="grid w-full h-full"
      [ngStyle]="{
        gap: '4px',
        'grid-template-columns': '1.25fr 0.86fr 0.82fr',
        'grid-template-rows': '0.9fr 0.28fr 1.14fr'
      }"
    >
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB', 'grid-column': '1 / span 2' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB', 'grid-row': '2 / span 2' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB', 'grid-row': '2 / span 2' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
    </div>
  \`,
})
export class BentoComponent {}`,
  svelte: `<div
  class="grid w-full h-full"
  style="gap: 4px; grid-template-columns: 1.25fr 0.86fr 0.82fr; grid-template-rows: 0.9fr 0.28fr 1.14fr;"
>
  <div class="rounded-lg" style="background-color: #D1D5DB; grid-column: 1 / span 2;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB; grid-row: 2 / span 2;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB; grid-row: 2 / span 2;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
</div>`,
};

const design4Code: Record<CodeLanguage, string> = {
  react: `function Bento() {
  return (
    <div
      className="grid w-full h-full"
      style={{
        gap: "4px",
        gridTemplateColumns: "0.76fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1.05fr",
      }}
    >
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridColumn: "1 / span 2", gridRow: "1 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
    </div>
  );
}`,
  next: `export default function Bento() {
  return (
    <div
      className="grid w-full h-full"
      style={{
        gap: "4px",
        gridTemplateColumns: "0.76fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1.05fr",
      }}
    >
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridColumn: "1 / span 2", gridRow: "1 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
    </div>
  );
}`,
  vue: `<template>
  <div
    class="grid w-full h-full"
    :style="{
      gap: '4px',
      gridTemplateColumns: '0.76fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr 1.05fr',
    }"
  >
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB', gridColumn: '1 / span 2', gridRow: '1 / span 2' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
  </div>
</template>`,
  angular: `import { Component } from "@angular/core";
import { NgStyle } from "@angular/common";

@Component({
  selector: "app-bento",
  standalone: true,
  imports: [NgStyle],
  template: \`
    <div
      class="grid w-full h-full"
      [ngStyle]="{
        gap: '4px',
        'grid-template-columns': '0.76fr 1fr 1fr',
        'grid-template-rows': '1fr 1fr 1.05fr'
      }"
    >
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB', 'grid-column': '1 / span 2', 'grid-row': '1 / span 2' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
    </div>
  \`,
})
export class BentoComponent {}`,
  svelte: `<div
  class="grid w-full h-full"
  style="gap: 4px; grid-template-columns: 0.76fr 1fr 1fr; grid-template-rows: 1fr 1fr 1.05fr;"
>
  <div class="rounded-lg" style="background-color: #D1D5DB; grid-column: 1 / span 2; grid-row: 1 / span 2;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
</div>`,
};

const design5Code: Record<CodeLanguage, string> = {
  react: `function Bento() {
  return (
    <div
      className="grid w-full h-full"
      style={{
        gap: "4px",
        gridTemplateColumns: "1.18fr 0.88fr 0.95fr",
        gridTemplateRows: "1.08fr 0.76fr 0.24fr",
      }}
    >
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridRow: "1 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
    </div>
  );
}`,
  next: `export default function Bento() {
  return (
    <div
      className="grid w-full h-full"
      style={{
        gap: "4px",
        gridTemplateColumns: "1.18fr 0.88fr 0.95fr",
        gridTemplateRows: "1.08fr 0.76fr 0.24fr",
      }}
    >
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB", gridRow: "1 / span 2" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
      <div className="rounded-lg" style={{ backgroundColor: "#D1D5DB" }}></div>
    </div>
  );
}`,
  vue: `<template>
  <div
    class="grid w-full h-full"
    :style="{
      gap: '4px',
      gridTemplateColumns: '1.18fr 0.88fr 0.95fr',
      gridTemplateRows: '1.08fr 0.76fr 0.24fr',
    }"
  >
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB', gridRow: '1 / span 2' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
    <div class="rounded-lg" :style="{ backgroundColor: '#D1D5DB' }"></div>
  </div>
</template>`,
  angular: `import { Component } from "@angular/core";
import { NgStyle } from "@angular/common";

@Component({
  selector: "app-bento",
  standalone: true,
  imports: [NgStyle],
  template: \`
    <div
      class="grid w-full h-full"
      [ngStyle]="{
        gap: '4px',
        'grid-template-columns': '1.18fr 0.88fr 0.95fr',
        'grid-template-rows': '1.08fr 0.76fr 0.24fr'
      }"
    >
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB', 'grid-row': '1 / span 2' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
      <div class="rounded-lg" [ngStyle]="{ 'background-color': '#D1D5DB' }"></div>
    </div>
  \`,
})
export class BentoComponent {}`,
  svelte: `<div
  class="grid w-full h-full"
  style="gap: 4px; grid-template-columns: 1.18fr 0.88fr 0.95fr; grid-template-rows: 1.08fr 0.76fr 0.24fr;"
>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB; grid-row: 1 / span 2;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
  <div class="rounded-lg" style="background-color: #D1D5DB;"></div>
</div>`,
};

const design6Code: Record<CodeLanguage, string> = {
  react: `function Bento() {
  return (
    <div
      className="grid w-full h-full"
      style={{
        gap: "0px",
        gridTemplateColumns: "1.08fr 1.08fr 0.82fr 0.82fr",
        gridTemplateRows: "1fr 1fr 0.42fr 0.42fr 0.42fr",
      }}
    >
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827", gridRow: "1 / span 2" }}></div>
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827", gridRow: "1 / span 2" }}></div>
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827" }}></div>
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827" }}></div>
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827", gridColumn: "3 / span 2" }}></div>
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827", gridColumn: "1 / span 2", gridRow: "3 / span 3" }}></div>
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827", gridColumn: "3 / span 2" }}></div>
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827", gridColumn: "3 / span 2" }}></div>
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827", gridColumn: "3 / span 2" }}></div>
    </div>
  );
}`,
  next: `export default function Bento() {
  return (
    <div
      className="grid w-full h-full"
      style={{
        gap: "0px",
        gridTemplateColumns: "1.08fr 1.08fr 0.82fr 0.82fr",
        gridTemplateRows: "1fr 1fr 0.42fr 0.42fr 0.42fr",
      }}
    >
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827", gridRow: "1 / span 2" }}></div>
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827", gridRow: "1 / span 2" }}></div>
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827" }}></div>
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827" }}></div>
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827", gridColumn: "3 / span 2" }}></div>
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827", gridColumn: "1 / span 2", gridRow: "3 / span 3" }}></div>
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827", gridColumn: "3 / span 2" }}></div>
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827", gridColumn: "3 / span 2" }}></div>
      <div style={{ backgroundColor: "#D1D5DB", border: "1px solid #111827", gridColumn: "3 / span 2" }}></div>
    </div>
  );
}`,
  vue: `<template>
  <div
    class="grid w-full h-full"
    :style="{
      gap: '0px',
      gridTemplateColumns: '1.08fr 1.08fr 0.82fr 0.82fr',
      gridTemplateRows: '1fr 1fr 0.42fr 0.42fr 0.42fr',
    }"
  >
    <div :style="{ backgroundColor: '#D1D5DB', border: '1px solid #111827', gridRow: '1 / span 2' }"></div>
    <div :style="{ backgroundColor: '#D1D5DB', border: '1px solid #111827', gridRow: '1 / span 2' }"></div>
    <div :style="{ backgroundColor: '#D1D5DB', border: '1px solid #111827' }"></div>
    <div :style="{ backgroundColor: '#D1D5DB', border: '1px solid #111827' }"></div>
    <div :style="{ backgroundColor: '#D1D5DB', border: '1px solid #111827', gridColumn: '3 / span 2' }"></div>
    <div :style="{ backgroundColor: '#D1D5DB', border: '1px solid #111827', gridColumn: '1 / span 2', gridRow: '3 / span 3' }"></div>
    <div :style="{ backgroundColor: '#D1D5DB', border: '1px solid #111827', gridColumn: '3 / span 2' }"></div>
    <div :style="{ backgroundColor: '#D1D5DB', border: '1px solid #111827', gridColumn: '3 / span 2' }"></div>
    <div :style="{ backgroundColor: '#D1D5DB', border: '1px solid #111827', gridColumn: '3 / span 2' }"></div>
  </div>
</template>`,
  angular: `import { Component } from "@angular/core";
import { NgStyle } from "@angular/common";

@Component({
  selector: "app-bento",
  standalone: true,
  imports: [NgStyle],
  template: \`
    <div
      class="grid w-full h-full"
      [ngStyle]="{
        gap: '0px',
        'grid-template-columns': '1.08fr 1.08fr 0.82fr 0.82fr',
        'grid-template-rows': '1fr 1fr 0.42fr 0.42fr 0.42fr'
      }"
    >
      <div [ngStyle]="{ 'background-color': '#D1D5DB', border: '1px solid #111827', 'grid-row': '1 / span 2' }"></div>
      <div [ngStyle]="{ 'background-color': '#D1D5DB', border: '1px solid #111827', 'grid-row': '1 / span 2' }"></div>
      <div [ngStyle]="{ 'background-color': '#D1D5DB', border: '1px solid #111827' }"></div>
      <div [ngStyle]="{ 'background-color': '#D1D5DB', border: '1px solid #111827' }"></div>
      <div [ngStyle]="{ 'background-color': '#D1D5DB', border: '1px solid #111827', 'grid-column': '3 / span 2' }"></div>
      <div [ngStyle]="{ 'background-color': '#D1D5DB', border: '1px solid #111827', 'grid-column': '1 / span 2', 'grid-row': '3 / span 3' }"></div>
      <div [ngStyle]="{ 'background-color': '#D1D5DB', border: '1px solid #111827', 'grid-column': '3 / span 2' }"></div>
      <div [ngStyle]="{ 'background-color': '#D1D5DB', border: '1px solid #111827', 'grid-column': '3 / span 2' }"></div>
      <div [ngStyle]="{ 'background-color': '#D1D5DB', border: '1px solid #111827', 'grid-column': '3 / span 2' }"></div>
    </div>
  \`,
})
export class BentoComponent {}`,
  svelte: `<div
  class="grid w-full h-full"
  style="gap: 0px; grid-template-columns: 1.08fr 1.08fr 0.82fr 0.82fr; grid-template-rows: 1fr 1fr 0.42fr 0.42fr 0.42fr;"
>
  <div style="background-color: #D1D5DB; border: 1px solid #111827; grid-row: 1 / span 2;"></div>
  <div style="background-color: #D1D5DB; border: 1px solid #111827; grid-row: 1 / span 2;"></div>
  <div style="background-color: #D1D5DB; border: 1px solid #111827;"></div>
  <div style="background-color: #D1D5DB; border: 1px solid #111827;"></div>
  <div style="background-color: #D1D5DB; border: 1px solid #111827; grid-column: 3 / span 2;"></div>
  <div style="background-color: #D1D5DB; border: 1px solid #111827; grid-column: 1 / span 2; grid-row: 3 / span 3;"></div>
  <div style="background-color: #D1D5DB; border: 1px solid #111827; grid-column: 3 / span 2;"></div>
  <div style="background-color: #D1D5DB; border: 1px solid #111827; grid-column: 3 / span 2;"></div>
  <div style="background-color: #D1D5DB; border: 1px solid #111827; grid-column: 3 / span 2;"></div>
</div>`,
};

export const gridData = [
  {
    id: 1,
    image: grid1,
    designer: "HALO Lab",
    link: "https://dribbble.com/shots/25279296-Sync-SaaS-Branding",
    code: design1Code,
    numberOfBoxes: 7,
  },
  {
    id: 2,
    image: grid2,
    designer: "Ghulam Rasool",
    link: "https://dribbble.com/shots/23625635-Bento-2-0",
    code: design2Code,
    numberOfBoxes: 9,
  },
  {
    id: 3,
    image: grid3,
    designer: "M. M. Kamal",
    link: "https://dribbble.com/shots/25127648-UI-UX-Design-for-Agency-Website",
    code: design3Code,
    numberOfBoxes: 7,
  },
  {
    id: 4,
    image: grid4,
    designer: "Paperpillar",
    link: "https://dribbble.com/shots/24670637-Free-UI-Kit-E-Commerce-Landing-Page",
    code: design4Code,
    numberOfBoxes: 6,
  },
  {
    id: 5,
    image: grid5,
    designer: "lilcoderman",
    link: "https://www.instagram.com/p/DBq69_rNM33/",
    code: design5Code,
    numberOfBoxes: 6,
  },
  {
    id: 6,
    image: grid6,
    designer: "D Studio",
    link: "https://dribbble.com/shots/25338079-Stats-UI",
    code: design6Code,
    numberOfBoxes: 9,
  }
];


