/**
 * Created by yuan on 2018/9/20.
 */

const students = [
    {id: 1, name: 'Ruler', group_id: 1, score: 92},
    {id: 2, name: 'Super', group_id: 1, score: 81},
    {id: 3, name: 'Dog', group_id: 1, score: 10},
    {id: 4, name: 'Beaty', group_id: 2, score: 75},
    {id: 5, name: 'Jason', group_id: 2, score: 88},
    {id: 6, name: 'Water', group_id: 2, score: 59},
    {id: 7, name: 'Codes', group_id: 3, score: 21},
    {id: 8, name: 'Wonderful', group_id: 3, score: 98},
    {id: 9, name: 'Caous', group_id: 3, score: 67},
]

const groups = [
    {id: 1, name: 'Red'},
    {id: 2, name: 'Yellow'},
    {id: 3, name: 'Green'},
]

//影射
const studentWithGrade = students.map(student => {
    return ({
        ...student,
        grade: student.score > 60 ? '通过' : '不通过'
    })
})

//分组
const studentInGroups = students.reduce((groups,student) =>{
    groups[student.group_id] = [...( groups[student.group_id]) || [] , student] //展开key为group_id 的value数组
    return groups
},{})

console.log(studentInGroups);


const studentWithGroupInfo = students.map(student=>{
    const group = groups.find( group => g.id === student.group_id)
    return {
        ...student,
        groupName:group.name
    }
})

console.log(studentWithGroupInfo);