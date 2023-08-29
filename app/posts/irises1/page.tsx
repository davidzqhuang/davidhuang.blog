import Image from "next/image";
import css from "../../../styles/Post.module.css";
import * as U from "../../../components/PostUtils";
import Head from "next/head";

export default function Post() {
    return (
        <>
            <Head>
                <title>Painting Irises 1</title>
            </Head>
            <U.HomeButton />
            <div className={css.postContainer}>
                <h1 className={css.postTitle}>Painting irises 1</h1>
                <p className={css.postContent}>I started with a color pencil study from reference.</p>

                <div className={css.imageContainer}>
                    <Image
                        src="/images/irises1/colorpencil1.jpg"
                        alt="Color pencil study of an iris"
                        width={400}
                        height={400}
                    />
                </div>

                <p className={css.postContent}>Then I trace it on parchment paper with a pen, flipped it over, traced again in graphite, to then transfer the outline of the iris onto future paintings.</p>
                <div className={css.imageContainer}>
                    <Image
                        src="/images/irises1/trace.jpg"
                        alt="Tracing the color pencil study of an iris"
                        width={400}
                        height={400}
                    />
                </div>

                <p className={css.postContent}>Using the outlining and with the color pencil study as a guide, I broke out a new gouache set to make a painting of the iris. I was fairly happy for a first pass, though brush work and color needs improvement.</p>
                <div className={css.imageContainer}>
                    <Image
                        src="/images/irises1/gouache1.jpg"
                        alt="An iris in gouache 1"
                        width={400}
                        height={400}
                    />
                </div>

                <p className={css.postContent}>For this one, I got a new tube of light purple gouachem which unified the color a bit. I went for a bit more of a higher contrast with the dark grey background, and aggressive highlights and shadows.</p>
                <div className={css.imageContainer}>
                    <Image
                        src="/images/irises1/gouache2.jpg"
                        alt="An iris in gouache 2"
                        width={400}
                        height={400}
                    />
                </div>
            
                <p className={css.postContent}>For this last one, I went for a more softer and natural approach with a nice turqouise blue background. I used a much more pigmented approach with less dilution and a lot of white and purple. I also basically cut out the blue in the shadow only using the purple, white, and yellow, for a more greyish and soft shadow.</p>
                <div className={css.imageContainer}>
                    <Image
                        src="/images/irises1/gouache3.jpg"
                        alt="An iris in gouache 3"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </>
    )
}
