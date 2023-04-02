import { BASE_URL } from "./constant"

export const plantTree = async (treeId:number): Promise<void> => {
    const Res = await fetch(`${ BASE_URL }/api/trees`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        credentials: 'include'
        },
        body: JSON.stringify(treeId)
    })
    console.log(Res)
}