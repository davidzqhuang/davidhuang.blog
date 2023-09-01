'use client'

import Head from "next/head";
import Data from "./pageData.mdx";

import * as U from "../../../../components/Utils";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <div className='flex mb-8'>
                <U.WikiButton />
                <U.HomeButton />
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-2 flex flex-col">
                <Data />
                <Link
                    href="/wiki/notes/byids/10.3386$2Fw31161"
                    className="text-blue-500 hover:underline"
                >
                    Brynjolfsson, E., Li, D., & Raymond, L. (2023). Generative AI at Work. National Bureau of Economic Research. https://doi.org/10.3386/w31161
                </Link>
                <Link
                    href="/wiki/notes/byids/10.1057$2Fs41599-020-0494-4"
                    className="text-blue-500 hover:underline"
                >
                    Fjelland, R. (2020). Why general artificial intelligence will not be realized. In Humanities and Social Sciences Communications (Vol. 7, Issue 1). Springer Science and Business Media LLC. https://doi.org/10.1057/s41599-020-0494-4
                </Link>
            </div>
        </>
    )
}

export default Page
