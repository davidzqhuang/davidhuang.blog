import { useRouter } from 'next/navigation'
import * as U from "../../../../components/Utils";
import Link from 'next/link';

export default function Home() {
    return (
        <>      
        <title>Generative AI: Overview @ davidhuang.blog</title>  
        <div className={`p-32 bg-gradient-to-br from-orange-200 from-5% via-amber-400 via-30% to-pink-200 to-90% h-screen w-screen space-y-4`}>
            <div className='flex mb-8'>
                <U.WikiButton />
                <U.HomeButton />
            </div>
            <div className="bg-white p-4 rounded-lg border-b-slate-200 shadow-xl">
                <p className="text-3xl">Generative AI: Overview</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-b-slate-200 shadow-xl">
                <div className="flex space-x-6">
                    {/* Column 1 */}
                    <div className="flex-1">
                        <h2 className="font-bold text-xl mb-2">Generative AI</h2>
                        <ul className="list-disc pl-5">
                            <li><Link href="/wiki/generativeai/overview/generativeaivs" className="text-blue-500 hover:underline">Generative AI vs Other AI: Definitions by Comparison</Link></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    {/* <div className="flex-1">
                        <h2 className="font-bold text-xl mb-2">Jobs</h2>
                        <ul className="list-disc pl-5">
                            <li><a href="#" className="text-blue-500 hover:underline">Research Assistant</a></li>
                            <li><a href="#" className="text-blue-500 hover:underline">AI Developer</a></li>
                            <li><a href="#" className="text-blue-500 hover:underline">Philosophy Professor</a></li>
                        </ul>
                    </div>
                    */ }
                    {/* Column 3 */}
                    {/* <div className="flex-1">
                        <h2 className="font-bold text-xl mb-2">Community</h2>
                        <ul className="list-disc pl-5">
                            <li><a href="#" className="text-blue-500 hover:underline">Events</a></li>
                            <li><a href="#" className="text-blue-500 hover:underline">Classes</a></li>
                            <li><a href="#" className="text-blue-500 hover:underline">Discussion Groups</a></li>
                        </ul>

                        <h2 className="font-bold text-xl mb-2 mt-4">Services</h2>
                        <ul className="list-disc pl-5">
                            <li><a href="#" className="text-blue-500 hover:underline">Tutoring</a></li>
                            <li><a href="#" className="text-blue-500 hover:underline">Consultation</a></li>
                            <li><a href="#" className="text-blue-500 hover:underline">Lectures & Workshops</a></li>
                        </ul>
                    </div>
                    */ }
                </div>
            </div>

        </div>
        </>

    )
}
