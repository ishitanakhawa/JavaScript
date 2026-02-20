import { createAgent } from "langchain";
import { ChatOllama } from "@langchain/ollama";
import { TavilySearch } from "@langchain/tavily";

const searchTool = new TavilySearch({
  maxResults: 1,
  topic: "news",
  tavilyApiKey: "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",
});

const ollama = new ChatOllama({
  model: "qwen3:4b",
  temperature: 0.8,
});

const model = createAgent({
  model: ollama,
  tools: [searchTool],
});

const run = async () => {
  try {
    let response = await model.invoke({
      messages: "India vs Pakistan result Feb 15 2026",
    });

    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

run();
