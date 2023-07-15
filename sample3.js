const fs=require('fs');
const rs=fs.createReadStream("./text1.txt");
// rs.on("data",function(data){
//     console.log(data.toString()+" New String ");
// });
const ws=fs.createWriteStream("./text3.txt",{flags:'a'});
// rs.on("data",function(chunk){
//     ws.write(chunk+"<>");
// });
var dt="";
rs.on("data",function(chunk){
    ws.write(chunk.toString()[0].toUpperCase()+chunk.toString().slice(1,chunk.length));
});