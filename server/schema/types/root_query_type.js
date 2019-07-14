const graphql = require('graphql')

const { GraphQLObjectType, GrapQLID } = graphql

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dummyField: { type: GrapQLID },
  },
})

module.exports = RootQueryType
