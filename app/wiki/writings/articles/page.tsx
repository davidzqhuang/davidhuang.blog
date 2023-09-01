'use client'

import Head from "next/head";
import Data from "./pageData.mdx";

import * as U from "../../../../components/Utils";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <title>Writings @ davidhuang.blog</title>
            <div className='flex mb-8'>
                <U.WikiButton />
                <U.HomeButton />
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Data />
                <Link
                    href="/wiki/writings/articles/actuallycreative"
                    className="text-blue-500 hover:underline"
                >
                    Can Generative AI Actually Be Creative?
                </Link>
            </div>
        </>
    )
}

export default Page
