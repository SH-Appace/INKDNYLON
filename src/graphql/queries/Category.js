import {gql} from '@apollo/client';

export const GET_CATEGORIES = gql`
  query getCollections {
    collections(first: 4) {
      edges {
        node {
          title
          handle
          image {
            url
          }
        }
      }
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query getCollections {
    collections(first: 100) {
      edges {
        node {
          title
          handle
          image {
            url
          }
        }
      }
    }
  }
`;

export const GET_ONE_CATEGORIES_PRODUCT = gql`
  query getProductsInCollection($handle: String!) {
    collection(handle: $handle) {
      id
      title
      products(first: 50, sortKey: CREATED) {
        edges {
          node {
            id
            descriptionHtml
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  image {
                    url
                  }
                  price {
                    amount
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
            title
            featuredImage {
              url
            }
            images(first: 5) {
              nodes {
                url
              }
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`;
