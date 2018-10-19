const ModelEmail = require("../models/EmailServices");
const ModelAkomodasi = require("../models/Akomodasi");
const ModelUser = require("../models/User");

const sgMail = require("@sendgrid/mail");
require("dotenv").config();

class EmailServices {
  static send(req, res) {
    sgMail.setApiKey(process.env.SENDGRID_KEY);
    const data = req.body;

    const apagitu = (
      kamarMandiDalam,
      Tv,
      wifi,
      perawat,
      alkes,
      edukasi,
      kunjungan,
      konseling
    ) => {
      let fasilitasStr = [];
      if (kamarMandiDalam === true) {
        fasilitasStr.push("Kamar Mandi Dalam");
      }
      if (Tv === true) {
        fasilitasStr.push("Tv");
      }
      if (wifi === true) {
        fasilitasStr.push("wifi");
      }
      if (perawat === true) {
        fasilitasStr.push("perawat 24 Jam");
      }
      if (alkes === true) {
        fasilitasStr.push("Alat Kesehatan");
      }
      if (edukasi === true) {
        fasilitasStr.push("Edukasi Kanker");
      }
      if (kunjungan === true) {
        fasilitasStr.push("Kunjungan Keluarga");
      }
      if (konseling === true) {
        fasilitasStr.push("Konseling/Siraman Rohani");
      }
      return fasilitasStr.join(", ");
    };

    const apasih = lainLain => {
      if (lainLain !== undefined) {
        return lainLain;
      } else {
        return "tidak ada";
      }
    };

    const msg = {
      to: ["info@kemodijakarta.com","sigitsetiadi@gmail.com","alangmahendra@gmail.com"],
      from: "userform@kemodijakarta.com",
      subject: `[DAFTAR] - ${data.values.namaDepan}`,
      text: "SESEORANG MENDAFTAR DI FORM KEMODIJAKARTA",
      html: `<div>
            <table border="1">
            <thead>
                <tr>
                    <th colspan="2">
                        <center>Biodata Klien</center>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nama Depan</td>
                    <td>${data.values.namaDepan}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Nama Belakang</td>
                    <td>${data.values.namaBelakang}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Tanggal Lahir</td>
                    <td>${data.values.tglLahir}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Email</td>
                    <td>${data.values.email}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Agama</td>
                    <td>${data.values.agama}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Aliran</td>
                    <td>${data.values.aliran}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Jenis Kelamin</td>
                    <td>${data.values.sex}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Alamat</td>
                    <td>${data.values.alamat}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Alamat2</td>
                    <td>${data.values.alamat2}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Nomor Kontak/Hp</td>
                    <td>${data.values.noTelp}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Asuransi</td>
                    <td>${data.values.Asuransi}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Nama Dari Kontak Darurat</td>
                    <td>${data.values.namaContactDarurat}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Hubungan Kekerabatan dengan ${
                      data.values.namaContactDarurat
                    }</td>
                    <td>${data.values.hubungan}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Nomor Kontak Darurat (${
                      data.values.namaContactDarurat
                    }) </td>
                    <td>${data.values.noTelpDarurat}</td>
                </tr>
            </tbody>
        </table>
        <br/>
        <div>
        <table border="1">
        <thead>
            <tr>
                <th colspan="2">
                    <center>Kondisi Kesehatan Klien</center>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Jenis Kanker</td>
                <td>${data.values.jenisKanker}</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>Stadium</td>
                <td>${data.values.stadium}</td>
            </tr>
        </tbody>
    </table>
        </div>
        <br/>
        <div>
        <table border="1">
        <thead>
            <tr>
                <th colspan="2">
                    <center>Fasilitas Perjalanan</center>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Jenis Penginapan</td>
                <td>${data.values.homestay}</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>Fasilitas</td>
                <td>
                ${apagitu(
                  data.values.kamarMandiDalam,
                  data.values.Tv,
                  data.values.wifi,
                  data.values.perawat,
                  data.values.alkes,
                  data.values.edukasi,
                  data.values.kunjungan,
                  data.values.konseling
                )}
                </td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>Kebutuhan Lain</td>
                <td>${apasih(data.values.lainLain)}</td>
            </tr>
        </tbody>
    </table>
    <br/>
    <div>
    <table border="1">
        <thead>
            <tr>
                <th colspan="2">
                    <center>Budget Perjalanan Medis</center>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Lama Terapi Dalam Hari</td>
                <td>${data.values.jadwalTreatment}</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>Tanggal Mulai Terapi</td>
                <td>${data.values.tanggalMulai}</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>Tanggal Selesai Terapi </td>
                <td>${data.values.tanggalSelesai}</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>Kota Asal</td>
                <td>${data.values.asalKota}</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>Metode Kedatangan Ke Jakarta</td>
                <td>${data.values.datangDengan}</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>Rumah Sakit Tempat Terapi</td>
                <td>${data.values.rumahSakit}</td>
            </tr>
        </tbody>
        <tbody>
        <tr>
            <td>Jenis Brosur</td>
            <td>Rp.${data.values.brosur}</td>
        </tr>
    </tbody>
    <tbody>
    <tr>
        <td>Kode Brosur</td>
        <td>Rp.${data.values.kodeBrosur}</td>
    </tr>
</tbody>
        <tbody>
            <tr>
                <td>Budget (Dalam Juta)</td>
                <td>Rp.${data.values.budget}</td>
            </tr>
        </tbody>
    </table>
    </div>
        </div>
            </div>`
    };
    sgMail
      .send(msg)
      .then(gotcha => {
        res.status(200).json({ message: "email terkirim" });
      })
      .catch(error => {
        console.log;
        res.status(500).json({ message: "error" });
      });
  }
}

module.exports = EmailServices;
