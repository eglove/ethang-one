import { render } from "@testing-library/react";

import UserRegister from "./user-register";

describe("UserRegister", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UserRegister />);
    expect(baseElement).toBeTruthy();
  });
});
