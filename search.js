window.onload = function(){
            let search = document.getElementById("Search");
            search.addEventListener('click' ,() =>{
                let searchbox=document.getElementById("searchbox").value;
                new Ajax.Request("request.php?q="+searchbox+"&all=true",{
                    method:"get",
                    onSuccess: function _result (info){
                        
                        if((info.responseXML)==null){   
                            alert((info.responseText));
                        }else{
                            alert((info.responseText));
                        }            
                    }
                });
                    
            });
            
                
                
                
};
        