/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCounter = /* GraphQL */ `
  query GetCounter($id: ID!) {
    getCounter(id: $id) {
      id
      amount
      createdAt
      updatedAt
    }
  }
`;
export const listCounters = /* GraphQL */ `
  query ListCounters(
    $filter: ModelCounterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCounters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
