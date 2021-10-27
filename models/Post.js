const objectMapper = require("object-mapper");
import slugify from "slugify";
import get from "lodash/get";
import moment from "moment";

export const PostTransform = {
  id: [
    "id",
    {
      key: "slug",
      transform: (value, object) => {
        const title = get(object, "properties.Name.title.0.text.content");
        return `/blog/${slugify(title + "", { lower: true, trim: true })}-${
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
      key: "sapo",
      transform: (value, object) => {
        return get(object, "properties.Sapo.rich_text[0].text.content");
      },
    },
    {
      key: "author.avatar",
      transform: (value, object) => {
        return get(object, "properties.Author.created_by.avatar_url");
      },
    },
    {
      key: "author.name",
      transform: (value, object) => {
        return get(object, "properties.Author.created_by.name");
      },
    },
    {
      key: "tags",
      transform: (value, object) => {
        return get(object, "properties.Tags.multi_select");
      },
    },
    {
      key: "view",
      transform: (value, object) => {
        return get(object, "properties.View.number");
      },
    },
    // {
    //   key: "like",
    //   transform: (value, object) => {
    //     return get(object, "properties.Like.number");
    //   },
    // },
    {
      key: "date",
      transform: (value, object) => {
        return moment
          .utc(get(object, "properties['Date Created'].created_time"))
          .local()
          .format("MMMM, DD YYYY");
      },
    },
  ],
};

export const PostMapper = (post) => objectMapper(post, PostTransform);
