import css from "../../../styles/Post.module.css";

import * as U from "../../../components/Utils";

import type { Metadata } from 'next';

import Image from "next/image";

export const metadata: Metadata = {
    title: 'HTML to PPTX: Tailwind for PowerPoints (beta!)',
    description: 'The personal blog site of David, not to be confused with other David Huangs.',
    icons: {
      icon: '/icon.png',
    }
  }

export default function Post() {
    return (
        <>
            <U.HomeButton />

            <div className={css.postContainer}>

                <h1 className={css.postTitle}>HTML to PPTX: Tailwind for PowerPoints (beta!)</h1>

                <p className={css.postContent}>PowerPoints seem to be here to say. Sometimes it seems like the only thing differentiating a junior analyst from ChatGPT is the fact that the junior analyst can toss together a few slides together and give it a nice voiceover.</p>

                <p className={css.postContentExtraEmphasis}>How can we let AI create PowerPoints (so AI can take our jobs)?</p>

                <p className={css.postContent}>AI isn't good at using User Interfaces but it is good at programming. So, instead of having AI literally use PowerPoint, I will have AI "program" the PowerPoint deck.</p>

                <p className={css.postContent}>The naive way to do this is to have AI generate the literal XML of the PowerPoint, zip it up with any other objects like images and call it a day. This is hard because there is so much extraneous formatting that AI literally generating megabytes of XML is hardly likely to create a valid .pptx file, let alone a beautiful presentation.</p>
                <p className={css.postContent}>Ok, so instead of that another set of proposals involve having the AI write a script which produces the .pptx file. The script could be written in PowerPoint macros, in Python with pythonpptx, or Javascript with pptxgenjs. This also doesn't really work, because most of those frameworks require define the coordinates of the shapes, images and text-boxes, and it's a really hard problem to calculate those coordinates in a "nice" way.</p>
                <p className={css.postContent}>When I'd first approached this problem years ago (in a now defunct package called autoreporter), my solution was to pre-generate a lot of presentations with PowerPoint and then find-and-replace existing elements, so that everything was still laid out nicely. But, of course now the AI can't <i>really</i> generate the presentation end-to-end.</p>
                <p className={css.postContent}>I've begun to really like using TailwindCSS for styling my websites and it seemed to me that ChatGPT was very effective at laying things out in HTML and CSS, so... </p>

                <p className={css.postContentEmphasis}>The strategy is to have the AI write a bunch of HTML with Tailwind which is then rendered by a browser, where we convert the rendering to .pptx</p>

                <p className={css.postContent}>Some brief details for people trying to this themselves. The best way to do this is to make a bunch of iframes the size of a slide (1280px by 720px) and then render each slide there to get the right dimensions. Then, what I do, is inside of each iframe I make a little script which gets all the computed styles of all the slide elements and compiles that. In the "deck" which has all the iframes of all the slides, I use the iframe messaging system to get all the styling and info from each slide, and then use pptxgenjs to draw those.</p>

                <p className={css.postContentExtraEmphasis}>The results!</p>
                <p className={css.postContentEmphasis}>Before (the website/html):</p>
                <Image src="/images/tailwindpowerpointbeta/html.png" width={1280} height={720} alt="websiteBefore" />
                <Image src="/images/tailwindpowerpointbeta/code.jpg"  height={984} width={1888} alt="websiteBefore" />

                <p className={css.postContentEmphasis}>After (the PowerPoint):</p>
                <Image src="/images/tailwindpowerpointbeta/pptx.jpg" width={1280} height={720} alt="websiteBefore" />
            </div>

        </>
    )
}
