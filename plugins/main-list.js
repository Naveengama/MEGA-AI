let handler = async (m, { conn, usedPrefix, command }) => {
  let who = m.quoted
    ? m.quoted.sender
    : m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
        ? conn.user.jid
        : m.sender
  if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`

  let pp = './assets/A.jpg'
  let more = String.fromCharCode(8206)
  let readMore = more.repeat(850)

  let lkr
  switch (command) {
    case 'listmenu':
    case 'menulist':
      lkr ='*Get ready for the ride, here are your ticket options:*\n\n' +
        '🌅 *' +
        usedPrefix +
        "botmenu* - The Bot's secret control panel.\n\n" +
        '🖲️ *' +
        usedPrefix +
        "ownermenu* - Yep, that's for you, Boss!\n\n" +
        '🛫 *' +
        usedPrefix +
        'groupmenu* - Groups to unite people.\n\n' +
        '🗂️ *' +
        usedPrefix +
        "dlmenu* - 'DL' stands for 'Delicious Loot'.\n\n" +
        '🎭 *' +
        usedPrefix +
        "funmenu* - The bot's party hat. Games, jokes and instant ROFLs.\n\n" +
        '💵 *' +
        usedPrefix +
        'economy* - Your personal vault of virtual economy.\n\n' +
        '🎮 *' +
        usedPrefix +
        'gamemenu* - Enter the gaming arena.\n\n' +
        '🫐 *' +
        usedPrefix +
        'stickermenu* - A rainbow of stickers.\n\n' +
        '🪙 *' +
        usedPrefix +
        "toolsmenu* - Your handy-dandy toolkit.\n\n" +
        '🧲 *' +
        usedPrefix +
        'logomenu* - Create a logo that screams You.\n\n' +
        '💟 *' +
        usedPrefix +
        'nsfwmenu* - The After Dark menu.\n\n' +
        '🌀 *' +
        usedPrefix +
        'aimenu* - Your Personal Artificial Intelligence Copilots.\n\n' +
        '🎧 *' +
        usedPrefix +
        'aeditor* - Tune The Mp3/Audio As You Wish.\n\n' +
         '🎉 *' +
        usedPrefix +
        'animemenu* - Animated Images,Stickers and Videos.\n\n' +
         '🍒 *' +
        usedPrefix +
        'reactions* - Anime reactions menu for group.\n\n' +
        '🪁 *' +
        usedPrefix +
        'infoanime* - Full Information About Animes Like imdb.\n\n' +
        '💡 *' +
        usedPrefix +
        'imagen* - Create Images and designs based on your thoughts/prompts.\n\n' +
        '🃏 *' +
        usedPrefix +
        'randompic* - Random Images you might like and love.\n\n' +
        '🏖️ *' +
        usedPrefix +
        'textpro* - Generate Beautiful Logos Using Text Of Your Choice.\n\n' +
        '🎥 *' +
        usedPrefix +
        'randomvid* - Random Videos you might like and love.\n\n' +
        '🖍️ *' +
        usedPrefix +
        'fancy* - Fancy text generator Menu.' 
        break

    case 'botmenu':
      lkr = `
╭───『 *BOT* 』─❍
◈ •quran
◈ •autoreact
◈ •gita
◈ •ping
◈ •uptime
◈ •alive
◈ •language
◈ •server
◈ •rentbot
◈ •listrent
◈ •stoprent
◈ •botinfo
◈ •owner
◈ •script
◈ •speedtest
◈ •runtime
◈ •menu
◈ •menu2
◈ •menu3
◈ •menu4
◈ •donate
◈ •groups
◈ •blocklist
◈ •listprem
◈ •listmenu
◈ •mrcs
◈ © GlobalTechInfo
╰─────────❍` // Your bot menu message here
      break
      case 'aimenu':
      lkr=`
 ╭───『 *AI* 』─❍
 ◈ •chatgpt
 ◈ •googleit
 ◈ •blackbox
 ◈ •gpt4
 ◈ •travel
 ◈ •blackpink
 ◈ •gimage
 ◈ •google
 ◈ •bro
 ◈ •ai
 ◈ •fact
 ◈ •why
 ╰─────────❍` //
 break

 case 'logosmaker':
 case 'ephoto':
 case 'textpro':
      lkr=`
 ╭───『 *TEXTPRO* 』─❍
 ◈ •papercut
 ◈ •logomaker
 ◈ •bpstyle
 ◈ •cartoon
 ◈ •glossy
 ◈ •writetext
 ◈ •texteffect
 ◈ •lighteffect
 ◈ •advancedglow
 ◈ •pixelglitch
 ◈ •clouds
 ◈ •galaxy
 ◈ •beach
 ╰─────────❍` //
 break
      case 'imagen':
      case 'imagenai':
      lkr=`
 ╭───『 *IMAGEN* 』─❍
 ◈ •hercai-lexica
 ◈ •raava
 ◈ •shonin
 ◈ •cartoon
 ◈ •animefy
 ◈ •prodia
 ◈ •simurg
 ◈ •imagev3
 ◈ •v2beta
 ◈ •lexica
 ◈ •dalle
 ╰─────────❍` //
 break
    case 'ownermenu':
      lkr = `
╭───『 *OWNER* 』─❍
◈ •enable
◈ •intro
◈ •banchat
◈ •autoreact
◈ •unbanchat
◈ •banuser
◈ •unbanuser
◈ •broadcast
◈ •broadcastgc
◈ •readviewonce
◈ •setprivacy
◈ •setppbot
◈ •setprefix
◈ •resetprefix
◈ •getfile
◈ •getplugin
◈ •plugins
◈ •listplugins
◈ •install
◈ •remove
◈ •savecontact
◈ •fakereply
◈ •delcmd
◈ •listcmd
◈ •getmsg
◈ •addprem
◈ •delprem
◈ •addsudo
◈ •delsudo
◈ •addowner
◈ •delowner
◈ •allvars
◈ •broadcast
◈ •fullpp
◈ •inspect
◈ •cleartmp
◈ •clearchat
◈ •restart
◈ •savefile
◈ •logout
◈ •unban
◈ •update
◈ •intro
◈ •ban
◈ •var
◈ •afk
◈ •save
◈ •allow
◈ •listban
◈ •join
╰─────────❍` //
      break
      case 'randompic':
      lkr = `
╭───『 *RandomPic* 』─❍
◈ •chinese
◈ •malaysia
◈ •hijab
◈ •japanese
◈ •korean
◈ •malay
◈ •random
◈ •random2
◈ •thai
◈ •vietnamese
◈ •indo
◈ •girl
◈ •person
◈ •boneka
◈ •blackpink3
◈ •bike
◈ •antiwork
◈ •aesthetic
◈ •justina
◈ •doggo
◈ •cat
◈ •cosplay2
◈ •car
◈ •profile2
◈ •notnot
◈ •kpop
◈ •kayes
◈ •ulzzanggirl
◈ •ulzzangboy
◈ •ryujin
◈ •pubg
◈ •wallml
◈ •wallhp
╰─────────❍` //
      break
      case 'randomvid':
      lkr = `
╭───『 *RandomVid* 』─❍
◈ •tiktokgirl
◈ •tiktokghea
◈ •tiktokbocil
◈ •tiktoknukhty
◈ •tiktoksantuy
◈ •tiktokkayes
◈ •tiktokpanrika
◈ •tiktoknotnot
╰─────────❍` //
      break
    case 'groupmenu':
      lkr = `
╭───『 *GROUP* 』─❍
◈ •kick
◈ •wyr
◈ •promote
◈ •demote
◈ •groupinfo
◈ •getjids
◈ •resetlink
◈ •antilink
◈ •link
◈ •setpp
◈ •setname
◈ •setdesc
◈ •setwelcome
◈ •setbye
◈ •hidetag
◈ •tagall
◈ •totag
◈ •notify
◈ •delwarn
◈ •warn
◈ •unwarn
◈ •warns
◈ •add
◈ •delete
◈ •group
◈ •enable
◈ •disable
◈ •toxic
◈ •ship
◈ •register
◈ •unreg
◈ •mysn
◈ •poll
◈ •simulate
◈ •admins
╰─────────❍` //
      break
    case 'downloadermenu':
    case 'dlmenu':
    case 'downloads':
      lkr = `
╭───『 *DOWNLOAD* 』─❍
◈ •likee
◈ •pinterest
◈ •pinterest2
◈ •threads
◈ •capcut
◈ •itunes
◈ •play
◈ •play2
◈ •play5
◈ •audio
◈ •video
◈ •mega
◈ •ytsearch
◈ •ytmp3 
◈ •ytmp4
◈ •gdrive
◈ •gitclone
◈ •githubstalk
◈ •npmstalk
◈ •githubdl
◈ •twitter
◈ •tiktok
◈ •ttstalk
◈ •gimage
◈ •insta
◈ •igstory
◈ •igstalk
◈ •mediafire
◈ •facebook
◈ •wallpapers
◈ •rwall
◈ •rnekos
◈ •swdl
◈ •apkdl
◈ •apksearch
◈ •playstore
◈ •ringtone
◈ •dlstatus
╰─────────❍` //
      break
    case 'economymenu':
    case 'economy':
      lkr = `
╭───『 *ECONOMY* 』─❍
◈ •claim/daily
◈ •weekly
◈ •monthly
◈ •wallet
◈ •withdraw
◈ •leaderboard
◈ •levelup
◈ •addxp
◈ •buych
◈ •buyall
◈ •addgold
◈ •bank
◈ •deposit
◈ •give
◈ •bet
◈ •heal
◈ •craft
◈ •balance
◈ •shop
◈ •sell
◈ •rob
◈ •adventure
◈ •opencrate
◈ •mine
◈ •work
◈ •transfer
◈ •todiamond
◈ •tomoney
╰────────❍ ` //
      break
    case 'funmenu':
      lkr = `
╭───『 *FUN* 』─❍
◈ •character
◈ •truth
◈ •dare
◈ •hack
◈ •flirt
◈ •gay
◈ •shayeri
◈ •ship
◈ •waste
◈ •alexa
◈ •simpcard
◈ •hornycard
◈ •ytcomment
◈ •stupid
◈ •lolicon
╰─────────❍` //
      break
      case 'animereactions':
case 'reactions':
lkr=`
╭───『 *REACTIONS* 』─❍
◈ •bully
◈ •cuddle
◈ •cry
◈ •hug
◈ •awoo
◈ •kiss
◈ •lick
◈ •pat
◈ •smug
◈ •bonk
◈ •yeet
◈ •blush
◈ •wave
◈ •highfive
◈ •handhold
◈ •nom
◈ •bite
◈ •glomp
◈ •slap
◈ •kill
◈ •happy
◈ •wink
◈ •poke
◈ •dance
◈ •cringe
╰─────────❍` //
      break
    case 'animemenu':
      lkr = `
╭───『 *ANIME* 』─❍
◈ •waifu
◈ •neko
◈ •loli
◈ •couplepp
◈ •toanime
◈ •naruto
◈ •itachi
◈ •akira
◈ •asuna
◈ •akiyama
◈ •boruto
◈ •hornycard
◈ •ayuzawa
◈ •anna
◈ •chiho
◈ •chitoge
◈ •deidara
◈ •erza
◈ •elaina
◈ •emilia
◈ •hestia
◈ •hinata
◈ •inori
◈ •isuzu
◈ •kagura
◈ •kaori
◈ •keneki
◈ •kurumi
◈ •madara
◈ •mikasa
◈ •miku
◈ •minato
◈ •nezuko
◈ •sagiri
◈ •sasuke
◈ •sakura
◈ •kotori
╰─────────❍` //
      break
      case 'infoanime':
      lkr = `
╭───『 *INFO ANIME* 』─❍
◈ •anime waifu
◈ •anime neko
◈ •anime loli
◈ •anime naruto
◈ •anime itachi
◈ •anime akira
◈ •anime asuna
◈ •anime akiyama
◈ •anime boruto
◈ •anime ayuzawa
◈ •anime anna
◈ •anime chiho
◈ •anime chitoge
◈ •anime deidara
◈ •anime erza
◈ •anime elaina
◈ •anime emilia
◈ •anime hestia
◈ •anime hinata
◈ •anime inori
◈ •anime isuzu
◈ •anime kagura
◈ •anime kaori
◈ •anime keneki
◈ •anime kurumi
◈ •anime madara
◈ •anime mikasa
◈ •anime miku
◈ •anime minato
◈ •anime nezuko
◈ •anime sagiri
◈ •anime sasuke
◈ •anime sakura
◈ •anime kotori
╰─────────❍` //
      break
    case 'gamemenu':
    case 'gamesmenu':
      lkr = `
╭───『 *GAME* 』─❍
◈ •tictactoe
◈ •delttt
◈ •chess
◈ •math
◈ •math answer
◈ •ppt
◈ •slot
◈ •cock-fight
◈ •roulette
◈ •casino
◈ •guessflag
◈ •fhint
╰─────────❍` //
      break
    case 'stickermenu':
      lkr = `
╭───『 *STICKER* 』─❍
◈ •s
◈ •tenor
◈ •take
◈ •scircle
◈ •smaker
◈ •removebg
◈ •smeme
◈ •trigger
◈ •stickers
◈ •getsticker
◈ •tgsticker
◈ •emojimix
◈ •toimg
◈ •tovid
◈ •quote
◈ •quoted
◈ •rc
◈ •ttp
◈ •ttp2
◈ •attp
◈ •attp2
◈ •attp3
╰─────────❍` //
      break
    case 'toolmenu':
    case 'toolsmenu':
      lkr = `
╭───『 *TOOLS* 』─❍
◈ •autosticker
◈ •topdf
◈ •base64
◈ •whatmusic
◈ •filelength
◈ •tempmail
◈ •checkmail
◈ •course
◈ •calc
◈ •google
◈ •googleit
◈ •linux
◈ •imdb
◈ •reddit
◈ •lyrics
◈ •wattpad
◈ •happymod
◈ •android
◈ •styletext
◈ •trendtwit
◈ •wikipedia
◈ •readmore
◈ •ssweb
◈ •carbon
◈ •element
◈ •translate
◈ •tourl
◈ •trace
◈ •nowa
◈ •qrmaker
◈ •readqr
◈ •fancy
◈ •weather
◈ •tocartoon
◈ •quote
◈ •technews
◈ •define
◈ •itunes
◈ •pokedex
◈ •removebg
◈ •tinyurl/shorturl
◈ •readvo
◈ •true
◈ •wa
◈ •pokedex
◈ •voz
◈ •remini
◈ •enhance
╰─────────❍` //
break
case 'aeditor':
case 'audioeditor':
lkr=`
╭───『 *AUDIOS* 』─❍
◈ •bass
◈ •blown
◈ •deep
◈ •earrape
◈ •fast
◈ •nightcore
◈ •reverse
◈ •robot
◈ •slow
◈ •smooth
◈ •tupai
◈ •squirrel
◈ •chipmunk
╰─────────❍` //
      break
    case 'nsfwmenu': 
      lkr = `
  ╭───『 *NSFW* 』─❍
  ◈ •genshin
  ◈ •swimsuit
  ◈ •schoolswimsuit
  ◈ •white
  ◈ •barefoot
  ◈ •touhou
  ◈ •gamecg
  ◈ •hololive
  ◈ •uncensored
  ◈ •sunglasses
  ◈ •glasses
  ◈ •weapon
  ◈ •shirtlift
  ◈ •chain
  ◈ •fingering
  ◈ •flatchest
  ◈ •torncloth
  ◈ •bondage
  ◈ •demon
  ◈ •wet
  ◈ •pantypull
  ◈ •headdress
  ◈ •headphone
  ◈ •tie
  ◈ •anusview
  ◈ •shorts
  ◈ •stokings
  ◈ •topless
  ◈ •beach
  ◈ •bunnygirl
  ◈ •bunnyear
  ◈ •idol
  ◈ •vampire
  ◈ •gun
  ◈ •maid
  ◈ •bra
  ◈ •nobra
  ◈ •bikini
  ◈ •whitehair
  ◈ •blonde
  ◈ •pinkhair
  ◈ •bed
  ◈ •ponytail
  ◈ •nude
  ◈ •dress
  ◈ •underwear
  ◈ •foxgirl
  ◈ •uniform
  ◈ •skirt
  ◈ •sex
  ◈ •sex2
  ◈ •sex3
  ◈ •breast
  ◈ •twintail
  ◈ •spreadpussy
  ◈ •tears
  ◈ •seethrough
  ◈ •breasthold
  ◈ •drunk
  ◈ •fateseries
  ◈ •spreadlegs
  ◈ •openshirt
  ◈ •headband
  ◈ •food
  ◈ •close
  ◈ •tree
  ◈ •nipples
  ◈ •erectnipples
  ◈ •horns
  ◈ •greenhair
  ◈ •wolfgirl
  ◈ •catgirl
  ◈ •nsfw
  ◈ •ass
  ◈ •boobs
  ◈ •lesbian
  ◈ •pussy
  ◈ •pack
  ◈ •xvid
  ◈ •xnxx
  ╰─────────❍` //
      break
    case 'logomenu':
    case 'makermenu':
      lkr = `
  ╭───『 *MAKER* 』─❍
  ◈ •blur
  ◈ •enhance
  ◈ •difuminar2
  ◈ •hornycard
  ◈ •hornylicense
  ◈ •gfx1
  ◈ •gfx2
  ◈ •gfx3
  ◈ •gfx4
  ◈ •gfx5
  ◈ •gfx6
  ◈ •gfx7
  ◈ •gfx8
  ◈ •gfx9
  ◈ •gfx10
  ◈ •gfx11
  ◈ •gfx12
  ◈ •simpcard
  ◈ •itssostupid
  ◈ •iss
  ◈ •stupid
  ◈ •tweet <comment>
  ◈ •lolicon
  ◈ •logololi
  ◈ •ytcomment <comment>
  ╰─────────❍` //
      break
    default:
      lkr = `Invalid command. Type ${usedPrefix}list to see available options.`
  }

  conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })

  let done = '👍'
  m.react(done)
}

handler.help = [
  'listmenu',
  'menulist',
  'aimenu',
  'animereactions',
  'reactions',
  'imagen',
  'textpro',
  'textmaker',
  'logosmaker',
  'imagenai',
  'animemenu',
  'aeditor',
  'audioeditor',
  'infoanime',
  'botmenu',
  'ownermenu',
  'groupmenu',
  'dlmenu',
  'downloads',
  'downloadermenu',
  'economymenu',
  'economy',
  'funmenu',
  'gamemenu',
  'gamesmenu',
  'stickermenu',
  'nsfwmenu',
  'logomenu',
  'makermenu',
  'randompic',
  'randomvid',
  'toolsmenu',
  'toolmenu',
]
handler.tags = ['main']
handler.command = [
  'listmenu',
  'menulist',
  'aimenu',
  'animereactions',
  'reactions',
  'imagen',
  'textpro',
  'textmaker',
  'logosmaker',
  'imagenai',
  'animemenu',
  'aeditor',
  'audioeditor',
  'infoanime',
  'botmenu',
  'ownermenu',
  'groupmenu',
  'dlmenu',
  'downloads',
  'downloadermenu',
  'economymenu',
  'economy',
  'funmenu',
  'gamemenu',
  'gamesmenu',
  'stickermenu',
  'nsfwmenu',
  'logomenu',
  'makermenu',
  'randompic',
  'randomvid',
  'toolsmenu',
  'toolmenu',
]

export default handler
