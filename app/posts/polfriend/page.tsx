'use client'

import { useChat, Message } from 'ai/react'
import { ChatRequest, FunctionCallHandler, nanoid } from 'ai'

import refData from './data.json'

import { useEffect, useRef } from 'react'

import css from "../../../styles/Post.module.css";
import * as U from "../../../components/PostUtils";


console.log(refData)

type RefData = {
    political_typology_definitions: string,
    instructions: string
}

let refDataTyped = refData as unknown as RefData

import * as d3 from 'd3';

function PoliticalAlignmentChart({ data } : { data: { [key: string]: string } }) {
    // Ref to attach the chart to the DOM element
    const chartRef = useRef(null);

    useEffect(() => {
        // Parse data and convert to an array of objects
        const chartData = Object.entries(data).map(([label, value]) => ({
            label,
            value: +value, // Convert to number
        }));

        // Set up dimensions for the chart
        const margin = { top: 20, right: 30, bottom: 40, left: 40 };
        const width = 600 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        // Create scales
        const xScale = d3
            .scaleBand()
            .domain(chartData.map((d) => d.label))
            .range([0, width])
            .padding(0.1);

        const yScale = d3
            .scaleLinear()
            //eslint-disable-next-line
            .domain([0, d3.max(chartData, (d) => d.value) as number])
            .nice()
            .range([height, 0]);

        // erase previous chart
        d3.select(chartRef.current).selectAll("*").remove();

        // Create SVG container
        const svg = d3
            .select(chartRef.current)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Create bars
        svg.selectAll('.bar')
            .data(chartData)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', (d) => xScale(d.label) as number)
            .attr('y', (d) => yScale(d.value))
            .attr('width', xScale.bandwidth())
            .attr('height', (d) => height - yScale(d.value));

        // Add x-axis
        svg
            .append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(xScale))
            .selectAll('text') // Select all x-axis labels
            .style('text-anchor', 'end') // Set text-anchor to end
            .attr('transform', 'rotate(-15) translate(30, 10)') // Rotate the labels
            .attr('font-size', '8px')

        // Add y-axis
        svg
            .append('g')
            .attr('class', 'y-axis')
            .call(d3.axisLeft(yScale));

    }, [data]);

    return (
        <div>
            <h1>Political Alignment Chart</h1>
            <div ref={chartRef}></div>
        </div>
    );
}


export default function Chat() {
    const functionCallHandler: FunctionCallHandler = async (
        chatMessages,
        functionCall
    ) => {
        console.log("Handling function call", functionCall)
        if (functionCall.name === 'Give_Political_Alignment') {
            // Call a weather API here
            const args = JSON.parse(functionCall.arguments)
            const alignmentData = {
                FaithAndFlagConservatives: JSON.stringify(args.FaithAndFlagConservatives),
                CommittedConservatives: JSON.stringify(args.CommittedConservatives),
                PopulistRight: JSON.stringify(args.PopulistRight),
                AmbivalentRight: JSON.stringify(args.AmbivalentRight),
                StressedSideliners: JSON.stringify(args.StressedSideliners),
                OutsiderLeft: JSON.stringify(args.OutsiderLeft),
                DemocraticMainstays: JSON.stringify(args.DemocraticMainstays),
                EstablishmentLiberals: JSON.stringify(args.EstablishmentLiberals),
                ProgressiveLeft: JSON.stringify(args.ProgressiveLeft)
            }
            const functionResponse = {
                messages: [
                    ...chatMessages,
                    {
                        id: nanoid(),
                        name: 'Give_Political_Alignment',
                        role: 'function' as const,
                        content: JSON.stringify(alignmentData)
                    }
                ]
            }
            console.log("Returning function response", functionResponse)
            return functionResponse
        }
    }


    const { messages, input, handleInputChange, handleSubmit, data } = useChat({
        api: '/api/polfriendchat',
        experimental_onFunctionCall: functionCallHandler,
        initialMessages: [
            {
                id: "1",
                role: 'system',
                content: 'You are a nice friend. You are infinitely patient, but slightly disagreeable. You will push the conversation forward, but you will not be rude. You are very self-aware and will not say anything that reflects poorly on you. But, you will also not be afraid to engage with the user and listen to their problematic or offensive views. Do not reference any specific political jargon or terms or labels in your conversation with the user. Instead of labeling the user as being a part of a specific group, talk about how their views are aligned or not aligned. Only talk about specific policies, values, issues, and beliefs.'
            },
            {
                id: "2",
                name: 'pew_research_political_typology',
                role: 'function',
                content: refDataTyped.political_typology_definitions
            },
            {
                id: "3",
                name: 'get_instructions',
                role: 'function',
                content: refDataTyped.instructions
            },
            {
                id: "4",
                role: "assistant",
                content: "I'd like to get know your politics if that's okay. I'm going to ask you a few rapid fire questions, and then I'll give your political alignment, and how people like you may think about important political issues.\n\n Of course, I'm happy to talk politics more generally too.\n\n Sounds good?"
            }
        ],
    })
    console.log(messages)
    return (
        <div className={css.postContainer}>
            <U.HomeButton />
            <h1 className={css.postTitle}>Talking Politics with AI</h1>
            <p className={css.postSubTitle} style={{fontStyle: 'italic'}}>The AI is GPT-3.5. It's notion of politics come from the <a href="https://www.pewresearch.org/politics/2021/11/09/beyond-red-vs-blue-the-political-typology-2/" className={css.a}>Pew Research Center's Political Typology report in 2021</a>. This is not affiliated with the Pew at all, information may be inaccurate. The objective is for the user to be able to talk about politics, work with the AI to create a clear statement of their political beliefs in the context of current United States politics, and discover similar and different clusters of political thought to their own.</p>
            <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch p-4 border border-neutral-200 m-4">
                {messages.length > 0
                    ? messages.slice(3).map((m) => (
                        m.role === 'user' || m.role === 'assistant' ? (
                            <div
                                key={m.id}
                                className={`whitespace-pre-wrap mt-4 ${m.role === 'user' ? 'user-message' : 'ai-message'
                                    }`}
                            >
                                {m.role === 'user' ? 'You: ' : 'Al: '}
                                {m.content}
                            </div>
                        ) : (
                            m.name === 'Give_Political_Alignment' ? (
                                <div key={m.id}>
                                    <PoliticalAlignmentChart key={m.id} data={JSON.parse(m.content)} />
                                </div>
                            ) : (
                                null
                            )
                        )
                    ))
                    : null}

                <form onSubmit={handleSubmit}>
                    <input
                        className="mt-20 bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
                        value={input}
                        placeholder="Say something..."
                        onChange={handleInputChange}
                    />
                </form>

                {/* Add CSS for message colors */}
                <style jsx>{`
        .user-message {
          color: #4D0F87; /* User message color */,
          padding: 0.5rem 1rem;
        }

        .ai-message {
          color: #83870F; /* AI message color */,
        }
      `}</style>
            </div>
        </div>
    )
}
