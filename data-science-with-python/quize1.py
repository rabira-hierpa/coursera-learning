import re
string = 'bat, lat, mat, bet, let, met, bit, lit, mit, bot, lot, mot'
result = re.findall('b[ao]t', string)
print(result)

host_addresses = {"router": "192.168.1.1",
                  "localhost": "127.0.0.1", "google": "8.8.8.8"}
host_addresses.keys()
print(host_addresses.keys())

colors = ["red", "white", "blue"]
colors.insert(2, "yellow")

print(colors)
animal = "Hippopotamus"
print(animal[3:6])
print(animal[-5])
print(animal[10:])
