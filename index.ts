import inquirer from 'inquirer';

interface WordCount {
    [word: string]: number;
}

function countWords(text: string): number {
    const words: string[] = text.split(/\s+/);// separator for splitting the string
    const wordCount: WordCount = {};

    for (const word of words) {
        if (word !== '') {
            const sanitizedWord = word.toLowerCase().replace(/[^\w\s]/g, '');// to remove any characters that are not word characters 
            if (sanitizedWord in wordCount) {
                wordCount[sanitizedWord]++;
            } else {
                wordCount[sanitizedWord] = 1;
            }
        }
    }

    return words.length
}
//void, indicating that it does not return any value.
function printWordCount(wordCount: number): void {
    console.log('Analysis Result:');
    console.log('----------------');

    console.log('Word Count:');
    console.log(wordCount)
    
}

function main() {
    // Sample text to analyze
    const text = "Its not about who is skilled its about the hunger to win";
    console.log(text)

    const wordCount: number = countWords(text);
    printWordCount(wordCount);
}

main();