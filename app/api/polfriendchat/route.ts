import {
    OpenAIStream,
    StreamingTextResponse,
    experimental_StreamData
  } from 'ai'
  import OpenAI from 'openai'
  import { CompletionCreateParams } from 'openai/resources/chat'
  // Create an OpenAI API client (that's edge friendly!)
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || ''
  })
  
  // IMPORTANT! Set the runtime to edge
  export const runtime = 'edge'
  
  const functions: CompletionCreateParams.Function[] = [
    {
      name: 'Give_Political_Alignment',
      description: "Rate the user's alignment to each of the nine political typologies, from 1-10 where 10 is extremely aligned and 1 is not very aligned. The closest aligned typology should have a score of between 9-10 and the least aligned typology should have a score of between 1-2.",
      parameters: {
        "type": "object",
        "properties": {
          "FaithAndFlagConservatives": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10
          },
          "CommittedConservatives": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10
          },
          "PopulistRight": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10
          },
          "AmbivalentRight": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10
          },
          "StressedSideliners": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10
          },
          "OutsiderLeft": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10
          },
          "DemocraticMainstays": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10
          },
          "EstablishmentLiberals": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10
          },
          "ProgressiveLeft": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10
          }
        },
        "required": [
          "FaithAndFlagConservatives",
          "CommittedConservatives",
          "PopulistRight",
          "AmbivalentRight",
          "StressedSideliners",
          "OutsiderLeft",
          "DemocraticMainstays",
          "EstablishmentLiberals",
          "ProgressiveLeft"
        ]
      }
    }
  ]
  
  export async function POST(req: Request) {
    const { messages } = await req.json()
  
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-16k',
      stream: true,
      messages,
      functions
    })
  
    const data = new experimental_StreamData()
    const stream = OpenAIStream(response, {
      experimental_onFunctionCall: async (
        { name, arguments: args },
        createFunctionCallMessages
      ) => {
        
      },
      onCompletion(completion) {
        console.log('completion', completion)
      },
      onFinal(completion) {
        data.close()
      },
      experimental_streamData: true
    })
  
    return new StreamingTextResponse(stream, {}, data)
  }