import React from "react"
import { Box } from "theme-ui"

export default function Footer() {
  return (
    <footer>
      <Box
        py={5}
        sx={{
          background: (theme) => theme.colors.primary,
          textAlign: "center",
          color: "#fff",
        }}
      >
        © 2020 Kanji Yomoda
      </Box>
      <style jsx>{`
        footer {
          font-family: Poppins, Arial, serif;
          position: absolute;
          bottom: 0;
          width: 100%;
        }
      `}</style>
    </footer>
  )
}
