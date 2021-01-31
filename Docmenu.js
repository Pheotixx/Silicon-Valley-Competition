class Docmenu{
    constructor(){
        this.title = createElement('h1');
        this.button = createButton('Patient1');
        this.button2 = createButton('Patient2');
        this.button3 = createButton('Patient3');
        this.button4 = createButton('Patient4');
        this.home = createButton("Home");
    }

    display(){
        this.title.html("PatientCare");
        this.title.position(displayWidth/2 - 50, 0);
        this.button.position(displayWidth/2, displayHeight/2-60);
        this.button2.position(displayWidth/2, displayHeight/2-30);
        this.button3.position(displayWidth/2, displayHeight/2+30);
        this.button4.position(displayWidth/2, displayHeight/2+60);
        this.home.position(displayWidth/4-200, 0);


        this.button.mousePressed(()=>{
            this.button.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            
            textSize(25);
            text("Here You Will Be Able To Able to view the details of the patient 1", windowWidth/2-250, windowHeight/2);
    
        })

        this.button2.mousePressed(()=>{
            this.button.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            
            textSize(25);
            text("Here You Will Be Able To Able to view the details of the patient 2", windowWidth/2-250, windowHeight/2);
    
        })

        this.button3.mousePressed(()=>{
            this.button.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            
            textSize(25);
            text("Here You Will Be Able To Able to view the details of the patient 3", windowWidth/2-250, windowHeight/2);
    
        })

        this.button4.mousePressed(()=>{
            this.button.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            
            textSize(25);
            text("Here You Will Be Able To Able to view the details of the patient 4", windowWidth/2-250, windowHeight/2);
    
        })

        this.home.mousePressed(()=>{
            this.button.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();

            var form1 = new Form();
            form1.display();
            this.home.hide();
        })
    }

}