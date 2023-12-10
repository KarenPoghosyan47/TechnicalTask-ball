//ստանում ենք կտավի տարրը և դրա 2D համատեքստը
const canvas = document.getElementById('board');
const context = canvas.getContext('2d');
const balles = []; //Զանգված՝ շրջանագծի օրինակները պահելու համար

//Կոճակ սեղմելու իրադարձություն
canvas.addEventListener('click', function(event) {
    //ստանում ենք սեղմման կոորդինատները կտավի համեմատ
    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;
    let r = Math.random() * 20 + 10;//Պատահական շառավիղ  նոր շրջանագծ

    //Ստեղծել շրջանակի նոր օրինակ և ավելացնել այն զանգվածի մեջ
    const ball = new Ball(x, y, r, context);
    balles.push(ball);
});

//Շրջանակ նկարելու գործառույթ
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height); //Յուրաքանչյուր շրջանակից առաջ կտավը մաքրել
    
    //Թարմացնել և գծել զանգվածի յուրաքանչյուր շրջան
    balles.forEach(ball => {
        ball.update();
    })
    //Հաջորդ անիմացիոն կադրի պահանջը
    requestAnimationFrame(draw);
}

draw();//Սկսվում է անիմացիայի առաջին կադրը