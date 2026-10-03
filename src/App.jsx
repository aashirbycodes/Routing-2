import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { NavLink } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <h1 className="bg-red-800
background-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */">This is an Ecommerce Store</h1>
        <NavLink to="/collection/1223" end style={{ textDecoration: "none", color: "black", fontSize: "30px", fontWeight: "bold" }}>
        Home
      </NavLink>
      <NavLink to="/collection/1223" end style={{ textDecoration: "none", color: "black", fontSize: "30px", fontWeight: "bold" }}>
        Service
      </NavLink>
      <NavLink to="/collection/1223" end style={{ textDecoration: "none", color: "black", fontSize: "30px", fontWeight: "bold" }}>
        Team
      </NavLink>
      <NavLink to="/collection/1223" end style={{ textDecoration: "none", color: "black", fontSize: "30px", fontWeight: "bold" }}>
        Career
      </NavLink>
      <NavLink to="/collection/1223" end style={{ textDecoration: "none", color: "black", fontSize: "30px", fontWeight: "bold" }}>
        Portfoilo
      </NavLink>
      </section>
    </>
  )
}

export default App
