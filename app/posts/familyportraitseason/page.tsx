import Image from "next/image";
import css from "../../../styles/Post.module.css";
import * as U from "../../../components/Utils";
import Head from "next/head";

import Link
 from "next/link";
export default function Post() {
    return (
        <>
            <Head>
                <title>Family Portrait Seasons</title>
            </Head>
            <U.HomeButton />
            <div className={css.postContainer}>
                <h1 className={css.postTitle}>Family Portrait Seasons</h1>
                <p className={css.postContent}>Fall Source</p>

                <div className={css.imageContainer}>
                    <Image
                        src="/images/familyportraitseason/source1.jpg"
                        alt=""
                        width={400}
                        height={400}
                    />
                </div>
                <p className={css.postContent}>Winter (Target)</p>

                <div className={css.imageContainer}>
                    <Image
                        src="/images/familyportraitseason/final_1_result.jpg"
                        alt=""
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </>
    )
}
