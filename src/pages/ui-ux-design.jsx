import {Flex, VStack} from "@chakra-ui/react"
import Layout from "../app/layout"
import generateImage from "../components/generateImage"
import axios from 'axios'
import {useEffect, useState} from 'react'

const Page = () => {

    const [images, setImages] = useState([])

    useEffect(async () => {
        const response = await axios.get('/api/ui-ux')
        const data = await response.data
        setImages(data)
    }, [])

    return (
        <Layout>
            <VStack
                mb="80px"
                p={['0px 25px', '0px 25px', '0px 75px', '0px 75px']}
            >
                 <Flex>
                    <VStack pr='0.5rem'>
                        {generateImage(images, 1, 5)}
                    </VStack>
                    <VStack>
                        {generateImage(images, 6, 11)}
                    </VStack>
                 </Flex>
            </VStack>
        </Layout>
    )  
}

export default Page