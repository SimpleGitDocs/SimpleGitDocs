var files=[]
async function fetch_files()
{await fetch('/documents.list').then(res=>res.text()).then(res=>{files=res.split("\n")});}
function KatakanaToHiragana(str)
{return str.replace(/[\u30a1-\u30f6]/g,function(match)
{var chr=match.charCodeAt(0)-0x60;return String.fromCharCode(chr);});}
function GetSuggestions(query,max)
{console.log(query)
var suggestions=[]
for(var i=0;i<files.length;i++)
{const query_changed=KatakanaToHiragana(query.toLowerCase())
const fileSplited=files[i].toLowerCase().split("/")
const file=KatakanaToHiragana(fileSplited[fileSplited.length-1])
if(file.includes(query_changed))
{suggestions.push(files[i])}
if(suggestions.length>=max)
{break}}
return suggestions}
function RandomShow(HTMLId,len)
{var random=Math.floor(Math.random()*len)
for(var i=0;i<len;i++)
{document.getElementById(HTMLId+"_"+i).style.display=i==random?"block":"none";}}
fetch_files()