# AI CRM Voice Agent

An intelligent voice agent that automates customer outreach for CRM teams. It proactively calls customers who rated products low or recently tried a new SKU, conducts natural conversations, and generates structured analysis summaries.

## Overview

Traditional CRM follow-ups are manual, slow, and inconsistent. The AI CRM Voice Agent automates this entire workflow -- from identifying which customers to call, to conducting the conversation, to summarising the findings in your CRM.

## Features

- **Automated Call Queue** -- Intelligently prioritises customers based on rating scores, SKU trials, and purchase history
- **Natural Voice Conversations** -- AI agent conducts human-like phone calls using advanced speech synthesis and understanding
- **Real-time Sentiment Analysis** -- Live sentiment tracking during calls to adapt conversation flow
- **Live Transcription** -- Full call transcripts with speaker identification
- **AI Analysis Summaries** -- Automatic extraction of key themes, recommendations, and action items
- **CRM Integration** -- Push call summaries, sentiment scores, and action items directly to your CRM (Salesforce, HubSpot, etc.)
- **Campaign Management** -- Create and manage outreach campaigns targeting specific customer segments

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Backend | Python, FastAPI |
| Voice Engine | Twilio Voice API |
| Speech-to-Text | OpenAI Whisper |
| LLM Orchestration | LangChain |
| Text-to-Speech | ElevenLabs |
| Frontend Dashboard | React, Tailwind CSS |
| Database | PostgreSQL |
| Queue System | Redis + Celery |

## Architecture

```
Customer Phone <-> Twilio <-> FastAPI Server
                                    |
                        +-----------+-----------+
                        |           |           |
                    Whisper     LangChain   ElevenLabs
                   (STT)      (LLM Agent)    (TTS)
                        |           |           |
                        +-----------+-----------+
                                    |
                              PostgreSQL
                                    |
                            CRM Integration
                         (Salesforce / HubSpot)
```

## How It Works

1. **Trigger** -- System identifies customers matching outreach criteria (low ratings, new SKU trials, churn risk)
2. **Queue** -- Customers are added to the call queue with context about why they're being contacted
3. **Call** -- AI agent initiates the call via Twilio, introduces itself, and conducts a natural conversation
4. **Analyse** -- Real-time sentiment analysis and topic extraction during the call
5. **Summarise** -- Post-call, the system generates a structured summary with key themes, recommendations, and action items
6. **Sync** -- Summary and metadata are pushed to the CRM for the sales/support team

## Status

Currently in active development. Dashboard mockup and core voice pipeline are functional.

## License

MIT
