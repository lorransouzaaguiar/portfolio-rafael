import { Link} from '@chakra-ui/react'
import {useRouter} from 'next/router'

export default function ActiveLink({children, href}){
    const router = useRouter()

    const style = {
        color: router.asPath === href ? '#761055' : '#262227',
    }

    const handleClick = (e) => {
        console.log('clicou')
        e.preventDefault()
        router.push(href, '', {scroll: false})
    }

    return (
            <Link 
                href={href} 
                onClick={handleClick}
                sx={style}
                color='#262227' 
                fontSize={['0.7em', '0.7em', '1em', '1.5em']}
            >
                {children}
            </Link>
    )
}