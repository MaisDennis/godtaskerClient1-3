import React from 'react'
// -----------------------------------------------------------------------------
import { Container } from './styles'
// -----------------------------------------------------------------------------
export default function Button({
  children, onClick, type
}) {
// -----------------------------------------------------------------------------
  return (
    <Container onClick={onClick}>
      {/* Main CTA */}
      { type === "01" && (
        <div
          className="div01"
        >{children}</div>
      )}

      {/* Edit and Cancel */}
      { type === "02" && (
        <div
          className="div02"
        >{children}</div>
      )}
      { type === "03" && (
        <div
          className="div03"
        >{children}</div>
      )}

      {/* Black Oval */}
      { type === "04" && (
        <div
          className="div04"
        >{children}</div>
      )}
      { type === "05" && (
        <div
          className="div05"
        >{children}</div>
      )}

      {/* Light Blue Oval */}
      { type === "06" && (
        <div
          className="div06"
        >{children}</div>
      )}
      { type === "07" && (
        <div
          className="div07"
        >{children}</div>
      )}
      { type === "08" && (
        <div
          className="div08"
        >{children}</div>
      )}
      { type === "09" && (
        <div
          className="div09"
        >{children}</div>
      )}
      { type === "10" && (
        <div
          className="div10"
        >{children}</div>
      )}
    </Container>
  )
}
