class Vector
{
    constructor(vector)
    {
        this.vector=[...vector];
    }

    dot(x)
    {
        let r=0;
        for(let i=0;i<this.vector.length;i++)
        {
            r+=this.vector[i]*x.vector[i];
        }
        return r;
    }

    sca(x)
    {
        for(let i=0;i<this.vector.length;i++)
        {
            this.vector[i]*=x;
        }
        return new Vector(this.vector);
    }

    sub(x)
    {
        for(let i=0;i<this.vector.length;i++)
        {
            this.vector[i]-=x.vector[i];
        }
        return new Vector(this.vector);
    }

    get(i)
    {
        return this.vector[i];
    }
}