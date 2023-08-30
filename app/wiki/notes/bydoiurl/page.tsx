'use client'

import Head from "next/head";
import Data from "./pageData.mdx";

import * as U from "../../../../components/Utils";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <Head>
                <title>Generative AI vs. other types of AI</title>
            </Head>
            <div className='flex mb-8'>
                <U.WikiButton />
                <U.HomeButton />
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Data />
                <Link
                    href="/wiki/notes/bydoiurl/10.3386$2Fw31161"
                    className="text-blue-500 hover:underline"
                >
                    10.3386/w31161 Brynjolfsson, E., Li, D., & Raymond, L. (2023). Generative AI at Work. National Bureau of Economic Research. https://doi.org/10.3386/w31161
                </Link>
            </div>
        </>
    )
}

export default Page
