import { render, within } from "@testing-library/react";

import UserListHeader from "../UserListHeader";

describe("User List Header", () => {
  test("render header", () => {
    const { getByTestId } = render(<UserListHeader />);
    const header = getByTestId("userListHeader");
    expect(header).toBeInTheDocument();
  });

  test("render text", () => {
    const { getByTestId } = render(<UserListHeader />);
    const { getByText } = within(getByTestId("userListHeader"));
    expect(getByText("Rambody User List")).toBeInTheDocument();
  });
});
