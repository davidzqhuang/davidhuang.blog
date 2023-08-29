import css from "../../../styles/Post.module.css";

import * as U from "../../../components/PostUtils";

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

                <h1 className={css.postTitle}>Compounding Artificial Intelligence (AI) Products</h1>

                <p className={css.postContent}>Compared to people, one of AI’s biggest strengths is that it
                    can be copy and pasted. Compared to people, one of AI’s biggest weaknesses is
                    that it does not live in the physical world. </p>

                <p className={css.postContentExtraEmphasis}>So, what
                    jobs do not require touching the physical world and feel like you need to be in
                    a thousand places at once?</p>

                <p className={css.postContent}>There are the usual suspects: data entry, lead generation, or
                    email replies. Then there are the more creative answers: art generation, code interpreters,
                    and paralegals. All these (the “Current Solutions”) do not seem satisfying
                    enough to me though. They seem to only be superficially leveraging the copy-and-paste
                    strength to perform monotonous tasks.</p>

                <p className={css.postContent}>Each of the Current Solutions, only leverage the copy-and-paste
                    strength of AI to be able to scale to infinite numbers of tasks. But they do
                    not leverage the strengths of AI to building compounding advantages.</p>

                <p className={css.postContentExtraEmphasis}>How do we
                    design AI systems to have built-in compounding advantages?</p>

                <p className={css.postContent}>The current paradigm seems to be to collect and retrain on
                    user data so that the AI improves as it is used more. But this is not always
                    ideal for privacy or regulatory concerns and if a business model can compound
                    its advantages in AI at a faster rate than the current paradigm, that business
                    will be more likely to be successful.</p>

                <p className={css.postContent}>To get guidance for designing better-compounding AI systems,
                    we should look to jobs where experience is extremely valuable. In that sense, we
                    can already filter out the Current Solutions, for being too restricted in scope
                    for experience to value. The Current Solutions invariably target entry-level jobs
                    which either will never require experience.</p>

                <p className={css.postContent}>There are certainly more experienced versions of these roles
                    higher up the ladder such as a broader marketing or data science role. But the
                    step up to a more experience role requires not just faster or marginally better
                    copywriting or data plotting. It requires a deeper understanding, an ability to
                    connect and interpret the monotonous work like the charts or the email copy to
                    the broader context of the business – to present results, to derive actionable
                    insights, to shape direction, to train future hires.</p>

                <p className={css.postContent}>None of the Current Solutions have a clear plan to make that
                    experience jump, beyond creating or using language models with better reasoning
                    capabilities or to integrate with other providers or to pour massive
                    engineering efforts into covering all the use cases. In other words, they are
                    either passive and not in control of their destiny or actively digging
                    themselves into a deeper hole, pursuing a near impossible task which can be
                    easily usurped by language models with better reasoning capabilities. </p>

                <p className={css.postContent}>This experience jump is hard to make because the strategy
                    that allows AI to be able to do the entry-level jobs captured by the Current Solutions
                    is fundamentally different to the strategy that allows AI to be able to do the
                    jobs which are the next ladder up. Thus, the only compounding that occurs with
                    the “collect and retrain” approach of the Current Solutions is within the entry-level
                    jobs. </p>

                <p className={css.postContent}>Absent any huge advances in language models (always an
                    important caveat), it seems to me there are two possible compounding advantages:</p>

                <h2 className={css.subheading}>Brand</h2>

                <p className={css.postContent}>Creating a brand which is the default trusted choice for any
                    of the entry-level (or senior) jobs would be valuable. And while perhaps it
                    wouldn’t pay off to train an individual person to be a complete data entry
                    expert, being able to copy-paste an expert AI agent, instantly parallelized
                    across terabytes and petabytes of data, would be enormously valuable and
                    scalable. Imagine taking your margins on entire job descriptions across broad
                    swaths of the market.</p>

                <p className={css.postContent}>The important thing to recognize is how focusing on brand is
                    distinct from “collect and retrain”. Focusing on brand compels organizations to
                    clearly define the AI’s limitations and strength and to give a concise description
                    as to what job the AI is solving. Focusing on “collect and retrain”, I think, ends
                    up pushing organizations to define a broad umbrella job description of what the
                    AI can do, showing users perhaps slightly shitty responses, to be able to serve
                    the “greater good” of collecting data for retraining. </p>

                <p className={css.postContent}>Focusing on brand, means that the AI that is delivered needs
                    to precisely satisfy the job description promised. It means that the compounding
                    advantage is in the trust in the brand to perform the job. It means that the
                    natural growth strategy for focusing on brand is to leverage the brand into
                    building more trusted AI for adjacent job descriptions.</p>

                <p className={css.subheading}>Structured
                    Data</p>

                <p className={css.postContent}>Building a proprietary structured database of information,
                    whether it be time-series economic data, product reviews, or code snippets, can
                    be a lasting, compounding advantage for AI systems. The AI would provide the
                    user value by surfacing data from a proprietary structured database via
                    AI-generated queries and explanations. The AI would also provide the user value
                    by extracting structured information from unstructured data and simultaneously
                    build its own proprietary structured database, thus providing value for the
                    next user.</p>

                <p className={css.postContent}>How is this approach distinct from “collect and retrain”? Using
                    a structured database has a few distinct advantages: first, from a database the
                    provenance of each record can be clearly determined for both compliance and
                    more effective usage of the data; second, the structured database is clearly intrinsically
                    and immediately valuable, where a massive dump of chatlogs is not; third, there
                    is a much clearer Job to be Done, which is imposed by the clarity of having a
                    structure in place.</p>

                <p className={css.postContent}>The clearer Job to be Done comes from segregating the job of
                    the AI into two parts: data entry and data query. The data entry job explicitly
                    and transparently provides value from day one. The data query job also
                    explicitly and transparently executes its job of querying the database. If the
                    data querier does not perform well it shouldn’t be because the query is bad but
                    rather because the database is incomplete. Compared to “collect and retrain”
                    the compounding value comes not from incrementally improving the data entry or
                    data query AI but rather from building a larger and larger proprietary
                    structured database.</p>

            </div>

        </>
    )
}
