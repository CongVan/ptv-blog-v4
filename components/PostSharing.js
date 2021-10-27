import React from "react";
import {
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "next-share";
import { CgFacebook } from "react-icons/cg";
import { BsTelegram } from "react-icons/bs";
import { IoLogoReddit, IoLogoTwitter } from "react-icons/io5";

const PostSharing = ({ post }) => {
  const iconWrapper =
    "w-8 h-8 rounded-full flex flex-col justify-center items-center text-white-500 font-semibold bg-orange-500 hover:shadow-orange-md transition-all outline-none transform hover:scale-105";
  return (
    <>
      <FacebookShareButton url={window.location.href} quote={post.title}>
        <div className={iconWrapper}>
          <CgFacebook size={16} />
        </div>
      </FacebookShareButton>

      <TelegramShareButton url={window.location.href} title={post.title}>
        <div className={iconWrapper}>
          <BsTelegram size={16} />
        </div>
      </TelegramShareButton>

      <RedditShareButton url={window.location.href} title={post.title}>
        <div className={iconWrapper}>
          <IoLogoReddit size={16} />
        </div>
      </RedditShareButton>

      <TwitterShareButton url={window.location.href} title={post.title}>
        <div className={iconWrapper}>
          <IoLogoTwitter size={16} />
        </div>
      </TwitterShareButton>
    </>
  );
};

export default PostSharing;
