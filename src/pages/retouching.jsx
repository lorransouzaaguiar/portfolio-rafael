import {HStack, VStack} from "@chakra-ui/react"
import Layout from "../app/layout"
import generateImage from "../components/generateImage"
import axios from 'axios'
import {useEffect, useState} from 'react'

const Page = () => {

    const [images, setImages] = useState([])

    useEffect(async () => {
        const response = await axios.get('/api/retouching')
        const data = await response.data
        setImages(data)
    }, [])

    return (
        <Layout>
            <VStack
                mb="80px"
                p={['0px 25px', '0px 25px', '0px 75px', '0px 75px']}
                
            >
                <HStack>
                    {generateImage(images, 1, 2)}
                </HStack>
                <HStack>
                    {generateImage(images, 3, 4)}
                </HStack>
                <VStack>
                    {generateImage(images, 5, 6)}
                </VStack>
            </VStack>
        </Layout>
    )  
}

export default Page