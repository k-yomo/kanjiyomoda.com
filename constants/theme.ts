import nightOwl from '@theme-ui/prism/presets/dracula.json'

const theme = {
  useCustomProperties: true,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#000',
    secondary: '#ddd',
    modes: {
      dark: {
        text: '#fff',
        background: '#222',
        primary: '#0cf',
        secondary: '#90c',
      },
    },
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
  },
  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background',
    },
    h1: {
      fontSize: [4, 5, 6],
      color: 'primary',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        color: 'secondary',
        textDecoration: 'underline',
      },
    },
    pre: {
      ...nightOwl,
      padding: 1,
      borderRadius: 3,
    },
  },
}

export default theme
