export class addCvDto {
  constructor(
    public name = '',
    public firstname = '',
    public path = '',
    public cin = 0,
    public job = '',
    public age = 0
  ) {}

  isNotEmpty(){
    return this.name !='' || this.firstname !='' || this.path != '' || this.cin !=0 || this.job != '' || this.age !=0
  }

}
