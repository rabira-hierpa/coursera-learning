"""
Write a program to read through the mbox-short.txt and figure out who has sent the greatest number of mail messages. 
The program looks for 'From ' lines and takes the second word of those lines as the person who sent the mail. 
The program creates a Python dictionary that maps the sender's mail address to a count of the number of times they appear in the file. 
After the dictionary is produced, the program reads through the dictionary using a maximum loop to find the most prolific committer.
"""

name = input("Enter file:")
if len(name) < 1:
    name = "mbox-short.txt"
handle = open(name)
count = dict()
for lines in handle:
    singLine = lines.split()
    for words in singLine:
        if words.startswith('From') and len(singLine) == 2:
            sender = singLine[1]
            count[sender] = count.get(sender, 0) + 1

bigCount = None
bigSender = None
for sender, emails in count.items():
    if bigCount is None or emails > bigCount:
        bigCount = emails
        bigSender = sender

print(bigSender, bigCount)
