import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {
    // const[information,setInformation]= useState([])
    // useEffect(() => {
    //     getAllInformation()
    //   }, []);

    //    async function getAllInformation() {
    //     const res= await fetch("http://localhost:3000/meryem/")
    //     const data=await res.json()
    //     setInformation(data)
    //    }

    //    async function handleDelete(id) {
    //     const res= await fetch("http://localhost:3000/meryem/"+id,{
    //         method:"DELETE"
    //     })
    //     const data=await res.json()
    //     await getAllInformation()
    //    }
    return (
        <>
            <div className="home_background">
                <h1>Hygienic Food.
                    By Chef Francis Smith<span>.</span></h1>
                
            </div>
            <div className="text_box">
                <div className="text_welcome_box">
                    <div className="text_icon">
                    <i class="fa-brands fa-stack-overflow"></i>
                    </div>
                    <div className="text_welcome"><div></div><p>Welcome</p><div></div></div>

                </div>
                <div className="text_item_contain">
                <div className="text_year_item">
                    <div>

                    <h5>2002</h5>
                    <p> In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                    </div>
                </div>
                <div className="text_year_item">
                    <div>

                    <h5>2002</h5>
                    <p> In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                    </div>
                </div>
                <div className="text_year_item">
                    <div>

                    <h5>2002</h5>
                    <p> In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                    </div>
                </div>
            

                </div>
            </div>
            <div className="testemotional_background">
                <div className="testemotional_overlay">
                    <div className="testemotinal_icon_box">
                    <i className="fa-solid fa-ice-cream"></i>
                    </div>
                    <div className="testemotional_text"><div></div><p>Testimonials</p><div></div></div>
                    <div className="testemotinal_paragraf">
                        <p>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. </p>
                </div>
                        <div className='testemotinal_foot_text'>

                        <p>Ted Champan <span>,Client</span></p>
                        </div>
                    </div>
            </div>
            <div className="services_background">
            <div className="services_icon_box">
                    <i className="fa-solid fa-ice-cream"></i>
                    </div>
                    <div className="services_text"><div></div><p>Testimonials</p><div></div></div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* <div>
{
    information.map(x=>(
        <Link to={`detail/${x._id}`}>
        <div key={x._id} style={{border:"1px solid black"}}>
            <h2>{x.title}</h2>
            <p>{x.author}</p>
            <button onClick={()=>handleDelete(x._id)}>delete</button>
        </div>
        </Link>
    ))
}
    </div> */}



        </>
    )
}

export default Home
