const argumento = process.argv.slice(2);

const numero = argumento[0];
//const numero = 10;

if(numero==10)
{
console.log('O número é DEZ');
}
    else if(numero > 10)            
    {
        console.log('O número é maior que DEZ');
    }
              else
              {
                  console.log('O número é menor que DEZ');
              }

              