const sampleData = [
    {
        name:'haider',
        age:19,
        degree:'computer science',
        university:"KU UBIT",
        year:'4th year',
    },
    {
        name:'ali',
        age:17,
        degree:'Mechanical Engineering',
        university:'NED',
        year:'2nd year',
    },
    {
        name:'imran',
        age:46,
        degree:'political sciences',
        university:'KU',
        year:'passed out'
    },
    {
        name:'yazdan',
        age:36,
        degree:'computer science',
        university:'fast',
        year:'passed out'
    },
    {
        name:'hasan',
        age:19,
        degree:'Arts',
        university:'KU',
        year:'2nd year'
    },
    {
        name:'murtaza',
        age:39,
        degree:'BBA',
        university:'IBA',
        year:'passed'
    },
    {
        name:'hussain',
        age:19,
        degree:'electrical engineering',
        university:'bahria',
        year:'4th year'
    },
    {
        name:'mehedi',
        age:18,
        degree:'civil engineering',
        university:'SSUET',
        year:'3rd year'
    },
    {
        name:'mohsin',
        age:17,
        degree:'CBM',
        university:'Marketing',
        year:'1st year'
    },
    {
        name:'Irshad',
        age:19,
        degree:'IR',
        university:'KU',
        year:'4th year'
    },
]

const dataSet = document.querySelector('.dataSet');
const arrayAnswer = document.querySelector('.arrayAnswer');


document.addEventListener('DOMContentLoaded',printTheDataSet);


function printTheDataSet(){
    sampleData.forEach(currentSample=>{   
        dataSet.innerHTML += `{${currentSample.name},${currentSample.age},${currentSample.university},${currentSample.year},${currentSample.degree}},     `;
        // `<div style="padding:10px;border:1px solid #e7e7e7;border-width:1px 2px"> The name 
        // is <b>${currentSample.name}</b>. The age is <b>${currentSample.age}</b>. 
        // The degree of the person is <b>${currentSample.degree}</b>. The person
        //  passed out in/current
        // studying in <b>${currentSample.year}</b> and the university is
        //  <b>${currentSample.university}
        // </b></div>
        // `
    })
}

document.addEventListener('click',(e)=>{
    const arrayMethodName = e.target.classList[1];
    switch(arrayMethodName){
        case 'map':
            JSArray.mapOperation();
            break;
        case 'filter':
            JSArray.filterOperation();
            break;
        case 'sort':
            JSArray.sortOperation();
            break;
        case 'reduce':
            JSArray.reduceOperation();
            break;
        case 'find':
            JSArray.findOperation();
            break;
        case 'foreach':
            JSArray.forEachOperation();
            break;
        case 'some':
            JSArray.someOperation();
            break;
        case 'every':
            JSArray.everyOperation();
            break;
        case 'includes':
            JSArray.includesOperation();
            break;
        default:
            return '';
    }
})

