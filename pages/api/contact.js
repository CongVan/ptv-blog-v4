import { Notion } from "../../service/notion";
const SUBSCRIBE_DATABASE = "494453259ffe4396b78c39512345be4c";
import get from "lodash/get";
export default async function subscribeHandler(req, res) {
  const { method, body } = req;
  const { email, message, title } = body;

  switch (method) {
    case "POST":
      if (!email) {
        return res.status(400, "Email is required field");
      }

      const data = await Notion.pages.create({
        parent: { database_id: SUBSCRIBE_DATABASE },
        properties: {
          Email: {
            email,
          },
          Title: {
            title: [
              {
                text: {
                  content: "Contact",
                },
              },
            ],
          },
          Tags: {
            select: { name: "Contact" },
          },
        },
      });
      return res.status(200).json({ data: data });

    default:
      break;
  }
}
