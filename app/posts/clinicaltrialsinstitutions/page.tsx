// @ts-nocheck 
/* eslint-disable */

'use client'


import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import css from "../../../styles/Post.module.css";
import * as U from "../../../components/Utils";

type countsData = {
    Institution: string,
    Count: number
}[]

import data from "./data.json";
import Head from 'next/head';

data as countsData;

function wrapText(string, width, height) {
    const factor = 0.65;
    const fontSize = Math.sqrt((width - 4) * (height - 4) / string.length) * factor;

    const lines = [];
    let line = '';
    let lineWidth = 0;
    const words = string.split(' ');

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const wordWidth = word.length * fontSize * factor;

        if (lineWidth + wordWidth <= width) {
            line += word + ' ';
            lineWidth += wordWidth;
        } else if (lineWidth == 0) {
            line += word.slice(0, Math.floor((width - lineWidth) / (fontSize * factor))) + '-';
            lines.push(line);
            line = word.slice(Math.floor((width - lineWidth) / (fontSize * factor))) + ' ';
            lineWidth = wordWidth - Math.floor((width - lineWidth) / (fontSize * factor)) * fontSize * factor;
        } else {
            lines.push(line);
            line = word + ' ';
            lineWidth = wordWidth;
        }
    }

    lines.push(line);

    const result = {
        fontSize: fontSize,
        lines: lines
    }
    console.log(result);
    return result;
}

export default function Post() {
    const svgRef = useRef(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);
        const width = 600;
        const height = 600;

        svg.attr("width", width).attr("height", height);

        // Clear SVG
        svg.selectAll('*').remove();

        const root = d3.hierarchy({ children: data.filter(d => d.Count > 60) })
            .sum(d => d.Count ** 2);

        const pack = d3.pack()
            .size([width, height])
            .padding(3);

        const nodes = pack(root).leaves();

        let colorScale = d3.scaleSequential()
            .domain([0, d3.max(nodes, function (d) { return d.r; })]) // Set the domain to the range of radius values in your data
            .interpolator(d3.interpolateBlues); // You can use different interpolators like d3.interpolateReds, d3.interpolateGreens etc.

        svg.selectAll('circle')
            .data(nodes)
            .enter()
            .append('circle')
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('r', d => d.r)
            .attr('fill', d => colorScale(d.r));

        svg.selectAll('text')
            .data(nodes)
            .enter()
            .append('text')
            .filter(d => Math.sqrt((d.r ** 2) * Math.PI) > 50) // Filter by circle area
            .attr('x', d => d.x)
            .attr('y', d => d.y - d.r / 4)
            .attr('text-anchor', 'middle')
            .attr('font-size', d => wrapText(d.data.Institution, d.r * 2, d.r * 2).fontSize)
            .attr('dominant-baseline', 'central')
            .each(function (d) {
                const lines = wrapText(d.data.Institution, d.r * 2, d.r * 2).lines;
                for (let i = 0; i < lines.length; i++) {
                    d3.select(this)
                        .append('tspan')
                        .attr('x', d.x)
                        .attr('dy', i ? '1.2em' : 0)
                        .text(lines[i]);
                }
            });

    }, [data]);

    return (
        <div>
            <Head>
                <title>Institutions Conducting Clinical Trials in 2023, by number of times listed in clinicaltrials.gov</title>
            </Head>
            <U.HomeButton />
            <div className="p-4 max-w-2xl" style={{
                width: "100vh",
                height: "100vh"
            }}>
                <h1 className={css.postTitle}>Institutions Conducting Clinical Trials in 2023, by number of times listed in clinicaltrials.gov</h1>
                <svg ref={svgRef} width="100%" height="100%"></svg>
                <p className="justify-right text-right">davidhuang.blog/posts/clinicaltrialsinstitutions</p>
            </div>
        </div>
    );
}
