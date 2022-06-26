import { render } from "@testing-library/react";

import ToReadLinks from "./to-read-links";

describe("ToReadLinks", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ToReadLinks />);
    expect(baseElement).toBeTruthy();
  });
});
