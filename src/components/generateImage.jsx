import {Box} from '@chakra-ui/react'
import Image from 'next/image'

export default function generateImage(images, start, end){
    if(start !== null && end !== null){
        const newImages = images.filter(img => img.id >= start && img.id <= end)
        return newImages.map(img => {
            return (
                <Box key={img.id}>
                    <Image
                        key={img.id}
                        src={img.url}
                        width={img.w}
                        height={img.h}
                        //loading='eager'
                        objectFit='cover'   
                        quality={100}          
                    />
                </Box>
            )  
        })
    }else return
}