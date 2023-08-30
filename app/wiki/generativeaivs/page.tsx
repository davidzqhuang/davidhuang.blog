'use client'

import Head from "next/head";
import Data from "./pageData.mdx";

const Page = () => {
    return (
        <>
            <Head>
                <title>Generative AI vs. other types of AI</title>
            </Head>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Data />
            </div>
        </>
    )
}

export default Page
