"use client";
import { Provider as ReduxProvider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import client from "@/utils/apolloClient";
import store from "@/store/store";

export default function Providers({ children }) {
  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </ApolloProvider>
  );
}
