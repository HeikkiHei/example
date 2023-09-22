#! /bin/bash

echo $PWD

CUR=$PWD

for f in $CUR/*
do
  if [ -f $f ]
    then
      echo -e "\n $f \n"
      cat "$f"
  fi
done
