function RetouchingAPI(){
    this.getAll = () => {
        const imgs = [
            {id: 1, url: '/imgs/retouching/img1.png', w: 615, h: 605},
            {id: 2, url: '/imgs/retouching/img2.png', w: 615, h: 605},
            {id: 3, url: '/imgs/retouching/img3.png', w: 620, h: 909},
            {id: 4, url: '/imgs/retouching/img4.png', w: 620, h: 909},
            {id: 5, url: '/imgs/retouching/img5.png', w: 1236, h: 824},
            {id: 6, url: '/imgs/retouching/img6.png', w: 1236, h: 827},
        ]

        return imgs
    }
}

export default RetouchingAPI