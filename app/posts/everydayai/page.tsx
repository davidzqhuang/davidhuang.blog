import css from "../../../styles/Post.module.css";
import * as U from "../../../components/PostUtils";
import Head from "next/head";

export default function Post() {
    return (
        <>
            <Head>
                <title>The everyday use case for Artificial Intelligence </title>
            </Head>
            <U.HomeButton />
            <div className={css.postContainer}>
                <h1 className={css.postTitle}>The everyday use case for Artificial Intelligence </h1>
                <p className={css.postContent}>What will be the big winner in the next two decades in the United States? If it’s Artificial Intelligence (AI), what will be the big AI winner? I contend that United States consumers do not want, care about AI, or are impacted by AI. The extent to which AI matters will be how much it matters to the multinational corporations, which dominate the global economy.</p>

                <p className={css.subheading}>What do I, personally, want AI for?</p>
                <ol>
                    <li className={css.postContentEmphasis}>Does AI get me the finest wines, specialty coffee, or sushi?</li>
                    <li className={css.postContentEmphasis}>Does AI help me fold laundry, change my daughter’s diapers, or throw out the trash?</li>
                    <li className={css.postContentEmphasis}>Does AI help me learn better, exercise, entertain me, or create art I love?</li>
                </ol>
                <p className={css.postContent}>No.</p>
                <p className={css.postContent}>For the first category, those items are on two dimensions: rarity and rarity. They are rare in terms of limited natural resources. They are also rare just by definition, because everyone wants the best wine, coffee, and sushi and not everyone can have the best. Even if through some feat of biological engineering AI unlocks natural resources to make the finest wines, specialty coffee, and sushi (a difficult presumption at best), AI will never give the best version of these products which we desired.</p>
                <p>The second category is the category of actions that are impossible without a revolution in robotics in both the software controlling the robots and the economics of the manufacturing of the robots themselves. Furthermore, because there are so many little chores that all must be done precisely, robots would have to be very general and very accurate and be completely embedded in our reality – which is hard.</p>
                <p className={css.postContent}>The third category is the category of things that people will claim AI will do, but there is likely no market for, because on the high-end we already know from the behavior of the richest people that they want personal trainers, private tutors, and Da Vincis. That’s not going to change with AI. On the lower-end, distribution will be hard, margins will be hard, and competition will be hard.</p>
                <p className={css.postContent}>In other words, AI for my personal wants and needs is missing three essential things, which I contend are impossible to resolve.</p>
                <ol>
                    <li className={css.postContentEmphasis}>AI cannot make the rarest goods less rare.</li>
                    <li className={css.postContentEmphasis}>AI cannot do chores.</li>
                    <li className={css.postContentEmphasis}>AI is missing the human connection.</li>
                </ol>
                <p className={css.postContent}>Many people and companies are predicated upon solving these impossibilities. Even more companies are predicated on businesses which aim to make more efficient other businesses which serve these personal wants and needs of Americans. My belief is that these will all fail.</p>
                <p className={css.postContent}>The United States economy is already saturated in consumption of goods and services which AI could help involved in the creation of. Anything left is optimization at the margins and face significant headwinds. Regardless, these optimizations have little to do with everyday life. I will not be drinking any better coffee; I will not be having my laundry made for be directly by AI; I will not want an AI personal trainer. Those are just not in the cards.</p>
                <p>When I think about what this means though, for business, I think that AI’s impact will be in the bowels of scientific discovery and the optimizations, scale, and growth of multinational corporations which bring the life of prosperity (and productivity) we have in America to the rest of the world. However, there are of course many more factors at play if you want to consider the global economy.</p>
                <p className={css.postContent}>But I think that whatever it is, the entity which can orchestrate the global economy together more efficiently, to uplift the entire world to nicest version of the United States’ material standard of living, but sustainably and happily as well. That will be the big winner.</p>

            </div>
        </>
    )
}