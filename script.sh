#!/bin/bash

# AUTHOR : github.com/r-aravind
# MADE WITH <3 BY DEVCOM
# 

ls task-1 > names.txt 

echo "TASK 1 LINKS" > README.MD

awk '

BEGIN { 
	print("\n") 
}

{ 
	print($0, " -- .github.io/task-1/", $0, "/", OFS="") 

}' names.txt >> README.MD

rm names.txt
