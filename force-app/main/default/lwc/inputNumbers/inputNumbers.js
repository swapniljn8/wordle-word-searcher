import { LightningElement,track,wire } from 'lwc';
//import jquery from '@salesforce/resourceUrl/jquery';
import bootstrap from '@salesforce/resourceUrl/bootstrap513';

export default class InputNumbers extends LightningElement {
    @track mapofNumber = [];
    @track options = [];
    @track pattern;
    @track includedLetter;
    @track words = [];
    @track character;
    @track letterOptions = [];
        
    
    connectedCallback(){
        this.generateOptions(this.character);
    }
    /* get options() {
        console.log(this.character);
      //  this.generateLetters(this.character);
        for(let i = 1; i<=26;++i) {
            if(this.character === 'z')//adding condition for the situation when there is some values present in Patter, Include , Exclude field.
                break;
            this.letterOptions({value:this.character, label:this.character});
            console.log(this.character);
            this.character = String.fromCharCode(this.character.charCodeAt(0) + 1)
          }
        return this.letterOptions;
    }  */
     generateOptions(letter) {
         if(letter != null) {
            for(let i = 1; i<=26;++i) {
                console.log(letter);
                letter = String.fromCharCode(letter.charCodeAt(0) + 1);
                this.letterOptions.push({value:letter, label:letter});
              }
            this.letterOptions;
         }
         else {
             
         }
        
    }
    fetchWords(event) {
       /*  this.takeLetterFromPattern(this.pattern);
        this.takeLetterFromIncluded(this.includedLetter); */
        //concat : to join two arrays into one

    }
    /* fixed(event) {
        let labelName = event.detail.label;
        console.log(labelName);
        mapofNumber.push({key:event})
    } */
    onProvidingPattern(event) {
        console.log('onProvidingPattern=',event.detail.value);
        setTimeout(() => {
            this.pattern = event.detail.value;
            console.log('pattern=',this.pattern);
        }, 0);
    }
    onProvidingIncluded(event) {
        let included = event.detail.value; 
        console.log('onProvidingIncluded=',included);
        setTimeout(()=> {
            this.includedLetter = included; 
            console.log('includedLetter=',this.includedLetter);
        }, 0);
    }
    takeLetterFromPattern(word) {

    }
    takeLetterFromIncluded(word) {
        
    }
    onExcludingLetter(event) {
        let excludedLetters = event.detail.value;
        console.log('excludedLetters=',excludedLetters);
    }
}