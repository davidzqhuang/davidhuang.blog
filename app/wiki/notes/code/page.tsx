'use client'

import Head from "next/head";
import Data from "./pageData.mdx";

import * as U from "../../../../components/Utils";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <title>Useful code snippets</title>
            <div className='flex mb-8'>
                <U.WikiButton />
                <U.HomeButton />
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Data />
            </div>
        </>
    )
}

export default Page
