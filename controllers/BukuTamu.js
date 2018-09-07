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
                sgMail.setApiKey(process.env.SENDGRID_KEY)
                const msg = {
                    to: ['info@kemodijakarta.com','alangmahendra@gmail.com'],
                    from: 'kontakform@kemodijakarta.com',
                    subject: 'SESEORANG MENGIRIM PESAN DARI KONTAK KEMODIJAKARTA',
                    text: 'SESEORANG MENGIRIM PESAN LEWAT FORM KONTAK KEMODIJAKARTA',
                    html:`<div>
                    <table border>
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
                sgMail.send(msg).then((rows) => {
                    console.log(rows)
                    res.status(200).json({ message: "email terkirim"})
                }).catch((error) => {
                    console.log(error)
                    res.status(500).json({ message: error })
                })
            }else{
                conslole.log(err)
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