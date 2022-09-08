import JSZip from 'jszip';
import FileSaver from 'file-saver';
function doupload(){
    function DoSomethingWithEntries(zip){ 
        // for each entry in the zip...
        for (var i=0; i<zip.entries.length; i++) {
          var entry = zip.entries[i];
          var entryInfo = "<h4><a>" + entry.name + "</a></h4>\n<div>";  
          // put that into a div, if you like.
          // etc...
        }
      }f
    var doneReading = function(zip){
        DoSomethingWithEntries(zip);
    };
    
    var zipFile = new ZipFile(url, doneReading); 

   
      
};

