
const { observable, action } = Mobx;
export default class Try{
    @observable num=0;

    @action add=(num)=>{
        return this.num++
    }
    @action less=(num)=>{
        return this.num--
    }
}