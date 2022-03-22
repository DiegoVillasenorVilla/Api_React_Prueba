import {render, screen} from "@testing-library/react";
import { MiniCard } from "./MiniCard";

describe("testing MiniCard component", () =>{
    it("test MiniCard component" , () =>{
        const contenedor = render(
            <MiniCard 
            item={{
                name: "Batman",
                biography:{
                    publisher:"Marvel"
                },
                images:{
                    sm:"link"
                },
                appearance:{
                    race:"Human"
                }
            }}/>
        );
        const nombre = screen.getByText(/Batman/i);
        const apariencia = screen.getByText(/Human/i);
        expect(nombre).toBeInTheDocument();
        expect(apariencia).toBeInTheDocument();
        expect(contenedor).toMatchSnapshot();
    } );
} );

