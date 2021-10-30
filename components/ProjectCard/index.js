import React from "react";
import styles from "./project.module.scss";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <Link href={project.slug}>
      <a className={styles.card}>
        <div className="relative aspect-w-3 aspect-h-2 ">
          <Image
            src={project.cover}
            layout="fill"
            objectFit="cover"
            className="transform duration-500 origin-center group-hover:scale-110"
          ></Image>
        </div>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div className={styles.title}>{project.title}</div>
            <div className={styles.tag}>
              {project.tags.map((tag, tIndex) => (
                <div key={tIndex}>{tag.name}</div>
              ))}
            </div>
          </div>
          <div className={`${styles.btnMore}`}>
            <button className={` btn`}>Read more</button>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
