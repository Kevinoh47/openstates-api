'use strict';
const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
} = GraphQL;
const JurisdictionType = new GraphQL.GraphQLObjectType({
	name: 'Jurisdiction',
	description: 'Jurisdiction Type, for all the jurisdiction data present in openstates.',
	fields: () => ({
		id: {
			type: GraphQLString, // TODO confirm not a GraphQLID
			description: 'ID of the jurisdiction',
		},
		stateName: {
			type: GraphQLString,
			description: 'Nmame of the state in which the jurisdiction resides.',
		},
		name: {
			type: GraphQLString,
			description: 'name of the jurisdiction',
		},
		chamber: {
			type: GraphQLString,
			description: 'a classification of the jurisdiction,',
		},
		displayName: {
			type: GraphQLString,
			description: 'An alternative to the name field, used for display.',
		},
		type: {
			type: GraphQLString,
			description: 'used to describe contact information',
		},
		value: {
			type: GraphQLString,
			description: 'paired with the type field',
		},
		note: {
			type: GraphQLString,
			description: 'Provides detail for type-value pairs',
		},
		classification: {
			type: GraphQLString,
			description: 'Typically used with the Organization object',
		},
		label: {
			type: GraphQLString,
			description: 'A descriptor',
		},
		role: {
			type: GraphQLString,
			description: 'Describes the typical function of the object that contains it',
		},

	})
});
module.exports = JurisdictionType;