class Form {

    constructor() {
      this.doctorbutton = createButton('Doctor');
      this.patientbutton = createButton('Patient')
      this.title = createElement('h1');
    }

    display(){
        
    this.title.html("PatientCare");
    this.title.position(displayWidth/2 - 50, 0);

    this.doctorbutton.position(displayWidth/2 + 30, displayHeight/2);
    this.patientbutton.position(displayWidth/2-30, displayHeight/2);

    this.patientbutton.mousePressed(()=>{
      this.doctorbutton.hide();
      this.patientbutton.hide();

      var reg = new Regform();
      reg.display();
    })

    
    this.doctorbutton.mousePressed(()=>{
      this.doctorbutton.hide();
      this.patientbutton.hide();

      var docmenu = new Docmenu();
      docmenu.display();
    })
  
   
   
   

  }
  

}
