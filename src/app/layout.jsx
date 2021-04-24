import Head from 'next/head'
import {Link, Flex, Box} from "@chakra-ui/react"
import Header from '../app/components/header'
import AboutMe from '../app/components/aboutMe'
import Portfolio from '../app/components/portfolio'
import Menu from '../app/components/menu'
import Footer from '../app/components/footer/footer'

export default function Layout({children}){
    return (
        <Flex bgColor="#151316" direction="Column">
        <Head>
            <title>RFLCooper Portfolio</title>
        </Head>
        <Header/>
            <Box
                bgRepeat="no-repeat"
                bgSize="100% 100%"
                bgImage={[`url('imgs/mobile/section.png')`, `url('imgs/mobile/section.png')`, '', '']}
                h={['504px', '504px', "100%", "100%"]}
            >
                <AboutMe/>
                <Portfolio/>
            </Box>
            <Link name="page"/>
            <Menu/>
            {children}
            <Footer/>
        </Flex>
    )
}