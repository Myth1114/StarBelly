import React from 'react'
// import './herosection.css'
import { HeroSections ,HeroLeft,HeroRight,Images,Image1,Image2,Image3,Text} from './herosection.styles'
import {Button2} from '../GlobalStyles/globalstyles'
const HeroSection = () => {
    return (
        <section>
            <HeroSections>
            <HeroLeft>
                <Text>
                We do not cook,<br/>
                we create your<br/>
                emotions!
                </Text>
                <Button2>Explore More</Button2>
            </HeroLeft>
            <HeroRight>
                <Images>
                    <Image1 src='/Images/Hero-4.png' alt='qwerrt'  ></Image1>
                    <Image2 src='/Images/Hero-5.png' alt='qwerrt'  ></Image2>
                    <Image3 src='/Images/Hero-6.png' alt='qwerrt'  ></Image3>
                </Images>
            </HeroRight>
            </HeroSections>   
        </section>
    )
}

export default HeroSection
