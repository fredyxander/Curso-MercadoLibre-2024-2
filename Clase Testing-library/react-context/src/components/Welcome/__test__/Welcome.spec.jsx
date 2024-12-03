import { render } from "@testing-library/react";
import { Welcome } from "../Welcome";

describe("Pruebas <Welcome/>", ()=>{
    test("Snapshot Welcome", ()=>{
        //renderiza el component
        const {asFragment} = render(<Welcome title="Bienvenidos"/>);
        expect(asFragment()).toMatchSnapshot();
    });
})