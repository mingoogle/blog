export class Sheep {

    constructor(img, stageWidth) {
        this.img = img;

        this.totalFram = 0;
        this.curFrame = 0;

        // 양그림의 너비와 높이
        this.imgWidth = 360;
        this.imgHeight = 300;

        // 양의 크기
        this.sheepWidth = 180;
        this.sheepHeight = 150;

        this.sheepWidthHalf = this.sheepWidth/2;
        this.x = stageWidth+this.sheepWidth;
        this.y = 0;

        // 양의 속도
        this.speed = Math.random()*2+1;

        // 초당 양이 움직이는 프레임 수
        this.fps = 24;
        this.fpsTime = 1000 / this.fps;

    }

    draw(ctx, t, dots){

        /* 2.양의 이미지를 넣고 이대로 코딩하면 양이 너무 빠르게 움직임 fps를 설정해줘야대
        this.curFrame +=1;
        if(this.curFrame == this.totalFram){
            this.curFrame =0;
        }*/

        //fps 설정
        if(!this.time){
            this.time =t;
        };

        const now = t - this.time;
        if(now > this.fpsTime){
            this.time = t;
            this.curFrame += 1;
            if(this.curFrame == this.totalFram){
                this.curFrame = 0;
            }
        }

        this.animate(ctx, dots);
    }

    animate(ctx, dots){
/*      3. 양의 위치기 (양가운데에서만 움직임 )
        this.x = 650;
        this.y = 550;
*/
        // 양을 왼쪽으로 이동시키
        this.x -= this.speed;
        const closest = this.getY(this.x, dots);
        this.y = closest.y;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = '#000000';

        /* 1. 네모난 박스가 화면 어떻게 움직이는지 봐라 이걸토대로 양의 이미지를 넣을거야.
        ctx.fillRect(
            -this.sheepWidthHalf,
            -this.sheepHeight+20,
            this.sheepWidth,
            this.sheepHeight
        );
        */

        //양의 이미지
        ctx.drawImage(
            this.img,
            this.imgWidth*this.curFrame,
            0,
            this.imgWidth,
            this.imgHeight,
            -this.sheepWidthHalf,
            -this.sheepHeight+20,
            this.sheepWidth,
            this.sheepHeight
        )

        ctx.restore();

    }

    getY(x, dots) {
        for(let i =1; i <dots.length; i++){
            if(x >= dots[i].x1 && x <= dots[i].x3){
                return this.getY2(x,dots[i]);
            }
        }

        return {
            y: 0,
            rotation: 0
        }

    }


    // 곡선의 값을 200개로 설정하여 촘촘하게 근사한 양의 x값을 가져오려고한다.
    getY2(x, dot){
        const total = 200;
        let pt = this.getPointOnQuad(dot.x1, dot.y1, dot.x2, dot.y2, dot.x3, dot.y3, 0);
        let prevX = pt.x;
        for(let i=1; i<total; i++){
            const t = 1/total;
            pt = this.getPointOnQuad(dot.x1, dot.y1, dot.x2, dot.y2, dot.x3, dot.y3, t);

            if(x >= prevX && x <= pt.x){
                return pt;
            }

            prevX = pt.x;
        }

        return pt;
    }

    // 양의 이미지가 고정되어 걷는게 아니라 언덕에 따라 양이 위아래로 왔다갔다하면서 이동되게.
    getQuadValue(p0,p1,p2,t){
        return (1-t) * (1-t) * p0 + 2 * (1-t) * t * p1 + t * t * p2;
    }

    getPointOnQuad(x1, y1, x2, y2, x3 ,y3, t){
        const tx = this.quadTangent(x1,x2,x3,t);
        const ty = this.quadTangent(y1,y2,y3,t);
        // 각도를 구하기
        const rotation = -Math.atan2(tx,ty) + (90*Math.PI/180);

        return {
            x: this.getQuadValue(x1,x2,x3,t),
            y: this.getQuadValue(y1,y2,y3,t),
            rotation : rotation
        }
    }

    // 양의 이미지가 기울기에 따라서 이미지 방향을 틀어준다. (진짜 양이 언덕을 걷는 것처럼 양의 이미지를 살짝살짝 틀어주는거야...! )
    quadTangent(a,b,c,t){
        return 2 * (1-t) * (b-a) + 2 * (c-b) * t;
    }

}