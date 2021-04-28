export default function getAllSocialMedia(req, res){
    const method = req.method
    if(method === 'GET'){
        res.status(200).json(
            [
                {id: 1, url: '/imgs/socialMedia/img1.png', w: 416, h: 416 },
                {id: 2, url: '/imgs/socialMedia/img2.png', w: 420, h: 420},
                {id: 3, url: '/imgs/socialMedia/img3.png', w: 420 , h: 420},
                {id: 4, url: '/imgs/socialMedia/img4.png', w: 416, h: 416},
                {id: 7, url: '/imgs/socialMedia/img5.png', w: 420, h: 747},
                {id: 10, url: '/imgs/socialMedia/img6.png', w: 422, h: 596},
                {id: 5, url: '/imgs/socialMedia/img7.png', w: 416, h: 416},
                {id: 8, url: '/imgs/socialMedia/img8.png', w: 420, h: 420},
                {id: 11, url: '/imgs/socialMedia/img9.png', w: 422, h: 863},
                {id: 9, url: '/imgs/socialMedia/img10.png', w: 847, h: 280},
                {id: 12, url: '/imgs/socialMedia/img11.png', w: 416, h: 416},
                {id: 13, url: '/imgs/socialMedia/img12.png', w: 416, h: 416},
                {id: 17, url: '/imgs/socialMedia/img13.png', w: 422, h: 750},
                {id: 14, url: '/imgs/socialMedia/img14.png', w: 847, h: 476},
                {id: 15, url: '/imgs/socialMedia/img15.png', w: 518, h: 518},
                {id: 16, url: '/imgs/socialMedia/img16.png', w: 303, h: 518},
                {id: 18, url: '/imgs/socialMedia/img17.png', w: 422, h: 680},
                {id: 19, url: '/imgs/socialMedia/img18.png', w: 675, h: 533},
                {id: 22, url: '/imgs/socialMedia/img19.png', w: 578, h: 971},
                {id: 20, url: '/imgs/socialMedia/img20.png', w: 675, h: 401},
                {id: 21, url: '/imgs/socialMedia/img21.png', w: 675, h: 486},
                {id: 23, url: '/imgs/socialMedia/img22.png', w: 578, h: 486},
                {id: 24, url: '/imgs/socialMedia/img23.png', w: 416, h: 871},
                {id: 25, url: '/imgs/socialMedia/img24.png', w: 419, h: 870},
                {id: 26, url: '/imgs/socialMedia/img25.png', w: 420, h: 878},
                {id: 27, url: '/imgs/socialMedia/img26.png', w: 416, h: 870},
                {id: 28, url: '/imgs/socialMedia/img27.png', w: 419, h: 877},
                {id: 29, url: '/imgs/socialMedia/img28.png', w: 420, h: 879},
                {id: 6, url: '/imgs/socialMedia/img29.png', w: 411, h: 347},
            ]
        )
    }else{
        res.status(500).end(`Method ${method} Not Allowed`)
    }
}