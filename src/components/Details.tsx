import { FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem, Select, Checkbox, Button, useBreakpointValue, FormErrorMessage, FormHelperText } from "@chakra-ui/react"
import { useState } from "react"

function Details () {

    const colSpan = useBreakpointValue({ base: 2, md: 1 })
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")

    const [error, setError] = useState(false)

    const evaluateFields = () => {
        if (!firstName || !lastName || !address || !city || !country)
            setError(true)
        else 
            setError(false)
    }

    return (
        <VStack w="full" h="full" p={{ base: 5, md: 10 }} spacing={10} alignItems={{ base: "center", md: "flex-start" }}>
            <VStack spacing={3}>
                <Heading size="2xl">Your Details</Heading>
                <Text>If you already have an accout, Log in</Text>
            </VStack>
            <FormControl isRequired isInvalid={error}>
                <SimpleGrid columns={2} columnGap={3} rowGap={6}>
                    <GridItem colSpan={colSpan}>
                            <FormLabel>First Name</FormLabel>
                            <Input onChange={e => setFirstName(e.target.value)} placeholder="Foo" />
                            <FormHelperText>Your Information is safe</FormHelperText>
                    </GridItem>
                    <GridItem colSpan={colSpan}>
                            <FormLabel>Last Name</FormLabel>
                            <Input onChange={e => setLastName(e.target.value)} placeholder="Foo" />
                    </GridItem>
                    <GridItem colSpan={2}>
                            <FormLabel>Address</FormLabel>
                            <Input onChange={e => setAddress(e.target.value)} placeholder="Flat 4, Near Jai Hind College" />
                    </GridItem>
                    <GridItem colSpan={colSpan}>
                            <FormLabel>City</FormLabel>
                            <Input onChange={e => setCity(e.target.value)} placeholder="Shanghai" />
                    </GridItem>
                    <GridItem colSpan={colSpan}>
                            <FormLabel>Country</FormLabel>
                            <Select onChange={e => setCountry(e.target.value)}>
                                <option value="">Select</option>
                                <option value="India">India</option>
                                <option value="USA">United States of America</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Japan">Japan</option>
                            </Select>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Checkbox defaultChecked>Ship to billing address</Checkbox>
                        <FormErrorMessage>All Input Fields are required</FormErrorMessage>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Button onClick={evaluateFields} color="white" _hover={{ bgColor: "green.600" }} bgColor="green.400" size="lg" w="full">Place Order</Button>
                    </GridItem>
                </SimpleGrid>
            </FormControl>
        </VStack>
    )
}

export default Details