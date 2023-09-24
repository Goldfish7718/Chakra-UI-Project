import { extendTheme, theme as baseTheme, withDefaultColorScheme, withDefaultVariant } from "@chakra-ui/react";

const inputSelectStyles = {
    variants: {
        filled: {
            field: {
                _focus: {
                    borderColor: 'green.500'
                }
            }
        }
    },
    sizes: {
        md: {
            field: {
                borderRadius: 'none'
            }
        }
    }
}

const theme = extendTheme({
    fonts: {
        heading: `Montserrat, ${baseTheme.fonts?.heading}`,
        body: `Inter, ${baseTheme.fonts?.body}`
    },
    components: {
        Input: {...inputSelectStyles},
        Select: {...inputSelectStyles},
        Checkbox: {
            baseStyle: {
                control: {
                    borderRadius: 'none'
                }
            }
        }
    }
}, 
withDefaultColorScheme({
    colorScheme: "green",
    components: ['Checkbox']
}),
withDefaultVariant({
    variant: "filled",
    components: ['Input', 'Select']    
}));

export default theme