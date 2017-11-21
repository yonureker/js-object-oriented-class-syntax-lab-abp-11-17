class BoardMember {
  constructor (name, homeState, training){
    this.name = name;
    this.homeState = homeState;
    this.training = training;
}
    veto (){
      return(`No, I must disagree`)
    };
    approve (){
      console.log(`You can do that!`)
    };
    doCharity (){
      console.log(`I like to help people.`)
    };
    releasePressStatement (){
      console.log(`You will see great things from Scuber.`)
    };
    sayHi(){
      console.log(`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${training}.`)
    };
  }
}
