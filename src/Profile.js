function Profile(para) {
    return(
        <div className='profilebox'>
            <img src={para.img} alt="images" />
            <div className='profileboxes'>
                <div className='profilebox__one'>
                    <h2>{para.name}</h2>
                    <h3>{para.time}</h3>
                </div>
                <div className='profilebox__two'>
                    <p>{para.message}</p>
                    <h4><i class="fa-solid fa-star"></i></h4>
                </div>
            </div>
        </div>
    )
}
export default Profile