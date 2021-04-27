import {Flex, HStack, VStack} from "@chakra-ui/react"
import Api from '../src/api/photoManipulation'
import Layout from "../src/app/layout"
import generateImage from '../src/components/generateImage'

const Page = ({images}) => {

    return (
        <Layout>
            <VStack
                mb="80px"
                p={['0px 25px', '0px 25px', '0px 75px', '0px 75px']}
                alignItems='center'
            >
                <HStack spacing='0.5rem'> 
                   {generateImage(images,1,2)}
                </HStack>
                <HStack spacing='0.5rem'>
                    {generateImage(images,3,4)}
                </HStack>
                <HStack>
                    <VStack>
                        {generateImage(images,5,8)}
                    </VStack>
                    <VStack>
                        {generateImage(images,9,12)}
                    </VStack>
                </HStack>
                <Flex>
                    <VStack justify='space-between' pr='0.5rem'>
                        {generateImage(images, 13, 19)}
                    </VStack>
                    <VStack justify='space-between'>
                        {generateImage(images, 20, 22)}
                        <HStack>
                            {generateImage(images, 23, 24)}
                        </HStack>
                        {generateImage(images, 25, 26)}
                    </VStack>
                </Flex>
                    {generateImage(images, 27, 27)}
                    <Flex>
                        <VStack justify='space-between' pr='0.5rem'>
                            {generateImage(images, 28, 29)}
                        </VStack>
                        <VStack>
                            {generateImage(images, 30, 32)}
                        </VStack>
                    </Flex>
                    {generateImage(images, 33, 33)}
            </VStack>
        </Layout>
    )  
}

export function getStaticProps(context){
    const api = new Api()
    const images = api.getAll()
    return {
        props: {
            images,
        },
    }
}

export default Page

