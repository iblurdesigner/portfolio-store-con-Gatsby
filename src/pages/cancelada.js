import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function cancelada() {
  return (
    <div>
      <SEO title="Compra cancelada" />
      <Purchase>
        <h2>Compra cancelada</h2>
        <p>Sentimos que no hayas comprado tu nuevo swag.</p>
        <p>Recuerda que aquī seguirá por si decídes volver</p>
        <p>Te esperamos de vuelta, muy pronto!</p>
        <span role="img" aria-label="emoji">
          😩
        </span>
        <Link to="/">
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
