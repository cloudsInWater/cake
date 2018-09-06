// const { observable, action } = Mobx;
const {
  observable,
  action
} = Mobx;
export default class Type {
  @observable list = [{
      title: "Spoil tea",
      completed: true,
      id: 1
    },
    {
      title: "Make coffee",
      completed: false,
      id: 2
    }
  ]
  @action.bound
  listAdd(all) {
      console.log('=====>>>>all',all)
    if (all !== undefined && all !== null) {
        return  this.list.push(all)
    }
  }
  @action.bound
  listCompleted(id) {
        console.log('=====>>>>id',id)
        let ida=id-1
        return  this.list[ida].completed=!this.list[ida].completed;
   
  }
}
