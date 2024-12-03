declare module '@babel/standalone' {
    export function transform(
      code: string,
      opts?: {
        presets?: string[];
        plugins?: string[];
        [key: string]: any;
      }
    ): {
      code: string;
      map: any;
      ast: any;
    };
  }