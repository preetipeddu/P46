class SecondQuestion {
    constructor(){
       this.secondQuestion = createElement('h3');
       this.firstOption = createButton('First option here');
       this.secondOption = createButton('Second option here');
       this.thirdOption = createButton('Third option here');
       this.fourthOption = createButton('Fourth option here');
    }
   
    display(){
      this.secondQuestion.html("Second question here");
      this.secondQuestion.position(100,100);
   
      this.firstOption.position(100,200);
      this.secondOption.position(100,250);
      this.thirdOption.position(100,300);
      this.fourthOption.position(100,350);
    }
   
   
   
   }