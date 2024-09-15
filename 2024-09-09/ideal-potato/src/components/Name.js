import React from "react"
import "../Name.css"

const Name = ({ title = "World" }) => {
  return (
    <div id="name">
      <h1>{title}</h1>
      <h2>Hobid</h2>
      {["modifikatsioonide valmistamine", "Aiandus", "Ajaloo õppimine"].map(
        element => (
          <p>{element}</p>
        ),
      )}
      <h2>Saada mulle meil!</h2>
      <form>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Sisu:</label>
          <textarea required></textarea>
        </div>
        <button type="submit">Saada</button>
      </form>
    </div>
  )
}

export default Name