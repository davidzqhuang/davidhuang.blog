import css from "../../../styles/Post.module.css";

import * as U from "../../../components/Utils";
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Defining Artificial Intelligence (AI)',
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
                <h1 className={css.postTitle}>What is the definition of artificial intelligence?</h1>
                <h2 className={css.postSubtitle}>The answer according to Stuart Russell and Peter Norvig is that Artificial Intelligence (AI) is the study of making computers think and/or act like human and/or ideal actors.</h2>
                <Image 
                    src="/images/defineai/figure.png"
                    alt="What is AI the study of? An informational graphic depicting the definition of AI according to Russell and Norvig. An 2 by 2 matrix showing artificial intelligence as the study of Ideal/Human Action/Thinking. Including definitions of AI by Haugeland, Rich and Knight, Charniak and McDermott,  and Schalkoff." 
                    width={936} 
                    height={720} />
            </div>
        </>
    )
}