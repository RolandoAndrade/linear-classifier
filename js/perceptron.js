class Sigmoid
{
    f(x)
    {
        return 1/(1+Math.exp(-x));
    }

    dF(x)
    {
        return this.f(x)*(1-this.f(x));
    }
}
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
}

class Perceptron
{
    constructor(numberOfInputs, activationFunction, learningRate=0.1)
    {
        this.activationFunction = activationFunction;
        this.weights=[];
        this.bias=Math.random()*2-1;
        for(let i=0;i<numberOfInputs;i++)
        {
            this.weights.push(Math.random()*2-1);
        }
        this.weights=new Vector(this.weights);
        this.learningRate=learningRate;
    }

    getOutput(input)
    {
        let x=new Vector(input);
        return this.activationFunction.f(this.weights.dot(x));
    }

    getOutputAll(inputs)
    {
        let ans=[];
        for(let i=0;i<inputs.length;i++)
        {
            ans.push(this.getOutput(inputs[i]));
        }
        return ans;
    }

    learnByOneInput(input, expectedOutput)
    {
        let x = new Vector(input);
        let z = this.weights.dot(x);
        let delta = (this.activationFunction.f(z)-expectedOutput)*this.activationFunction.dF(z);
        let gradient = x.sca(delta);
        this.weights=this.weights.sub(gradient.sca(this.learningRate));
        this.bias=delta;
    }
}