import React from 'react'
import Buddy1 from '../assets/images/bhoot-1.png'
import Buddy2 from '../assets/images/bhooot-2.png'
import Buddy3 from '../assets/images/bhoot-3.png'
import Buddy4 from '../assets/images/bhoot-4.png'
import Buddy5 from '../assets/images/bhoot-5.png'
import Buddy6 from '../assets/images/bhoot-6.png'

const commoncard = [
    {
        className:'card-padding-1',
        image1: Buddy1,
        cardhead: "ART COLLECTION",
        para: "Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage.",
        alt: "img"
    },
    {
        className:'card-padding-2',
        image1: Buddy2,
        cardhead: "SPECIAL BULLIES",
        para: "20 Buddybullies {out of 10k} will have a very special and ersonalized resembling of famous people who are into NFTs {those will be available after the minting}.",
        alt: "img"
    },
    {
        className:'card-padding-2',
        image1: Buddy3,
        cardhead: "BREEDING",
        para: "Our BuddyBullies will not come alone, as we will announce the breeding function after the minting and you will be able to get a PuppyBully { for free}.",
        alt: "img"
    },
    {
        className:'card-padding-4',
        image1: Buddy4,
        cardhead: "DIGITALMARKETS",
        para: "Communicate with all the digital markets available in the Solana NFT world  for getting our collection successfully listed.",
        alt: "img"
    },
    {
        className: 'card-padding-5',
        image1: Buddy5,
        cardhead: "MERCH",
        para: "The team is working on the future merch thet will be available for the community members directly on our webpage.",
        alt: "img"
    },
    {
        className: 'card-padding-4',
        image1: Buddy6,
        cardhead: "CHARITY",
        para: "We will be giving 30% of the royalties to charity permanently and we will keep spending on marketing, promotions and partnership.50% of the riyalties will go back to the community as rewards.",
        alt: "img"
    },
]
const Map = () => {
    const buddycard = commoncard.map((card1) => (
        <div className='col-lg-4 col-sm-6 col-12'>
            <div className='card-buddy'>
                <img src={card1.image1} alt="card1.alt" />
                <h2 className='m-0 fs-xl fw-semibold pb-4 text-white pt-2 ff-poppins '>{card1.cardhead}</h2>
                <p className='fs-sm1 fw-normal text-white opcity-7 ff-poppins'>{card1.para}</p>
            </div>
        </div>
    ))
    return (
        <div className='bg-blue py-5'>
            <div className="container">
                <div className="row row-gap-4">
                    {buddycard}
                </div>
            </div>

        </div>
    )
}

export default Map