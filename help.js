exports.done = () =>{
return `✅ Done`
} 

exports.wait = () =>{
return `⏳ Mohon tunggu sebentar`
}

exports.error = () =>{
return `❎ Error !!`
}

exports.very = (user_name,sender,res_us,cekUser,db_user) =>{
return `*⬡─〔  VERIFIKASI BERHASIL  〕─⬡*

◦ Nama : ${user_name}
◦ Id : @${sender.split('@')[0]}
◦ Umur : ${cekUser("age", sender)}
◦ User Ke : ${("id", db_user).length}
◦ Seri : ${res_us}`
}

exports.menuu = (ucapanWaktu, sender, itu_mark, runtime, usernya, premnya, romnya) =>{
return `${ucapanWaktu} @${sender.split('@')[0]}

╭─〔  BOT INFO  〕─⬡
│◦ Library : Baileys-MD
│◦ Owner : @${itu_mark.split('@')[0]}
│◦ Runtime : ${runtime(process.uptime())}
│◦ Terdaftar : ${usernya}
│◦ Premium : ${premnya}
╰─────────┈ `
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

exports.daftar = (prefix, pushname) =>{
return `Silahkan Verifikasi Terlebih Dahulu Sebelum Memakai Fitur Bot\n\n◦ Format : ${prefix}daftar _nama_\n◦ Contoh : ${prefix}daftar ${pushname}`
}

exports.linkAdmin = () =>{
return `Untung Admin 🗿`
}

exports.linkGc = () =>{
return `Nice 🗿`
}

exports.chatOwner = (botName) =>{
return `Itu ownerku bukan nomer robot, Owner hanya menjawab seputar *${botName}.* Utamakan chat to the point`
}

exports.errorFitur = () =>{
return `Hallo Owner, Sepertinya Ada Fitur Yang Error`
}

exports.noTeks = () =>{
return `Masukkan Teks !! `
}

exports.noLink = (command) =>{
return `Harap Sertakan Link
Format: .${command} _link_`
}

exports.noQuery = () =>{
return `Masukkan Query`
}

exports.smeme = (prefix,command) =>{
return `Kirim gambar dengan caption ${prefix+command} text_atas+text_bawah atau balas gambar yang sudah dikirim`
}

exports.apakah = (command) =>{
return `Contoh Penggunaan : .${command} <text>\n*.${command}* saya wibu`
}

exports.bagaimanakah = (command) =>{
return `Contoh Penggunaan : .${command} <text>\n*.${command}* cara menjadi wibu`
}

exports.kapanka = () =>{
return `Contoh Penggunaan : .kapankah <text>\n*.kapankah saya menjadi wibu*`
}

exports.bisakah = (prefix,command) =>{
return `Contoh Penggunaan : ${prefix}${command} <emoji1>+<emoji2>\n*${prefix}${command} 😭+😋*`
}

exports.mix2 = (prefix,command) =>{
return `Example : ${prefix + command} 😅`
}

exports.mix = (command) =>{
return `Contoh Penggunaan : ${command} <emoji1+emoji2>\ncontoh : .${command} 😜+😅`
}

exports.noMoji = () =>{
return `Itu Bukan Emoji`
}

exports.nowm1 = (prefix,command) =>{
return `Kirim video/foto dengan caption ${prefix+command} packname|author atau balas video/foto yang sudah dikirim`
}

exports.nowm2 = (prefix,command) =>{
return `Contoh Penggunaan : ${prefix+command} <packname>|<author>\n${prefix+command} gue|wibu`
}

exports.stik = (command) =>{
return `Kirim gambar dengan caption .${command} atau balas gambar yang sudah dikirim`
}

exports.txtMaker = (prefix,command) =>{
return `Contoh Penggunaan : ${prefix+command} <teks>\n*${prefix+command} arul*`
}

exports.mediaf = () =>{
return `Contoh Penggunaan : .mediafire <link>\n*.mediafire https://www.mediafire.com/file/451l493otr6zca4/V4.zip/file*`
}

exports.ytdl = (prefix,command) =>{
return `Contoh Penggunaan : ${prefix+command} <link>\n*${prefix+command} https://youtube.com/watch?v=Kkrryjr5_fU*`
}

exports.footer = () =>{
return `Contoh Penggunaan : .setfooter <teks>\n*.setfooter arulbot*`
}

exports.setli = () =>{
return `Contoh Penggunaan : .setlink <link>\n*.setlink https://github.com/Arulllllllllllll*`
}

exports.setpa = () =>{
return `Contoh Penggunaan : .setpack <packname>|<author>\n*.setpack arul|ganteng*`
}

exports.spcl = (command) =>{
return `Contoh Penggunaan : .${command} <nomornya>\n*.${command} 6289685632587*`
}

exports.logo = (command) =>{
return `Contoh Penggunaan : .${command} <text1>,<text2>\n*.${command} aku,kamu*`
}

exports.jodoh = (prefix,command) =>{
return `Contoh Penggunaan : ${prefix+command} <nama cowo>, <tanggal>, <bulan>, <tahun>, <nama cewe>, <tanggal>, <bulan>, <tahun>\n*${prefix+command} Yanto, 7, 7, 2005, Yanti, 16, 11, 2004*`
}

exports.mimpi = (command) =>{
return `Contoh Penggunaan : .${command} <teks>\n*.${command} makan*`
}

exports.cocoknama = (prefix,command) =>{
return `Contoh Penggunaan : ${prefix+command} <nama>, <tgl lahir>, <bln lahir>, <thn lahir>\n*${prefix+command} yanto, 7, 7, 2005*`
}

exports.cocokps = (prefix,command) =>{
return `Contoh Penggunaan : ${prefix+command} <nama cowo>|<nama cewe>\n*${prefix+command} yanto|yanti*`
}

exports.halah = (prefix,command) =>{
return `Kirim/Reply Text Dengan Caption *${prefix+command}*`
}
exports.usaha = (prefix,command) =>{
return `Contoh Penggunaan : ${prefix+command} <tgl lahir>, <bln lahir>, <thn lahir>\n*${prefix+command} 24, 10, 2005*`
}

exports.audioc = (prefix,command) =>{
return `Reply Audio Yang Ingin Diubah Dengan Caption *${prefix+command}*`
}

exports.stc = () =>{
return `Kamu Tidak Didalam Roomchat, Silahkan Buat Room Terlebih Dahulu.

*Format :*
.menfess nomor|nama|pesan

*Contoh :*
.menfess 62895340684706|bot|hai

*Note:*
62895340684706 - benar (✅)
+62 895 3406 84706 - salah (❌)
`
}

exports.room1 = () =>{
return `[✓] Berhasil Memberhentikan Chat`
}

exports.room2 = () =>{
return `[✓] Room Chat Telah Dihentikan\nOleh Teman Chat Kamu👤`
}

exports.donedb = () =>{
return `Berhasil Membersihkan database.json & menfess.json`
}

exports.premm = (command) =>{
return `Contoh : .${command} 628xxx`
}

exports.ttdb = () =>{
return `User Tersebut Tidak Premium`
}

exports.tdb = () =>{
return `User Tersebut Tidak Terdaftar Di Database`
}

exports.forDaftar = (command,pushname) =>{
return `Format : .${command} nama,umur\nExample : .${command} ${pushname},18`
}

exports.nomen = () =>{
return `Kamu Sedang Didalam Roomchat!! Ketik *.stopchat* Untuk Menghapus Sesi Chat.`
}

exports.menpes = (prefix,command) =>{
return `Format :
${prefix+command} nmr tujuan|nama samaran|pesan lu

Contoh
${prefix+command} 62895340684706|bot|hai

Note :
Berawal Dari 628xxx Tanpa Spasi
62895340684706 - benar (✅)
+62 895 3406 84706 - salah (❌)
62 895 3406 84706 - salah (❌)
`
}

exports.hisi = (prefix,command,pushname) =>{
return `Harus Di Isi Semua !!\nex : ${prefix+command} 62895340684706|${pushname}|hallo`
}

exports.mese = () =>{
return `Menfes Ke Nomor Sendiri:V\nCapek Ya? Semangat🗿`
}

exports.umen = () =>{
return `Menfess Kamu Sudah Terkirim, Moga Aja Dibales🗿`
}

let A = '╭──⬡ '
let B = ''
let C = '├ ○ '
let D = '╰─────────┈ ⳻⳻\n'

exports.listmenu = (prefix,no) => {
return`${A}*Main Menu*${B}
${C}${prefix}afk
${C}${prefix}reverse
${C}${prefix}server
${C}${prefix}song
${C}${prefix}sound
${C}${prefix}server
${C}${prefix}profile
${C}${prefix}menu
${C}${prefix}allmenu
${C}${prefix}allmenu2
${C}${prefix}rules
${C}${prefix}owner
${C}${prefix}infobot
${C}${prefix}donasi
${C}${prefix}sewabot
${C}${prefix}groupbot
${C}${prefix}respon
${D}
${A}*Anonymous Menu*${B}
${C}${prefix}buatroom 
${C}${prefix}room 
${C}${prefix}stopchat
${C}${prefix}confes
${C}${prefix}menfess 
${C}${prefix}menfess_gambar
${D}
${A}*User Menu*${B}
${C}${prefix}profile
${C}${prefix}verify
${C}${prefix}report
${C}${prefix}request
${C}${prefix}menfess
${C}${prefix}buatroom
${C}${prefix}cekprem
${C}${prefix}daftarprem
${D}
${A}*Download Menu*${B}
${C}${prefix}ssweb
${C}${prefix}ssweb2
${C}${prefix}tiktok
${C}${prefix}instagram
${C}${prefix}facebook
${C}${prefix}ytmp3
${C}${prefix}ytmp4
${C}${prefix}gitclone
${C}${prefix}mediafire
${D}
${A}*Search Menu*${B}
${C}${prefix}pixif
${C}${prefix}gimg
${C}${prefix}pinterest
${C}${prefix}kbbi
${C}${prefix}lirik
${D}
${A}*Group Menu*${B}
${C}${prefix}polling
${C}${prefix}fitnah
${C}${prefix}delete
${C}${prefix}tagall
${C}${prefix}hidetag
${C}${prefix}setdesc
${C}${prefix}linkgrup
${C}${prefix}infogroup
${C}${prefix}setppgrup
${C}${prefix}setnamegrup
${C}${prefix}group 
${C}${prefix}antilink 
${C}${prefix}welcome 
${C}${prefix}kick 
${C}${prefix}demote 
${C}${prefix}promote 
${D}
${A}*Kerang Menu*${B}
${C}${prefix}kerang
${C}${prefix}apakah
${C}${prefix}bagaimanakah
${C}${prefix}bisakah
${C}${prefix}kapankah
${D}
${A}*Tts Menu*${B}
${C}${prefix}tts_indo
${C}${prefix}tts_english
${D}
${A}*Fun Menu*${B}
${C}${prefix}truth
${C}${prefix}dare
${C}${prefix}fitnah
${D}
${A}*Anime Menu*${B}
${C}${prefix}loli
${C}${prefix}milf
${C}${prefix}husbu
${C}${prefix}cosplay
${C}${prefix}akira
${C}${prefix}akiyama
${C}${prefix}ana
${C}${prefix}asuna
${C}${prefix}ayuzawa
${C}${prefix}boruto
${C}${prefix}chitoge
${C}${prefix}deidara
${C}${prefix}doraemon
${C}${prefix}elaina
${C}${prefix}emilia
${C}${prefix}erza
${C}${prefix}gremory
${C}${prefix}hestia
${C}${prefix}hinata
${C}${prefix}inori
${C}${prefix}isuzu
${C}${prefix}itachi
${C}${prefix}itori
${C}${prefix}kaga
${C}${prefix}kagura
${C}${prefix}kakasih
${C}${prefix}kaori 
${C}${prefix}keneki
${C}${prefix}konachan
${C}${prefix}kotori
${C}${prefix}kurumi
${C}${prefix}madara
${C}${prefix}mikasa
${C}${prefix}miku
${C}${prefix}minato
${C}${prefix}naruto
${C}${prefix}nezuko
${C}${prefix}onepiece
${C}${prefix}pokemon
${C}${prefix}rize
${C}${prefix}sagiri
${C}${prefix}sakura
${C}${prefix}sasuke
${C}${prefix}sfw
${C}${prefix}shina
${C}${prefix}shinka
${C}${prefix}shizuka
${C}${prefix}shota
${C}${prefix}toukachan
${C}${prefix}tsunade
${C}${prefix}yuki 
${D}
${A}*Text Pro Menu*${B}
${C}${prefix}avengers
${C}${prefix}captainamerica
${C}${prefix}graffiti
${C}${prefix}pornhub
${C}${prefix}mountain
${C}${prefix}team-logo-cobra
${C}${prefix}team-logo-singa
${C}${prefix}team-logo-macan
${C}${prefix}team-logo-elang
${C}${prefix}team-logo-banteng
${D}
${A}*Ephoto Menu*${B}
${C}${prefix}bear
${C}${prefix}angel
${C}${prefix}queen
${C}${prefix}team-logo-ninja-1
${C}${prefix}team-logo-ninja-2
${C}${prefix}team-logo-ninja-3
${C}${prefix}team-logo-ninja-4
${C}${prefix}team-logo-ninja-5
${C}${prefix}team-logo-ninja-6
${C}${prefix}team-logo-ninja-7
${C}${prefix}team-logo-ninja-8
${C}${prefix}team-logo-ninja-9
${C}${prefix}style-1917
${C}${prefix}pixel-glitch
${C}${prefix}futuristic-technology
${C}${prefix}futuristic-technology2
${C}${prefix}futuristic-technology3
${C}${prefix}purple
${C}${prefix}neon-love
${C}${prefix}3dgolden
${C}${prefix}christmas
${C}${prefix}3drainbow
${C}${prefix} Business 
${D}
${A}*Photooxy Menu*${B}
${C}${prefix}shadow
${C}${prefix}cup
${C}${prefix}romantic
${C}${prefix}smoke
${C}${prefix}burn_paper
${C}${prefix}naruto
${C}${prefix}love_message
${C}${prefix}butterfly
${C}${prefix}metallic
${C}${prefix}kayu
${C}${prefix}horror
${C}${prefix}permen
${C}${prefix}silk
${C}${prefix}batik
${C}${prefix}nature3d
${C}${prefix}summer3d
${C}${prefix}fall
${C}${prefix}tik_tok
${D}
${A}*Wallpaper Menu*${B}
${C}${prefix}walpaper
${C}${prefix}gammer
${C}${prefix}aesthetic
${C}${prefix}blackpink
${C}${prefix}boneka
${C}${prefix}darkjokes
${C}${prefix}cyberspace
${C}${prefix}hekel
${C}${prefix}justina
${C}${prefix}kucing
${C}${prefix}mobil
${C}${prefix}motor
${C}${prefix}mountain
${C}${prefix}programming
${C}${prefix}pubg
${C}${prefix}rose
${C}${prefix}ryujin
${C}${prefix}technology
${C}${prefix}wallhp
${C}${prefix}renungan
${D}
${A}*Sticker Menu*${B}
${C}${prefix}ttp
${C}${prefix}ttp2
${C}${prefix}attp
${C}${prefix}doge
${C}${prefix}among
${C}${prefix}mukalu
${C}${prefix}animestick
${C}${prefix}animegif
${C}${prefix}paimon
${C}${prefix}patrickgif
${C}${prefix}random
${C}${prefix}patrick
${D}
${A}*Cek Menu*${B}
${C}${prefix}cekwaras
${C}${prefix}cantikcek
${C}${prefix}cekcantik 
${C}${prefix}cekganteng 
${C}${prefix}ceksange
${C}${prefix}cekgay
${C}${prefix}ceklesbi
${C}${prefix}cektolol
${C}${prefix}cekpintar
${C}${prefix}cekbodoh
${C}${prefix}cekgoblok
${C}${prefix}cekstres
${D}
${A}*Set Menu*${B}
${C}${prefix}setfooter_default
${C}${prefix}setwm 
${C}${prefix}setppbot 
${C}${prefix}setthumb 
${C}${prefix}setlink 
${C}${prefix}setpack 
${C}${prefix}setname
${C}${prefix}setbut_allmenu
${C}${prefix}setbut_allmenu_default
${C}${prefix}setbut_bc 
${C}${prefix}setbut_bc_default 
${C}${prefix}setbut_home
${C}${prefix}setbut_home_default
${C}${prefix}setbut_tes
${C}${prefix}setbut_tes_default
${C}${prefix}setowner
${C}${prefix}setowner_default
${C}${prefix}setname
${C}${prefix}setname_default
${C}${prefix}setrespon
${C}${prefix}setrespon_default
${D}
${A}*Get Menu*${B}
${C}${prefix}getbut_allmenu
${C}${prefix}getbut_bc
${C}${prefix}getbut_home
${C}${prefix}getbut_tes
${C}${prefix}getuser
${C}${prefix}getfooter
${D}
${A}*Stalk Menu*${B}
${C}${prefix}stalkig
${C}${prefix}stalktiktok
${D}
${A}*Rpg Menu*${B}
${C}${prefix}slot
${D}
${A}*Store Menu*${B}
${C}${prefix}dellist 
${C}${prefix}addlist 
${C}${prefix}update 
${C}${prefix}done 
${C}${prefix}proses 
${C}${prefix}list 
${C}${prefix}shop 
${D}
${A}*Broadcast Menu*${B}
${C}${prefix}bctext 
${C}${prefix}bcuser 
${C}${prefix}bcloc 
${C}${prefix}bclink 
${C}${prefix}bcvideo 
${C}${prefix}bcimage 
${C}${prefix}bcaudio 
${C}${prefix}bcvn 
${D}
${A}*18+ Menu*${B}
${C}${prefix}bkpsearch
${C}${prefix}bkpdl
${C}${prefix}bkpimg
${C}${prefix}doujinsearch
${C}${prefix}doujindl
${D}
${A}*Nsfw Menu*${B}
${C}${prefix}ahegao
${C}${prefix}ass
${C}${prefix}bdsm
${C}${prefix}blowjob
${C}${prefix}cuckold
${C}${prefix}cum
${C}${prefix}femdom
${C}${prefix}foot
${C}${prefix}gangbang
${C}${prefix}gifs
${C}${prefix}glasses
${C}${prefix}hentai
${C}${prefix}kawaii
${C}${prefix}manga
${C}${prefix}masturbation
${C}${prefix}neko2
${C}${prefix}nekonime
${C}${prefix}nsfw2
${C}${prefix}orgy
${C}${prefix}panties
${C}${prefix}pussy
${C}${prefix}tentacles
${C}${prefix}thighs
${C}${prefix}zettai
${D}
${A}*Random Menu*${B}
${C}${prefix}senja
${C}${prefix}motivasi
${C}${prefix}nurhadi
${C}${prefix}ngawur
${C}${prefix}galau
${C}${prefix}gombal
${C}${prefix}nyindir
${C}${prefix}fiersa
${C}${prefix}bacot
${C}${prefix}quotes
${C}${prefix}bucin
${C}${prefix}fakta
${C}${prefix}crinj
${C}${prefix}quotes
${D}
${A}*Asupan Menu*${B}
${C}${prefix}asupan
${C}${prefix}cecan
${C}${prefix}cecan2
${C}${prefix}china
${C}${prefix}cogan
${C}${prefix}indonesia
${C}${prefix}japan
${C}${prefix}korea
${C}${prefix}malaysia
${C}${prefix}thailand
${C}${prefix}vietnam
${C}${prefix}santuy
${C}${prefix}bocil
${C}${prefix}harley
${C}${prefix}storywa
${C}${prefix}anony
${D}
${A}*Convert Menu*${B}
${C}${prefix}toqr
${C}${prefix}tts
${C}${prefix}tourl
${C}${prefix}toimg
${C}${prefix}tomp3
${C}${prefix}toaudio
${C}${prefix}tomp4
${C}${prefix}emojimix
${C}${prefix}sticker
${C}${prefix}swm
${C}${prefix}smeme
${C}${prefix}emojmix2
${C}${prefix}hilih
${C}${prefix}halah 
${C}${prefix}huluh
${C}${prefix}heleh 
${C}${prefix}holoh 
${D}
${A}*Maker Menu*${B}
${C}${prefix}hartatahta
${C}${prefix}nulis
${C}${prefix}nulisdigital
${C}${prefix}quotemaker
${C}${prefix}quotemaker2
${C}${prefix}joker
${C}${prefix}glitch 
${C}${prefix}devil 
${C}${prefix}anciented
${C}${prefix}batman
${C}${prefix}black
${C}${prefix}carved
${C}${prefix}demon
${C}${prefix}diamond
${C}${prefix}golden3d
${C}${prefix}blackpinkrose
${C}${prefix}blackpinkstyle
${C}${prefix}bussines3d
${C}${prefix}graffitiart
${C}${prefix}harrypotter
${C}${prefix}holographic
${C}${prefix}joker
${C}${prefix}led
${C}${prefix}magma
${C}${prefix}marvel
${C}${prefix}matrix
${C}${prefix}neon
${C}${prefix}neon3d
${C}${prefix}neonblackpink
${C}${prefix}rainbow
${C}${prefix}slicetext
${C}${prefix}spooky
${C}${prefix}summerneon
${C}${prefix}thor
${C}${prefix}thunder
${C}${prefix}thunder2
${C}${prefix}transformer
${D}
${A}*Bug Menu*${B}
${C}${prefix}sendbug 
${C}${prefix}bugpc
${C}${prefix}philips 
${C}${prefix}philips2 
${C}${prefix}philips3 
${C}${prefix}santet
${C}${prefix}santet2 
${C}${prefix}santet3 
${C}${prefix}virtex 
${C}${prefix}virtex2 
${C}${prefix}virtex3 
${C}${prefix}bug1 
${C}${prefix}bug2 
${C}${prefix}bug3 
${C}${prefix}bug4 
${C}${prefix}bug5 
${D}
${A}*Primbon Menu*${B}
${C}${prefix}ramaljodoh
${C}${prefix}ramalanjodoh
${C}${prefix}nomorhoki
${C}${prefix}artimimpi
${C}${prefix}artinama
${C}${prefix}sifatusaha
${C}${prefix}tafsirmimpi
${C}${prefix}pasangan
${C}${prefix}suamiistri
${C}${prefix}ramalcinta
${C}${prefix}ramalancinta
${C}${prefix}ramaljodohbali
${C}${prefix}ramalanjodohbali
${C}${prefix}cocoknama
${C}${prefix}kecocokannama
${C}${prefix}cocokpasangan
${C}${prefix}kecocokanpasangan
${D}
${A}*Audio Menu*${B}
${C}${prefix}song
${C}${prefix}sound
${C}${prefix}fat
${C}${prefix}fast
${C}${prefix}slow
${C}${prefix}bass
${C}${prefix}deep
${C}${prefix}tupai
${C}${prefix}robot
${C}${prefix}blown
${C}${prefix}smooth
${C}${prefix}earrape
${C}${prefix}reverse
${C}${prefix}nightcore
${D}
${A}*Database Menu*
${C}${prefix}senddb addlist
${C}${prefix}senddb antilink
${C}${prefix}senddb error
${C}${prefix}senddb menfess
${C}${prefix}senddb pengguna
${C}${prefix}senddb session
${C}${prefix}resetdb error
${C}${prefix}resetdb menfess
${C}${prefix}resetdb pengguna
${D}
${A}*Owner Menu*${B}
${C}${prefix}odaftar
${C}${prefix}join
${C}${prefix}listpc
${C}${prefix}listgc
${C}${prefix}creategc
${C}${prefix}chat
${C}${prefix}error
${C}${prefix}set
${C}${prefix}get
${C}${prefix}addprem
${C}${prefix}delprem
${C}${prefix}bc
${C}${prefix}bctext 
${C}${prefix}bcuser 
${C}${prefix}bcloc 
${C}${prefix}bclink 
${C}${prefix}bcvideo 
${C}${prefix}bcimage 
${C}${prefix}bcaudio 
${C}${prefix}bcvn 
${D}
${A}*Goblok Menu*${B}
${C}${prefix}wangy
${D}
${A}*Convert Link*${B}
${C}${prefix}tinyurl
${C}${prefix}shortlink
${C}${prefix}isgd
${C}${prefix}vurl
${C}${prefix}clp
${D}
${A}*Sound Menu*${B}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${D}
${A}*Thanks To*${B}
${C}My God
${C}My Parents 
${C}DikaArdnt
${C}David
${C}Deff
${C}Lexxy
${C}Naze
${C}Xavior
${C}ZackMans
${C}ZeeoneOfc
${C}Penyedia Module
${C}And All Support
${D}`
}

exports.mainMenu = (prefix) =>{
return `${A}*Main Menu*${B}
${C}${prefix}afk
${C}${prefix}reverse
${C}${prefix}server
${C}${prefix}song
${C}${prefix}sound
${C}${prefix}server
${C}${prefix}profile
${C}${prefix}menu
${C}${prefix}allmenu
${C}${prefix}allmenu2
${C}${prefix}rules
${C}${prefix}owner
${C}${prefix}infobot
${C}${prefix}donasi
${C}${prefix}sewabot
${C}${prefix}groupbot
${C}${prefix}respon
${D}`
}

exports.anonyMenu = (prefix) =>{
return `${A}*Anonymous Menu*${B}
${C}${prefix}buatroom 
${C}${prefix}room 
${C}${prefix}stopchat
${C}${prefix}confes
${C}${prefix}menfess 
${C}${prefix}menfess_gambar
${D}`
}

exports.userMenu = (prefix) =>{
return `${A}*User Menu*${B}
${C}${prefix}profile
${C}${prefix}verify
${C}${prefix}report
${C}${prefix}request
${C}${prefix}menfess
${C}${prefix}buatroom
${C}${prefix}cekprem
${C}${prefix}daftarprem
${D}`
}

exports.donlodMenu = (prefix) =>{
return `${A}*Download Menu*${B}
${C}${prefix}ssweb
${C}${prefix}ssweb2
${C}${prefix}tiktok
${C}${prefix}instagram
${C}${prefix}facebook
${C}${prefix}ytmp3
${C}${prefix}ytmp4
${C}${prefix}gitclone
${C}${prefix}mediafire
${D}`
}

exports.searchMenu = (prefix) =>{
return `${A}*Search Menu*${B}
${C}${prefix}pixif
${C}${prefix}gimg
${C}${prefix}pinterest
${C}${prefix}kbbi
${C}${prefix}lirik
${D}`
}

exports.grupMenu = (prefix) =>{
return `${A}*Group Menu*${B}
${C}${prefix}polling
${C}${prefix}fitnah
${C}${prefix}delete
${C}${prefix}tagall
${C}${prefix}hidetag
${C}${prefix}setdesc
${C}${prefix}linkgrup
${C}${prefix}infogroup
${C}${prefix}setppgrup
${C}${prefix}setnamegrup
${C}${prefix}group 
${C}${prefix}antilink 
${C}${prefix}welcome 
${C}${prefix}kick 
${C}${prefix}demote 
${C}${prefix}promote 
${D}`
}

exports.kerangMenu = (prefix) =>{
return `${A}*Kerang Menu*${B}
${C}${prefix}kerang
${C}${prefix}apakah
${C}${prefix}bagaimanakah
${C}${prefix}bisakah
${C}${prefix}kapankah
${D}`
}

exports.ttsMenu = (prefix) =>{
return `${A}*Tts Menu*${B}
${C}${prefix}tts_indo
${C}${prefix}tts_english
${D}`
}

exports.funMenu = (prefix) =>{
return `${A}*Fun Menu*${B}
${C}${prefix}truth
${C}${prefix}dare
${C}${prefix}fitnah
${D}`
}

exports.animeMenu = (prefix) =>{
return `${A}*Anime Menu*${B}
${C}${prefix}loli
${C}${prefix}milf
${C}${prefix}husbu
${C}${prefix}cosplay
${C}${prefix}akira
${C}${prefix}akiyama
${C}${prefix}ana
${C}${prefix}asuna
${C}${prefix}ayuzawa
${C}${prefix}boruto
${C}${prefix}chitoge
${C}${prefix}deidara
${C}${prefix}doraemon
${C}${prefix}elaina
${C}${prefix}emilia
${C}${prefix}erza
${C}${prefix}gremory
${C}${prefix}hestia
${C}${prefix}hinata
${C}${prefix}inori
${C}${prefix}isuzu
${C}${prefix}itachi
${C}${prefix}itori
${C}${prefix}kaga
${C}${prefix}kagura
${C}${prefix}kakasih
${C}${prefix}kaori 
${C}${prefix}keneki
${C}${prefix}konachan
${C}${prefix}kotori
${C}${prefix}kurumi
${C}${prefix}madara
${C}${prefix}mikasa
${C}${prefix}miku
${C}${prefix}minato
${C}${prefix}naruto
${C}${prefix}nezuko
${C}${prefix}onepiece
${C}${prefix}pokemon
${C}${prefix}rize
${C}${prefix}sagiri
${C}${prefix}sakura
${C}${prefix}sasuke
${C}${prefix}sfw
${C}${prefix}shina
${C}${prefix}shinka
${C}${prefix}shizuka
${C}${prefix}shota
${C}${prefix}toukachan
${C}${prefix}tsunade
${C}${prefix}yuki 
${D}`
}

exports.txtProMenu = (prefix) =>{
return `${A}*Text Pro Menu*${B}
${C}${prefix}avengers
${C}${prefix}captainamerica
${C}${prefix}graffiti
${C}${prefix}pornhub
${C}${prefix}mountain
${C}${prefix}team-logo-cobra
${C}${prefix}team-logo-singa
${C}${prefix}team-logo-macan
${C}${prefix}team-logo-elang
${C}${prefix}team-logo-banteng
${D}`
}

exports.ephotoMenu = (prefix) =>{
return `${A}*Ephoto Menu*${B}
${C}${prefix}bear
${C}${prefix}angel
${C}${prefix}queen
${C}${prefix}team-logo-ninja-1
${C}${prefix}team-logo-ninja-2
${C}${prefix}team-logo-ninja-3
${C}${prefix}team-logo-ninja-4
${C}${prefix}team-logo-ninja-5
${C}${prefix}team-logo-ninja-6
${C}${prefix}team-logo-ninja-7
${C}${prefix}team-logo-ninja-8
${C}${prefix}team-logo-ninja-9
${C}${prefix}style-1917
${C}${prefix}pixel-glitch
${C}${prefix}futuristic-technology
${C}${prefix}futuristic-technology2
${C}${prefix}futuristic-technology3
${C}${prefix}purple
${C}${prefix}neon-love
${C}${prefix}3dgolden
${C}${prefix}christmas
${C}${prefix}3drainbow
${C}${prefix} Business 
${D}`
}

exports.photoOxyMenu = (prefix) =>{
return `${A}*Photooxy Menu*${B}
${C}${prefix}shadow
${C}${prefix}cup
${C}${prefix}romantic
${C}${prefix}smoke
${C}${prefix}burn_paper
${C}${prefix}naruto
${C}${prefix}love_message
${C}${prefix}butterfly
${C}${prefix}metallic
${C}${prefix}kayu
${C}${prefix}horror
${C}${prefix}permen
${C}${prefix}silk
${C}${prefix}batik
${C}${prefix}nature3d
${C}${prefix}summer3d
${C}${prefix}fall
${C}${prefix}tik_tok
${D}`
}

exports.wlppMenu = (prefix) =>{
return `${A}*Wallpaper Menu*${B}
${C}${prefix}walpaper
${C}${prefix}gammer
${C}${prefix}aesthetic
${C}${prefix}blackpink
${C}${prefix}boneka
${C}${prefix}darkjokes
${C}${prefix}cyberspace
${C}${prefix}hekel
${C}${prefix}justina
${C}${prefix}kucing
${C}${prefix}mobil
${C}${prefix}motor
${C}${prefix}mountain
${C}${prefix}programming
${C}${prefix}pubg
${C}${prefix}rose
${C}${prefix}ryujin
${C}${prefix}technology
${C}${prefix}wallhp
${C}${prefix}renungan
${D}`
}

exports.sticMenu = (prefix) =>{
return `${A}*Sticker Menu*${B}
${C}${prefix}ttp
${C}${prefix}ttp2
${C}${prefix}attp
${C}${prefix}doge
${C}${prefix}among
${C}${prefix}mukalu
${C}${prefix}animestick
${C}${prefix}animegif
${C}${prefix}paimon
${C}${prefix}patrickgif
${C}${prefix}random
${C}${prefix}patrick
${D}`
}

exports.cekMenu = (prefix) =>{
return `${A}*Cek Menu*${B}
${C}${prefix}cekwaras
${C}${prefix}cantikcek
${C}${prefix}cekcantik 
${C}${prefix}cekganteng 
${C}${prefix}ceksange
${C}${prefix}cekgay
${C}${prefix}ceklesbi
${C}${prefix}cektolol
${C}${prefix}cekpintar
${C}${prefix}cekbodoh
${C}${prefix}cekgoblok
${C}${prefix}cekstres
${D}`
}

exports.setMenu = (prefix) =>{
return `${A}*Set Menu*${B}
${C}${prefix}setfooter_default
${C}${prefix}setwm 
${C}${prefix}setppbot 
${C}${prefix}setthumb 
${C}${prefix}setlink 
${C}${prefix}setpack 
${C}${prefix}setname
${C}${prefix}setbut_allmenu
${C}${prefix}setbut_allmenu_default
${C}${prefix}setbut_bc 
${C}${prefix}setbut_bc_default 
${C}${prefix}setbut_home
${C}${prefix}setbut_home_default
${C}${prefix}setbut_tes
${C}${prefix}setbut_tes_default
${C}${prefix}setowner
${C}${prefix}setowner_default
${C}${prefix}setname
${C}${prefix}setname_default
${C}${prefix}setrespon
${C}${prefix}setrespon_default
${D}`
}

exports.getMenu = (prefix) =>{
return `${A}*Get Menu*${B}
${C}${prefix}getbut_allmenu
${C}${prefix}getbut_bc
${C}${prefix}getbut_home
${C}${prefix}getbut_tes
${C}${prefix}getuser
${C}${prefix}getfooter
${D}`
}

exports.stalkMenu = (prefix) =>{
return `${A}*Stalk Menu*${B}
${C}${prefix}stalkig
${C}${prefix}stalktiktok
${D}`
}

exports.rpgMenu = (prefix) =>{
return `${A}*Rpg Menu*${B}
${C}${prefix}slot
${D}`
}

exports.storeMenu = (prefix) =>{
return `${A}*Store Menu*${B}
${C}${prefix}dellist 
${C}${prefix}addlist 
${C}${prefix}update 
${C}${prefix}done 
${C}${prefix}proses 
${C}${prefix}list 
${C}${prefix}shop 
${D}`
}

exports.bcMenu = (prefix) =>{
return `${A}*Broadcast Menu*${B}
${C}${prefix}bctext 
${C}${prefix}bcuser 
${C}${prefix}bcloc 
${C}${prefix}bclink 
${C}${prefix}bcvideo 
${C}${prefix}bcimage 
${C}${prefix}bcaudio 
${C}${prefix}bcvn 
${D}`
}

exports.nsfwMenu = (prefix) =>{
return `${A}*Nsfw Menu*${B}
${C}${prefix}ahegao
${C}${prefix}ass
${C}${prefix}bdsm
${C}${prefix}blowjob
${C}${prefix}cuckold
${C}${prefix}cum
${C}${prefix}femdom
${C}${prefix}foot
${C}${prefix}gangbang
${C}${prefix}gifs
${C}${prefix}glasses
${C}${prefix}hentai
${C}${prefix}kawaii
${C}${prefix}manga
${C}${prefix}masturbation
${C}${prefix}neko2
${C}${prefix}nekonime
${C}${prefix}nsfw2
${C}${prefix}orgy
${C}${prefix}panties
${C}${prefix}pussy
${C}${prefix}tentacles
${C}${prefix}thighs
${C}${prefix}zettai
${D}`
}

exports.bkpMenu = (prefix) =>{
return `${A}*18+ Menu*${B}
${C}${prefix}bkpsearch
${C}${prefix}bkpdl
${C}${prefix}bkpimg
${C}${prefix}doujinsearch
${C}${prefix}doujindl
${D}`
}

exports.randomMenu = (prefix) =>{
return `${A}*Random Menu*${B}
${C}${prefix}senja
${C}${prefix}motivasi
${C}${prefix}nurhadi
${C}${prefix}ngawur
${C}${prefix}galau
${C}${prefix}gombal
${C}${prefix}nyindir
${C}${prefix}fiersa
${C}${prefix}bacot
${C}${prefix}quotes
${C}${prefix}bucin
${C}${prefix}fakta
${C}${prefix}crinj
${C}${prefix}quotes
${D}`
}

exports.asupanMenu = (prefix) =>{
return `${A}*Asupan Menu*${B}
${C}${prefix}asupan
${C}${prefix}cecan
${C}${prefix}cecan2
${C}${prefix}china
${C}${prefix}cogan
${C}${prefix}indonesia
${C}${prefix}japan
${C}${prefix}korea
${C}${prefix}malaysia
${C}${prefix}thailand
${C}${prefix}vietnam
${C}${prefix}santuy
${C}${prefix}bocil
${C}${prefix}harley
${C}${prefix}storywa
${C}${prefix}anony
${D}`
}

exports.convertMenu = (prefix) =>{
return `${A}*Convert Menu*${B}
${C}${prefix}toqr
${C}${prefix}tts
${C}${prefix}tourl
${C}${prefix}toimg
${C}${prefix}tomp3
${C}${prefix}toaudio
${C}${prefix}tomp4
${C}${prefix}emojimix
${C}${prefix}sticker
${C}${prefix}swm
${C}${prefix}smeme
${C}${prefix}emojmix2
${C}${prefix}hilih
${C}${prefix}halah 
${C}${prefix}huluh
${C}${prefix}heleh 
${C}${prefix}holoh 
${D}`
}

exports.bugMenu = (prefix) =>{
return `${A}*Bug Menu*${B}
${C}${prefix}sendbug 
${C}${prefix}bugpc
${C}${prefix}philips 
${C}${prefix}philips2 
${C}${prefix}philips3 
${C}${prefix}santet
${C}${prefix}santet2 
${C}${prefix}santet3 
${C}${prefix}virtex 
${C}${prefix}virtex2 
${C}${prefix}virtex3 
${C}${prefix}bug1 
${C}${prefix}bug2 
${C}${prefix}bug3 
${C}${prefix}bug4 
${C}${prefix}bug5 
${D}`
}

exports.makerMenu = (prefix) =>{
return `${A}*Maker Menu*${B}
${C}${prefix}hartatahta
${C}${prefix}nulis
${C}${prefix}nulisdigital
${C}${prefix}quotemaker
${C}${prefix}quotemaker2
${C}${prefix}joker
${C}${prefix}glitch 
${C}${prefix}devil 
${C}${prefix}anciented
${C}${prefix}batman
${C}${prefix}black
${C}${prefix}carved
${C}${prefix}demon
${C}${prefix}diamond
${C}${prefix}golden3d
${C}${prefix}blackpinkrose
${C}${prefix}blackpinkstyle
${C}${prefix}bussines3d
${C}${prefix}graffitiart
${C}${prefix}harrypotter
${C}${prefix}holographic
${C}${prefix}joker
${C}${prefix}led
${C}${prefix}magma
${C}${prefix}marvel
${C}${prefix}matrix
${C}${prefix}neon
${C}${prefix}neon3d
${C}${prefix}neonblackpink
${C}${prefix}rainbow
${C}${prefix}slicetext
${C}${prefix}spooky
${C}${prefix}summerneon
${C}${prefix}thor
${C}${prefix}thunder
${C}${prefix}thunder2
${C}${prefix}transformer
${D}`
}

exports.primbonMenu = (prefix) =>{
return `${A}*Primbon Menu*${B}
${C}${prefix}ramaljodoh
${C}${prefix}ramalanjodoh
${C}${prefix}nomorhoki
${C}${prefix}artimimpi
${C}${prefix}artinama
${C}${prefix}sifatusaha
${C}${prefix}tafsirmimpi
${C}${prefix}pasangan
${C}${prefix}suamiistri
${C}${prefix}ramalcinta
${C}${prefix}ramalancinta
${C}${prefix}ramaljodohbali
${C}${prefix}ramalanjodohbali
${C}${prefix}cocoknama
${C}${prefix}kecocokannama
${C}${prefix}cocokpasangan
${C}${prefix}kecocokanpasangan
${D}`
}

exports.audioMenu = (prefix) =>{
return `${A}*Audio Menu*${B}
${C}${prefix}song
${C}${prefix}sound
${C}${prefix}fat
${C}${prefix}fast
${C}${prefix}slow
${C}${prefix}bass
${C}${prefix}deep
${C}${prefix}tupai
${C}${prefix}robot
${C}${prefix}blown
${C}${prefix}smooth
${C}${prefix}earrape
${C}${prefix}reverse
${C}${prefix}nightcore
${D}`
}

exports.dbMenu = (prefix) =>{
return `${A}*Database Menu*
${C}${prefix}senddb addlist
${C}${prefix}senddb antilink
${C}${prefix}senddb error
${C}${prefix}senddb menfess
${C}${prefix}senddb pengguna
${C}${prefix}senddb session
${C}${prefix}resetdb error
${C}${prefix}resetdb menfess
${C}${prefix}resetdb pengguna
${D}`
}

exports.ownerMenu = (prefix) =>{
return `${A}*Owner Menu*${B}
${C}${prefix}odaftar
${C}${prefix}join
${C}${prefix}listpc
${C}${prefix}listgc
${C}${prefix}creategc
${C}${prefix}chat
${C}${prefix}error
${C}${prefix}set
${C}${prefix}get
${C}${prefix}addprem
${C}${prefix}delprem
${C}${prefix}bc
${C}${prefix}bctext 
${C}${prefix}bcuser 
${C}${prefix}bcloc 
${C}${prefix}bclink 
${C}${prefix}bcvideo 
${C}${prefix}bcimage 
${C}${prefix}bcaudio 
${C}${prefix}bcvn 
${D}`
}

exports.gblkMenu = (prefix) =>{
return `${A}*Goblok Menu*${B}
${C}${prefix}wangy
${D}`
}

exports.cvrtLinkMenu = (prefix) =>{
return `${A}*Convert Link*${B}
${C}${prefix}tinyurl
${C}${prefix}shortlink
${C}${prefix}isgd
${C}${prefix}vurl
${C}${prefix}clp
${D}`
}

exports.soundMenu = (prefix,no) =>{
return `${A}*Sound Menu*${B}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${C}${prefix}sound${no++}
${D}`
}

exports.tqto = () =>{
return`⬡─〔  THANKS TO  〕─⬡

○ Arul
https://github.com/Arulllllllllllll

○ Adiwajshing
http://github.com/baileys

○ AtakBot
https://github.com/Atak676

○ David
http://github.com/xct007

○ Deff
https://github.com/DEFF-Y

○ DikaArdnt
https://github.com/DikaArdnt

○ Faruq
https://github.com/Faruq51

○ Hariyadin
https://github.com/dev-loverbest

○ Lexxy
https://github.com/Lexxy24

○ 4k Sanzz
https://github.com/4ksanzz

○ Miku
https://github.com/Miku21750
`
}

exports.rulesBot = (prefix) =>{
return`*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
2. Jangan telepon bot. ☎️
3. Jangan membandingkan bot 👍

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan.

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini bisa kalian beli ke owner Arulbot

🗯️ Boleh saya menambah ke grup?
➡️ Untuk itu tergantung dari owner bot sendiri

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan prefix *.*

Jika sudah dipahami rules-nya, silakan ketik *.menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan bot dapat berubah kapan saja 

Terimakasih! `
}

exports.donasiBot = () =>{
return`*-------「 DONATE 」 -------*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍
Buat kalian yang sudah donasi bisa kasih tau
ke owner agar bisa di masukkan ke list donasi 😊

Thanks!

• Tri : 0896-5233-3947
• Dana : 0895-3406-84706
• Saweria : https://saweria.co/arul09`
}

exports.source = () =>{
return`⬡─〔  Source Code  〕─⬡

Arul
https://github.com/Arulllllllllllll
`
}

exports.sewabot = (ownerNumber) =>{
return`*Sewa Bot Ke Grup*
◦ Rp. 2.000 / 3 Hari
◦ Rp. 5.000 / 1 Minggu
◦ Rp. 20.000 / Permanen + premium 

*Fitur*
◦ Antilink 
◦ Open/Close Grup 
◦ Tagall
◦ Hidetag 
◦ Welcome 
◦ Add/Kick
◦ Full Anime
◦ Nsfw
◦ 18+
◦ Download
◦ Dll

*Payment*
◦ Dana : 0895-3406-84706
◦ Tri : 0896-5233-3947

*Contact Owner*
◦ wa.me/${ownerNumber}
`
}