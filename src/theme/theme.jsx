import {extendTheme} from "@chakra-ui/react"
import Heading from "./heading"
import Button from "./button"
import Text from "./text"

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bgColor: '#151316',
            },
        }
    },
    fonts: {
        body: 'Roboto',
        heading: 'Roboto',
    },
    fontSizes: {
        sm : '14px',
        md : '14px',
        lg : '40px',
        xl : '40px',
    },
    components: {
        Heading,
        Button,
        Text,
        Container: {
            baseStyle: {
                p: "0px"
            },
        },
        Link: {
            baseStyle: {
                _hover: {
                    textDecoration: 'none'
                },
                _focus: 'none',
                textTransform: 'uppercase'
            },
        }
    }
})

export default theme