class Regform{
    constructor(){
        this.input = createInput('Registration Number');
        this.title = createElement('h1');
        this.button = createButton("Submit");
        this.home = createButton("Home");
    }

    display(){
        this.title.html("PatientCare");
        this.title.position(displayWidth/2 - 50, 0);
        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2+5, displayHeight/2-50);
        this.home.position(displayWidth/4-200, 0);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
      
            var menu = new Menu();
            menu.display();
          })

          this.home.mousePressed(()=>{
              this.input.hide();
              this.button.hide();

              var form1 = new Form();
              form1.display();
              this.home.hide();
          })
    }
}