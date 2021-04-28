import { Link } from '@chakra-ui/layout'
import {useRouter} from 'next/router'

export default function ActiveLink({children, href}){
    const router = useRouter()

    const style = {
        color: router.asPath === href ? '#761055' : '#262227'
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href, '', {scroll: false})
    }

    return (
        <Link 
            href={href} 
            onClick={handleClick} 
            sx={style}
            color='#262227' 
            m='2px'
            fontSize={['0.7em', '0.7em', '1em', '1.5em']}
        >
            {children}
        </Link>
        
    )
}