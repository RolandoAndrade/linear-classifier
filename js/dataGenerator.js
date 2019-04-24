class DataGenerator
{
    generateExpected(x,y)
    {
        //y=mx+b-> y-mx-b=0
        let m = -1;
        let b = 1;
        return y-m*x-b>0
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


