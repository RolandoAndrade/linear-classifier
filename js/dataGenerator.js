class DataGenerator
{
    constructor()
    {
        this.m=Math.random()*10-5;
        this.b=Math.random()*10-5;
    }

    generateExpected(x,y)
    {
        //y=mx+b-> y-mx-b=0
        return y-this.m*x-this.b>0
    }

    generate(n,lim=10)
    {
        let data={inputs:[],outputs:[]};
        for(let i=0;i<n;i++)
        {
            let ax=[Math.floor(Math.random()*2*lim-lim),Math.floor(Math.random()*2*lim-lim)];
            data.inputs.push(ax);
            data.outputs.push(this.generateExpected(ax[0],ax[1]));
        }
        return data;
    }
}


