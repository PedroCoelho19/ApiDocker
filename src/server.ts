import express from 'express'
import {router} from '../src/Routes/FunctionsRoutes'

const app = express();
app.use(express.json())


app.use(router)


app.listen(3333, () => 'server running on port 3333')