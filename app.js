const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: "08:11",
        destination: "DELHI",
        flight: "IX-631",
        gate: "01",
        remarks:"ON TIME"
    },

    {
        time: "09:31",
        destination: "MUMBAI",
        flight: "6E-541",
        gate: "05",
        remarks:"DELAYED"
    },
    {
        time: "10:00",
        destination: "MUSCAT",
        flight: "UK-991",
        gate: "21",
        remarks:"ON TIME"
    },
    {
        time: "12:21",
        destination: "CHENNAI",
        flight: "SG-001",
        gate: "20",
        remarks:"CANCELLED"
    },
    {
        time: "15:11",
        destination: "KOLKATA",
        flight: "6E-122",
        gate: "05",
        remarks:"ON TIME"
    },
    {
        time: "16:16",
        destination: "PUNE",
        flight: "GA-111",
        gate: "04",
        remarks:"ON TIME"
    }
]

const destinations = ["LONDON", "LEH", "BENGALURU", "RANCHI", "NAGPUR"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 17


function populateTable() {
     for(const flight of flights) {
        const tableRow = document.createElement("tr")
        
        for(const flightDetail in flight) {
            const tableCell = document.createElement("td")
            const word = Array.from(flight[flightDetail])

            for(const [index,letter] of word.entries()) {
                const letterElement = document.createElement('div')

                setTimeout(() => {    
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.appendChild(letterElement)
                },100*index)
            }
            tableRow.append(tableCell)
        }   
        tableBody.append(tableRow)
     }
}

populateTable()

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random()*alphabet.length))
}

function generateRandomNumber(maxNumber) {
    const numbers = "0123456789"
    if(maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber + 1)
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime() {
    let displayHour = hour 

    if(hour < 24) {
        hour++
    }

    if(hour >= 24) {
        hour = 1
        displayHour = hour
    }
    if(hour < 10) {
        displayHour = "0" + hour
    }

    return displayHour + " " + generateRandomNumber(5) + generateRandomNumber()
}

function shuffleUp() {
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })
    tableBody.textContent = ""
    populateTable()
}

setInterval(shuffleUp, 2000)