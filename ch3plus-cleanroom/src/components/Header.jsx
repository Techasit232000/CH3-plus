import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="brand">STREAM<span>+</span></div>
      <nav>
        <a href="#home">Home</a>
        <a href="#programs">Programs</a>
        <a href="#videos">Videos</a>
        <a href="#live">Live</a>
      </nav>
      <button className="search">⌕ Search</button>
    </header>
  )
}
