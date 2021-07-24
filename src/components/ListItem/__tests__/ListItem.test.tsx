import { render } from "@testing-library/react";

import ListItem from "../ListItem";
import { IUserItem } from "GraphQL/queries";

const smapleProps: IUserItem = {
  id: "20834902830492309",
  firstName: "Abolfazl",
  lastName: "Panahiazar",
  email: "abolfazlpanahiazar@gmail.com",
  picture: "https://randomuser.me/api/portraits/med/men/61.jpg",
  title: "mr",
};

describe("User list item", () => {
  test("render list item", () => {
    const { getByTestId } = render(<ListItem {...smapleProps} />);
    const item = getByTestId("listItem");
    expect(item).toBeInTheDocument();
  });

  test("firstName value injection", () => {
    const { getByTestId } = render(<ListItem {...smapleProps} />);
    const span = getByTestId("firstNameSpan");
    expect(span).toHaveTextContent(smapleProps.firstName);
  });

  test("email value injection", () => {
    const { getByTestId } = render(<ListItem {...smapleProps} />);
    const span = getByTestId("emailSpan");
    expect(span).toHaveTextContent(smapleProps.email);
  });

  test("image source injection", () => {
    const { getByTestId } = render(<ListItem {...smapleProps} />);
    const img = getByTestId("image");
    expect(img).toHaveAttribute("src", smapleProps.picture);
  });
});
