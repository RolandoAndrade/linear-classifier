let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function drawData(data)
{
    new Rectangle(0,0,500,500,"#dfedff").draw();

    for(let i=0;i<data.inputs.length;i++)
    {
        if(data.outputs[i])
            new Rectangle(data.inputs[i][0]*25+250,data.inputs[i][1]*25*-1+250,5,5,"#616aff").draw();
        else
            new Rectangle(data.inputs[i][0]*25+250,data.inputs[i][1]*25*-1+250,5,5,"#ff566f").draw();
    }
    new Line().axis(250);
}


let data=new DataGenerator().generate(100);
drawData(data);
console.log(data);
new Line().draw(-1,1);








