import { Center, Flex, Heading, Divider, Box, Text, Stack} from "@chakra-ui/layout"
import SocialLabel from "./components/socialLabel"

const Footer = () => {
    return (
        <Box 
            height="650px" 
            as="footer"
            direction="column" 
        >
            <Box
                pl={['0px', '0px', '10%', '10%']}
                pb={['0px', '0px', '112px', '112px']}
                pt="65px"
                h='540px'
                bgImage={[
                    `url('imgs/mobile/footer.png')`,
                    `url('imgs/mobile/footer.png')`,
                    `url('imgs/Where-can-you-find-me.jpg')`,
                    `url('imgs/Where-can-you-find-me.jpg')`]}
                bgRepeat="no-repeat"
                bgSize="100% 100%"
            >
                <Flex 
                    direction="column"
                    alignItems={['center', 'center', 'start', 'start']}
                    w={['', '', '388px', '388px']}
                   
                >
                    <Heading 
                        as="h1"
                        variant="h1"
                        mb="26px"
                        textAlign={['center', 'center', 'start', 'start']}
                    >where can you <br/> find me?</Heading>
                    <Divider 
                        width="105px" 
                        h="2px" 
                        orientation="horizontal" 
                        color="#C4C4C4"
                    />
                    <Stack  
                        w='100%'
                        spacing='16px'
                        pl={['0px', '0px', '36px', '36px']}
                        pt="45px"
                    >
                        <SocialLabel 
                            titleIcon="business e-mail" 
                            title="rfl.s.ribeiro@gmail.com"
                            icon='imgs/Vector.png'
                        />
                        <SocialLabel 
                            titleIcon="instagram" 
                            title="rflcooper"
                            icon='imgs/Vector-1.png'
                        />
                        <SocialLabel 
                            titleIcon="behance" 
                            title="rafael24"
                            icon='imgs/Vector-2.png'
                        />
                    </Stack>
                </Flex>
            </Box>
            
            <Center h="110px" bg="#151316">
                <Text as="label">
                    © 2021 By RFLCOOPER © All Rights Reserved
                </Text>
            </Center>
    </Box>
    )
}

export default Footer