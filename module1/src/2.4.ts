{
    // generic interface
    interface Developer<T, X=null> {
        name:string;
        computer:{
            brand:string;
            model:string;
            releaseYear:number
        }
        smartWatch: T;
        bike?:X;
    }

    type EmilabWatch ={
        brand:string;
        model:string;
        display:string
    }
    const poorDeveloper:Developer<EmilabWatch, null> ={
        name:'Munir',
        computer:{
            brand:'asus',
            model:'x-34fr',
            releaseYear:2013
        },
        smartWatch:{
            brand:'Emilab',
            model:'KW66',
            display:'OLED'
        }
    };

    interface AppleWatch {
        brand:string;
        model:string;
        heartTrack:boolean;
        sleepTrack:boolean;
    };

    interface YamahaBike{
        model:string;
        engineCapacity:string;
    }
    const richDeveloper:Developer<AppleWatch, YamahaBike> ={
        name:'rich dev',
        computer:{
            brand:'HP',
            model:'X-25UR',
            releaseYear:2018,
        },
        smartWatch:{
            brand:'Apple',
            model:'MKW',
            heartTrack:true,
            sleepTrack:true,
        },
        bike:{
            model:'Yamaha',
            engineCapacity:'100cc'
        }
    }

    // 
}