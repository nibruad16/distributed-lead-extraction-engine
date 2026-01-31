# B2B Lead Engine

This is a distributed B2B data extraction engine built with:

*   **apps/web**: Next.js (Dashboard & UI)
*   **apps/api**: NestJS (Backend Logic)
*   **apps/worker**: Python (Automation Engine with Playwright & Redis)

## Getting Started

### Prerequisites

*   Node.js
*   Python 3.9+
*   Docker & Docker Compose

### Layout

```
b2b-lead-engine/
├── apps/
│   ├── web/                 # (Next.js) The Dashboard & UI
│   │   ├── app/             # App Router (Pages)
│   │   ├── components/      # UI Components (PS C:\Users\nibru\Documents\Dev\Dev\AI Agent and Automations\Distributed B2B Data Extraction Engine\apps\worker> docker-compose up
#1 [internal] load local bake definitions
#1 reading from stdin 693B done
#1 DONE 0.0s
[+] up 0/1
 - Image apps-worker Building                                                                                                          0.6s 
unable to prepare context: path "C:\\Users\\nibru\\Documents\\Dev\\Dev\\AI Agent and Automations\\Distributed B2B Data Extraction Engine\\apps\\apps\\worker" not found

PS C:\Users\nibru\Documents\Dev\Dev\AI Agent and Automations\Distributed B2B Data Extraction Engine\apps\worker> 
PS C:\Users\nibru\Documents\Dev\Dev\AI Agent and Automations\Distributed B2B Data Extraction Engine\apps\worker> Buttons, Tables)
│   │   └── lib/             # API Clients
│   │
│   ├── api/                 # (NestJS) The Backend Logic
│   │   ├── src/
│   │   │   ├── auth/        # Authentication Logic
│   │   │   ├── leads/       # Lead Management (CRUD)
│   │   │   └── queue/       # Redis Producers
│   │
│   └── worker/              # (Python) The Automation Engine
│       ├── scraper/         # Playwright Logic
│       ├── main.py          # Redis Consumer
│       └── Dockerfile       # Worker Container Config
│
├── docker-compose.yml       # Orchestrates Redis, Postgres, & Worker
├── README.md                # Documentation
└── .gitignore               # Ignored files
```

### Running

Use `docker-compose up` to start the infrastructure.
Currently requires setting up `.env` files in each app.
