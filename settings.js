const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'yZ7g3e7y',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = true //status online (online)

// Other
global.botname = "*⳹ ❋ཻུ۪۪Farhan storeBotz-Md ⳹❋ཻུ۪۪*" //namabot kalian
global.zifa = "*⳹ ❋ཻུ۪۪Farhan storeBotz-Md ⳹ ❋ཻུ۪۪*" //kontol kalian
global.ownername= "*⳹ ❋ཻུ۪۪farhangans⳹ ❋ཻུ۪۪*" //nama kalian
global.myweb ="https://instagram.com/Farhanstore123" //bebas asal jan hapus
global.youtube = "gda yt bnh🐤" //bebas asal jan hapus
global.github = "https/github.com/farhangans/" //bebas
global.email = "farhan401@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.ownernomer = "62882006485504" // nomor wa kalian
global.ownernomerr = "62882006485504" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/f19193f43448cbbeb5e7d.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["62882006485504","62882006485504","62882006485504"] //ganti agar fitur owner bisa di gunakan
global.packname = 'Farhanbotz-𝗠𝗱' //Punya Mu
global.author = 'Di Buat Oleh Farhan𝗼𝗙𝗰 𖣘' //putrapler
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Rozi !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ Rielbotz Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
