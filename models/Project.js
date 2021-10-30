const objectMapper = require("object-mapper");
import slugify from "slugify";
import get from "lodash/get";

export const ProjectTransform = {
  id: [
    "id",
    {
      key: "slug",
      transform: (value, object) => {
        const title = get(object, "properties.Name.title.0.text.content");
        console.log(object.properties);
        return `/project/${slugify(title + "", { lower: true, trim: true })}-${
          object.id + ""
        }`;
      },
    },
  ],
  properties: [
    {
      key: "cover",
      transform: (value, object) => {
        return get(object, `cover.${object.cover.type}.url`);
      },
    },
    {
      key: "title",
      transform: (value, object) => {
        return get(object, "properties.Name.title.0.text.content");
      },
    },
    {
      key: "client",
      transform: (value, object) => {
        return get(object, "properties.Client.rich_text.0.plain_text");
      },
    },
    {
      key: "tags",
      transform: (value, object) => {
        return get(object, "properties.Tags.multi_select");
      },
    },
    {
      key: "media",
      transform: (value, object) => {
        return get(object, "properties.Media.files");
      },
    },
    {
      key: "web",
      transform: (value, object) => {
        return get(object, "properties.Website.url");
      },
    },
    {
      key: "work_time",
      transform: (value, object) => {
        return get(object, "properties['Work time'].date");
      },
    },
  ],
};

export const ProjectMapper = (post) => objectMapper(post, ProjectTransform);
