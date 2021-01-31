class Menu {
    constructor(){
        this.title = createElement('h1');
        this.doctor = createButton("Contact Doctor");
        this.fees = createButton("Pay Fees");
        this.reports = createButton("Reports");
        this.emergency = createButton("Emergency Call");
        this.home = createButton("Home");
    }

    display(){
        this.title.html("PatientCare");
        this.title.position(displayWidth/2 - 50, 0);
        this.doctor.position(windowWidth/2,windowHeight/2-50);
        this.fees.position(windowWidth/2, windowHeight/2);
        this.reports.position(windowWidth/2, windowHeight/2+50);
        this.emergency.position(windowWidth/2, windowHeight/2 + 75);
        this.home.position(displayWidth/4-200, 0);

        this.doctor.mousePressed(()=>{
            this.doctor.hide();
            this.fees.hide();
            this.reports.hide();
            this.emergency.hide();

            textSize(25);
            text("Here You Can contact The Doctor in- charge for any Queries and chat or call him/her",windowWidth/2-250, windowHeight/2);

        })

        this.fees.mousePressed(()=>{
            this.doctor.hide();
            this.fees.hide();
            this.reports.hide();
            this.emergency.hide();

            textSize(25);
            text("Here You Can Pay The Fees of the medical charges and get a breakdown of what is the cost of individual items",windowWidth/2-500, windowHeight/2);
            
        })

        this.reports.mousePressed(()=>{
            this.doctor.hide();
            this.fees.hide();
            this.reports.hide();
            this.emergency.hide();

            textSize(25);
            text("Here You Can access the results of the medical test which you gave and has been uploaded",windowWidth/2-350, windowHeight/2);
            
        })

        this.emergency.mousePressed(()=>{
            this.doctor.hide();
            this.fees.hide();
            this.reports.hide();
            this.emergency.hide();

            textSize(25);
            text("Here You Can contact the nurses or doctors in case of a very urgent request",windowWidth/2-250, windowHeight/2);
            
        })

        this.home.mousePressed(()=>{
            this.doctor.hide();
            this.emergency.hide();
            this.fees.hide();
            this.reports.hide();

            var form1 = new Form();
            form1.display();
            this.home.hide();
        })
    }
}