class JSArray{
    static mapOperation(){
        const sampleDataMapped = sampleData.map(currentSample=>{
            return {name:currentSample.name,age:currentSample.age}
        })

        console.log(sampleDataMapped);

        arrayAnswer.innerHTML = `
        The Given Data set is mapped into another array in such a way that the new array
         only contains the name and the age of the other array <br><br>`
        sampleDataMapped.forEach(currentSample=>{   
            arrayAnswer.innerHTML += `{${currentSample.name},${currentSample.age}}  ` ;
            // `<div style="padding:10px;border:1px solid #e7e7e7;border-width:1px 2px"> The name 
            // is <b>${currentSample.name}</b>. The age is <b>${currentSample.age}</b>. 
            // The degree of the person is <b>${currentSample.degree}</b>. The person
            //  passed out in/current
            // studying in <b>${currentSample.year}</b> and the university is
            //  <b>${currentSample.university}
            // </b></div>
            // `
        })
    }
    static filterOperation(){
        const sampleDataFiltered = sampleData.filter(currentSample=>{
            return currentSample.age < 30;
        })

        arrayAnswer.innerHTML = `
        The Given Data set is filtered into another array in such a way that the new
        array only contain the objects in which is the age is less than 30 <br><br>`
        sampleDataFiltered.forEach(currentSample=>{   
            arrayAnswer.innerHTML += `{${currentSample.name},${currentSample.age},${currentSample.university},${currentSample.year},${currentSample.degree}},     `;
            // `<div style="padding:10px;border:1px solid #e7e7e7;border-width:1px 2px"> The name 
            // is <b>${currentSample.name}</b>. The age is <b>${currentSample.age}</b>. 
            // The degree of the person is <b>${currentSample.degree}</b>. The person
            //  passed out in/current
            // studying in <b>${currentSample.year}</b> and the university is
            //  <b>${currentSample.university}
            // </b></div>
            // `
        })

    }
    static sortOperation(){ 
        const sampleDataSorted = sampleData.sort((a,b) =>{
            if(a.age>b.age){
                return 1;
            }
            return -1;
        });

        arrayAnswer.innerHTML = `
        The Given Data set is sorted in ascending order with respect to age in 
        another array<br><br>`
        sampleDataSorted.forEach(currentSample=>{   
            arrayAnswer.innerHTML += `{${currentSample.name},${currentSample.age},${currentSample.university},${currentSample.year},${currentSample.degree}},     `;
            // `<div style="padding:10px;border:1px solid #e7e7e7;border-width:1px 2px"> The name 
            // is <b>${currentSample.name}</b>. The age is <b>${currentSample.age}</b>. 
            // The degree of the person is <b>${currentSample.degree}</b>. The person
            //  passed out in/current
            // studying in <b>${currentSample.year}</b> and the university is
            //  <b>${currentSample.university}
            // </b></div>
            // `
        })
    }
    static reduceOperation(){
        const sampleDataReduced = sampleData.reduce((currentTotal,currentSample)=>{
            return currentTotal+currentSample.age;
        },0)

        
        arrayAnswer.innerHTML = `
        The Given Data set is reduced into a single value which is the sum of all
        the ages of the candidates. The sum is <b>${sampleDataReduced}.</b><br><br>`;   
        // `<div style="padding:10px;border:1px solid #e7e7e7;border-width:1px 2px"> The name 
        // is <b>${currentSample.name}</b>. The age is <b>${currentSample.age}</b>. 
        // The degree of the person is <b>${currentSample.degree}</b>. The person
        //  passed out in/current
        // studying in <b>${currentSample.year}</b> and the university is
        //  <b>${currentSample.university}
        // </b></div>
        // `
    }
    static findOperation(){
        const sampleDataFound = sampleData.find((currentSample)=>{
            return currentSample.degree === 'Mechanical Engineering';
        })

        arrayAnswer.innerHTML = `
        The find method is operated on the given Data set where is the condition is to 
        find the first candidate with the degree of mechancial engineering<br><br>`;
            arrayAnswer.innerHTML += `{${sampleDataFound.name},${sampleDataFound.age},${sampleDataFound.university},${sampleDataFound.year},${sampleDataFound.degree}},     `;
    }
    static forEachOperation(){
        arrayAnswer.innerHTML = `
        The foreach method is applied on the given Data set in such the way that each
         object is tranformed into a table entry with its corresponding data<br><br>`;
    
        sampleData.forEach(currentSample=>{   
            arrayAnswer.innerHTML += `
            <div style="padding:10px;border:1px solid #e7e7e7;border-width:1px 2px;
            margin-bottom:10px"> The name is <b>${currentSample.name}</b>. The age is 
            <b>${currentSample.age}</b>. The degree of the person is <b>
            ${currentSample.degree}</b>. The person passed out in/current studying in 
            <b>${currentSample.year}</b> and the university is
            <b>${currentSample.university}</b></div>
            `
        })
    }
    static someOperation(){
        arrayAnswer.innerHTML = `
        The some method is applied on the given Data set to search for atleast one of the 
        entry to be passed out <br><br>`;
        const sampleDataSome = sampleData.some((currentSample)=>{
            return currentSample.year === "passed out";
        })
        sampleDataSome ? (  
            arrayAnswer.innerHTML += `ANSWER: Yes atleast one of the listed candidates is passed out`
            ) : (
                arrayAnswer.innerHTML += `ANSWER: No not even one of the listed candidates is passed out`
            )

        arrayAnswer.innerHTML += `<br><br><b>NOTE: The Some method returns true as soon as the first entry of the array
        fulfills the condition</b>`
    }
    static everyOperation(){
        arrayAnswer.innerHTML = `
        The every method is applied on the given Data set to search for all of the 
        listed entries are computer science students or not<br><br>`;
        const sampleDataEvery = sampleData.every((currentSample)=>{
            return currentSample.degree === "computer science";
        })
        sampleDataEvery ? (  
            arrayAnswer.innerHTML += `ANSWER: Yes all of the listed candidates are computer science students`
            ) : (
                arrayAnswer.innerHTML += `ANSWER: No not all of the listed candidates are computer science students`
            )

        arrayAnswer.innerHTML += `<br><br><b>NOTE: The Every method checks the condition for all the entries of the
         array</b>`
    }
    // static includesOperation(){
    //     arrayAnswer.innerHTML = `
    //     The includes method looks into the array to check if an entry with the name of haider exists there<br><br>`;
    //     const sampleDataInclude = sampleData.includes('{');

    //     console.log(sampleDataInclude);

    //     // sampleDataInclude ? (  
    //     //     arrayAnswer.innerHTML += `ANSWER: Yes an entry with the name of haider exists`
    //     //     ) : (
    //     //         arrayAnswer.innerHTML += `ANSWER: No an entry with the name of haider does not exist in the array`
    //     //     )

    //     // arrayAnswer.innerHTML += `<br><br><b>NOTE: The Every method checks the condition for all the entries of the
    //     //  array</b>`
    // }
}




// function injectTheAnswer(Note,operatedSample){
    
//     arrayAnswer.innerHTML = `${Note}<br><br>`
//     operatedSample.forEach(currentSample=>{   
//         arrayAnswer.innerHTML += `{${currentSample.name},${currentSample.age},${currentSample.university},${currentSample.year},${currentSample.degree}},     `;
//         // `<div style="padding:10px;border:1px solid #e7e7e7;border-width:1px 2px"> The name 
//         // is <b>${currentSample.name}</b>. The age is <b>${currentSample.age}</b>. 
//         // The degree of the person is <b>${currentSample.degree}</b>. The person
//         //  passed out in/current
//         // studying in <b>${currentSample.year}</b> and the university is
//         //  <b>${currentSample.university}
//         // </b></div>
//         // `
//     })
// }