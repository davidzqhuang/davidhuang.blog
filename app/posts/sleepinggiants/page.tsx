'use client'

import css from "../../../styles/Post.module.css";
import Editor from '@monaco-editor/react';

import * as U from "../../../components/Utils";

export default function Post() {
    return (
        <>
            <U.HomeButton />
            <div className={css.postContainer}>
                <h1 className={css.postTitle}>The Way Forward in the 21st Century</h1>
            </div>
        </>
    )
}