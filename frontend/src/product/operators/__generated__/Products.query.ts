import type * as Types from "../../../utils/__generated__/graphqlTypes";

import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type GetProductsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetProductsQuery = {
  __typename?: "Query";
  products?: {
    __typename?: "ProductTypeConnection";
    edges: Array<{
      __typename?: "ProductTypeEdge";
      node?: {
        __typename?: "ProductType";
        id: string;
        title: string;
        price: number;
        images?: Array<{
          __typename?: "ImageType";
          id: string;
          image: string;
        }> | null;
      } | null;
    } | null>;
  } | null;
};

export const GetProductsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetProducts" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "products" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "images" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "image" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
