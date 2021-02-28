// Palindrom
// function Pal(str: string) {
//     if (str.length % 2 == 0){
//         for (let i = 0, j = str.length-1; i < str.length / 2, j >= str.length / 2; i++, j--){
//             // console.log(`${str[i]} and ${str[j]}`)
//             if (str[i] !== str[j]){
//                 return 'No'
//             }
//         }
//         return 'Yes'
//     } else{
//         for (let i = 0, j = str.length-1; i < Math.ceil(str.length / 2), j >= Math.ceil(str.length / 2); i++, j--){
//             if (str[i] !== str[j]){
//                 return 'No'
//             }
//         }
//         return 'Yes'
//     }
// }
// console.log(Pal('anna'))

// spinWords
// function spinWords(words: string) {
//     let arrWords = words.split(' ')
//     let result = arrWords.map(elem => {
//         if (elem.length >= 5){
//             return elem.split('').reverse().join('')
//         }else return elem
//     })
//     return result.join(' ')
// }
//
// console.log(spinWords('Hey fellow warriors'))
// console.log(spinWords('Warriors'))

// stat
// function stat(str: string) {
//     let min = 0
//     let max = -999999999999999999999
//     let arr = str.split(',')
//     let newArr = arr.map(elem => elem.split('|'))
//     let timeArr = newArr.map(elem => new Date(0, 0, 0, +elem[0], +elem[1], +elem[2]).getTime())
//     let sortTimeArr = timeArr.sort(compareNumbers)
//     let median = 0
//     let cnt = 0
//
//     for (let i = 0; i < timeArr.length; i++) {
//         if (timeArr[i] < min) {
//             min = timeArr[i]
//         }
//         if (timeArr[i] > max) {
//             max = timeArr[i]
//         }
//     }
//     let result = new Date(max).getTime() - new Date(min).getTime()
//     // let resultDate = new Date(result)
//
//     let hour = hours(result)
//     let minutes = minutess(result)
//     let sec = secondss(result)
//     // let range = `${hour}|${minutes}|${sec}`
//     for (let k of timeArr) {
//         cnt += k
//     }
//
//
//     let rangeDate = new Date(result)
//     let rangeString = new Date(rangeDate.setHours(rangeDate.getHours() - 3)).toString()
//     let rangeStringArray = rangeString.split(' ')
//     // let range = rangeStringArray[4].split(':').join('|')
//
//
//     let AverageString = new Date(cnt / timeArr.length).toString()
//     let AverageArray = AverageString.split(' ')
//     // let Average = AverageArray[4].split(':').join('|')
//
//     if (timeArr.length % 2 !== 0) {
//         let sortTimeArr = timeArr.sort(compareNumbers)
//         median = sortTimeArr[Math.ceil(timeArr.length / 2) - 1]
//     } else if (timeArr.length % 2 == 0) {
//         median = (sortTimeArr[(sortTimeArr.length / 2) - 1] + sortTimeArr[sortTimeArr.length / 2]) / 2
//     }
//
//     let medianString = new Date(median).toString()
//     let medianArray = medianString.split(' ')
//     // let medianResult = medianArray[4].split(':').join('|')
//
//     // let range = `${hour}|${minutes}|${sec}`
//     let range = rangeStringArray[4].split(':').join('|')
//     let Average = AverageArray[4].split(':').join('|')
//     let medianResult = medianArray[4].split(':').join('|')
//
//     return `Range: ${range} Average: ${Average} Median: ${medianResult}`
//     // return rangeStringArray
// }
//
// function hours(number) {
//     if (Math.floor((number % 86400000) / 3600000).toString().length == 1) {
//         return `0${Math.floor((number % 86400000) / 3600000)}`
//     } else {
//         return Math.floor((number % 86400000) / 3600000)
//     }
// }
//
// function minutess(number) {
//     if (Math.round(((number % 86400000) % 3600000) / 60000).toString().length == 1) {
//         return `0${Math.round(((number % 86400000) % 3600000) / 60000)}`
//     } else {
//         return Math.round(((number % 86400000) % 3600000) / 60000)
//     }
// }
//
// function secondss(number) {
//     if (Math.round((((number % 86400000) % 3600000) % 60000) / 1000).toString().length == 1) {
//         return `0${Math.round((((number % 86400000) % 3600000) % 60000) / 1000)}`
//     } else {
//         return Math.round((((number % 86400000) % 3600000) % 60000) / 1000)
//     }
// }
//
// function compareNumbers(a, b) {
//     return a - b;
// }
//
// console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"))
// console.log(stat('01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17'))
// console.log(stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41'))

// longest
// function longest(s1, s2) {
//     let str1: string = s1.split('').sort().join('')
//     let str2: string = s2.split('').sort().join('')
//     let str3: string[] = (str1 + str2).split('').sort()
//     let m: string = str3[0]
//     let result: string[] = [m]
//     for (let i = 0; i < str3.length; i++){
//         if (m !== str3[i]){
//             m = str3[i]
//             result.push(m)
//         }
//     }
//     return result.join('')
// }
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))

