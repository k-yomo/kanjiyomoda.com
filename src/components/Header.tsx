import React from 'react'
import { Flex, Box, Text, Link, useColorMode } from 'theme-ui'
import { modes } from '../constants/colorMode'
import { IoMdGlasses } from 'react-icons/io'

export default function Header() {
  const [colorMode, setColorMode] = useColorMode()
  const toggleColorMode = () => setColorMode(colorMode === modes.light ? modes.dark : modes.light)
  return (
    <header>
      <Flex sx={{ alignItems: 'center', height: '100%' }}>
        <Box p={2} sx={{ flex: '1 1 auto' }}>
          <Link href="/">
            <Text sx={{ fontSize: 20, fontWeight: 'bold' }}>Kanji Yomoda</Text>
          </Link>
        </Box>
        <Box p={2}>
          <IoMdGlasses size={50} onClick={toggleColorMode} style={{ cursor: 'pointer' }} />
        </Box>
      </Flex>
      <style jsx>{`
        header {
          font-family: Poppins, Arial, serif;
          height: 70px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
      `}</style>
    </header>
  )
}
