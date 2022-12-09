const fs = require('fs')

JSON_DATA = {
setting: JSON.parse(fs.readFileSync('./config.json')),
antilink: JSON.parse(fs.readFileSync('./database/antilink.json')),
welcome: JSON.parse(fs.readFileSync('./database/welcome.json')),
db_user: JSON.parse(fs.readFileSync('./database/pengguna.json')),
db_menfes: JSON.parse(fs.readFileSync('./database/menfess.json')),
server_eror: JSON.parse(fs.readFileSync('./database/func_error.json')),
db_respon_list: JSON.parse(fs.readFileSync('./database/db_addlist.json')),
_afk: JSON.parse(fs.readFileSync('./database/afk.json')),
}

exports.setting_JSON = JSON_DATA.setting;
exports.welcome_JSON = JSON_DATA.welcome;
exports.antilink_JSON = JSON_DATA.antilink;
exports.db_user_JSON = JSON_DATA.db_user;
exports.server_eror_JSON = JSON_DATA.server_eror;
exports.db_menfes_JSON = JSON_DATA.db_menfes;
exports.db_respon_list_JSON = JSON_DATA.db_respon_list;
exports._afk = JSON_DATA._afk;