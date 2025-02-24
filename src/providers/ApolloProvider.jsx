// src/providers/ApolloProvider.jsx
"use client"; // Ensure this is a Client Component
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@/lib/apolloClient";

export default function ApolloProviderWrapper({ children }) {
  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
}