import { render } from "@testing-library/react";

import Loading from "../Loading";

describe("loading component", () => {
  test("render loading", () => {
    const { getByTestId } = render(<Loading />);
    const loading = getByTestId("loading");
    expect(loading).toBeInTheDocument();
  });
});
