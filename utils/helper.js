import { generalTools } from "@/data/content";

async function fetchToolData(url) {
    let tools = []

    generalTools.map((i) => {

        i.tools.map(({ icon, ...j }) => {
             
            tools.push(j)
        
        })
    })
    
    const matchedTool = tools.find(tool => tool.url === url.category && tool.page.url=== url.params  );

    
    if (matchedTool) {

        return matchedTool;

    } else {

        return {
            error: 'Tool not found',
        }
    }
}
async function  fetchCategory(url) {
    let tools = []

    generalTools.map((i) => {
    
        tools.push(i)
    })
    
    const matchedTool = tools.find(t=>t.category==url.category);

    console.log(matchedTool)


    if (matchedTool) {

        return matchedTool;

    } else {

        return {
            error: 'Tool not found',
        }
    }
}





export {

    fetchCategory,fetchToolData


}