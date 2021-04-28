export default function getAllUiUx(req, res){
    const method = req.method
    if(method === 'GET'){
        res.status(200).json(
            [
                {id: 1, url: '/imgs/ui-ux-design/img1.png', w: 662, h: 2367},
                {id: 2, url: '/imgs/ui-ux-design/img2.png', w: 662, h: 1993},
                {id: 3, url: '/imgs/ui-ux-design/img3.png', w: 662, h: 598},
                {id: 4, url: '/imgs/ui-ux-design/img4.png', w: 662, h: 2753},
                {id: 5, url: '/imgs/ui-ux-design/img5.png', w: 662, h: 2341},
                {id: 6, url: '/imgs/ui-ux-design/img6.png', w: 596, h: 1400},
                {id: 7, url: '/imgs/ui-ux-design/img7.png', w: 596, h: 1988},
                {id: 8, url: '/imgs/ui-ux-design/img8.png', w: 596, h: 1294},
                {id: 9, url: '/imgs/ui-ux-design/img9.png', w: 596, h: 1284},
                {id: 10, url: '/imgs/ui-ux-design/img10.png', w: 596, h: 1693},
                {id: 11, url: '/imgs/ui-ux-design/img11.png', w: 596, h: 3074},
            ]
        )
    }else{
        res.status(500).end(`Method ${method} Not Allowed`)
    }
}