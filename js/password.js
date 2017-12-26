
$(document).ready(function() {
        
            $("input[type=text]").keyup(function() {
                var pass = $("#password").val();
                console.log(pass);
               // var spec = "~`!@#$%^&*()-_+={}[]|\\;:\" <>,./?";
                
                if (pass.length > 8) {
                    $("#eight").removeClass("invalid").addClass("valid");
                }
                else{
                    $("#eight").removeClass("valid").addClass("invalid");
                   }
                if(pass.match(/[a-z]/) != null){
                    $("#lower").removeClass("invalid").addClass("valid");
                }
                else{
                    $("#lower").removeClass("valid").addClass("invalid");
                   }
                if(pass.match(/[A-Z]/) != null){
                    $("#upper").removeClass("invalid").addClass("valid");
                }
                else{
                    $("#upper").removeClass("valid").addClass("invalid");
                   }
                if(pass.match(/[0-9]/) != null){ 
                    $("#numeric").removeClass("invalid").addClass("valid");
                }else{
                    $("#numeric").removeClass("valid").addClass("invalid");
                   }
                if(pass.match(/[^0-9a-zA-Z]/g) != null){ 
                    $("#special").removeClass("invalid").addClass("valid");
                }else{
                    $("#special").removeClass("valid").addClass("invalid");
                   }
//                for(i=0; i < pass.length; i++){
//                    if(spec.indexOf(pass[i]) != -1 ){
//                        $('#special').removeClass('invalid').addClass('valid');
//                    }
//                    else{
//                        $('#special').removeClass('valid').addClass('invalid');
//                    }
                
                
                
                
            })})
            
                $(document).ready(function(){
                $("#password").focusout(function(){
                    if($("#eight").attr("class") == "valid" && $("#lower").attr("class") == "valid" && $("#upper").attr("class") == "valid" && $("#numeric").attr("class") == "valid" && $("#special").attr("class") == "valid") {
                    $("#good").addClass("allValid");
                    } if($("#eight").attr("class") != "valid" || $("#lower").attr("class") != "valid" || $("#upper").attr("class") != "valid" || $("#numeric").attr("class") != "valid" || $("#special").attr("class") != "valid"  ){
                         $("#good").removeClass("allValid");
                    }
                })
            })