import {Flex} from "@chakra-ui/react"
import ActiveLink from "../../components/activeLink"

const Menu = () => {
    return (
        <Flex
            as="nav"
            h="100px"
            justifyContent="center"
            alignItems="center"
            p={['0 10px', '0 10px', '', '']}
        >   
            <ActiveLink href='/photo-manipulation'>photo-manipulation</ActiveLink>
            <ActiveLink href='/retouching'>retouching</ActiveLink>
            <ActiveLink href='/social-media'>social media</ActiveLink>
            <ActiveLink href='/ui-ux-design'>ui/ux design</ActiveLink>
        </Flex>  
    )
}

export default Menu

