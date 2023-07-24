//apporach-1
setTimeout(() => {
    document.getElementById("no").innerHTML="Countdown Starts"
setTimeout(() => {
    document.getElementById("no").innerHTML="10";
    setTimeout(() => {
        document.getElementById("no").innerHTML="9";
        setTimeout(() => {
            document.getElementById("no").innerHTML="8";
            setTimeout(() => {
                document.getElementById("no").innerHTML="7";
                setTimeout(() => {
                    document.getElementById("no").innerHTML="6";
                    setTimeout(() => {
                        document.getElementById("no").innerHTML="5";
                        setTimeout(() => {
                            document.getElementById("no").innerHTML="4";
                            setTimeout(() => {
                                document.getElementById("no").innerHTML="3";
                                setTimeout(() => {
                                    document.getElementById("no").innerHTML="2";
                                    setTimeout(() => {
                                        document.getElementById("no").innerHTML="1";
                                        setTimeout(() => {
                                            document.getElementById("no").innerHTML="Happy Independence Day!!!!!";
                                        }, 1000);
                                    }, 1000);

                                }, 1000);
                                
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
        
    }, 1000);
    
}, 1000);
}, 500);


//apporoch-2 The above same also done using below code

// const time=(delay,no)=>{
//     const h1=document.getElementById("no")
//     setTimeout(() => {
//         h1.innerHTML=no;
//     }, delay);
    
//     }
//     time(500,"countdown starts")
//     time(1000,10);
//     time(2000,9);
//     time(3000,8);
//     time(4000,7);
//     time(5000,6);
//     time(6000,5);
//     time(7000,4);
//     time(8000,3);
//     time(9000,2);
//     time(10000,1);
//     time(11000,"happy indepence day");