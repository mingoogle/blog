import{
    Hill
} from "./hill.js";

import {
    SheepController
} from "./sheep_controller.js";

class App {
    constructor() {
        this.convas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.convas);

        // 언덕추가
        // 뒤에있는 언덕일 수록 느리고 언덕이 촘촘하게 (언덕의 봉우리가 많아 곡선이 많게보이도록)
        this.hills = [
          new Hill('#fd6bea', 1.4, 12),
          new Hill('#ff59c2', 1.5, 8),
          new Hill('#ff4674', 1.4, 6),
        ];

        // 양추가
        this.sheepControlelr = new SheepController();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));

    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth*2;
        this.canvas.height = this.stageHeight*2;
        this.ctx.scale(2,2);

        // 랜덤을 언덕이 그려짐
        for(let i =0; i<this.hills.length; i++){
            this.hills[i].resize(this.stageWidth, this.stageHeight);
        }

        this.sheepControlelr.resize(this.stageWidth,this.stageHeight);

    }

    animate(t){

        requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0,0, this.stageWidth, this.stageHeight);

        let dots;
        for(let i =0; i<this.hills.length; i++){
            dots = this.hills[i].draw(this.ctx);
        }

        this.sheepControlelr.draw(this.ctx, t, dots);

    }
}