function pc (){
let spekpc = {
  ram : "6 GB dual channel",
  cpu : "Intel Icore 3 Gen 2",
  gpu : "Gtx 650",
  audio : "Audio internal"
 }
 console.log("berikut adalah spesikasi pc saya, sebagai berikut :")
 console.log("##############")
 for ( let o in spekpc){
   console.log(spekpc[o])
 }
}
pc()
