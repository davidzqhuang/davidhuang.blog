'use client'

import Head from "next/head";
import Data from "./pageData.mdx";

import * as U from "../../../components/Utils";
import Link from "next/link";

const Page = () => {
    return (
             <>
            <Head>
                <title>We need a new language for LLMs.</title>
            </Head>
            <U.HomeButton />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Data />
            </div>
        </>
    )
}

export default Page
