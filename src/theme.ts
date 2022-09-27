import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        black: {
            900: '#181819',
            700: '#212021',
            600: '#2b2a2a',
            400: '#333233'
        },
        gray: {
            400: '#7c7c7c'
        }
    },
    styles: {
        global: {
            body: {
                fontFamily: 'Inter, sans-serif',
                color: "white",
                bgColor: "black.900",
            },
            "html,body,#root": {
                height: '100%',
                minHeight: '100vh'
            }
        }
    },
})

export { theme }
