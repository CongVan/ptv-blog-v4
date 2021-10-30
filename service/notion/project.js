import { ProjectMapper } from "../../models/Project";
import { Notion } from "./index";

export const getProjects = async (params = {}) => {
  let data = { results: [] };
  try {
    const { results, ...resp } = await Notion.databases.query({
      database_id: process.env.NOTION_PROJECT_DATABASE,
      ...params,
    });
    data = resp;
    // console.log(JSON.stringify(results, null, 2));
    data.results = results.map(ProjectMapper);
  } catch (error) {
    console.error(error);
  }
  return data;
};
