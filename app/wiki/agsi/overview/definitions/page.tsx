'use client'

import Head from "next/head";
import Data from "./pageData.mdx";

import * as U from "../../../../../components/Utils";

const Page = () => {
    return (
        <>
            <title>Glossary of Artifical Intelligence (AI) definitions</title>
            <meta name="description" content="Glossary of Artifical Intelligence (AI) definitions" />
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
