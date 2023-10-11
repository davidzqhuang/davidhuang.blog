import css from "../../../styles/Post.module.css";

import * as U from "../../../components/Utils";
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Discovery Notes',
    description: '',
    icons: {
      icon: '/icon.png',
    }
  }

export default function Post() {
    return (
        <>
            <U.HomeButton />

            <div className={css.postContainer}>
                <h1 className={css.postTitle}>Discovery Notes</h1>
                <h2 className={css.postSubtitle}>Surfacing knowledge efficiently and authoritatively.</h2>
                <p className={css.postContent}>I wanted to make an LLM into a community expert on drug discovery and development. It will have a curated database of information, selected by community experts, and will retrieve information from that database to answer questions. Each of it's answers will be fully-sourced and based on vetted information.</p>
                <p className = {css.postContent}>The goal is for the LLM to act as a Librarian, helping the user find documents and resources related to their questions and providing only direct characterizations of the underlying information. The LLM should not provide any of it's own opinions or interpretations.</p>
                <p className = {css.postContent}>The project is currently in the early stages of development and it is open-sourced under an MIT license, including both the code and the underlying data. The project code and data is hosted on GitHub at <a className= {css.a} href="https://github.com/davidzqhuang/discoverynotes">https://github.com/davidzqhuang/discoverynotes</a> , and is deployed at <a className= {css.a} href="https://discoverynotes.davidhuang.blog">https://discoverynotes.davidhuang.blog</a>, though anyone is free to host their own version of the project.</p>
            </div>
        </>
    )
}