import { useRouter } from "next/dist/client/router";
import React from "react";
import Link from "next/link";
const BreadCrumb = ({ links = [] }) => {
  const router = useRouter();
  console.log(router);
  return (
    <nav
      className=" text-sm text-left text-gray-600  flex items-center  p-4 pl-0 rounded-md"
      role="alert"
    >
      <ol className="list-reset flex text-grey-dark flex-wrap">
        {links.map((link, index) => (
          <li key={link.to}>
            {index > 0 && <span className="mx-2 text-gray-500">/</span>}

            <Link href={link.to}>
              <a
                className={`${
                  link.active ? "font-semibold" : "text-gray-400"
                } hover:text-orange-500`}
              >
                {link.label}
              </a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
