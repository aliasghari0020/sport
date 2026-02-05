import '@testing-library/jest-dom';
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query) => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
    }),
});
