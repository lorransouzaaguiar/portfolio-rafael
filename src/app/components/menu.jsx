import {HStack} from "@chakra-ui/react"
import ActiveLink from "../../components/activeLink"

const Menu = () => {
    return (
        <HStack
            as="nav"
            h="100px"
            p={['0px 25px', '0px 25px', '', '']}
            justify='center'
        >   
            <ActiveLink href='/photo-manipulation'>photomanipulation</ActiveLink>
            <ActiveLink href='/retouching'>retouching</ActiveLink>
            <ActiveLink href='/social-media'>social media</ActiveLink>
            <ActiveLink href='/ui-ux-design'>ui/ux design</ActiveLink>
        </HStack>  
    )
}

export default Menu

