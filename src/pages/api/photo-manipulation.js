export default (req, res) => {
    const method = req.method
    if(method === 'GET'){
        res.status(200).json(
            [
                {id: 1, url: '/imgs/photoManipulation/CyberPunkCity1.png', w: 629, h: 456},
                {id: 2, url: '/imgs/photoManipulation/BenchForest1.png', w: 629, h: 456},
                {id: 3, url: '/imgs/photoManipulation/Chaser2.png', w: 365, h: 632},
                {id: 4, url: '/imgs/photoManipulation/CarnavalWar1.png', w: 894, h: 632},
                {id: 5, url: '/imgs/photoManipulation/BennyContest1.png', w: 741, h: 432,},
                {id: 9, url: '/imgs/photoManipulation/Boyroom1.png', w: 528, h: 634}, 
                {id: 6, url: '/imgs/photoManipulation/BeautyDay1.png', w: 741, h: 1032},
                {id: 10, url: '/imgs/photoManipulation/dreamingcat1.png', w: 528, h: 374}, 
                {id: 7, url: '/imgs/photoManipulation/DesertSight1.png', w: 741, h: 530},
                {id: 11, url: '/imgs/photoManipulation/Dreaming1.png', w: 528, h: 814},
                {id: 8, url: '/imgs/photoManipulation/CatsRebelion1.png', w: 741, h: 554},
                {id: 12, url: '/imgs/photoManipulation/PassageWay1.png', w: 528, h: 732},
                {id: 13, url: '/imgs/photoManipulation/GreekGod1.png', w: 466, h: 764},
                {id: 20, url: '/imgs/photoManipulation/FishermanDream1.png', w: 794, h: 553},
                {id: 14, url: '/imgs/photoManipulation/KingofTheForest1.png', w: 466, h: 706},
                {id: 21, url: '/imgs/photoManipulation/ElephantGraveyard1.png', w: 794, h: 593},
                {id: 22, url: '/imgs/photoManipulation/LonelyWarrior1.png', w: 794, h: 667},
                {id: 15, url: '/imgs/photoManipulation/Gentlegiant1.png', w: 466, h: 310},
                {id: 16, url: '/imgs/photoManipulation/ReachingHand1.png', w: 461, h: 588},
                {id: 23, url: '/imgs/photoManipulation/Pumpkinhorseman1.png', w: 404, h: 650}, 
                {id: 24, url: '/imgs/photoManipulation/NewCity1.png', w: 367, h: 650},
                {id: 17, url: '/imgs/photoManipulation/turtlebeach1.png', w: 461, h: 539},
                {id: 25, url: '/imgs/photoManipulation/TheArrivalAdjustments1.png', w: 794, h: 493},
                {id: 18, url: '/imgs/photoManipulation/MisteriousHouse1.png', w: 461, h: 290},
                {id: 19, url: '/imgs/photoManipulation/SamuraiGun1.png', w: 461, h: 425},
                {id: 26, url: '/imgs/photoManipulation/StaySafe1.png', w: 794, h: 594},
                {id: 27, url: '/imgs/photoManipulation/SunsetMonastery1.png', w: 1291, h: 871},
                {id: 28, url: '/imgs/photoManipulation/SpaceAlone1.png', w: 792, h: 463},
                {id: 29, url: '/imgs/photoManipulation/Slayer1.png', w: 792, h: 407},
                {id: 30, url: '/imgs/photoManipulation/RantonShaolin1.png', w: 477, h: 284},
                {id: 31, url: '/imgs/photoManipulation/RantoniHell1.png', w: 477, h: 341},
                {id: 32, url: '/imgs/photoManipulation/PixelStretchTecnique1.png', w: 477, h: 246},
                {id: 33, url: '/imgs/photoManipulation/Revolution1.png', w: 1291, h: 923},
            ]
        )
    }else{
        res.status(500).end(`Method ${method} Not Allowed`)
    }
    
}