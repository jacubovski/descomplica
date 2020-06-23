import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const link = new HttpLink({
  uri: 'https://swapi.graph.cool/'
})

const apollo = new ApolloClient({
  link,
  cache: new InMemoryCache({
    addTypename: true
  }),
  connectToDevTools: process.env.NODE_ENV !== 'production'
})

export default apollo
