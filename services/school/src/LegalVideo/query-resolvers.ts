import { db } from "../db";
import { QueryResolvers, QueryLegalVideoArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getLegalVideos = async () => {
  return await db.client.legalVideo.findMany();
};

export const legalVideos: QueryResolvers["legalVideos"] = async () => {
  return await getLegalVideos();
};

export const getLegalVideo = async (args: QueryLegalVideoArgs) => {
  const { id } = idArgs(args);
  return await db.client.legalVideo.findFirst({
    where: {
      id,
    },
  });
};

export const legalVideo: QueryResolvers["legalVideo"] = async (
  _,
  args: QueryLegalVideoArgs
) => {
  return await getLegalVideo(args);
};
