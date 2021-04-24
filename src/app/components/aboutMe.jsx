import { Flex, Heading, Text } from "@chakra-ui/layout"

const AboutMe = () => {
    return (
        <Flex 
            as="section"
            h={['324px','324px','428px','428px']}
            bgImage={['', '', `url('imgs/About-me.jpg')`, `url('imgs/About-me.jpg')`]}
            bgRepeat="no-repeat"
            bgSize="100% 100%"
            pt={['38px', '38px', '88px', '88px']}
            pl={['0', '0', '10%', '10%']}
            pb={['0', '0', '84px', '84px']}
        >
            <Flex 
                direction="column" 
                alignItems={['center', 'center', 'start', 'start']}
                h={['234px', '234px', "256px", "256px"]}
                w={['100%', '100%', "635px", "635px"]}
        
            >
                <Heading 
                    as="h2" 
                    mb={['16px', '16px', '', '']}
                    variant="h2">
                    Digital art | Design | Photoretouching
                </Heading>
                <Heading 
                    as="h1" 
                    mb={['16px', '16px', '', '']}
                    variant="h1"
                >
                    About me 
                </Heading>
                    <Text 
                        maxW={['90%', '90%', '635px', '635px']}
                        maxH={['100%', '100%', '150px', '150px']}
                        textAlign={['center', 'center', 'start', 'start']}
                    >
                        Hi, my name is Rafael and I’m a graphic designer from Brazil. I started my
                        journey on the digital through photoshop, learning on my own everything I can 
                        to be more proficient on my area. Nowadays I do freelancer work for Design 
                        endeveours (social media, UI/UX pages, Logo design) and photomanipulation. 
                        Keep scrooling if you want to understand more of my work!
                    </Text>
            </Flex>
        </Flex>
    )
}

export default AboutMe