

const makeBurgerBtn = document.getElementById("submitBurger");
const devourBurgerBtn = document.querySelectorAll("button.eat");


makeBurgerBtn.addEventListener('click',(e) =>{
    e.preventDefault;
    
    const newBurger = {
        burger_name: document.getElementById("burgerSubmission").value.trim()
     };

    // Here, I'll send my post request

 
    fetch('/api/burgers', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(newBurger),
        }).then(() => {
        document.getElementById("burgerSubmission").value='';
        console.log("New burger created!!");
        location.reload();
        }).catch(function(error) {                        // catch
       console.log('Request failed', error);
  });
      
});







devourBurgerBtn.forEach((button) =>{
  button.addEventListener('click',(e) => {
  e.preventDefault;
  const burgerUnparsed = e.target.getAttribute("data-id");
  const targetElement = e.target;
  const burgerId = parseInt(burgerUnparsed);
  console.log(burgerId);
  
  const brg_object = {
      id: burgerId,
   };

   const current_burger = JSON.stringify(brg_object);

   console.log(`Variable current_burger is ${current_burger}`);

  // Here, I'll send my post request


  fetch(`/api/burgers/${burgerId}`, {
      method: 'PUT',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      body: current_burger
      }).then((response) => {
      
        if(response.ok){
          
          console.log(`changed burger ${burgerId} to devoured`);
          location.reload('/');
          targetElement.style.display = "none";
        }
        else{
          console.log("Something went wrong");
        }
});
    
});
});



const deleteBurgersBtn = document.getElementById("deleteButton");

 
  
    deleteBurgersBtn.addEventListener('click', (e) => {
     
      // Send the delete request
      fetch(`/api/burgers/delete`, {
        method: 'DELETE',
      }).then((res) => {
        console.log(res);
        console.log(`Deleted All burgers`);

        // Reload the page
        location.reload();
      });
    });
  




