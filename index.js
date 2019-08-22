$(document).ready(function(){
    
      window.onload = function(){
               let editorInput = document.getElementById('editor');
               let previewOutput = document.getElementById('preview' );

               let sync = function(){
                 let value = editorInput.value;
                 let mark = marked(value);
                 previewOutput.innerHTML = mark;
                 console.log(mark);
              };
            editorInput.oninput = sync; sync();
          }
    })