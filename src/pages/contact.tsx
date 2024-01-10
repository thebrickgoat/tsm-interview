import Layout from "@/components/layout/Layout";
import ContactPage from "@/sections/contactPage";
import { gql } from "@apollo/client";
import * as React from "react";

import { client } from "../lib/apollo";

export default function Contact({ films }: any) {
  return (
    <Layout>
      <ContactPage />
    </Layout>
  );
}
