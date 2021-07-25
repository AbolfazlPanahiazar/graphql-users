import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

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
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <ListItem {...smapleProps} />
      </Router>
    );
    const item = getByTestId("listItem");
    expect(item).toBeInTheDocument();
  });

  test("firstName value injection", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <ListItem {...smapleProps} />
      </Router>
    );
    const span = getByTestId("firstNameSpan");
    expect(span).toHaveTextContent(smapleProps.firstName);
  });

  test("email value injection", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <ListItem {...smapleProps} />
      </Router>
    );
    const span = getByTestId("emailSpan");
    expect(span).toHaveTextContent(smapleProps.email);
  });

  test("image source injection", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <ListItem {...smapleProps} />
      </Router>
    );
    const img = getByTestId("image");
    expect(img).toHaveAttribute("src", smapleProps.picture);
  });
});
