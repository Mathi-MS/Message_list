import './assests/style.css'
import Profile from './Profile'
import one from './assests/images/profile-1.jpg'
import two from './assests/images/profile-2.jpg'
import three from './assests/images/profile-3.jpg'
import four from './assests/images/profile-4.jpg'
import five from './assests/images/profile-5.jpg'
import six from './assests/images/profile-6.jpg'

var person = [
    {
        "img":one,
        "name":"Jessica Koel",
        "message":"Hey, Joel I here to help you out please....",
        "time":"11:26",
    },
    {
        "img":two,
        "name":"Jessica Koel",
        "message":"I will send you all documents as soon as....",
        "time":"12:26",
    },
    {
        "img":three,
        "name":"Tamaara suiale",
        "message":"Are you going to business trip next week",
        "time":"8:26",
    },
    {
        "img":four,
        "name":"Sam Nielson",
        "message":"I Suggest to start new business soon",
        "time":"7:16",
    },
    {
        "img":five,
        "name":"Caroline Nexon",
        "message":"We need to start new research center",
        "time":"9:26",
    },
    {
        "img":six,
        "name":"Patrick Koeler",
        "message":"Are you going to business trip next week",
        "time":"3:26",
    }
]

function Exercise() {
    return(
        <>
            <div className='back'>
                <div className='boxes'>
                    <div className='inputbox'>
                        <input type="text" placeholder='search'/>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    {
                    person.map(function(item) {
                            return(
                                <Profile img={item.img} name={item.name} message={item.message} time={item.time}></Profile>
                            )
                        })
                    } 
                </div>
            </div>
        </>
    )
}

export default Exercise