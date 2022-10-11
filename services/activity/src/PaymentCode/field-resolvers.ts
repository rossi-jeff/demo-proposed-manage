import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const PaymentCode: Resolvers["PaymentCode"] = {
  VentureRegistrations: async (parent) => {
    return await db.client.ventureRegistration.findMany({
      where: {
        paymentCodeId: parent.id,
      },
    });
  },
};
