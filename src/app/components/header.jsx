import { Button } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Heading, Text, Flex, Link, Center} from "@chakra-ui/layout"

const Header = () => {
    return (
        <Flex 
            h={['804px', '804px', '485px', '485px']}
            as="header"
            direction="column"
            bgImage={[
                `url('imgs/mobile/header.png')`, 
                `url('imgs/mobile/header.png')`, 
                `url('imgs/Banner-Principal.jpg')`, 
                `url('imgs/Banner-Principal.jpg')`]}
            bgSize="100% 100%"
        > 
            <Center>
                <Image src='imgs/logo.png' 
                    maxW={['150px', '150px', '230px', '230px']}
                />
            </Center>
            <Flex 
                pt={['34px', '34px', '57px', '57px']}
                pl={['0px', '0px', '10%', '10%']}
                h="full"
                justifyContent={['center', 'center', 'start', 'start']}
            >
                <Flex 
                    justifyContent="space-between"
                    alignItems={['center', 'center', 'start', 'start']}
                    direction="column"
                    h={['254px', '254px', '302px', '302px']}
                    w={['100%', '100%', '467px', '467px']}
                    
                >
                    <Heading 
                        as="h1" 
                        fontSize={['35px', '35px', 'lg', 'xl']}
                        textAlign={['center', 'center', 'start', 'start']}
                    >
                        Welcome<br/>to my personal<br/>world!
                    </Heading>
                    <Text 
                        variant="header"
                        fontSize={['sm', 'md', 'md', 'md']}
                        textAlign={['center', 'center', 'start', 'start']} 
                    >
                        I’m a graphic designer, and digital artist looking <br/> to improve a little everyday!
                    </Text>
                    <Button variant="solid">
                        <Link href="#page">see my portfolio</Link>
                    </Button>
                </Flex>
            </Flex>
    </Flex>   
    )
}

export default Header
