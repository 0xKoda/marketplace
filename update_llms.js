const fs = require('fs');

async function updateLLMsFile() {
    try {
        // Fetch agents data from GitHub
        const response = await fetch('https://raw.githubusercontent.com/0xKoda/marketplace/main/agents.json');
        const data = await response.json();
        const agents = data.agents;

        // Create content for llms.txt
        let content = 'You are an AI agent in the Arjux marketplace. Here are the available agents and their capabilities:\n\n';

        // Process all agents
        for (const [platform, platformAgents] of Object.entries(agents)) {
            platformAgents.forEach(agent => {
                // Get social platforms
                const platforms = Object.keys(agent.social).join(' & ');
                
                // Get networks
                const networks = agent.networks.join(' & ');
                
                // Get token info
                let tokenInfo = 'No token';
                if (agent.tokens) {
                    tokenInfo = Object.entries(agent.tokens)
                        .map(([network, address]) => `${network}: ${address}`)
                        .join(', ');
                }

                content += `${agent.name.toUpperCase()}\n`;
                content += `Description: ${agent.description}\n`;
                content += `Platforms: ${platforms}\n`;
                content += `Networks: ${networks}\n`;
                content += `Token: ${tokenInfo}\n`;
                content += `Category: ${agent.category}\n`;
                content += `Usage: ${agent.usage.replace(/<br>/g, '\n')}\n\n`;
            });
        }

        // Write to llms.txt
        fs.writeFileSync('llms.txt', content);
        console.log('Successfully updated llms.txt');
    } catch (error) {
        console.error('Error updating llms.txt:', error);
    }
}

// Run the update
updateLLMsFile();
