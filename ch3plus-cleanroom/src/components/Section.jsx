import React from 'react'

export default function Section({ title, items }) {
  return (
    <section className="section" id={title.toLowerCase().replaceAll(' ', '-')}>
      <div className="section-head">
        <h2>{title}</h2>
        <a href="#">View all →</a>
      </div>
      <div className="grid">
        {items.map((item) => (
          <article className="card" key={item.title}>
            <img src={item.image} alt="" />
            <div className="card-body">
              <small>{item.category}</small>
              <h3>{item.title}</h3>
              <button>Play ▶</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
