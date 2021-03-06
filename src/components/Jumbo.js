import React from "react"
import { StyledJumbo } from "../styles/components"
import Image from "./image"

export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>Consigue el mejor swang exclusivo y especial de Blur Dev!</h2>
        <small>{description}</small>
      </div>
      <Image />
    </StyledJumbo>
  )
}
