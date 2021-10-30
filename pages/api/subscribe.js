import { Notion } from "../../service/notion";
const SUBSCRIBE_DATABASE = "494453259ffe4396b78c39512345be4c";
import get from "lodash/get";
export default async function subscribeHandler(req, res) {
  const { method, body } = req;
  const { email } = body;

  switch (method) {
    case "POST":
      if (!email) {
        return res.status(400, "Email is required field");
      }
      const { results: emailExists = [] } = await Notion.databases.query({
        database_id: SUBSCRIBE_DATABASE,
      });
      console.log("emails", emailExists[0].properties);
      const emailExist = emailExists.find((result) => {
        return get(result, "properties.Email.email") === email;
      });
      if (emailExist) {
        return res.status(200).json({ data: emailExist });
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
                  content: "Subscribe newsletter",
                },
              },
            ],
          },
          Tags: {
            select: { name: "Newsletter" },
          },
        },
      });
      return res.status(200).json({ data: data });

    default:
      break;
  }
}
