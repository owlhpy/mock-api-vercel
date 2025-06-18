# Mock API Project (Vercel-compatible)

## Usage

1. Add your schema in `mock-schemas/*.json`
2. Run `node scripts/generateApi.js`
3. Deploy to Vercel

Each schema will be converted into a route at `/api/{filename}`