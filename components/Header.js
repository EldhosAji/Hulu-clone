import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'

function Header() {

    const headerItemList = [{
        'title':'HOME',
        'icon':HomeIcon,
        'link':'',
    },{
        'title':'TRENDING',
        'icon':LightningBoltIcon,
        'link':'',
    },{
        'title':'VERIFIED',
        'icon':BadgeCheckIcon,
        'link':'',
    },{
        'title':'COLLECTIONS',
        'icon':CollectionIcon,
        'link':'',
    },{
        'title':'SEARCH',
        'icon':SearchIcon,
        'link':'',
    },{
        'title':'ACCOUNT',
        'icon':UserIcon,
        'link':'',
    },]

    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                {
                    headerItemList.map(items=><HeaderItem key={items.title} title={items.title} Icon={items.icon}/>)
                }
            </div>
            <Image 
                className="object-contain"
                src="https://links.papareact.com/ua6"
                width={200}
                height={100}/>
        </header>
    )
}

export default Header
