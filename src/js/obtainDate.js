
export function obtainDate(evalDate) {
 
    const day = new Date(evalDate)
    const options = {
       month: 'long', day: 'numeric' 
      };
    const date = day.toLocaleDateString("en-US", options)

    return date

    
}