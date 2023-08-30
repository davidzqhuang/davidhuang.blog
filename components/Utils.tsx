import Link from 'next/link'
import { HouseDoor } from 'react-bootstrap-icons';

import Image from 'next/image';

export const HomeButton = () => {
    return (
        <div className="" style={{
            width: 'fit-content',
            height: '48px',
        }}>
            <Link href="/" className="text-lg text-black hover:text-sky-500 flex items-center m-4 p-2 border-2 border-neutral-200 w-fit rounded-lg hover:bg-neutral-100 bg-white">
                <HouseDoor style={{ marginRight: '0.5rem' }} />
                davidhuang.blog
            </Link>
        </div>
    )
}

export const WikiButton = () => {
    return (
        <div className="" style={{
            width: 'fit-content',
            height: '48px'
        }}>
            <Link href="/wiki" className="text-lg text-black hover:text-sky-500 flex items-center m-4 p-2 border-2 border-neutral-200 w-fit rounded-lg hover:bg-neutral-100 bg-white">
                <Image
                    src={`/images/wiki/wikilogo.jpg`}
                    width={30}
                    height={30}
                    alt={"icon for wiki"}></Image>
            </Link>
        </div>
    )
}