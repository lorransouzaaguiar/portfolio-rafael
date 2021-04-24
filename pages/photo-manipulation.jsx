import {Box, Center} from "@chakra-ui/react"
import Image from 'next/image'
import Api from '../src/api/photoManipulation'
import Layout from "../src/app/layout"

const Page = ({images}) => {
    
    return (
        <Layout>
            <Box 
                maxH='6000px'
                mb="80px"
                p={['0px 25px', '0px 25px', '0px 75px', '0px 75px']}
                style={{
                    columns: '3',
                    columnGap:"10px",
                }}
                sx={''}
            >
            {
                images.map((img, index) => {
                    return (
                        <Image
                            key={index}
                            src={`/${img.url}`}
                            width={img.w}
                            height={img.h}
                            loading='eager'
                        />
                    )
                })
            }
            </Box>
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
