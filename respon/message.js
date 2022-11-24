exports.wait = () =>{
return `⏳ Mohon tunggu sebentar`
}

exports.error = () =>{
return `❎ Error !!`
}

exports.done = () =>{
return `✅ Done`
}

exports.noAdmin = () =>{
return `Kamu bukan admin !!`
}

exports.botAdmin = () => {
return `Bot Bukan Admin !!`
}

exports.group = () => {
return `Perintah Ini Hanya Bisa Digunakan Di Group !!`
}

exports.owner = () =>{
return `Perintah Ini Hanya Bisa Digunakan Oleh Owner !!`
}

exports.chat = () =>{
return `Perintah Ini Hanya Bisa Digunakan Di Private Chat !!`
}

exports.admin = () =>{
return `Perintah Ini Hanya Bisa Digunakan Oleh Admin Grup`
}

exports.premium = () =>{
return `Akses Premium Diperlukan Untuk Fitur Ini`
}

exports.daftar = () =>{
return `Silahkan Verifikasi Terlebih Dahulu Sebelum Memakai Fitur Bot`
}

exports.linkAdmin = () =>{
return `Untung Admin 🗿`
}

exports.linkGc = () =>{
return `Nice 🗿`
}

exports.chatOwner = () =>{
return `Itu ownerku bukan nomer robot, Owner hanya menjawab seputar *Arulbot.* Utamakan chat to the point`
}

exports.errorFitur = () =>{
return `Hallo Owner, Sepertinya Ada Fitur Yang Error`
}

exports.noTeks = () =>{
return `Masukkan Teks !! `
}

exports.noLink = () =>{
return `Masukkan Link`
}

exports.noQuery = () =>{
return `Masukkan Query`
}

exports.menuu = (ucapanWaktu, sender, itu_mark, runtime, usernya, premnya, roomnya) =>{
return `${ucapanWaktu} @${sender.split('@')[0]}

╭─〔  BOT INFO  〕─⬡
│◦ Library : Baileys-MD
│◦ Owner : @${itu_mark.split('@')[0]}
│◦ Runtime : ${runtime(process.uptime())}
│◦ Terdaftar : ${usernya}
│◦ Premium : ${premnya}
│◦ Room Chat : ${romnya}
╰─────────┈ `
}

wait, error, done, noAdmin, botAdmin, group, owner, chat, admin, premium, daftar, linkAdmin, linkGc, chatOwner, errorFitur, noTeks, noLink, noQuery, menuu, 