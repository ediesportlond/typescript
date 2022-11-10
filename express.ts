import express, { Request, Response } from 'express'
import cors from 'cors'

const app: any = express()
app.use(cors())
app.use(express.json())
const PORT: number = 3030

app.get('/', (req: Request, res: Response): void => {
    res.send({ message: 'Hello, World!' })
})

app.listen(PORT, (): void => console.log(`Listening on http://localhost:${PORT}`))