import { gql } from "@apollo/client";

export const CREATE_CUSTOMER = gql`
  mutation CreateCustomer($name: String!, $email: String!, $phone: String!) {
    createCustomer(
      input: {
        name: $name
        email: $email
        phone: $phone
      }
    ) {
      id
      name
      email
      phone
      createdAt
    }
  }
`;

export const GET_CUSTOMERS = gql`
  query {
    customers {
      id
      name
      email
      phone
      createdAt
    }
  }
`;