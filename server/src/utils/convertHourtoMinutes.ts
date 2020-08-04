export default function convertHourtoMinutes(time:string){
    try {
        const [hour, minutes] = time.split(':').map(Number)
        const timeInMinutes = (hour * 60) + minutes 
    
        return timeInMinutes
    } catch (error) {
        console.log(error, "**")
    }
  
}