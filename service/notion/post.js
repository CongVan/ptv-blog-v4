import { PostMapper } from "../../models/Post";
import { Notion } from "./index";

export const getPosts = async (params = {}) => {
  let data = { results: [] };
  try {
    const { results, ...resp } = await Notion.databases.query({
      database_id: process.env.NOTION_POST_DATABASE,
      ...params,
    });
    data = resp;
    data.results = results.map(PostMapper);
  } catch (error) {
    console.error(error);
  }
  return data;
};
