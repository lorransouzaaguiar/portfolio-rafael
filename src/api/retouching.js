function RetouchingAPI(){
    this.getAll = () => {
        const imgs = [
            {url: 'imgs/retouching/img1.png', w: 615, h: 605},
            {url: 'imgs/retouching/img3.png', w: 620, h: 909},
            {url: 'imgs/retouching/img5.png', w: 1236, h: 824},
            {url: 'imgs/retouching/img2.png', w: 615, h: 605},
            {url: 'imgs/retouching/img4.png', w: 620, h: 909},
            {url: 'imgs/retouching/img6.png', w: 1236, h: 827},
        ]

        return imgs
    }
}

export default RetouchingAPI