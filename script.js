let data;
fetch('https://upadhayay.github.io/db.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      
      response.json().then(function(data) {
    
        for(let i=0;i<data.books.length; i++){
            const ele=document.createElement("div");

            const logo=document.createElement("img");
            logo.setAttribute("src","/images/paperIcon.png");
            logo.setAttribute("class","paperIconClass");
            ele.appendChild(logo);

            const title=document.createElement("h4");
            title.innerHTML=data.books[i].title;
            ele.appendChild(title);

            const readMore=document.createElement("a");
            readMore.innerHTML="Read More";
            readMore.setAttribute("href","#");
            readMore.setAttribute("id","readMoreID");
            ele.appendChild(readMore);
            document.getElementById("PaperSec").appendChild(ele);
            
            ele.classList.add("paperDivClass");
             
        }
     });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });




