import Layout from "@/components/layout/Layout";
import HomePage from "@/sections/homePage";
import { gql } from "@apollo/client";
import * as React from "react";

import { client } from "../lib/apollo";

export default async function Home() {
  const data = await getData()

  return (
    <Layout>
      <HomePage films={data}/>
    </Layout>
  );
}

export async function getData() {
  const GET_FILMS = gql`
    query ExampleQuery {
      allFilms {
        edges {
          node {
            title
            director
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: GET_FILMS,
  });
  
  return data.allFilms.edges;

}
