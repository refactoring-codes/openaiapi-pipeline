#!/usr/bin/node
import { Configuration, OpenAIApi } from "openai";
import { readFileSync, writeFileSync } from "fs";

const sourceCodeFileName = "utils.js";
const  testCodeFileName = "utils.spec.js";
const question = "Can you write test for karma and angular for this code: ";

getResult(sourceCodeFileName, testCodeFileName, question);

// Java
const sourceCodeFileName2 = "SomeClass.java";
const  testCodeFileName2 = "SomeClassTest.java";
const question2 = "Can you write unit test Junit for this Java Code : ";

getResult(sourceCodeFileName2, testCodeFileName2, question2);

const sourceCodeFileName3 = "SomeClass.java";
const  testCodeFileName3 = "explain.txt";
const question3 = "Can you explain what this java class ist doing: ";

getResult(sourceCodeFileName3, testCodeFileName3, question3);


async function getResult(sourceCodeFileName, testCodeFileName, question) {  
        
    //read sourceCodeFileName
    const fileContents = readFileSync('code/'+sourceCodeFileName,'utf8');

    // API
    const configuration = new Configuration({
        apiKey: "SOME_API_KEY",
    });
    const openai = new OpenAIApi(configuration);

    
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: question+fileContents,
        //max_tokens: 7,
        temperature: 0,
        max_tokens: 3600,
    });


    console.log(completion.data);

    const testFileContent = completion.data.choices[0].text;


    writeFileSync('code/'+testCodeFileName, testFileContent);
}
    





