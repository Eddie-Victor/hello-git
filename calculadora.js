const argumentos = process.argv.slice(2);

const num1 = parseInt(argumentos[0]);
const num2 = parseInt(argumentos[1]);


        //soma
        const soma  = function (num1, num2) 
        {
            console.log(`Soma: ${num1+num2}`);

        }
        soma(num1, num2);
    
   
                //subtração
                const subtracao = function (num1, num2) 
                {
                console.log(`Subtração: ${num1-num2}`);
                }

                subtracao (num1, num2);


                    //divisão
                    const divisao = function (num1, num2) 
                    {
                    console.log(`Divisão: ${num1/num2}`);
                    }

                     divisao (num1, num2);


                        //multiplicação
                        const multiplicacao = function (num1, num2) 
                        {
                        console.log(`Multiplicação: ${num1*num2}`);
                        }

                        multiplicacao (num1, num2);
                        

                            //Potência
                            const potencia = function (num1, num2) 
                            {
                            console.log(`Potência: ${num1**num2}`);
                            }

                            potencia (num1, num2);