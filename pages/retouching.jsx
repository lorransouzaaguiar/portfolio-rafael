import {HStack, VStack} from "@chakra-ui/react"
import Image from 'next/image'
import Api from '../src/api/retouching'
import Layout from "../src/app/layout"
import generateImage from "../src/components/generateImage"
const api = new Api()
    
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

export function getStaticProps(context){
    const images = api.getAll()
    
    return {
        props: {
            images,
        }
    }
}

export default Page