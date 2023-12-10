
class Ball {
    constructor(x, y, radius, context) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.context = context;
        this.gravity = 4; //Ազատ անկման արագացում (ձգողականություն)
        this.velocity = 0; //Սկզբնական ուղղահայաց արագություն
        this.damping = 0.8; //Վերադարձի թուլացման գործակիցը
    }
//Կտավի վրա շրջան նկարելու մեթոդ
    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        // this.context.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
        this.context.fillStyle =" #ffff"
        this.context.fill();
        this.context.closePath();
    }
//Դիրքը թարմացնելու և շրջանագիծը գծելու մեթոդ
    update() {
        //Ուղղահայաց արագությունը թարմացվում է գրավիտացիայի հետ
        this.velocity += this.gravity;
        this.y += this.velocity;

       //Վերադարձի ցատկում կտավի ստորին եզրից
        if (this.y + this.radius >= this.context.canvas.height) {
            this.y = this.context.canvas.height - this.radius ;//Դիրքի ուղղում
            this.velocity *= -this.damping; // Վերադարձ էներգիայի կրճատում
        }
        this.draw(); //կանչում ենք մատուցման մեթոդը
    }
}