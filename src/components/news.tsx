import React from "react";
import Link from "@docusaurus/Link";
import styles from './index.module.css';
import clsx from "clsx";

const {blogPosts} = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-archive-80c.json");

export const News = () => {
  const recent = blogPosts.slice(0, 3);
  return (
    <section className="bg-primary-2-alt">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <h3 className="h1">Stay in the loop</h3>
          </div>
        </div>
        <div className="row">
          {recent.map((bp, i) => (
            <div
              key={bp.id}
              className="col-md-6 col-lg-4 d-flex"
              data-aos="fade-up"
              data-aos-delay={(i+1) * 100}
            >
              <div className="card">
                <Link href={bp.metadata.permalink}>
                  <img
                    src={bp.metadata.frontMatter.image ?? `/assets/img/article-${i + 1}.jpg`}
                    alt="Image"
                    className="card-img-top"
                  />
                </Link>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="text-small d-flex">
                      <div className={clsx("mr-2", styles.label)}>
                        <Link href={bp.metadata.tags[0].permalink}>{bp.metadata.tags[0].label}</Link>
                      </div>
                      <span className="text-muted">{bp.metadata.formattedDate}</span>
                    </div>
                  </div>
                  <Link href={bp.metadata.permalink} >
                    <h4  className={clsx(styles.cardTitle, styles.desc)}>{bp.metadata.title}</h4>
                  </Link>

                  <p className="flex-grow-1">
                    <Link href={bp.metadata.permalink} className={styles.desc}>
                      {bp.metadata.description}
                    </Link>
                  </p>

                  <div className="d-flex align-items-center mt-3">
                    <div className="avatar margin-bottom--sm"><img
                      className="avatar__photo" src={bp.metadata.authors[0].imageURL}
                      alt={bp.metadata.authors[0].name}/>
                      <div className="avatar__intro" itemProp="author"
                           itemType="https://schema.org/Person">
                        <div className="avatar__name"><span
                          itemProp="name">{bp.metadata.authors[0].name}</span>
                        </div>
                        <small className="avatar__subtitle" itemProp="description">{bp.metadata.authors[0].title}</small></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col">
            <Link href="/blog/" className="hover-arrow">
              View more news
            </Link>
          </div>
        </div>
      </div>
    </section>

  )
}
