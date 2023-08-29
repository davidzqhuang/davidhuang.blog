// @ts-nocheck 
/* eslint-disable */

'use client'


import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import css from "../../../styles/Post.module.css";
import * as U from "../../../components/PostUtils";

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

data as graphData;

function wrapText(text, maxLength) {
    const words = text.split(' ');
    const lines = [];
    let line = '';

    words.forEach(word => {
        if (line.length + word.length <= maxLength) {
            line += (line ? ' ' : '') + word;
        } else {
            lines.push(line);
            line = word;
        }
    });

    if (line) lines.push(line);

    return lines;
}

export default function Post() {
    const svgRef = useRef(null);
    const highlightedNode = useRef(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);

        const width = window.innerWidth - 100;
        const height = window.innerHeight - 100;

        // Clear SVG
        svg.selectAll('*').remove();

        const container = svg.append('g');

        // Set up zoom behavior
        const zoom = d3.zoom()
            .scaleExtent([0.5, 5])  // Setting the zoom limits [min, max]
            .on("zoom", (event) => {
                // Applying the zoom transformation to the container
                container.attr("transform", event.transform);
            });

        // Apply the zoom behavior to the SVG
        svg.call(zoom);
        svg.call(zoom.transform, d3.zoomIdentity.translate(0, 0).scale(0.5));

        const trumpNode = data.nodes.find(node => node.id === "Donald Trump");
        if (trumpNode) {
            trumpNode.fx = width / 2;
            trumpNode.fy = height / 2; // or whatever y-position you want for the top center
        }

        // Create force simulation
        const simulation = d3.forceSimulation(data.nodes)
            .force("link", d3.forceLink(data.links).id(d => d.id).distance(100)) // Increase the distance to force nodes apart
            .force("charge", d3.forceManyBody().strength(-1600)) // Increase the magnitude of the negative value to make nodes repel more
            .force("center", d3.forceCenter(width / 2, height / 2));

        // Draw links
        const links = container.append("g")
            .selectAll("line")
            .data(data.links)
            .enter()
            .append("line")
            .attr("stroke", d => {
                console.log("LINK", d)
                if (d.source.type === "person" && d.target.type === "person") {
                    return "darkred"; // Dark grey for lines where both source and target are "person"
                }
                return "gray"; // Default
            })
            .attr("stroke-width", d => {
                if (d.source.type === "person" && d.target.type === "person") {
                    return 3; // Stroke width of 3 for lines where both source and target are "person"
                }
                return 1; // Default
            });


        // Draw nodes
        // Draw nodes
        const nodes = container.append("g")
            .selectAll("circle")
            .data(data.nodes)
            .enter()
            .append("circle")
            .attr("stroke-width", 1)
            .attr("r", d => d.id === "Donald Trump" ? 20 : 5)  // Larger radius for "Donald Trump"
            .attr("fill", d => {
                if (d.id === "Donald Trump") return "orange";
                return d.type === "charge" ? "#616FDB" : "#F06859";
            });

        function clearHighlight() {
            // Reset all nodes and links to their original state
            nodes.attr("stroke", null).attr("stroke-width", 1);
            links.attr("stroke", "gray").attr("stroke-width", 1);

            highlightedNode.current = null;
        }

        function highlightNode(clickedNode) {
            clearHighlight();
            // Reset all nodes and links to their original state
            nodes.attr("stroke", null).attr("stroke-width", null);
            links.attr("stroke", "gray").attr("stroke-width", null);

            // Filter the links connected to the clicked node
            const connectedLinks = data.links.filter(link =>
                link.source.id === clickedNode.id || link.target.id === clickedNode.id
            );

            // Highlight the links
            connectedLinks.forEach(link => {
                d3.select(`line[x1='${link.source.x}'][y1='${link.source.y}'][x2='${link.target.x}'][y2='${link.target.y}']`)
                    .attr("stroke", "blue")
                    .attr("stroke-width", 3);
            });

            // Highlight the connected nodes
            const connectedNodes = connectedLinks.map(link =>
                link.source.id === clickedNode.id ? link.target : link.source
            );

            connectedNodes.forEach(node => {
                d3.select(`circle[cx='${node.x}'][cy='${node.y}']`)
                    .attr("stroke", "blue")
                    .attr("stroke-width", 2);
            });

            highlightedNode.current = clickedNode.id;
        }

        nodes.on("click", (event, d) => {
            if (highlightedNode.current === d.id) {
                clearHighlight();
            } else {
                highlightNode(d);
            }
        });


        // Draw node labels
        const labels = container.append("g")
            .selectAll("text")
            .data(data.nodes)
            .enter()
            .append("text")
            .each(function (d) {
                const lines = wrapText(d.id.split("$")[0], 24);
                const text = d3.select(this);

                lines.forEach((line, index) => {

                    text.append("tspan")
                        .attr("x", d => d.x + 12)
                        .attr("y", d => d.y + (index * (d.type === "person" ? 24 : 16)))
                        .attr("fill", "black")
                        .text(line);
                });
            })
            .attr("font-size", d => d.type === "person" ? 24 : 12)

        simulation.on("tick", () => {
            links
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            nodes
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);

            labels
                .attr("x", d => d.x)
                .attr("y", d => d.y);

            const voronoi = d3.Delaunay
                .from(data.nodes, d => d.x, d => d.y)
                .voronoi([0, 0, width, height]);

            // Update label positions using Voronoi centroids
            labels
                .attr("x", (d, i) => {
                    const cellPolygon = voronoi.cellPolygon(i);
                    if (!cellPolygon) {
                        return d.x; // Default to node position
                    }
                    return cellPolygon.reduce((acc, curr) => acc + curr[0], 0) / cellPolygon.length;
                })
                .attr("y", (d, i) => {
                    const cellPolygon = voronoi.cellPolygon(i);
                    if (!cellPolygon) return d.y; // Default to node position
                    return cellPolygon.reduce((acc, curr) => acc + curr[1], 0) / cellPolygon.length;
                });


            labels.selectAll("tspan")
                .attr("x", function (d) {
                    const parentData = d3.select(this.parentNode).datum();
                    const cellPolygon = voronoi.cellPolygon(parentData.index);

                    if (!cellPolygon) return d.x + 12;  // Default to node position

                    const centroidX = cellPolygon.reduce((acc, curr) => acc + curr[0], 0) / cellPolygon.length;
                    const displacementX = centroidX - parentData.x;

                    // Constraint the magnitude of displacement
                    const adjustedX = Math.abs(displacementX) > 32 ? (parentData.x + Math.sign(displacementX) * 32) : centroidX;
                    return adjustedX;
                })
                .attr("y", function (d, i) {
                    const parentData = d3.select(this.parentNode).datum();
                    const cellPolygon = voronoi.cellPolygon(parentData.index);

                    if (!cellPolygon) return parentData.y + (i * (d.type === "person" ? 40 : 16));  // Default to node position

                    const centroidY = cellPolygon.reduce((acc, curr) => acc + curr[1], 0) / cellPolygon.length;
                    const displacementY = centroidY - parentData.y;

                    // Constraint the magnitude of displacement
                    const adjustedY = Math.abs(displacementY) > 32 ? (parentData.y + Math.sign(displacementY) * 32) : centroidY;
                    return adjustedY + (i * (d.type === "person" ? 24 : 16));
                });
        });

    }, [data]);

    return (
        <div>
            <Head>
                <title>Trump-world Indictments in Fulton County, Visualized</title>
            </Head>
            <U.HomeButton />
            <div className="p-4" style={{
                width: "100vh",
                height: "100vh"
            }}>
                <h1 className={css.postTitle}>Trump-world Indictments in Fulton County, Visualized</h1>
                <p>Charges are shown by blue circles, defendants are shown by blue circles. Trump is the big orange circle. There are thin grey lines connecting defendants with the crimes they are charged with. Individuals who are co-defendants in three or more charges are connected by a thick red line. You can zoom in and out, and youcan select an individual circle to see all co-defendants of a charge, are all charges of a defendant.</p>
                <svg ref={svgRef} width="100%" height="100%"></svg>
            </div>
        </div>
    );
}
