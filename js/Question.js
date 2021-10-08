class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here");
    this.input2 = createInput("Enter Correct Option No");
    this.button = createButton('Submit');
    this.button2 = createButton('Reset');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    //this.button2.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- people buy me to eat but they dont eat me, who am I? " );
    this.question.position(100, 80);
    this.option1.html("1: fruit " );
    this.option1.position(100, 100);
    this.option2.html("2: plate" );
    this.option2.position(100, 120)
    this.option3.html("3: spoon" );
    this.option3.position(100, 140);
    this.option4.html("4: Foil wrappar" );
    this.option4.position(100, 160);

    this.input1.position(100, 230);
    this.input2.position(280, 230);
    this.button.position(100, 300);
    this.button2.position(180, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.button2.mousePressed(()=>{
      contestant.updateCount(0)
      quiz.update(0)
      var ref = database.ref("contestants")
      ref.remove()
    })
  }
}
