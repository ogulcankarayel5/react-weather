export const getDayName = (timeEpoch : number, isFullName: boolean = false) => {
    const date = new Date(timeEpoch* 1000).toLocaleString('en-us', {weekday:'long'})

    return isFullName ? date : date.slice(0,3);
}

export const getDecimalValue = (tempature : number) => {
    const decimal = tempature.toString().split(".")[0];
    return decimal
}

export const getLastUpdatedTime = (date: string) => {
    const updatedTime = date.split(" ")[1];
    return updatedTime;
}

// export const sunDiff = (time: string) => {
//     const date = new Date(time)
//     const now = new Date()

   

//     console.log(date);
//     console.log(now)

//     const dateTime = date
//     const nowTime = now
//     if (dateTime < nowTime) {
//         var milisec_diff = nowTime - dateTime;
//     }else{
//         var milisec_diff = dateTime - nowTime;
//     }
  
//     var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));

//     var date_diff = new Date( milisec_diff / 60 / 60 / 1000);
//     console.log(date_diff)
//     return days + " Days "+ date_diff.getHours() + " Hours " + date_diff.getMinutes() + " Minutes " + date_diff.getSeconds() + " Seconds";
// }

