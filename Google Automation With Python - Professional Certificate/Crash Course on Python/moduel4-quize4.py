
# > Question 1
def format_address(address_string):
    # Declare variables
    house_number, street_name = 0, ""
    # Separate the address string into parts
    address = address_string.split()
    # Traverse through the address parts
    house_number = address[0]
    for addr in address[1:]:
        street_name += addr + ' '
    # Determine if the address part is the
    # house number or part of the street name
    # Does anything else need to be done
    # before returning the result?
    # Return the formatted string
    return "house number {} on street named {}".format(house_number, street_name)


print(format_address("123 Main Street"))
# Should print: "house number 123 on street named Main Street"

print(format_address("1001 1st Ave"))
# Should print: "house number 1001 on street named 1st Ave"

print(format_address("55 North Center Drive"))
# Should print "house number 55 on street named North Center Drive"

# > Question 2


def highlight_word(sentence, word):
    return(sentence.replace(word, word.upper()))


print(highlight_word("Have a nice day", "nice"))
print(highlight_word("Shhh, don't be so loud!", "loud"))
print(highlight_word("Automating with Python is fun", "fun"))

# > Question 3


def combine_lists(list1, list2):
    # Generate a new list containing the elements of list2
    # Followed by the elements of list1 in reverse order
    list1 = list1[::-1]
    return list2 + list1


Jamies_list = ["Alice", "Cindy", "Bobby", "Jan", "Peter"]
Drews_list = ["Mike", "Carol", "Greg", "Marcia"]

print(combine_lists(Jamies_list, Drews_list))

# > Question 4


def squares(start, end):
    return [n * n for n in range(start, end+1)]


print(squares(2, 3))  # Should be [4, 9]
print(squares(1, 5))  # Should be [1, 4, 9, 16, 25]
print(squares(0, 10))  # Should be [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# > Question 5
"""
Complete the code to iterate through the keys and values of the
car_prices dictionary, printing out some information about each one.
"""


def car_listing(car_prices):
    result = ""
    for keys, values in car_prices.items():
        result += "{} costs {} dollars".format(keys, values) + "\n"
    return result


print(car_listing({"Kia Soul": 19000, "Lamborghini Diablo": 55000,
                   "Ford Fiesta": 13000, "Toyota Prius": 24000}))

# > Question 6
"""
Taylor and Rory are hosting a party. They sent out invitations, and each one collected responses into dictionaries, with names of their friends and how
many guests each friend is bringing. Each dictionary is a partial list, but Rory's list has more current information about the number of guests.
Fill in the blanks to combine both dictionaries into one, with each friend listed only once, and the number of guests from Rory's dictionary taking
precedence, if a name is included in both dictionaries. Then print the resulting dictionary.
"""


def combine_guests(guests1, guests2):
    # Combine both dictionaries into one, with each key listed
    # only once, and the value from guests1 taking precedence
    return {**guests1, **guests2}


Rorys_guests = {"Adam": 2, "Brenda": 3, "David": 1,
                "Jose": 3, "Charlotte": 2, "Terry": 1, "Robert": 4}
Taylors_guests = {"David": 4, "Nancy": 1,
                  "Robert": 2, "Adam": 1, "Samantha": 3, "Chris": 5}

print(combine_guests(Rorys_guests, Taylors_guests))


# > Question 7
"""
Use a dictionary to count the frequency of letters in the input string. Only letters should be counted,
not blank spaces, numbers, or punctuation. Upper case should be considered the same as lower case.
For example, count_letters("This is a sentence.") should return {'t': 2, 'h': 1, 'i': 2, 's': 3, 'a': 1, 'e': 3, 'n': 2, 'c': 1}.
"""


def count_letters(text):
    result = {}
    text = text.lower()
    # Go through each letter in the text
    for letter in text:
        count = 0
        # Check if the letter needs to be counted or not
        if letter in result:
            result[letter] = result[letter] + 1
        elif (97 <= ord(letter) <= 122):
            # Add or increment the value in the dictionary
            result[letter] = count + 1
    return result


print(count_letters("AaBbCc"))
# Should be {'a': 2, 'b': 2, 'c': 2}

print(count_letters("Math is fun! 2+2=4"))
# Should be {'m': 1, 'a': 1, 't': 1, 'h': 1, 'i': 1, 's': 1, 'f': 1, 'u': 1, 'n': 1}

print(count_letters("This is a sentence."))
# Should be {'t': 2, 'h': 1, 'i': 2, 's': 3, 'a': 1, 'e': 3, 'n': 2, 'c': 1}

# > Question 8
"""
What do the following commands return when animal = "Hippopotamus"?
print(animal[3:6])
print(animal[-5])
print(animal[10:])

Ans: pop, t, us
"""

# > Question 9
"""
Question 9

What does the list "colors" contain after these commands are executed?
colors = ["red", "white", "blue"]
colors.insert(2, "yellow")
Ans: ['red', 'white', 'yellow', 'blue']
"""

# > Question 10
"""
What do the following commands return?
host_addresses = {"router": "192.168.1.1", "localhost": "127.0.0.1", "google": "8.8.8.8"}
host_addresses.keys()

Ans: ['router', 'localhost', 'google']
"""
