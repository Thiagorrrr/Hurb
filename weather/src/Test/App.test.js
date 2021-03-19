import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { shallow } from 'enzyme';
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import App from "../App";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("shouldn't render App with no parameters", () => {
    act(() => {
        render(<App />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
        `""`
    ); /* ... gets filled automatically by jest ... */
});

