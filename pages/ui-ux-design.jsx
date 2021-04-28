import {Flex, VStack} from "@chakra-ui/react"
import Api from '../src/api/ui-ux'
import Layout from "../src/app/layout"
import generateImage from "../src/components/generateImage"

const Page = ({images}) => {
    
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