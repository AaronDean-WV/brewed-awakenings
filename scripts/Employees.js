import { getEmployees } from "./database.js"


const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}


// document.addEventListener(
//     "click",  // This is the type of event
//     (clickEvent) => {
//         /*
//             The target of a click event is the most specific HTML element
//             that was clicked by the user.
//         */
//         const itemClicked = clickEvent.target

//         /*
//             Only run the rest of the logic if a walker <li> was clicked
//         */
//         if (itemClicked.id.startsWith("employee")) {

//             /*
//                 Extract the primary key from the id attribute of the list
//                 item that you clicked on. Refer back to the code you
//                 wrote for each list item. Note the format of the id
//                 attribute ("walker--2" if you clicked on the second one).

//                 This code splits that string apart into an array, and
//                 captures the "2" and assigns it to be the value of the
//                 `walkerId` variable.

//                 Splitting a string in JavaScript:
//                     https://www.youtube.com/watch?v=u2ZocmM93yU

//                 Destructuring in JavaScript:
//                     https://www.youtube.com/watch?v=UgEaJBz3bjY
//             */
//             const [,employeeId] = itemClicked.id.split("--")

//             /*
//                 Now that you have the primary key of a walker object,
//                 find the whole object by iterating the walkers array.
//             */
//             for (const employeeObject of employees) {

//                 /*
//                     Compare the primary key of each walker to the one
//                     you have. As soon as you find the right one, display
//                     the window alert message.
//                 */
//                 if (employeeObject.id === parseInt(employeeId)) {
//                     window.alert(`${employeeObject.name} sold ${employeeObject.sold} products `)
//                 }
//             }
//         }
//     }
// )
     
document.addEventListener(
    "click",
      (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")
              for (const employeeObject of employees) {
                  if (employeeObject.id === parseInt(employeeId)) {
                      window.alert(`${employeeObject.name} sold ${employeeObject.sold} products`)
                }
            }
        }
    }
)