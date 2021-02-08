

def do_math(a, b, kind="add"):
    if kind == 'add':
        return a + b
    else:
        return a - b


print(do_math(1, 2))

x = 'Dr. Christopher Brooks'

print(x[4:15])

# Looping through a dictionary
x = {'Rabra Hierpa': 'rabra@gmail.com', 'Guta Neme': 'guta@gmail.com'}
x['Rabra Hierpa']  # prints rabra@gmail.com

for name in x:
    print(x[name])  # print the values of the keys denoted by name

for name in x.values():
    print(name)  # prints only the values of the dictoionary i.e ignoring the keys

for name, email in x.items():
    print(name + " " + email)  # prints both keys and values in the dictonary


# List unpacking
x = ('Rabra', 'Hierpa', 'rabra@gmail.com')
fname, lname, email = x
print(fname)
print(lname)
print(email)


# More on strings
sales_record = {'price': 3.24','num_items}
