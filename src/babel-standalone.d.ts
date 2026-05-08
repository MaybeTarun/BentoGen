declare module '@babel/standalone' {
    export function transform(
      code: string,
      opts?: {
        presets?: string[];
        plugins?: string[];
        [key: string]: unknown;
      }
    ): {
      code: string;
      map: unknown;
      ast: unknown;
    };
  }
