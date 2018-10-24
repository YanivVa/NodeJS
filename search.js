var fs = require('fs');
var path = require('path');
var fileType = '.'+process.argv[2]; //file extension
var like = ''+process.argv[3];;
var endFileList=[]; 

function finalList(list){
    
    if(endFileList.length==0)
    {
        console.log("No file was found");
        
    }else{
        
    for(var i=0;i<endFileList.length;){
        var item = endFileList.pop(); 
        console.log(item);
        
    }
    }    
};

function getContainFile(name,files,type){
    //console.log("finding "+name+"  -  type "+fileType);
    var i=0;
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        var test=""+file;
        //name=name;
        //console.log("need to find"+name+" in "+test);
        //console.log(test);
            
        if(test.indexOf(name) > -1) {
            //console.log(__dirname+"\\"+test);
            
            endFileList.push(__dirname+"\\"+test);
        }else{
          
        }
    })
};




// Return a list of files of the specified fileTypes in the provided dir, 
// with the file path relative to the given dir
// dir: path of the directory you want to search the files for
// fileTypes: array of file types you are search files, ex: ['.txt', '.jpg']
function getFilesFromDir(dir, fileTypes) {
  var filesToReturn = [];
  function walkDir(currentPath) {
    var files = fs.readdirSync(currentPath);
    for (var i in files) {
      var curFile = path.join(currentPath, files[i]);      
      if (fs.statSync(curFile).isFile() && fileTypes.indexOf(path.extname(curFile)) != -1) {
        filesToReturn.push(curFile.replace(dir, ''));
      } else if (fs.statSync(curFile).isDirectory()) {
       walkDir(curFile);
      }
    }
  };
  walkDir(dir);
  return filesToReturn; 
}

//getFilesFromDir("./", [fileType]).map(console.log);
//getContainFile(like,getFilesFromDir("./", [fileType]),fileType);

(handle());


function handle() {
    if(process.argv[2]==undefined){
        console.log("USAGE: node search [EXT] [TEXT]") ;
        //return "USAGE: node search [EXT] [TEXT]";

    } 
    if(process.argv[3]==undefined){
        console.log("USAGE: node search [EXT] [TEXT]");
        //return "USAGE: node search [EXT] [TEXT]";
    }
    else{
        //console.log(getContainFile(like,getFilesFromDir("./", [fileType]),fileType));
        //return getContainFile(like,getFilesFromDir("./", [fileType]),fileType);
        finalList(getContainFile(like,getFilesFromDir("./", [fileType]),fileType));
    }

    //return "";

} 

    

  
