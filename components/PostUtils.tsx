import Link from 'next/link'
import { HouseDoor } from 'react-bootstrap-icons';

export const HomeButton = () => {
    return (
        <div className="">
            <Link href="/" className="text-lg text-black hover:text-sky-500 flex items-center m-4 p-2 border-2 border-neutral-200 w-fit rounded-lg hover:bg-neutral-100">
                <HouseDoor style={{ marginRight: '0.5rem' }} />
                davidhuang.blog
            </Link>
        </div>
    )
}
