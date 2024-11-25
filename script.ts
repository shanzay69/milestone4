document.getElementById('resumeform')?.addEventListener('submit',function(event){
    event.preventDefault();
    
    
    
    
    const nameElement= document.getElementById('name')as    HTMLInputElement  ;
    const emailElement= document.getElementById('email')as     HTMLInputElement  ;
    const phoneElement= document.getElementById('phone')as    HTMLInputElement   ;
    const ProfilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const educationElement= document.getElementById('education')as     HTMLInputElement  ;
    const experienceElement= document.getElementById('experience')as    HTMLInputElement   ;
    const skillsElement= document.getElementById('skills')as    HTMLInputElement  ;
    
    if ( ProfilePictureInput && nameElement &&  emailElement && phoneElement && educationElement && experienceElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const profilePictureFile = ProfilePictureInput.files?.[0];
        let profilePictureURL = "";
        if (profilePictureFile instanceof File) {
          profilePictureURL = URL.createObjectURL(profilePictureFile);
        } else {
          console.error('Profile Picture file is not a valid File object.');
        }
        
        const resumeOutput = `
        <h2>Resume</h2>
         ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile Picture" class="profilePicture">` : ""}
    
        <p><strong>Name:</strong> <span id ="edit-name" class="editable"> ${name}</span> </p>
    <p><strong>Email:</strong><span id ="edit-email" class="editable">  ${email}  </span>  </p>
          <p><strong>Phone:</strong><span id ="edit-phone" class="editable">   ${phone} </span> </p>

          <h3>Education</h3>
          <p id ="edit-email" class="editable"> ${education}</p>

          <h3>Experience</h3>
            <p id ="edit-email" class="editable">${experience}</p>

            <h3>Skills</h3>
            <p  id ="edit-email" class="editable"> ${skills}</p>
       `;
    
       const resumeOutputElement= document.getElementById('resumeOutput')
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    makeEditable();
    
      }
    
    }  else{
    console.error('one or more Output elements are missing')
    
    }
    
    });
    function makeEditable(){
 const editableElements = document.querySelectorAll('.editable');
 editableElements.forEach(element => {
  element.addEventListener('click', function()  {
   const currentElement = element as HTMLElement;
   const currentValue = currentElement.textContent || "";
   if (currentElement.tagName ==="p" || currentElement.tagName ==='SPAN' ){
    const input = document.createElement('input')
    input.type = 'text'
    input.value =currentValue
    input.classList.add('editing input')
    
    
    input.addEventListener('blur', function(){
    currentElement.textContent = input.value;
    currentElement.style.display ='inline'
    input.remove()
   })





    currentElement.style.display ='none'
    currentElement.parentNode?.insertBefore(input, currentElement)
   input.focus()
   }
  }) 

    })

    }
    