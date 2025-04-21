

// Salary strategies:
// - 5% annual bonus for employees with 3+ years of service
// - 10% performance bonus for scores 8+
// - 15% extra for Engineering department
// - 7% tax deduction on total salary



Employees= [
    { name: "Alice", baseSalary: 5000, department: "Engineering", yearsOfService: 4, performanceScore: 8 },
    { name: "Bob", baseSalary: 4500, department: "Marketing", yearsOfService: 2, performanceScore: 7 },
    { name: "Charlie", baseSalary: 6000, department: "Engineering", yearsOfService: 7, performanceScore: 9 },
    { name: "Diana", baseSalary: 5500, department: "HR", yearsOfService: 3, performanceScore: 6 }
  ]







//   Employees.forEach(element => {
//    console.log(element)
//   })


Employees.forEach(element => {

    baseSalary = element.baseSalary

    service = element.yearsOfService

    scores = element.performanceScore

    department = element.department

    userName = element.name

    OriginalSalary = element.baseSalary
    
    if(service>3){
        bonuses= baseSalary*5/100
        baseSalary+=bonuses
    }

    if(scores>8){
        bonuses= baseSalary*10/100
        baseSalary+=bonuses
    }

    if(department=="Engineering"){
        bonuses= baseSalary*15/100
        baseSalary+=bonuses
    }

    tax = baseSalary*7/100
    Finalsalary=baseSalary-tax

    console.log(`${userName} - OriginalSalary is ${OriginalSalary} ,Final salary after all calculations ${Finalsalary} `)
    
   })