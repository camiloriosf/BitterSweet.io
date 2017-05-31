import 'isomorphic-fetch';
import React from 'react';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { initClient } from './initClient';
import { initStore } from './initStore';

export default Component => (
  class extends React.Component {
    static async getInitialProps(ctx) {
      const headers = ctx.req ? ctx.req.headers : {};
      const client = initClient(headers);
      const store = initStore(client, client.initialState);

      const props = {
        url: { query: ctx.query, pathname: ctx.pathname },
        ...await (Component.getInitialProps ? Component.getInitialProps(ctx) : {}),
      };

      if (!process.browser) {
        const app = (
          <ApolloProvider client={client} store={store}>
            <Component {...props} />
          </ApolloProvider>
        );
        await getDataFromTree(app);
      }

      const state = store.getState();

      return {
        initialState: {
          ...state,
          apollo: {
            data: client.getInitialState().data,
          },
          contact: {
            sent: false,
            error: false,
            errorMessage: '',
          },
          quote: {
            basePrice: 280000,
            basePercentage: 2 / 100,
            minService: 100000,
            web: false,
            android: false,
            ios: false,
            responsive: false,
            pages: 1,
            design: false,
            auth: 'opt1',
            data: 'opt1',
            geolocation: 'opt1',
            apis: 0,
            scheduling: false,
            commerce: ['', ''],
            admin: false,
            product: 'opt2',
            delivery: 'opt1',
          },
        },
        headers,
        ...props,
      };
    }

    constructor(props) {
      super(props);
      this.client = initClient(this.props.headers, this.props.initialState);
      this.store = initStore(this.client, this.props.initialState);
    }

    render() {
      return (
        <ApolloProvider client={this.client} store={this.store}>
          <Component {...this.props} />
        </ApolloProvider>
      );
    }
  }
);
