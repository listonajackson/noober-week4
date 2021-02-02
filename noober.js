 async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()
 

  // writes the returned JSON to the console
  console.dir(json)

  
  // 🔥 start here: write code to loop through the rides
  let rides = json
  for(let i=0; i<rides.length; i++) {
    let ride = rides[i]
  
  for(let x=-0; x<rides.length; x++) {
        if (rides.length >1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }

  
  passenger1Name = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`
  passenger1Phone = ride[0].passengerDetails.phoneNumber
  passenger1NumberOfPassengers = ride[0].numberOfPassengers
  
  passenger1PickupAddressLine1 = ride[0].pickupLocation.address
  passenger1PickupAddressLine2 = `${ride[0].pickupLocation.city} ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}`

  passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
  passenger1DropoffAddressLine2 = `${ride[0].dropoffLocation.city} ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}`

  passenger2Name = `${ride[1].passengerDetails.first} ${ride[1].passengerDetails.last}`
  passenger2Phone = ride[1].passengerDetails.phoneNumber
  passenger2NumberOfPassengers = ride[1].numberOfPassengers

  passenger2PickupAddressLine1 = ride[1].pickupLocation.address
  passenger2PickupAddressLine2 = `${ride[1].pickupLocation.city} ${ride[1].pickupLocation.state} ${ride[1].pickupLocation.zip}`

  passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address
  passenger2DropoffAddressLine2 = `${ride[1].dropoffLocation.city} ${ride[1].dropoffLocation.state} ${ride[1].dropoffLocation.zip}`

  passenger3Name = `${ride[2].passengerDetails.first} ${ride[2].passengerDetails.last}`
  passenger3Phone = ride[2].passengerDetails.phoneNumber
  passenger3NumberOfPassengers = ride[2].numberOfPassengers

  passenger3PickupAddressLine1 = ride[2].pickupLocation.address
  passenger3PickupAddressLine2 = `${ride[2].pickupLocation.city} ${ride[2].pickupLocation.state} ${ride[2].pickupLocation.zip}`

  passenger3DropoffAddressLine1 = ride[2].dropoffLocation.address
  passenger3DropoffAddressLine2 = `${ride[2].dropoffLocation.city} ${ride[2].dropoffLocation.state} ${ride[2].dropoffLocation.zip}`
  
  let outputElement = document.querySelector('.ride')
  outputElement.insertAdjacentHTML('beforeend', `
    <div class="font-bold my-8 text-xl text-blue-300">
      ${levelOfService}
    </div>
    `)
}

//test stage committ 
window.addEventListener('DOMContentLoaded', pageLoaded)