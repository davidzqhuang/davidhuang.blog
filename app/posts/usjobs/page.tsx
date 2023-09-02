// @ts-nocheck 
/* eslint-disable */

'use client'


import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import css from "../../../styles/Post.module.css";
import * as U from "../../../components/Utils";

type graphData = {
    nodes: {
        id: string;
    }[];
    links: {
        source: string;
        target: string;
    }[];
};

import data from "./data.json";
import Head from 'next/head';

export default function Post() {
    const svgRef = useRef(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);

        const width = window.innerWidth - 100;
        const height = window.innerHeight - 100;

        // Clear SVG
        svg.selectAll('*').remove();

        const container = svg.append('g');
    }, [data]);

    return (
        <div>
            <Head>
                <title>Jobs in the United States, Visualized</title>
            </Head>
            <U.HomeButton />
            <div className={css.postContainer}>
                <h1 className={css.postTitle}>Jobs in the United States, Visualized</h1>
                <svg ref={svgRef} width="800" height="600"></svg>
            </div>
        </div>
    );
}
