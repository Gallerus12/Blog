import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

// define custom styles for xl size
const sizes = {
  xsm: definePartsStyle({
    container: {
      borderRadius: "10px",
      padding: "20px",
      maxW: '60%'
    }
  })
};

// export sizes in the component theme
export const cardTheme = defineMultiStyleConfig({ sizes });
