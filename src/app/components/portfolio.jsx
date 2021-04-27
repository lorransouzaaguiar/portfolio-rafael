import { Flex, Heading, Text} from "@chakra-ui/layout"

const Portfolio = (props) => {
    return (
        <Flex 
            h={['172px','172px','370px','370px']}
            maxW="100%"
            as="section"
            bgImage={['', '', `url('imgs/Chaser-1.jpg')`, `url('imgs/Chaser-1.jpg')`]}
            bgSize="100% 100%"
            bgRepeat="no-repeat"
        >
            <Flex
                direction="column" 
                gridArea="content"
                alignItems={['center', 'center', 'start', 'start']}
                h={['234px', '234px', "256px", "256px"]}
                w={['100%', '100%', "635px", "635px"]}
                position='absolute'
                pt={['21px', '21px', '88px', '88px']}
                pl={['0', '0', '10%', '10%']}
                pb={['0', '0', '84px', '84px']}
            >
                <Heading 
                    as="h1" 
                    variant="h1"
                    mb={['20px', '20px', '', '']}
                >
                    Portfolio
                </Heading>
                <Text 
                    as="p"
                    maxW={['90%', '90%', "438px", "438px"]}
                    textAlign={['center', 'center', 'start', 'start']}
                >
                    Check my portfólio below, some personal projects, 
                    other freelancers and others done by me during my 
                    shift on the agency that I work at.
                </Text>
            </Flex>
        </Flex>
    )
}


export default Portfolio
