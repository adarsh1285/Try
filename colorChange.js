     function validation(){
        let name = document.forms["frm"]["txtname"].value;
        if (name == ""){
            alert("please enter your name");
            return false;
        }
        var mob = document.forms["frm"]["txtmob"].value;
        if (mob == ""){
            alert("please enter your mobile number");
            return false;
        }else{
            let ch = mob.charAt(0);
            let len = mob.length;
            if((len == 10) && (ch == '6' || ch == '7' || ch == '8' || ch == '9')){
                alert("Valid mobile number");
            }else{
                alert("Your mobile number is not valide");
                return false;
            }
        }
        let email = documnet.forms["frm"]["txtemail"].value;
        if(email == ""){
            alert("please enter email address");
            return false;
        }
        let file = document.forms["frm"]["txtfile"].value;
        if(file == ""){
            alert("please select any file");
            return false;
        }else{
            let ufile = file;
            let ext = ufile.substr(ufile.lastIndexOf('.')).toLowerCase();
            if (ext == ".png" || ext == ".jpg" || ext ==".jpeg"){
                alert("thank your file is upload");
            }else{
                alert("plz enter onther extaintion");
            }
            return false;
        }
     }


