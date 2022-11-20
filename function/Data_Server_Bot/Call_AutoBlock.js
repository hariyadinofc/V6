const fs = require('fs');

exports.auto_BlockCaller = async (conn, json) => {
const user_Call = json.content[0].attrs['call-creator']
conn.sendMessage(user_Call, { text: 'Kamu Terdeteksi Telepon Bot!\nKamu Akan Di Blokir.'})
await sleep(5000)
conn.updateBlockStatus(user_Call, 'block')
}