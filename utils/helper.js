import { generalTools } from "@/data/content";

export default function fetchToolData(url) {
    let tools = []

    generalTools.map((i) => {
        i.tools.map(({ icon, ...j }) => {
             
            tools.push(j)
        })
    })
    
    const matchedTool = tools.find(tool => tool.url === url);
    
    if (matchedTool) {

        return matchedTool;
    } else {
        return {
            error: 'Tool not found',
        }
    }
}
