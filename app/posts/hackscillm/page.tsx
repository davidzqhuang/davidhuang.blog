import css from "../../../styles/Post.module.css";
import Editor from '@monaco-editor/react';

export default function Post() {
    return (
        <>
            <div className={css.postContainer}>
                <h1 className={css.postTitle}>Hacking Kaggle Science LLM with difflib and more</h1>
                <p className={css.postContent}>Inspired by all the buzz around gzip, and seeing the shiny prizes surrounding Kaggle's Science LLM competition, where you try to make an algorithm to predict the answer to multiple choice question, I thought... what are the silliest most fun algorithms for doing so?</p>
                <p className={css.postContent}>I decided to try the following as features into a Random Forest: (1) using difflib to find the pairwise similarities between prompt and answers, (2) using zlib to find the compressed size of the prompt and a given answer, and (3) simply using the number of tokens in the answer as the feature.</p>
                <p className={css.postContent}>I evaluated each model using 10-fold cross-validation (n=200) on their accuracies: difflib only (avg. acc. 0.30), zlib only (avg. acc. 0.36), token counts only (avg. acc. 0.26), all together (avg. acc. 0.36). </p>
                <iframe src="/other/hackscillm/main.html" title="Embedded HTML" width="100%" height="600px"></iframe>
            </div>
            
        </>
    )
}