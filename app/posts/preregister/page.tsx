import css from "../../../styles/Post.module.css";

import * as U from "../../../components/Utils";

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Compounding Artificial Intelligence (AI) Products',
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

                <h1 className={css.postTitle}>Pre-registering AI capabilities</h1>
                <h2 className={css.postHeading}>Positive</h2>
                <h2 className={css.postHeading}>Negative</h2>
            </div>

        </>
    )
}
