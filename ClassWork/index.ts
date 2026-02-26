import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import{OllamaEmbeddings} from "@langchain/ollama";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MemoryVectorStore } from "@langchain/classic/vectorstores/memory";
//load pdf
const loader = new PDFLoader("./nke-10k-2023.pdf");
const docs = await loader.load()

let textsplit =new RecursiveCharacterTextSplitter({ 
    chunkSize: 1000,
    chunkOverlap: 200,
})


let splitts = await textsplit.splitDocuments(docs);

//embeded
let embeddingModel = new OllamaEmbeddings({
  model: "nomic-embed-text:latest",
});

let store = new MemoryVectorStore(embeddingModel);

let result = store.similaritySearch("When was nike found",3);
 console.log(result);
