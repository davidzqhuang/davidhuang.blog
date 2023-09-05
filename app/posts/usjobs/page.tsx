// @ts-nocheck 
/* eslint-disable */

'use client'

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import css from "../../../styles/Post.module.css";
import * as U from "../../../components/Utils";
import data from "./data.json";
import Head from 'next/head';

import Link from 'next/link';

function wrapText(selection) {
    selection.each(function () {
        console.log("THIS IS: ", this)
        let maxLength = this.parentNode.__data__.x1 - this.parentNode.__data__.x0 - 10;
        let lineHeight = 18;
        let area = (this.parentNode.__data__.x1 - this.parentNode.__data__.x0) * (this.parentNode.__data__.y1 - this.parentNode.__data__.y0);
        if (area <= 9000) {
            lineHeight = 8;
        }
        let text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            y = parseFloat(text.attr("y")),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null)
                .append("tspan")
                .attr("x", 5)
                .attr("y", y-5)
                .attr("dy", dy + "em");

        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > maxLength) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                console.log("LINE NUMBER IS: ", lineNumber)
                lineNumber += 1;
                tspan = text.append("tspan")
                    .attr("x", 5)
                    .attr("y", y + lineNumber * lineHeight-5)
                    .text(word);
            }
        }
    });
}


export default function Post() {
    const svgRef = useRef(null);
    const width = 800 * 1.5;
    const height = 600 * 1.5;
    const color = d3.scaleSequential([8, 0], d3.interpolateMagma);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const root = d3.hierarchy(data)
            .sum(d => d.value)
            .sort((a, b) => b.value - a.value);

        d3.treemap()
            .size([width, height])
            .padding(6)  // Increase this number for more padding between nodes
            (root);

        const nodes = svg.selectAll("g")
            .data(root.descendants().filter(d => d.value > 28656075500.0))
            .enter().append("g")
            .attr("transform", d => `translate(${d.x0 + d.depth * 6},${d.y0 + d.depth * 6})`);

        nodes.append("rect")
            .attr("width", d => d.x1 - d.x0)
            .attr("height", d => d.y1 - d.y0)
            .attr("fill", d => color(d.depth));

        nodes.append("clipPath")
            .attr("id", (d, i) => "clip" + i)
            .append("rect")
            .attr("width", d => d.x1 - d.x0)
            .attr("height", d => d.y1 - d.y0);

        nodes.append("text")
            .attr("clip-path", (d, i) => "url(#clip" + i + ")")
            .attr("x", 5)
            .attr("y", 20)
            .attr("font-size", d => {
                // Assuming you have an area property for each node
                // Adjust the threshold as needed
                const thresholdArea = 9000; // or whatever value makes sense in your context
                let area = (d.x1 - d.x0) * (d.y1 - d.y0);
                console.log("AREA IS: ", area)
                if (area <= thresholdArea) {
                    return "8px"; // for small nodes
                } else {
                    return "12px"; // for medium nodes
                }
            })
            .attr("font-family", "sans-serif")
            .attr("text-shadow", "2px 2px 3px rgba(0,0,0,0.3)")
            .attr("fill", "#000")
            .text(d => d.children ? "" : d.data.name)
            .call(wrapText);


        nodes.append("text")
            .attr("clip-path", (d, i) => "url(#clip" + i + ")")
            .attr("x", 5)
            .attr("y", 10)
            .attr("font-size", d => 8 + "px")
            .attr("font-weight", "bold")
            .attr("font-family", "sans-serif")
            .attr("text-shadow", "1px 1px 2px rgba(0,0,0,0.3)")  // Add shadow for better readability
            .attr("fill", "#000")
            .text(d => d.children ? d.data.name : "");

    }, [data]);


    return (
        <div>
            <Head>
                <title>Jobs in the United States, Visualized</title>
            </Head>
            <U.HomeButton />
            <div className="m-8 max-w-6xl">
                <h1 className={css.postTitle}>Breakdown in wages by job position in the United States.</h1>
                <p className={css.postContent}>Displayed are the percent of wages in the United States from the specified job title. Job titles are coded by their Standard Occupation Classification or Occupational Employment and Wage Statistics title. </p>
                <svg ref={svgRef} width={width} height={height}></svg>
                <p classname={css.postContent}> I had used the tutorial at <Link className={css.a} href="https://www.datavistrainer.com/posts/beginner-s-guide-to-treemaps-in-d3-js">DataVisTrainer
                </Link></p>
            </div>
        </div>
    );
}
