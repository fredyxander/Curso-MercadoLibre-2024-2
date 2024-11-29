import { Button } from "../Button";
import {fireEvent, render} from "@testing-library/react";

import '@testing-library/jest-dom'; //Esta fue la linea agregada: Esto proporciona las utilidades como toHaveTextContent.

describe("Prueba del componente <Button>" , ()=>{
    test("Debe renderizar el boton correctamente", ()=>{
        const mockHandleClick = jest.fn();
        const { getByText, getByTestId, queryByTestId } = render(<Button text="Enviar" handleClick={mockHandleClick}/>)
        // const boton = getByText('Enviar');
        const boton = getByTestId('boton-datos');
        //tip: verificacion del elemento
        // expect(boton).toBeNull();
        const parrafo = getByTestId('valor-meli');
        // expect(parrafo).toBeNull();

        //interactuar con el boton
        fireEvent.click(boton);

        // expect(parrafo).toBeNull();
        expect(parrafo).toHaveTextContent('valor actualizado');
    });

    test("Click en el boton correctamente", ()=>{
        const mockHandleClick = jest.fn();
        mockHandleClick.mockReturnValue(['a', 'b','c']);
        const { getByText, getByTestId, queryByTestId } = render(<Button text="Enviar" handleClick={mockHandleClick}/>)
        // const boton = getByText('Enviar');
        const boton = getByTestId('boton-enviar');

        //interactuar con el boton
        fireEvent.click(boton);
        expect(mockHandleClick).toHaveBeenCalled();
        expect(mockHandleClick).toHaveReturnedWith(['a', 'b','c']);
    });
})