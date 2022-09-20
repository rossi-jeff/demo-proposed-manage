import {PrismaClient} from '../generated/admin-db';

const client = new PrismaClient();

export const db = {
	client,
};
