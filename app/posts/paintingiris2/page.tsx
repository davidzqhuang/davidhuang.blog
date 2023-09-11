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
                <title>Painting Irises 2</title>
            </Head>
            <U.HomeButton />
            <div className={css.postContainer}>
                <h1 className={css.postTitle}>Painting irises 2</h1>
                <Link href="/posts/irises1">The follow-up to painting irises 1</Link>
                <p className={css.postContent}></p>

                <div className={css.imageContainer}>
                    <Image
                        src="/images/paintingiris2/thisiris.jpg"
                        alt=""
                        width={400}
                        height={400}
                    />
                </div>

                <p className={css.postContent}>This was inspired by a Cézanne I saw at the Harvard Art Museum, Small Houses in Pontoise. I especially loved the way he'd painted the trees.</p>

                <Link className={css.a} href="https://harvardartmuseums.org/collections/object/231249?position=231249">Link to the Cezanne's catalog entry</Link>

                <div className={css.imageContainer}>
                    <Image
                        src="/images/paintingiris2/cezanne.jpg"
                        alt=""
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </>
    )
}
