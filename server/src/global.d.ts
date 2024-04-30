declare global {
  interface Error {
    customProperty?: string; // Optional custom property
  }
}

export {};
