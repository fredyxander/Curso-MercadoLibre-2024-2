import { getData } from "../getData";

describe("funcion fetch", ()=>{
    test("getData devuelve un valor", async()=>{
        const result = await getData();
        console.log("result", result);
        //comprobaciones
        expect(result).toHaveProperty('userId');
        expect(result.userId).toBe(1);
    });
})