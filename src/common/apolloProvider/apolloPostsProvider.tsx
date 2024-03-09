import {
  ApolloClient,
  ApolloError,
  ApolloQueryResult,
  DocumentNode,
  OperationVariables,
  TypedDocumentNode,
} from '@apollo/client';
import {ApolloService} from '../../apollo/apolloSevice';
import {GraphQLError} from 'graphql';

export class ApollPostsProvider extends ApolloService {
  static apolloPostsInstance: ApollPostsProvider = new ApollPostsProvider();

  listPosts(
    client: ApolloClient<object>,
    query: DocumentNode | TypedDocumentNode<unknown, OperationVariables>,
    successCallBack: (_response: ApolloQueryResult<unknown>) => void,
    errorCallBack: (
      _response: (ApolloError | GraphQLError) | undefined,
    ) => void,
  ) {
    this.queryApollo(
      client,
      query,
      success => successCallBack(success),
      error => errorCallBack(error),
    );
  }
}
