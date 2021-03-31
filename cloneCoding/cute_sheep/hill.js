export class Hill {

    // 여러 다양한 언덕을 만들기위한 생성자
    constructor(color, speed, total){
        this.color = color;
        this.speed = speed;
        this.total = total;
    }

    // 리사이징
   resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.points = [];
        // 화면 밖에서 양이 달려오는 것처럼 보이기위해
        this.gap = Math.ceil(this.stageWidth / (this.total -2));
        // Math.ceil : 소수점 이하의 값은 버림

       for( let i =0; i<this.total; i++){
           this.points[i] = {
               x: i*this.gap,
               y: this.getY()
           }
       }

    }

    // 실제 언덕을 그릴 함수
    draw(ctx){

        ctx.fileStyle = this.color;
        ctx.beginPath();

        let cur = this.points[0];
        let prev = cur;

        // 양의 위치를 찾는 값
        let dots = [];

        ctx.moveTo(cur.x, cur.y);

        let prevCx = cur.x;
        let prevCy = cur.y;

        for(let i = 1; i<this.points.length; i++){

            cur = this.points[i];

            const cx = (prev.x + cur.x)/2;
            const cy = (prev.y + cur.y)/2 ;

            // 좌표와 좌표를 연결하여 곡선그리기 => 좌표 : 포인트들(let cur)
            ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);

            dots.push({
                x1 : prevCx,
                y1: prevCy,
                x2: prev.x,
                y2 : prev.y,
                x3: cx,
                y3: cy
            });

            prev = cur;
            prevCx = cx;
            prevCy = cy;
        }

        ctx.lineTo(prev.x, prev.y);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();

        return dots;

    }

    // 언덕의 높이 값
    getY(){

        const min = this.stageHeight/8;
        const max = this.stageHeight-min;
        return min + Math.random() * max;


    }


}