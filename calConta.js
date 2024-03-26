const Calconta=(function domestica(){
    value=0;
        function energia(saldo){
            return value+=saldo;
        }
    valor=0;
        function agua(pontos){
            return valor+=pontos;
        } 
    gasto=0;
        function gas (numero){
            return gasto+=numero;
        }
        return {
            adicaocontakillo1(){
                return energia (1);
            },
            adicaocontakillo10(){
                return energia (10);
            },
            adicaocontakillo100(){
                return energia (100);
            },
            luz(){
                value=value*0.89;
                 return console.log("O valor da sua conta de luz é: R$",value);
            },
            adicaocontacubico1(){
                return agua (1);
            },
            adicaocontacubico5(){
                return agua (5);
            },
            adicaocontacubico10(){
                return agua (10);
            },
            adicaocontagas10(){
                return gas (10);
            },
            adicaocontagas50(){
                return gas (50);
            },
            adicaocontagas100(){
                return gas (100);
            },

            hgua(){
                if(valor<=10){
                    valor=24.47;
                    return console.log("O valor da conta de agua é: R$",valor);
                }if(valor<=20){
                    valor=24.47+((valor-10)*3.85);
                    return console.log("O valor da conta de agua é: R$",valor);
                }if(valor<=30){
                    valor=24.47+38.50+((valor-20)*9.59);
                    return console.log("O valor da conta de agua é: R$",valor);
                }if(valor<=50){
                    valor=24.47+38.50+95.90+((valor-30)*9.59);
                    return console.log("O valor da conta de agua é: R$",valor);
                }if(valor>50){
                    valor=24.47+38.50+95.90+95.90+((valor-50)*10.58);
                    return console.log("O valor da conta de agua é: R$",valor);
                }
            },
            hgas(){
                if(gasto<=1){
                    gasto=0
                     return console.log("O valor da conta de gas é: R$",gasto);
                }if(gasto<=3){
                    gasto=gasto*5.28;
                     return console.log("O valor da conta de gas é: R$",gasto);
                }if(valor<=7){
                    gasto=10.56+(gasto*2.05);
                     return console.log("O valor da conta de gas é: R$",gasto);
                }if(gasto<=14){
                    gasto=10.58+8.20+(gasto*4.01);
                     return console.log("O valor da conta de gas é: R$",gasto);
                }if(gasto<=34){
                    gasto=10.58+8.20+28.07+(gasto*4.45);
                     return console.log("O valor da conta de gas é: R$",gasto);
                }if(gasto<=600){
                    gasto=10.58+8.20+28.07+89.00+(gasto*4.87);
                     return console.log("O valor da conta de gas é: R$",gasto);
                }if(gasto<=1000){
                    gasto=10.58+8.20+28.07+89.00+2.326,26(gasto*4.11);
                     return console.log("O valor da conta de gas é: R$",gasto);
                }
            },




        }
})();
Calconta.adicaocontakillo100();
Calconta.adicaocontakillo100();
Calconta.adicaocontakillo100();
Calconta.adicaocontakillo10();
Calconta.adicaocontakillo10();
Calconta.adicaocontakillo10();
Calconta.adicaocontakillo10();
Calconta.adicaocontakillo10();

Calconta.adicaocontacubico10();
Calconta.adicaocontacubico10();
Calconta.adicaocontacubico10();
Calconta.adicaocontacubico1();
Calconta.adicaocontacubico1();
Calconta.adicaocontacubico1();

Calconta.adicaocontagas100();
Calconta.adicaocontagas10();

Calconta.hgua();
Calconta.hgas();
Calconta.luz();