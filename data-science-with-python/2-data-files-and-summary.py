# Data files and Summary Stats
import csv
% precison 2

with open('./datasets/mgp.csv') as csvfile:
    mpg = list(csv.DictReader(csvfile))

print(mpg)
