const URL='https://script.google.com/macros/s/AKfycbwJeHC4zh-C8sY_KMViHVsql2hCOLZtIo7LhX3bbVMI8w35zCcXGnnWf9bKiOkewA9GTg/exec';
document.getElementById('survey').addEventListener('submit',async(e)=>{
e.preventDefault();
const fd=new FormData(e.target);
const obj={};
fd.forEach((v,k)=>{
 if(obj[k]){obj[k]=[].concat(obj[k],v)} else obj[k]=v;
});
try{
 await fetch(URL,{method:'POST',body:JSON.stringify(obj)});
 document.getElementById('msg').innerHTML='✅ Thank you for participating!';
 e.target.reset();
}catch(err){
 document.getElementById('msg').innerHTML='Submission failed. Check Web App URL.';
}
});
