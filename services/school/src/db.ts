import {PrismaClient} from '../generated/school-db';

const client = new PrismaClient();

export const db = {
	client,
};
