// console.log("Lets learn path module")

import path from "path"

//join two or more file  ->index.py ,test.java
const fullPath=path.join("/path","index.py","test.java");
// console.log(fullPath);

//absolute path 
const absolutePath=path.resolve();
console.log(absolutePath);


//extension name

const extname=path.extname('resume.docs');
console.log(extname);
if(extname==".docs"){
    console.log("OK")
}
else{
    console.log("Not Ok!")
}

