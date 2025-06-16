# MetaTask

A decentralized freelancing platform powered by blockchain and AI.

## Tech Stack

- **Blockchain:** Ethereum/Solana/Polygon
- **AI:** Hugging Face (DistilBERT/GPT-2)
- **Frontend:** Next.js, Tailwind CSS
- **Backend:** GraphQL (Apollo)
- **Authentication & Real-time DB:** Supabase/Firebase
- **Messaging:** Socket.io
- **Payments:** Crypto wallets integration

## Project Structure

```
metatask/
├── apps/
│   ├── web/             # Next.js frontend
│   ├── api/             # GraphQL API server
│   ├── ai-service/      # AI service for matching and credibility scoring
│   └── blockchain/      # Smart contracts and blockchain integration
└── packages/
    ├── ui/              # Shared UI components
    ├── utils/           # Shared utilities
    └── types/           # Shared TypeScript types
```

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 8.6.0

### Installation

```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

## Development

```bash
# Build all packages and applications
pnpm build

# Run linting
pnpm lint

# Format code
pnpm format
```

## License

[MIT](LICENSE) 