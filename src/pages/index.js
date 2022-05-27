import * as React from "react";
import text from '../textfiles/test.js';


// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 2000,
  textAlign: 'center'
}
const headingAccentStyles = {
  color: "#2222EE",
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const newsHeaderStyle = {
  color: "black",
  fontWeight: "bold",
  fontSize: 32,
  verticalAlign: "5%",
}

const newsStyle = {
  color: "black",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...newsStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "May 6th, Registration Open",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSc09e9caFdo5bDR5nP0byBFSf3b_cc1bofOpJ2zCgG2g5I96g/viewform",
    description: text,
    color: "#E95800",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Deep Learning and Artificial Intelligence Summer School 2022 (DLAI6)
        <br />
        <span style={headingAccentStyles}>14 - 18 June 2022, Online virtually (ICT time)</span>
      </h1>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <p
            style={newsHeaderStyle}
          >
            {'News'}
          </p>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={newsStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
