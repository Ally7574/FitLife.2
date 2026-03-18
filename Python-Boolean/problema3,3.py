valor1 = input("digite o primeiro numero: ")
numA = float(valor1)
op = input("coloque o operador (+,-,*,/): ")
valor2 = input("digite o segundo numero: ")
numB = float(valor2)

if op == "+":
    print(numA + numB)
elif op == "-":
    print(numA - numB)
elif op == "*":
    print(numA * numB)
elif op == " /":
    if numB != 0:
        print(numA / numB)
    else:
        print("não existe multiplicação por 0")
