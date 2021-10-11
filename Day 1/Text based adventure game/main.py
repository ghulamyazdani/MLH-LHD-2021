import time

yes = ["Y", "y", "Yes"]
no = ["N", "n", "No"]
correct = 0  # Storing the correct answers

name = input("What's your name?")  # Storing the user's name

print
"\nOK, " + name + ", let's get started. Remember, the following answers are only True or False."
time.sleep(2)

print("\nAre you a Ghost?")
choice = input(">>> ")
if choice in yes:
    correct += 1  # If correct, the user gets one point
else:
    correct += 0

print("\nDo you like Horror stories/movies ?")
choice = input(">>> ")
if choice in no:
    correct += 1
else:
    correct += 0

print("\nDo you think ghost are real?")
choice = input(">>> ")
if choice in no:
    correct += 1
else:
    correct += 0

print("\nDo you think Ouija board is legit?")
choice = input(">>> ")
if choice in yes:
    correct += 1
else:
    correct += 0

print("\nDo you believe in people who say they are possesed")
choice = input(">>> ")
if choice in yes:
    correct += 1
else:
    correct += 0

print("\nHave you ever seen a ghost or been haunted?")
choice = input(">>> ")
if choice in no:
    correct += 1
else:
    correct += 0

print
"\nYou're finished, " + name + ". You got", correct, "out of 6 correct."