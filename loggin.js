// console.log('just java logging'); 

const logginButton = document.getElementById('loggin-btn').addEventListener('click', function(){
    
    const text = document.getElementById('input-text');
    const contactText = text.value ;
    // console.log(contactText); 
    
    
    const input = document.getElementById('input-pass');
    const InputPass = input.value ;
    // console.log(InputPass); 

    if ( contactText === '01601015045' && InputPass === '1234'){
        alert('Successfully logged In');
        window.location.assign("/home.html")
        
    }
    else{
        alert('Loggin failed');
        return;
    }
    
    
    
})
