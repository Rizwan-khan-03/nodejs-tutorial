const fs =require('fs');
const path =require('path');
const crudPath=path.join(__dirname , "crud");
console.log(crudPath);

 const filePath=`${crudPath}/new.txt`
 fs.writeFileSync(filePath,"crud creat file")