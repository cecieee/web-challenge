#!/bin/bash


# 	
# 	Script to automatically generate the README with links to all tasks and induvidual folders
#




echo "# WEB CHALLENGE" > README.MD
echo "" >> README.MD
echo "" >> README.MD

for d in */ ; do

	if [ "$d" != "others/" ]; then	
		
		echo "$d"

		ls $d  > names.txt

		echo "## $d LINKS" >> README.MD

		awk -v d=$d '

		BEGIN 	{ 
        		print("\n") 
		}	

		{ 
        		print("* ", $0, ": [click here to view page](https://cecieee.github.io/web-challenge/", d, $0, "/)", OFS="") 
        
		}' names.txt >> README.MD

		rm names.txt
	
		echo "" >> README.MD

	fi

done


# 
#	MADE with <3 by DEVCOM
#

