import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net"

export const app: Express = express()

app.use(express.json())
app.use(cors())


const server = app.listen(process.env.PORT || 3003, () =>{
    if (server){
        const adress = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${adress.port}`);
    }else{
        console.error(`Failure upon starting server.`)
    }
})


