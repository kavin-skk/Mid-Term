import React from "react";
import styles from "./ArticlePage.module.css";
import { FaRegClock, FaUserAlt, FaShareAlt } from "react-icons/fa";

export default function ArticlePage({ article }) {
  // article: {title, author, date, image, contentHtml, tags, related:[]}
  const a = article || {
    title: "Sample: Superstar opens up about new film — exclusive",
    author: "R. Kumar",
    date: "2025-11-05",
    image: "/assets/sample-ent.jpg",
    contentHtml: `<p>First paragraph of the story — lead. Then more details. This is sample content for layout demonstration.</p>
    <h3>Subheading</h3>
    <p>More content, quotes, and context.</p>`,
    tags: ["Bollywood","Interview"],
    related: [
      {id:1, title:"Trailer out: ...", time:"2h ago"},
      {id:2, title:"Box office: ...", time:"1d ago"}
    ]
  };

  return (
    <main className="container" role="main">
      <div className={styles.breadcrumbs} aria-label="Breadcrumb">
        <a href="/">Home</a> › <a href="/entertainment">Entertainment</a> › <span>Article</span>
      </div>

      <div className={styles.grid}>
        <article className={styles.article} itemScope itemType="http://schema.org/NewsArticle">
          <header className={styles.head}>
            <h1 itemProp="headline">{a.title}</h1>
            <div className={styles.meta}>
              <span className={styles.metaItem}><FaUserAlt aria-hidden/> {a.author}</span>
              <span className={styles.metaItem}><FaRegClock aria-hidden/> {a.date}</span>
              <button className={styles.shareBtn} aria-label="Share article"><FaShareAlt/></button>
            </div>
          </header>

          <figure className={styles.leadImage}>
            <img src={a.image} alt="" loading="lazy"/>
            <figcaption>Image: {a.title}</figcaption>
          </figure>

          <div className={styles.content} dangerouslySetInnerHTML={{__html: a.contentHtml}} itemProp="articleBody"/>

          <div className={styles.tags}>
            {a.tags.map(t => <a key={t} href={`/tag/${t.toLowerCase()}`}>#{t}</a>)}
          </div>

          <section className={styles.comments}>
            <h3>Comments</h3>
            <p className={styles.commentPlaceholder}>Comments UI placeholder — integrate Disqus/Custom later</p>
          </section>
        </article>

        <aside className={styles.sidebar} aria-label="Related and Trending">
          <div className={styles.sideCard}>
            <h4>Related</h4>
            <ul>
              {a.related.map(r => (
                <li key={r.id}>
                  <a href={`/article/${r.id}`}>{r.title}</a>
                  <div className={styles.smallMuted}>{r.time}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sideCard}>
            <h4>Trending</h4>
            <ol>
              <li><a href="#">Big event in cinema 2025</a></li>
              <li><a href="#">Actor X latest</a></li>
            </ol>
          </div>

          <div className={styles.sideCard}>
            <h4>Newsletter</h4>
            <p>Get top entertainment updates.</p>
            <form>
              <input aria-label="email" placeholder="Email address" />
              <button type="submit" className={styles.cta}>Subscribe</button>
            </form>
          </div>

        </aside>
      </div>
    </main>
  );
}
