import {Flex, VStack} from "@chakra-ui/react"
import Layout from "../app/layout"
import generateImage from "../components/generateImage"

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

export async function getStaticProps(context){
    const response = await fetch('http://localhost:3000/api/ui-ux')
    const images = await response.json()
    return {
        props: {
            images,
        },
    }
}

export default Page