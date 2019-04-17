'use strict';
const GraphQL = require('graphql');
const {
	GraphQLList,
	GraphQLString,
	GraphQLNonNull,
} = GraphQL;
// import the Jurisdiction type we created
const JurisdictionType = require('../types/Jurisdiction');
// import the Jurisdiction resolver we created
const JurisdictionResolver = require('../resolvers/Jurisdiction');
module.exports = {
	index() {
		return {
			type: new GraphQLList(JurisdictionType),
			description: 'This will return all the Jurisdiction information returned by the openstates API.',
			args: {
				jurisdiction: {
					type: GraphQLString,
					description: 'Please enter the jurisdiction name',
				}
			},
			resolve(parent, args, context, info) {
				return JurisdictionResolver.index(args);
			}
		}
	},
};
