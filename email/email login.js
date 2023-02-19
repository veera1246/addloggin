
        function vis()
        {
            document.getElementById("a").removeAttribute("type")
            document.getElementById("b").setAttribute("src","../projects/Travel vlogs/Asset/Images/openmon.jpeg")
        }
        function hide()
        {
            document.getElementById("b").setAttribute("src","../projects/Travel vlogs/Asset/Images/monkey1.jpeg")
            document.getElementById("a").setAttribute("type","password")
        }

        function auth()
        {
            var email="email@gmail.com"
            var password="123456"
            var useremail=document.getElementById("email").value 
            var userpass=document.getElementById("a").value 
            if (useremail==email && userpass==password)
            {
                document.getElementById("form").setAttribute("action","./date(8feb).html")
                document.getElementById("login").setAttribute("type","submit")
                document.getElementById("result").innerHTML=""
            }
            if (useremail!=email && userpass==password)
            {
                document.getElementById("email").style.borderColor="red"
                document.getElementById("result").innerHTML="Entered the wrong email"
            }
            if (useremail==email && userpass!=password)
            {
                document.getElementById("div").style.borderColor="red"
                document.getElementById("result2").innerHTML="Entered the wrong password"
            }
            else
            {
                document.getElementById("email").style.borderColor="red"
                document.getElementById("result3").innerHTML="Entered the wrong password and email"

            }



        }
            
            
            


    