import { FC, ReactElement } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import Router from "components/Router/Router";

// error catching
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      console.log(`GraphQL error ${message}`);
    });
  }

  if (networkError) {
    console.log("Net work error", networkError);
  }
});

// create link
const link = from([
  errorLink,
  new HttpLink({
    uri: `${process.env.REACT_APP_GRAPHQL_URI}`,
    headers: {
      "app-id": `${process.env.REACT_App_GRAPHQL_AUTH_HEADER}`,
    },
  }),
]);

// crate apollo client
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

const App: FC = (): ReactElement => {
  return (
    <ApolloProvider client={client}>
      <div className="flex justify-center bg-gray-800 min-h-screen">
        <div className="w-full max-w-500">
          <Router />
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
