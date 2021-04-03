class FirstQuestion {
 constructor(){
    this.question = createElement('h3');
    this.option1 = createButton('First option here');
    this.option2 = createButton('Second option here');
    this.option3 = createButton('Third option here');
    this.option4 = createButton('Fourth option here');
    this.next = createButton("Next question");
 }

 hide(){
   this.question.hide();
   this.option1.hide();
   this.option2.hide();
   this.option3.hide();
   this.option4.hide();
 }
 
 display(){
   this.question.html("First question here");
   this.question.position(100,100);

   this.option1.position(100,200);
   this.option2.position(100,250);
   this.option3.position(100,300);
   this.option4.position(100,350);

   this.next.position(100,400);

   this.next.mousePressed(()=>{
     hide();
     question2 = new SecondQuestion();
     question2.display();
})

 }



}