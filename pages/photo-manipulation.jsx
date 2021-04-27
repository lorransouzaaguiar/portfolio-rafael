import {Box, Flex, HStack, VStack} from "@chakra-ui/react"
import Image from 'next/image'
import Api from '../src/api/photoManipulation'
import Layout from "../src/app/layout"

const Page = ({images}) => {
    
    return (
        <Layout>
            <VStack
                mb="80px"
                p={['0px 25px', '0px 25px', '0px 75px', '0px 75px']}
                alignItems='center'
            >
                <HStack spacing='0.5rem'> 
                    <Box>
                        <Image
                            key={0}
                            src={images[0].url}
                            width={images[0].w}
                            height={images[0].h}
                            loading='eager'
                            objectFit='contain'
                                
                        />
                    </Box>
                    <Box>
                        <Image
                            key={1}
                            src={images[1].url}
                            width={images[1].w}
                            height={images[1].h}
                            loading='eager'
                            objectFit='cover' 
                        />
                    </Box>
                    
                </HStack>
                <HStack spacing='0.5rem'>
                    <Box>
                        <Image
                            key={2}
                            src={images[2].url}
                            width={images[2].w}
                            height={images[2].h}
                            loading='eager'
                            objectFit='contain'
                                
                        />
                    </Box>
                    <Box>
                        <Image
                            key={3}
                            src={images[3].url}
                            width={images[3].w}
                            height={images[3].h}
                            loading='eager'
                            objectFit='contain'
                        />
                    </Box>
                </HStack>
                <HStack>
                    <VStack>
                        <Box>
                            <Image
                                key={4}
                                src={images[4].url}
                                width={images[4].w}
                                height={images[4].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                        <Box>
                            <Image
                                key={6}
                                src={images[6].url}
                                width={images[6].w}
                                height={images[6].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                        <Box>
                            <Image
                                key={8}
                                src={images[8].url}
                                width={images[8].w}
                                height={images[8].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                        <Box>
                            <Image
                                key={10}
                                src={images[10].url}
                                width={images[10].w}
                                height={images[10].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                    </VStack>
                    <VStack>
                        <Box>
                            <Image
                                key={5}
                                src={images[5].url}
                                width={images[5].w}
                                height={images[5].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                        <Box>
                            <Image
                                key={7}
                                src={images[7].url}
                                width={images[7].w}
                                height={images[7].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                        <Box>
                            <Image
                                key={9}
                                src={images[9].url}
                                width={images[9].w}
                                height={images[9].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                        <Box>
                            <Image
                                key={11}
                                src={images[11].url}
                                width={images[11].w}
                                height={images[11].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                    </VStack>
                </HStack>
                <HStack bgColor=''>
                    <VStack>
                        <Box>
                            <Image
                                key={12}
                                src={images[12].url}
                                width={images[12].w}
                                height={images[12].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                        <Box>
                            <Image
                                key={14}
                                src={images[14].url}
                                width={images[14].w}
                                height={images[14].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                        <Box>
                            <Image
                                key={17}
                                src={images[17].url}
                                width={images[17].w}
                                height={images[17].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                        <Box>
                            <Image
                                key={18}
                                src={images[18].url}
                                width={images[18].w}
                                height={images[18].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                        <Box>
                            <Image
                                key={21}
                                src={images[21].url}
                                width={images[21].w}
                                height={images[21].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                        <Box>
                            <Image
                                key={23}
                                src={images[23].url}
                                width={images[23].w}
                                height={images[23].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                        <Box>
                            <Image
                                key={24}
                                src={images[24].url}
                                width={images[24].w}
                                height={images[24].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                    </VStack>
                    <VStack>
                        <Box>
                            <Image
                                key={13}
                                src={images[13].url}
                                width={images[13].w}
                                height={images[13].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                        <Box>
                            <Image
                                key={15}
                                src={images[15].url}
                                width={images[15].w}
                                height={images[15].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                        <Box>
                            <Image
                                key={16}
                                src={images[16].url}
                                width={images[16].w}
                                height={images[16].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
                        <HStack>
                            <Box>
                                <Image
                                    key={19}
                                    src={images[19].url}
                                    width={images[19].w}
                                    height={images[19].h}
                                    loading='eager'
                                    objectFit='contain'
                                />
                            </Box>
                            <Box>
                                <Image
                                    key={20}
                                    src={images[20].url}
                                    width={images[20].w}
                                    height={images[20].h}
                                    loading='eager'
                                    objectFit='contain'
                                />
                            </Box>
                        </HStack>
                        <Box>
                            <Image
                                    key={22}
                                    src={images[22].url}
                                    width={images[22].w}
                                    height={images[22].h}
                                    loading='eager'
                                    objectFit='contain'
                                />
                        </Box>
                        <Box>
                            <Image
                                    key={25}
                                    src={images[25].url}
                                    width={images[25].w}
                                    height={images[25].h}
                                    loading='eager'
                                    objectFit='contain'
                                />
                        </Box>
                    </VStack>
                </HStack>
                    <Box>
                        <Image
                                key={26}
                                src={images[26].url}
                                width={images[26].w}
                                height={images[26].h}
                                loading='eager'
                                objectFit='contain'
                            />
                    </Box>
                    <HStack>
                        <VStack>
                            <Box>
                                <Image
                                        key={27}
                                        src={images[27].url}
                                        width={images[27].w}
                                        height={images[27].h}
                                        loading='eager'
                                        objectFit='contain'
                                    />
                            </Box>
                            <Box>
                                <Image
                                        key={28}
                                        src={images[28].url}
                                        width={images[28].w}
                                        height={images[28].h}
                                        loading='eager'
                                        objectFit='contain'
                                    />
                            </Box>
                        </VStack>
                        <VStack>
                            <Box>
                                <Image
                                        key={29}
                                        src={images[29].url}
                                        width={images[29].w}
                                        height={images[29].h}
                                        loading='eager'
                                        objectFit='contain'
                                    />
                            </Box>
                            <Box>
                                <Image
                                        key={30}
                                        src={images[30].url}
                                        width={images[30].w}
                                        height={images[30].h}
                                        loading='eager'
                                        objectFit='contain'
                                    />
                            </Box>
                            <Box>
                                <Image
                                        key={31}
                                        src={images[31].url}
                                        width={images[31].w}
                                        height={images[31].h}
                                        loading='eager'
                                        objectFit='contain'
                                    />
                            </Box>
                        </VStack>
                    </HStack>
                    <Box>
                        <Image
                                key={32}
                                src={images[32].url}
                                width={images[32].w}
                                height={images[32].h}
                                loading='eager'
                                objectFit='contain'
                            />
                        </Box>
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

