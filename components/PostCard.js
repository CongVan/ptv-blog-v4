import Link from "next/link";
import Image from "next/image";
import Styles from "./postcard.module.css";

const colorTag = {
  deafult: ["text-notion-default", "bg-notion-default_bg"],
  gray: ["text-notion-gray", "bg-notion-gray_bg"],
  brown: ["text-notion-brow", "bg-notion-brow_bg"],
  orange: ["text-notion-orange", "bg-notion-orange_bg"],
  yellow: ["text-notion-yellow", "bg-notion-orange_bg"],
  green: ["text-notion-green", "bg-notion-green_bg"],
  blue: ["text-notion-blue", "bg-notion-blue_bg"],
  purple: ["text-notion-purple", "bg-notion-purple_bg"],
  pink: ["text-notion-pink", "bg-notion-pink_bg"],
  red: ["text-notion-red", "bg-notion-red_bg"],
};

const PostTag = ({ tags = [] }) => {
  return (
    <div className="flex flex-wrap items-center">
      {tags.map((tag) => (
        <span
          key={tag.id}
          className={`uppercase px-2 py-1 text-xs mr-2 mb-2 rounded-md ${colorTag[
            tag.color
          ].join(" ")}`}
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
};

const PostCard = ({ post }) => {
  return (
    <Link key={post.id} href={post.slug}>
      <a
        className={`bg-white group cursor-pointer w-full flex flex-col h-full ${Styles.card}`}
      >
        <div className={`${Styles.cardImage}  aspect-w-5 aspect-h-3 `}>
          <Image src={post.cover} layout="fill" objectFit="cover"></Image>
        </div>
        <div className="mt-4 flex-1 flex flex-col">
          <PostTag tags={post.tags} />
          <div className="flex-1 text-xl font-semibold text-black-600 my-4 group-hover:text-orange-500 group-hover:underline line-clamp-2">
            {post.title}
          </div>
          <div className=" text-black-500 mb-4 text-justify line-clamp-3">
            {post.sapo}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm">
              <div className="relative w-8 h-8 min-w-[32px] rounded-full overflow-hidden ">
                <Image
                  src={post.author.avatar}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="ml-2">
                <div>{post.author.name}</div>
                <div className=" text-black-500">{post.date}</div>
              </div>
            </div>

            <div>
              <button className="btn text-sm">Read more</button>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
PostCard.Tags = PostTag;
export default PostCard;
