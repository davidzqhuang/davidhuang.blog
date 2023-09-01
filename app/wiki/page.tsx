import { useRouter } from 'next/navigation'
import * as U from "../../components/Utils";
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <title>wiki at davidhuang.blog</title>
            <div className={`p-32 bg-gradient-to-br from-orange-200 from-5% via-amber-400 via-30% to-pink-200 to-90% h-screen w-screen space-y-4`}>
                <div className='flex mb-8'>
                    <U.WikiButton />
                    <U.HomeButton />
                </div>
                <div className="bg-white p-4 rounded-lg border-b-slate-200 shadow-xl">
                    <p className="text-3xl">davidhuang.blog/wiki</p>
                    <p className="text-1xl mt-2">References of personal and perhaps broader interest, focused on knowledge, topics could include Artificial Intellligence, Information Theory, Metaphysics, Epistemeology, Logic, Behavioral Economics and the Scientific Process.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-b-slate-200 shadow-xl">
                    <div className="flex space-x-6">
                        {/* Column 1 */}
                        <div className="flex-1">
                            <h2 className="font-bold text-xl mb-2">Artificial General/Super Intelligence</h2>
                            <ul className="list-disc pl-5">
                                <li><Link href="/wiki/agsi/overview" className="text-blue-500 hover:underline">Overview</Link></li>
                            </ul>
                            <h2 className="font-bold text-xl mb-2">Generative AI</h2>
                            <ul className="list-disc pl-5">
                                <li><Link href="/wiki/generativeai/overview" className="text-blue-500 hover:underline">Overview</Link></li>
                                <li><Link href="/wiki/generativeai/resources" className="text-blue-500 hover:underline">Resources</Link></li>
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
                        <div className="flex-1">
                            <h2 className="font-bold text-xl mb-2">Writings</h2>
                            <ul className="list-disc pl-5">
                                <li><Link href="/wiki/writings/articles" className="text-blue-500 hover:underline">Articles</Link></li>
                            </ul>
                            <h2 className="font-bold text-xl mb-2">Notes</h2>
                            <ul className="list-disc pl-5">
                                <li><Link href="/wiki/notes/byids" className="text-blue-500 hover:underline">By Identifier (DOI/ISBN/URLs)</Link></li>
                            </ul>
                            <ul className="list-disc pl-5">
                                <li><Link href="/wiki/notes/code" className="text-blue-500 hover:underline">Code snippets</Link></li>
                            </ul>
                            <ul className="list-disc pl-5">
                                <li><Link href="/wiki/notes/prompting" className="text-blue-500 hover:underline">On prompting</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
