const Model = require('../models/BukuTamu')
const sgMail = require('@sendgrid/mail')
require('dotenv').config()

class BukuTamu{
    static add(req,res){
        let obj = {
            email:req.body.email,
            nama:req.body.nama,
            pesan:req.body.pesan
        }
        Model.create(obj,(err,rows)=>{
            if(!err){
                const msg = {
                    to: ['info@kemodijakarta.com','alangmahendra@gmail.com'],
                    from: 'kontakform@kemodijakarta.com',
                    subject: 'SEEORANG MENGIRIM PESAN DARI KONTAK KEMODIJAKARTA',
                    text: 'hello world',
                    html:`<div>
                    <table>
                        <thead>
                            <tr>
                                <th colspan="2">PESAN</th>
                            </tr>
                        </thead>
                    </table>
                    <tbody>
                        <tr>
                            <td>Nama</td>
                            <td>${rows.nama}</td>
                        </tr>
                    <tbody>
                    <tbody>
                        <tr>
                            <td>Email</td>
                            <td>${rows.email}</td>
                        </tr>
                    <tbody>
                    <tbody>
                        <tr>
                            <td>pesan</td>
                            <td>${rows.pesan}</td>
                        </tr>
                    <tbody>
                    </div>`
                }
                sgMail.send(msg).then((gotcha) => {
                    res.status(200).json({ message: "email terkirim",data:rows })
                }).catch((error) => {
                    console.log
                    res.status(500).json({ message: 'error' })
                })
            }else{
                res.status(500).json({message:err})
            }
        })
    }

    static findAll(req,res){
        Model.find({},(err,rows)=>{
            if(!err){
                res.status(200).json({message:"all of buku tamu data",data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }
}
module.exports = BukuTamu