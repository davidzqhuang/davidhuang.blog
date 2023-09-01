
'use client'

import css from "../../../styles/Post.module.css";

import * as U from "../../../components/Utils";

import Editor from "@monaco-editor/react";
import Link from "next/link";

export default function Post() {
    return (
        <>
            <U.HomeButton />
            <title>Finetuning OpenAI on Twitter</title>
            <meta name="description" content="Finetuning OpenAI on Twitter. A brief, simple tutorial for intermediate programmers." />

            <div className={css.postContainer}>

                <h1 className={css.postTitle}>Finetuning OpenAI on Twitter</h1>


                <p className={css.postContent}>OpenAI recently released finetuning, so why not give it a try! Here is a brief log of the process</p>
                <p className={css.postContent}>1. I found the <a className={css.a} href="https://platform.openai.com/docs/guides/fine-tuning/create-a-fine-tuned-model">OpenAI Finetuning guide</a> very helpful</p>
                <p className={css.postContent}>2. I collected a dataset of 1000 tweets from a Twitter account (to be unnamed) with the chrome extension <a className={css.a} href="https://chrome.google.com/webstore/detail/twexportly-export-tweets/hbibehafoapglhcgfhlpifagloecmhfh">TwExportly</a></p>
                <p className={css.postContent}>3. I first filtered the dataset for actual tweets (not retweets or replies, etc.) and for tweets with lots of likes</p>
                <p className={css.postContent}>4. I then used gpt-3.5 to generate topic and categories for each tweet with <Link className={css.a} href="/wiki/notes/code/completioncsv">a little code</Link> </p>
                <p className={css.postContent}>5. I then compiled the dataset</p>
                <Editor
                    height="400px"
                    language="python"
                    value={`import openai
import json
import os

with open("FT_PILE_1.jsonl", "w+") as f:
    for index, row in df.iterrows():
        messages = {
            "messages": [
                {
                    "role": "system",
                    "content": "You are a helpful Twitter ghostwriter."
                },
                {
                    "role": "user",
                    "content": f"""Write me a tweet\\n{row["prompt"]}"""
                },
                {
                    "role": "assistant",
                    "content": row["text"]
                }
            ]
        }
        f.write(json.dumps(messages) + "\\n")

file = openai.File.create(
  file=open("FT_PILE_1.jsonl", "rb"),
  purpose='fine-tune'
)`}
                />
                <p className={css.postContent}>6. Started the finetuning job</p>
                <Editor
                    height="32px"
                    language="python"
                    value={`ftjob = openai.FineTuningJob.create(training_file=file.id, model="gpt-3.5-turbo")`}
                />
                <p className={css.postContent}>7. Waited for the finetuning job to finish (they send a nice email), and then get the model by calling the function</p>
                <Editor
                    height="32px"
                    language="python"
                    value={`openai.FineTuningJob.list(limit=10)`}
                />
                <p className={css.postContent}>and copying the appropriate model name, found as model.data.fine_tuned_model</p>
                <p className={css.postContent}>8. I then used the model to generate some tweets</p>
                <p className={css.postContent}>The nice part is that you can say "Write me a tweet..." and then specify the Topic and Category and the fine tuned model will follow it.</p>
                <div className="bg-sky-200 shadow-lg rounded-lg p-8 mb-4">
                    <p>
                    Respect for those who grind all day and night to get what they want. <br/>

Respect for those who put in the work to make their dreams a reality. <br/>

Respect for those who know that they can’t just sit back and wait for things to come to them.<br/>

Respect for those who know that life… https://t.co/7hP6fjgFq6
                    </p>
                </div>
                <div className="bg-sky-200 shadow-lg rounded-lg p-8 mb-4">
                    <p>The only difference between a good player and a great player is consistency. https://t.co/9W3h9i6y5A</p>
                </div>
                <div className="bg-sky-200 shadow-lg rounded-lg p-8 mb-4">
                    <p>The Harvard Study of Adult Development is the longest-running study of adult life ever conducted. For 82 years, it has tracked the lives of 724 men, year after year, asking about their work, their home lives, their health, and of course, asking all along the way… https://t.co/8xuZVvX3yA</p>
                </div>
                <p className={css.postContent}>Concluding thoughts: I thought this experiment worked out pretty OK. With 140 characters it could roughly match the tone of the original author (but not quite). It also kept making up media links, which I suppose we could chain a model to do. Promising though!</p>
                
            </div>

        </>
    )
}
