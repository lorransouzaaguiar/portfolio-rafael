import {HStack, VStack, Flex} from "@chakra-ui/react"
import Layout from "../app/layout"
import generateImage from "../components/generateImage"
import axios from 'axios'

const Page = ({images}) => {
    return (
        <Layout>
            <VStack
                mb="80px"
                p={['0px 25px', '0px 25px', '0px 75px', '0px 75px']} 
            >
                <HStack>
                    {generateImage(images, 1, 3)}
                </HStack> 
                <Flex>
                    <VStack>
                        <Flex>
                            <VStack pr='0.5rem'>
                                {generateImage(images, 4, 6)}
                            </VStack>
                            <VStack justify='space-between'>
                                {generateImage(images, 7, 8)}
                            </VStack>
                        </Flex>
                        {generateImage(images, 9, 9)}
                    </VStack>
                    <VStack justify={['', '', 'space-between', 'space-between']} pl='0.5rem'>
                        {generateImage(images, 10, 11)}
                    </VStack>
                </Flex>
                <Flex>
                    <VStack>
                        <HStack>
                            {generateImage(images, 12, 13)}
                        </HStack>
                            {generateImage(images, 14, 14)}
                        <HStack>
                            {generateImage(images, 15, 16)}
                        </HStack>
                    </VStack>
                    <VStack justify={['', '', 'space-between', 'space-between']} pl='0.5rem'>
                        {generateImage(images, 17, 18)}
                    </VStack>
                </Flex>
                <Flex>
                    <VStack justify={['', '', 'space-between', 'space-between']}>
                        {generateImage(images, 19, 21)}
                    </VStack>
                    <VStack pl='0.5rem'>
                        {generateImage(images, 22, 23)}
                    </VStack>
                </Flex>
                <HStack>
                    {generateImage(images, 24, 26)}
                </HStack>
                <HStack>
                    {generateImage(images, 26, 28)}
                </HStack>
            </VStack>
        </Layout>
    )  
}

export async function getStaticProps(context){
    const url = process.env.URI + 'api/social-media'
    const response = await axios.get(url)
    const images = response.data
    return {
        props: {
            images,
        },
    }
}

export default Page