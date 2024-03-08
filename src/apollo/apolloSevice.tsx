import {
  ApolloClient,
  ApolloError,
  ApolloQueryResult,
  DocumentNode,
  OperationVariables,
  TypedDocumentNode,
} from '@apollo/client';
import {GraphQLError} from 'graphql';

export class ApolloService {
  queryApollo(
    client: ApolloClient<object>,
    query: DocumentNode | TypedDocumentNode<unknown | OperationVariables>,
    successCallBack: (_response: ApolloQueryResult<unknown>) => void,
    errorCallBack: (
      _response: (ApolloError | GraphQLError) | undefined,
    ) => void,
  ): void {
    client
      .query({
        query,
      })
      .then((res: ApolloQueryResult<unknown>) => {
        successCallBack(res);
      })
      .catch(err => {
        errorCallBack(err);
      });
  }
}
