import { render , screen} from "@testing-library/react";
import React from "react";
import {jest} from '@jest-global'
import {describe} from 'node:test'
import { MemoryRouter } from "react-router";
import App from "../../src/App";

describe ( 'funcion App', ()=>{
it ('que renderize correctamente' , ()=>{
    const app = render(<App/> , {wrapper: MemoryRouter} ) ;
    expect(app).toBeDefined();
    
})

})