// console.log("Let's Learn File Handling")

import {readFile,writeFile,appendFile,mkdir} from 'fs/promises'

//Read File Content
const read_file= async(fileName)=>{
    const data=await readFile(fileName,"utf-8")
    console.log(data);
}
// read_file("sample.txt");



//Create file 
const create_file=async(fileName,content)=>{
    await  writeFile(fileName,content);
    console.log("File Created Successfully.")
}

// create_file("newFile.txt","This is a new testing file created by fs module");
// create_file("newFile2.txt","This is a another testing file created by fs module");


//AAppend File
const append_file=async(fileName,content)=>{
    await appendFile(fileName,content)
    console.log("File has been updated successfully");
}
// append_file("newFile.txt","This a sample message appended in this file using fs module.")


//Create Folder-Directory
const create_dir=async(dir)=>{
    // await mkdir(dir);
    await mkdir(dir,{recursive:true});
    console.log("Folder Has been Created Successfully.")
}
// create_dir("Sample Directory")
create_dir("src/component/cpp")