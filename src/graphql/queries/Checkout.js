import {gql} from '@apollo/client';

export const GET_CART_DATA = gql`
  query cartQuery($cartId: ID!) {
    cart(id: $cartId) {
      id
      createdAt
      updatedAt
      checkoutUrl
      lines(first: 10) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
              }
            }
            attributes {
              key
              value
            }
          }
        }
      }
      attributes {
        key
        value
      }
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
        totalDutyAmount {
          amount
          currencyCode
        }
      }
      buyerIdentity {
        email
        phone
        customer {
          id
        }
        countryCode
      }
    }
  }
`;
