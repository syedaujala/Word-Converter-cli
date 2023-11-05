#! /usr/bin/env

import inquirer from "inquirer";

const answer:{
    sentence:string
} =await inquirer.prompt([
    {
        type:"input",
        name:"sentence",
        message:"Enter your sentence to count the word:"
    }
])

const words =answer.sentence.split(" ")
console.log(`Your sentence word count is ${words.length}`);