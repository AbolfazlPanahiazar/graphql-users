import { render } from "@testing-library/react";

import ProfileLoading from "../ProfileLoading";

describe("Profile loading component", () => {
  test("render component", () => {
    const { getByTestId } = render(<ProfileLoading />);
    const component = getByTestId("profileLoading");
    expect(component).toBeInTheDocument();
  });
});
