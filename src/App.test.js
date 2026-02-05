import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import App from './App';
test('renders App component without crashing', () => {
    render(_jsx(App, {}));
    expect(screen.getByText(/حالت فعلی/i)).toBeInTheDocument();
});
