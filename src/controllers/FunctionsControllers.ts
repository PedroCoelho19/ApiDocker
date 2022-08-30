import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { Request, Response } from 'express'

dotenv.config()
class FunctionControllers {
    async sendEmail (req: Request, res: Response){
        try {
            let trasporter = nodemailer.createTransport({
                host:"smtp.gmail.com",
                port: 587, 
                secure: true,
                auth:{
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                } 
            })

            trasporter.sendMail({
                from: `Pedro Coelho <${process.env.EMAIL}>`,
                to: "pedrocoelho210@gmail.com",
                subject: "Tesantando envio de email com nodemailer",
                text: "testando a bibliotexa nodemailer",
                html: "testando o html do nodemailer <a href ='https://github.com/PedroCoelho19'>GitHub</a>"
            })

            return res.status(200).send("Email enviado")
        } catch (error) {
            return res.status(200).send("Erro no servido")
        }
    }   
}

export default new FunctionControllers()