// wordMesh
// function wordMesh(arr: string[]){
//     let result: string[] = []
//     let m: string = ''
//     for (let i = 0, j = 1; i <= arr.length-2, j <= arr.length-1; i++, j++){
//         m = ''
//         for (let k = 0; k < arr[i].length; k++){
//             for (let jj = 0; jj < arr[j].length; jj++){
//                 // console.log(`${arr[i][k]} and ${arr[j][jj]}`)
//                 if (m == ''){
//                     if (arr[i][k] == arr[j][jj]){
//                         // result.push(arr[i][k])
//                         m+= arr[i][k] + arr[i][k+1]
//                     }
//                 }else if (m !== ''){
//                     if (arr[j].indexOf(m) !== -1 ){
//                         result.push(m)
//                         m+= arr[i][k]
//                     }
//                 }
//                 console.log(`${m} and ${arr[j][jj]}`)
//                 // if (arr[i][k] == arr[j][jj]){
//                 //     // result.push(arr[i][k])
//                 //     m+= arr[i][k]
//                 // }
//             }
//         }
//     }
//     // return result.join('')
//     console.log(m)
// }
//
// // console.log(wordMesh(["beacon","condominium","umbilical","california"]))
// // console.log(wordMesh(["beacon","condominium"]))
// wordMesh(["beacon","condominium"])

// Help the bookseller
// function stockList(listOfArt, listOfCat) {
//     let obj = {}
//     let k = listOfArt.map(elem => elem.slice(0, 1))
//     let result = listOfArt.map(elem => {
//         return elem.split(' ')
//     })
//     let result2 = result.map(elem => {
//         return elem[1].split(' ')
//     })
//     let arrNum = result2.map(elem => elem[0])
//     for (let i = 0; i < k.length; i++) {
//         if (typeof obj[k[i]] !== "undefined") {
//             obj[k[i]] += +arrNum[i]
//         }
//         if (typeof obj[k[i]] === "undefined") {
//             obj[k[i]] = +arrNum[i]
//         }
//     }
//     let keys = Object.keys(obj)
//     let resultObj = {}
//     for (let k of listOfCat){
//         for (let i = 0; i < Object.keys(obj).length; i++){
//             if (k == keys[i]){
//                 resultObj[k] = obj[k]
//             }
//         }
//     }
//
//     console.log(resultObj)
// }
//
// stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"])
// // stockList(["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"])

// Who likes it?
// function likes(names: string[]) {
//     if (names.length == 0) return `no one likes this`
//     else if (names.length == 1) return `${names[0]} likes this`
//     else if (names.length == 2) return `${names[0]} and ${names[1]} like this`
//     else if (names.length == 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     else if (names.length > 3) return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
// }
//
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'roman']))

// spoonerize
// function spoonerize(words: string) {
//     let arrWord = words.split(' ')
//     return `${arrWord[1].charAt(0) + arrWord[0].slice(1)} ${arrWord[0].charAt(0) + arrWord[1].slice(1)}`
// }
// console.log(spoonerize("nit picking"))

// Positions Average
// function posAverage(s: string) {
//     let equalCnt = 0
//     let cnt = 0
//     let arrStr = s.split(', ')
//     let res = arrStr.length * arrStr[0].length
//     let res2 = (arrStr.length * arrStr.length-1) / 2   //(n*(n-1)) / 2
//     for (let i = 0; i < arrStr.length-1; i++){
//         cnt++
//         for (let j = cnt; j < arrStr.length; j++){
//             for (let k = 0; k < arrStr[0].length; k++){
//                 console.log(`${arrStr[i][k]} a ${arrStr[j][k]} |i = ${i}, k = ${k} a j = ${j}, k = ${k}`)
//                 if (arrStr[i][k] == arrStr[j][k]){
//                     equalCnt++
//                 }
//             }
//             console.log(`_----------------------------_`)
//         }
//     }
//     return (equalCnt / res).toFixed(10)
//     // console.log(equalCnt)
//     // console.log((equalCnt / res).toFixed(10))
//     // console.log(res)
//     // console.log(res2)
//     // console.log(arrStr)
// }
// // console.log(posAverage("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"))
// // posAverage("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096")
// posAverage("444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490")
// // posAverage("6900690040, 4690606946, 9990494604")

// Sums of Parts
// function partsSums(ls: number[]) {
//     let cnt: number = 0
//     let result: number[] = []
//     let long: number = ls.length
//     for (let i = 0; i <= long; i++){
//         for (let j = 0; j < ls.length; j++){
//             cnt += ls[j]
//         }
//         result.push(cnt)
//         cnt = 0
//         ls.splice(0,1)
//     }
//     return result
// }
// partsSums([0, 1, 3, 6, 10])
// console.log(partsSums([0, 1, 3, 6, 10]))
// partsSums([1, 2, 3, 4, 5, 6])
// partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])

