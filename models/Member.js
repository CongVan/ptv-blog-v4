const objectMapper = require("object-mapper");
import slugify from "slugify";
import get from "lodash/get";
import moment from "moment";

export const MemberTransform = {
  id: [
    "id",
    {
      key: "slug",
      transform: (value, object) => {
        const title = get(object, "properties.Name.title.0.text.plain_text");
        // console.log("title", value);
        return `/member/${slugify(title + "", { lower: true, trim: true })}-${
          object.id + ""
        }`;
      },
    },
  ],
  properties: [
    {
      key: "avatar",
      transform: (value, object) => {
        return get(object, `icon.${object.icon.type}.url`);
      },
    },
    {
      key: "name",
      transform: (value, object) => {
        return get(value, "Name.title.0.plain_text");
      },
    },
    {
      key: "phone",
      transform: (value, object) => {
        return get(object, "properties.Phone.phone_number");
      },
    },
    {
      key: "github",
      transform: (value, object) => {
        return get(object, "properties.Github.url");
      },
    },
    {
      key: "linked_in",
      transform: (value, object) => {
        return get(object, "properties.LinkedIn.url");
      },
    },
    {
      key: "facebook",
      transform: (value, object) => {
        return get(object, "properties.Facebook.url");
      },
    },
    {
      key: "email",
      transform: (value, object) => {
        return get(object, "properties.Email.email");
      },
    },
    {
      key: "title",
      transform: (value, object) => {
        return get(object, "properties.Title.select", []);
      },
    },
    {
      key: "dob",
      transform: (value, object) => {
        return get(object, "properties.DOB.date");
      },
    },
  ],
};

export const MemberMapper = (post) => objectMapper(post, MemberTransform);
