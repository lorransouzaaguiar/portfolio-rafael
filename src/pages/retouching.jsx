import {HStack, VStack} from "@chakra-ui/react"
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

export async function getStaticProps(context){
    const url = process.env.URI + '/api/retouching'
    const response = await axios.get(url)
    const images = response.data
    return {
        props: {
            images,
        },
    }
}

export default Page