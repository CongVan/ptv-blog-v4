import { MemberMapper } from "../../models/Member";
import { Notion } from "./index";

export const getTeam = async (params = {}) => {
  let data = { results: [] };
  try {
    const { results, ...resp } = await Notion.databases.query({
      database_id: process.env.NOTION_TEAM_DATABASE,
      ...params,
    });
    data = resp;
    data.results = results.map(MemberMapper);
  } catch (error) {
    console.error(error);
  }
  return data;
};
