import type {Resolvers} from '../generated/graphql';
import {School} from './School/field-resolvers';
import {school, schools} from './School/query-resolvers';

export const resolvers: Resolvers = {
	Query: {
		schools,
		school,
	},
	School,
};
