import {Box} from "@chakra-ui/react"
import Image from 'next/image'
import Api from '../src/api/socialMedia'
import Layout from "../src/app/layout"

const Page = ({images}) => {
    
    return (
        <Layout>
            <Box 
                mb="80px"
                p={['0px 25px', '0px 25px', '0px 75px', '0px 75px']}
                sx={{
                    columns: '3',
                    columnGap:"10px",
                }}
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