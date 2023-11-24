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
                <title>Image Segmentation</title>
            </Head>
            <U.HomeButton />
            <div className={css.postContainer}>
                <h1 className={css.postTitle}>Good Image Segmentation</h1>
                <p className={css.postContent}>Condensed dev log. Starting with meta's segment anything (SAM)(automatic mask generator) is definitely the right way to go. This gets you a bunch of masks. The next problem is to figure out which masks to keep and how to modify them. It turns out this part of the problem is just a lot of image manipulation and heuristics. After 8 distinct steps I get the final results. Briefly the steps include eroding and dilating the masks with cv2 to make them more cohesive. Removing masks that are either to overarchingly broad or too narrow via various intersection/union sums. Enlarging masks to fill in border regions. Finally scooping everything left in other categories. Lots of manual tuning but great, robust results. Here's an example: </p>
                <p className={css.postContent}>Original</p>

                <div className={css.imageContainer}>
                    <Image
                        src="/images/segmentation/source4.jpeg"
                        alt=""
                        width={400}
                        height={400}
                    />
                </div>
                <p className={css.postContent}>Raw Segments</p>

                <div className={css.imageContainer}>
                    <Image
                        src="/images/segmentation/_labelled_image_og.png"
                        alt=""
                        width={400}
                        height={400}
                    />
                </div>
                <p className={css.postContent}>Processed</p>

                <div className={css.imageContainer}>
                    <Image
                        src="/images/segmentation/_labelled_image.png"
                        alt=""
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </>
    )
}
