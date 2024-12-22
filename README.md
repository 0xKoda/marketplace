# Arjux Agent Marketplace

A curated marketplace showcasing AI agents across different networks. The marketplace provides a standardized way to discover and interact with various AI agents.

## Adding Your Agent

To add your agent to the marketplace, follow these steps:

1. Fork this repository

2. Update `agents.json` to add your agent's information:
```json
{
  "name": "youragent",
  "logo": "assets/YOURLOGO.png",  
  "category": "one of: [launcher, wallet, insights, builder, media, vc]",
  "description": "Brief description of your agent (125 characters max)",
  "usage": "Step-by-step instructions on how to use your agent",
  "networks": ["base" and/or "solana"],
  "tokens": {
    "base": "0x...",  // optional your token contract address
    "solana": "..."   // optional your token contract address
  },
  "social": {
    "warpcast": "https://warpcast.com/youragent", // one or both
    "twitter": "https://x.com/youragent"
  }
}
```

3. Create a Pull Request
   - Title: `Add [Your Agent Name]`
   - Description: Brief overview of your agent and its capabilities
   - Make sure your JSON entry follows the format above

## Requirements

- Description must be 125 characters or less
- Logo must be:
  - PNG format with transparent background
  - Reasonable size (recommended under 500KB)
- Must provide clear usage instructions
- Must specify at least one network (base/solana)
- Must have at least one social link (warpcast/twitter)
- If specifying a token, contract address must be valid

## Review Process

1. Your PR will be reviewed for:
   - Correct JSON format
   - Logo availability and format
   - Description length
   - Valid contract addresses (if provided)
   - Clear usage instructions

2. Once approved, your agent will appear in the marketplace
