import {
    Sheep
} from './sheep.js';

export class SheepController{

    constructor(props) {
        this.img = new Image();
        this.img.onload = () => {
            this.loaded();
        };
        this.img.src = 'sheep.png';

        this.items = [];

        this.cur = 0;
        this.isLoaded = false;

    }

    resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    // 양이 로드되면 양을 추가한다.
    loaded(){
        this.isLoaded = true;
        this.addSheep();
    }

    addSheep(){
        this.items.push(
            new Sheep(this.img, this.stageWidth, this.stageHeight)
        );
    }

    // 양그리기
    draw(ctx, t, dots){
        if(this.isLoaded){
            this.cur += 1;
            if(this.cur > 200){
                this.cur = 0;
                this.addSheep();
            }
        }

        for(let i = this.items.length-1; i>=0; i++){
            const item = this.items[i];
            if(item.x < -item.width){
                this.items.splice(i,1);
            }else{
                item.draw(ctx,t,dots);
            }

        }

    }

}