let frm = document.getElementById("form");
let jabatan = ["Manager", "Asisten Manager", "Staff"];
let statusnya = ["Sudah Menikah", "Belom Menikah"]
let opsiJabatan =` <option value="">Pilih Jabatan</option>`;
let opsistatus = `<option value="">Pilih Status</option>`;

for (let p in jabatan){
    opsiJabatan +=` <option value="${jabatan[p]}">${jabatan[p]}</option>`
}

for (let l in statusnya){
    opsistatus += `<option value="${statusnya[l]}">${statusnya[l]}</option>`
}

frm.jabatan.innerHTML = opsiJabatan;
frm.status.innerHTML = opsistatus;
function hitung(){
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;
    let gaji_pokok , tunjangan, bpjs, keluarga ,gajibersih

    
    if(jabatan == "Manager"){
        gaji_pokok = 15000000
        tunjangan = 0.15 * gaji_pokok
        bpjs = 0.1 * gaji_pokok
        gajibersih = (gaji_pokok + tunjangan) - bpjs

    }else if(jabatan == "Asisten Manager"){
        gaji_pokok = 10000000
        tunjangan = 0.15 * gaji_pokok
        bpjs = 0.1 * gaji_pokok
        gajibersih = (gaji_pokok + tunjangan) - bpjs

    }else if(jabatan == "Staff"){
        gaji_pokok = 5000000
        tunjangan = 0.15 * gaji_pokok
        bpjs = 0.1 * gaji_pokok
        gajibersih = (gaji_pokok + tunjangan) - bpjs

    }else{
        alert("Di pilih Dulu")
        gaji_pokok = 0
        tunjangan = 0.15 * gaji_pokok
        bpjs = 0.1 * gaji_pokok
        gajibersih = (gaji_pokok + tunjangan) - bpjs
    }


keluarga = (status == "Sudah Menikah") ? 0.2 * gaji_pokok:0
let totalGaji= gajibersih + keluarga
    
let hasil = document.getElementById("hasil");
hasil.innerHTML = `
<table border="1" style="border-collapse: collapse; width: 100%;">
<thead bgcolor="#B5C0D0">
    <tr>
        <th colspan="2">Slip Gaji</th> 
    </tr>
</thead>
<tbody>
    <tr>
        <td>Nama</td>
        <td>${nama}</td>
    </tr>
    <tr>
        <td>Jabatan</td>
        <td>${jabatan}</td>
    </tr>
    <tr>
        <td>Status</td>
        <td>${status}</td>
    </tr>
    <tr>
        <td>Gaji Pokok</td>
        <td>${gaji_pokok.toLocaleString("ID", {style: "currency", currency: "IDR"})}</td>
    </tr>
    <tr>
        <td>Tunjangan</td>
        <td>${tunjangan.toLocaleString("ID", {style: "currency", currency: "IDR"})}</td>
    </tr>
    <tr>
        <td>Nama</td>
        <td> - ${bpjs.toLocaleString("ID", {style: "currency", currency: "IDR"})}</td>
    </tr>
    <tr>
        <td>Tunjangan keluarga</td>
        <td>${keluarga.toLocaleString("ID", {style: "currency", currency: "IDR"})}</td>
    </tr>

</tbody>
<tfoot bgcolor="B5C0D0">
    <tr>
        <td>Gaji bersih</td>
        <td>${totalGaji.toLocaleString("ID", {style: "currency", currency: "IDR"})}</td>
    </tr>
</tfoot>
`

Swal.fire({
    html: `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Slip Gaji</title>
<style>
    h1 {
        display: flex;
        justify-content: center;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        text-align: left;
    }

    tbody tr td{
        border: 2px solid black;
        padding-left: 10px;
    }
    tfoot tr td{
        background-color: #00FF7F;
        border: 2px solid black;
        padding-left: 10px;
    }
    footer p {
        display: flex;
        justify-content: center;
        font-size: 10px;
    }
</style>
</head>
<body>
<fieldset>
    <h1>Slip Gaji</h1>
    <hr>
    <table>
        <thead>
            <tr>
                <td>Nama</td>
                <td>:</td>
                <td>${nama}</td>
            </tr>
            <tr>
                <td>Jabatan</td>
                <td>:</td>
                <td>${jabatan}</td>
            </tr>
            <tr>
                <td>Status</td>
                <td>:</td>
                <td>${status}</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Gaji Pokok</td>
                <td colspan="2">${gaji_pokok.toLocaleString("ID", {style: "currency", currency: "IDR"})}</td>
            </tr>
            <tr>
                <td>Tunjangan Jabatan (15% dari gaji)</td>
                <td colspan="2">${tunjangan.toLocaleString("ID", {style: "currency", currency: "IDR"})}</td>
            </tr>
            <tr>
                <td>Tunjangan Keluarga (20% dari gaji)</td>
                <td colspan="2">${keluarga.toLocaleString("ID", {style: "currency", currency: "IDR"})}</td>
            </tr>
            <tr>
                <td>BPJS (-10% dari gaji)</td>
                <td colspan="2">- ${bpjs.toLocaleString("ID", {style: "currency", currency: "IDR"})}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Jumlah</th>
                <td colspan="2">${totalGaji.toLocaleString("ID", {style: "currency", currency: "IDR"})}</td>
            </tr>
        </tfoot>
    </table>
    <hr>
</fieldset>
<footer>
    <p>copyright &copy; Muhamad Nasir 2024</p>
</footer>
<script src="script.js"></script>
</body>

</html>
<button onclick="Swal.close()">Close</button>
    `,
    
    showCloseButton: false,
    showConfirmButton: false,
    showCancelButton: false,
    allowOutsideClick: false,
  });
}