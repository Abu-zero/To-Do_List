import {useNavigate} from "react-router-dom";

const Page404 = ()=> {

    const navigate=useNavigate();

    const Redirect= ()=>{
        navigate('/');
    }

    return(
        <div className="page404-all">
            <div style={{width: "300px"}}>
                <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.46 300.46"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_1326_"> <g> <g> <path d="M130.631,116.503c-0.973-1.496-2.636-2.398-4.42-2.398H79.26v-11.094c0-4.345-3.522-7.867-7.867-7.867 c-4.345,0-7.867,3.522-7.867,7.867v47.886H16.573c-1.784,0-3.447,0.902-4.42,2.398l-8.457,13.003 c-0.334,0.513-0.334,1.175,0,1.689l8.457,13.003c0.973,1.496,2.636,2.398,4.42,2.398h46.952v101.338H48.89 c-4.345,0-7.867,3.522-7.867,7.867s3.522,7.867,7.867,7.867h45.005c4.345,0,7.867-3.522,7.867-7.867s-3.522-7.867-7.867-7.867 H79.26V146.594h46.951c1.784,0,3.447-0.902,4.42-2.398l8.457-13.003c0.334-0.513,0.334-1.175,0-1.689L130.631,116.503z"></path> <circle cx="226.252" cy="40.42" r="23.08"></circle> <path d="M256.05,73.565c-9.647,0-41.975,0-51.469,0l-24.386-2.851l13.127-15.771c3.934-4.727,3.292-11.749-1.435-15.684 c-4.728-3.934-11.749-3.291-15.683,1.435L149.93,72.264c-2.614,3.141-3.298,7.461-1.782,11.256 c1.516,3.794,4.989,6.453,9.047,6.929l39.291,4.594l0.005,192.054c0,7.381,5.983,13.363,13.363,13.363 s13.363-5.982,13.363-13.363V180.284h5.77v106.813c0,7.381,5.983,13.363,13.363,13.363s13.363-5.982,13.363-13.363 l-0.237-187.114c-0.001-1.271,1.016-2.308,2.286-2.331c1.271-0.023,2.326,0.975,2.37,2.245v0.001l0.411,81.812 c0.031,6.131,5.01,11.08,11.135,11.08c0.018,0,0.038-0.001,0.057-0.001c6.15-0.031,11.11-5.042,11.08-11.192l-0.411-81.812 C282.33,85.327,270.508,73.565,256.05,73.565z"></path> <rect x="274.453" y="34.401" width="9.608" height="10.165"></rect> <path d="M283.502,0c-5.687,0-10.767,2.717-13.016,7.995l7.5,5.331c0.855-0.995,2.018-3.843,5.083-3.843 c1.868,0,3.719,1.091,3.719,3.099c0,3.496-5.852,5.85-7.624,6.818c-4.459,2.316-4.897,5.458-4.897,9.112h9.608 c0-1.408,1.28-2.327,2.758-3.161c4.231-2.387,10.382-4.021,10.382-12.706C297.014,4.314,290.919,0,283.502,0z"></path> </g> </g> </g> </g></svg>
            </div>
            <div className="page404-text">Sayfa Bulunamadı.</div>
            <div style={{paddingTop: "2rem"}}>
                <button className="todo-button todo-signout" onClick={Redirect}>Main Page</button>
            </div>
        </div>
    )
}

export default Page404