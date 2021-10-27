const { Client } = require("@notionhq/client");
import { NotionAPI } from "notion-client";
export const NotionClient = new NotionAPI({
  authToken: process.env.NOTION_TOKEN,
});
const Notion = new Client({ auth: process.env.NOTION_KEY });

export { Notion };
