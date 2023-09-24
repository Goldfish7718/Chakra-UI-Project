import { VStack, Heading, Text, Flex, SimpleGrid, GridItem, Checkbox, Divider, Button, useColorMode, useColorModeValue, useBreakpointValue } from "@chakra-ui/react"
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { useState } from 'react'


function Cart () {

    const [darkEnabled, setDarkEnabled] = useState(false)
    const { toggleColorMode } = useColorMode();

    const bgColor = useColorModeValue("gray.50", "whiteAlpha.50")
    const colSpan = useBreakpointValue({ base: 2, md: 1 })

    const switchTheme = () => {
        setDarkEnabled(!darkEnabled)
        toggleColorMode()
    }

    return (
        <VStack w="full" h="full" p={10} spacing={5} alignItems="flex-start" bg={bgColor}>
            <VStack spacing={3} alignItems="flex-start">
                <Heading size="md">Order Summary</Heading>
                <Text>Subtotal and Breakdown</Text>
                {!darkEnabled && <Button onClick={switchTheme} bgColor="gray.200" _hover={{ bgColor: "gray.400" }}>Eclipse<BsFillMoonFill size={16} style={{ marginLeft: "8px" }} /></Button>}
                {darkEnabled && <Button onClick={switchTheme} bgColor="gray.600" _hover={{ bgColor: "gray.400" }}>Sunrise<BsFillSunFill size={16} style={{ marginLeft: "8px" }} /></Button>}            
            </VStack>
            <Flex w="full" justifyContent="space-between">
                <VStack spacing={1} my={3} alignItems="flex-start">
                    <Text fontSize="lg">Paneer 1x</Text>
                    <Text fontSize="lg">Peanut Butter 3x</Text>
                    <Text fontSize="lg">Protien bars 2x</Text>
                </VStack>
                <VStack spacing={1} my={3} alignItems="flex-end">
                    <Text fontSize="lg" as="b">$7.99</Text>
                    <Text fontSize="lg" as="b">$18.99</Text>
                    <Text fontSize="lg" as="b">$12.99</Text>
                </VStack>
            </Flex>
            <Divider borderColor="gray.500" />
            <Flex w="full" justifyContent="space-between">
                <Text fontSize="2xl">Order Subtotal</Text>
                <Text as="b" fontSize="2xl">$77.99</Text>
            </Flex>
            <SimpleGrid columns={2} columnGap={5} rowGap={5}>
                <GridItem colSpan={colSpan}>
                    <Checkbox>Leave to Security</Checkbox>
                </GridItem>
                <GridItem colSpan={colSpan}>
                    <Checkbox>Generate Tax Invoice after Purchase</Checkbox>
                </GridItem>
                <GridItem colSpan={colSpan}>
                    <Checkbox>Deliver to neighbours</Checkbox>
                </GridItem>
                <GridItem colSpan={colSpan}>
                    <Checkbox>Return</Checkbox>
                </GridItem>
            </SimpleGrid>
        </VStack>
    )
}

export default Cart