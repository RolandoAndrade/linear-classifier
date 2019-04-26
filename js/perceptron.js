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
        let z = this.weights.dot(x)+this.bias;//Wx+b
        let error = this.activationFunction.f(z)-expectedOutput;
        let delta = (error)*this.activationFunction.dF(z);
        let gradient = x.sca(delta*this.learningRate);
        this.weights=this.weights.sub(gradient.sca(this.learningRate));
        this.bias-=delta*this.learningRate;
        return error;
    }

    learn(inputs, expectedOutputs)
    {
        let err;
        for(let i=0;i<inputs.length;i++)
        {
            err = p.learnByOneInput(inputs[i],expectedOutputs[i]);
        }
        return err;
    }

    draw()
    {
        let w1=this.weights.get(0);
        let w2=this.weights.get(1);
        let y1=-(-10*w1+this.bias)/w2;
        let y2=-(10*w1+this.bias)/w2;
        new Line().drawBy(-10,-y1,10,-y2);
    }
}