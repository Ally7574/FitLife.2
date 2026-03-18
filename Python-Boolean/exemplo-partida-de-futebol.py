gols_A = int(input("gols do time A: "))
gols_B = int(input("gols do time B: "))

if gols_A == gols_B:
    print("Empate")
elif gols_A > gols_B:
    print("Time A venceu: ")
else:
    print("Time B venceu: ")