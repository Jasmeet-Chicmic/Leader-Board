import { _decorator, Component, instantiate, Label, Node ,Prefab, ScrollView} from 'cc';
import data from "./names";            
const { ccclass, property } = _decorator;

@ccclass('prefab')
export class prefab extends Component {
    @property({type:Prefab})
        items:Prefab = null;

   


    start() {
        let a = this.node.getComponent(ScrollView).content;
        
        
        data.map((e)=>{
            let item = instantiate(this.items);
            let row = item.getChildByName("Row");
            let firstName = row.getChildByName("Name");
            firstName.getComponent(Label).string = e.firstName;
            let lastname = row.getChildByName("Name-001");
            lastname.getComponent(Label).string = e.lastName;
            let playerId = row.getChildByName("Name-002");
            playerId.getComponent(Label).string =String( e.playerId);

            
       
            
            a.addChild(item);

        })
            // for(let i =0 ;i < 10;i++)
            // {
            //     let item = instantiate(this.items);
            //     a.addChild(item);
            // }
        

    }

    update(deltaTime: number) {
        
    }
}

