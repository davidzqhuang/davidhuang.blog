import css from "../../../styles/Post.module.css";

import * as U from "../../../components/PostUtils";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Are current language models more awake or asleep?',
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
                <h1 className={css.postTitle}>Are current language models more awake or asleep?</h1>
                <p className={css.postContent}>
                    I'm serious about the question. For all we know and think we know about how humans learn, there is one very concrete thing we know is for certain. Sleep is crucial to learning. So, here's the question again.
                </p>
                <p className={css.postContentEmphasis}>
                    Are current language models more awake or asleep?
                </p>
                <p className={css.postContent}>
                    I would argue that when they are training they are asleep because they are revisiting prior experiences (training data) and making updates to their wiring (training). When they are inferring, they are awake because they are actively interacting with the world (e.g. chatting).</p>
                <p className={css.postContent}>
                    By this framework, language models (currently) are sleep-deprived zombies, who are operating on autopilot. They got one long sleep as an infant (pretraining), one long sleep as a high schooler (chat training), and maybe a short nap here and there (fine-tuning). But they are still zombies.
                </p>
                <p className={css.postContent}>
                    That seems... not good? I would hardly want an employee to be zombie on autopilot droning on and on. I mean I suppose it would be better if said zombies had pirated thousands of textbooks and had droned intelligibly about that. I suppose it could be better if I had hundreds of said zombies talking to each other in some infinite game of telephone. And maybe, maybe it could be better if these zombies responded super fast, and instead of droning it was more like a reflex, a knee-jerk response. But, I don't think so.
                </p>
                <p className={css.postContentEmphasis}>
                    They would still be asleep.
                </p>
                <p className={css.postContent}>
                    Here is one proposal people have had for waking our zombies up. Some people suggest that we give our zombies a big notepad. But can you imagine? Talking to some sleep-deprived zombie and they are frantically scribbling down what you say, flipping through pages, running through a library, googling, and then knee-jerking a response over and over again. They are faking it. And yes I know, there are entire firms based off of this premise and good for them. But even then, at those firms, they don't expect those zombies to be god-forbid talking to their clients or making real decisions! Of course not, they are zombies.
                </p>
                <p className={css.postContent}>
                    That is not to say that an army of zombies is not useful. I could certainly use an army of zombies. I'm sure an army of zombies could be commercially viable too, and I'm sure there is an industry in making and maintaining an army of zombies as well. But, I think that that is not the future, it can't be the future. 
                </p>
                <p>
                    It is like the Empire in Star Wars. The Sith have ensembled masses of droids and clones to overwhelm our public squares, art, culture, science, relationships, politics and craft. They can be useful and powerful, but they are asleep at the wheel. They come in hordes and those hordes are overwhelming. But, they can be Jedi mind tricked and they have horrible accuracy. They are pretty good at operating machinery or programming systems. But, they don't have direction and are fundamentally a static vision of the future, because, you know by now, they are asleep so they can't evolve a direction or a vision of the future.
                </p>
            </div>
        </>
    )
}