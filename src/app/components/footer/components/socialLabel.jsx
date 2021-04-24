import { Flex, Text } from "@chakra-ui/layout"
import { Image} from "@chakra-ui/react"

const SocialLabel = (props) => {
    return (
        <Flex 
            direction="column" 
        >
            <Flex 
                as="label" 
                direction={['column', 'column', 'row', 'row']}
                alignItems={['center', 'center', 'end', 'end']}
                
            >
                <Image 
                    src={props.icon} 
                    boxSize="25px"
                    mt={['', '', '10px', '10px']}
                    mb={['8px', '8px', '', '']}
                />
                <Flex 
                    direction="column" 
                    alignItems={['center', 'center', 'start', 'start']}
                    pl={['0px', '0px', '8px', '8px']}
                >
                    <Text variant="textIcon" as="span" >
                        {props.titleIcon}
                    </Text>
                    <Text as="span" fontSize="18px" textTransform="uppercase">
                        {props.title}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
        )
}

export default SocialLabel