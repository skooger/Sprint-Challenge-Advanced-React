import React from 'react';
import * as rtl from 'react-testing-library';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

it('Gets atleast one player to display', () => {
    const wrapper = rtl.render(<App />);
    const hasPlayer = wrapper.querySelector("cart-title");
    expect(hasPlayer).toBeVisible();
})