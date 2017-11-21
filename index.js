class BoardMember {
  constructor (name, homeState, training){
    this.name = name;
    this.homeState = homeState;
    this.training = training;
    this.veto = function (){
      return(`No, I must disagree`)
    };
    this.approve = function(){
      console.log(`You can do that!`)
    };
    this.doCharity = function(){
      console.log(`I like to help people.`)
    };
    this.releasePressStatement = function (){
      console.log(`You will see great things from Scuber.`)
    };
    this.sayHi = function (){
      console.log(`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${training}.`)
    };
  }
}
