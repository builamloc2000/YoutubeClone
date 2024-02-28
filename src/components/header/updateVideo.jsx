import React from "react"

import { useEffect, useState } from "react"

import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateVideo() {
    const { id } = useParams();
// <div>
//             <h3>ID: {id}</h3>
//         </div>


const [languages, setLanguages] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:3001/api/languages/allLanguage';
        axios.get(url).then((response) => {
            setLanguages(response.data);

        });
    }, []);

    const [category, setCategory] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:3001/api/categories/allCate';
        axios.get(url).then((response) => {
            setCategory(response.data);

        });
    }, []);

    const [mode, setMode] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:3001/api/mode/allMode';
        axios.get(url).then((response) => {
            setMode(response.data);

        });
    }, []);

    const [quality, setQuality] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:3001/api/quality/allQuality';
        axios.get(url).then((response) => {
            setQuality(response.data);
            console.log('mess:', languages)
        });
    }, []);

    const [youtube, setYoutube] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:3001/api/youtubeLisence/allYoutubeLisence';
        axios.get(url).then((response) => {
            setYoutube(response.data);

        });
    }, []);

    const [subcribe, setSubcribe] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:3001/api/subcriptionLisence/allSubcriptionLisence';
        axios.get(url).then((response) => {
            setSubcribe(response.data);

        });
    }, []);
    const [data, setData] = useState({
        title: "",
        description: "",
        isLimitAge: "",
        isForChildren: "",
        isForMoney: "",
        isAutomativeScene: "",
        isAutomativeLocation: "",
        isAutomativeTerm: "",
        languageVideo: "",
        subcriptionLisence: "",
        createVideo: "",
        locationVideo: "",
        youtubeLisence: "",
        mode: "",
        qualityID: "",
        categoryID: ""

    })

    useEffect(() => {
        const url = 'http://localhost:3001/api/video/'+id;
        axios.get(url).then((response) => {
            setData(response.data);

        });
    }, []);
    const handleChange = (event) => {
        const newData = { ...data }
        newData[event.target.id] = event.target.value
        setData(newData)
    }

    const handleSubmit = (event) => {
        axios.put('http://localhost:3001/api/video/'+id, data ) .then(res => {
            // Handle success
            console.log('Update successful:', res.data);
            // Optionally, redirect the user or perform any other actions
        })
        .catch(error => {
            // Handle error
            console.error('Error updating video:', error);
            // Optionally, show an error message to the user
        });
    };
    console.log("aaa", data.isAutomativeLocation)

    return (
        
        <form className="overflow-y-scroll w-full max-h-screen bg-red-600">
        <div className="bg-slate-600 text-center  ">Details</div>
        

    

        <div className="flex justify-around  " >
            <div className="" >

                <div>Title</div>
                <input type="text" id="title" onChange={(event) => handleChange(event)} value={data.title} className="w-96 h-44" ></input>

                <div>Describe</div>
                <input type="text" id="description" onChange={(event) => handleChange(event)} value={data.description} className="w-96 h-44" ></input>


                <div>Audience target</div>
                <div className="flex">



                
                    <label>
                        <input type="radio" id="isForChildren" name="optionChild" checked={data.isForChildren == '1' } value='1' onChange={(event) => handleChange(event)}></input>
                        Yes, this content is intended for children.Features like personalized ads and notifications won't work on videos made for kids. Videos that you set as made for kids are more likely to be recommended alongside other videos made for kids. Find out more

                    </label>

                    <label>
                        <input type="radio" id="isForChildren" name="optionChild" checked={data.isForChildren == '0' } value='0' onChange={(event) => handleChange(event)}></input>
                        No, this content is not intended for children
                    </label>

                </div>
                <div>Age restrictions </div>
                <div className="flex">




                    <label>
                        <input type="radio" id="isLimitAge" name="optionAge" value="1" checked={data.isLimitAge ==  '1'}  onChange={(event) => handleChange(event)}></input>
                        Yes, limit my videos to viewers over 18 years old

                    </label>

                    <label>
                        <input type="radio" id="isLimitAge" name="optionAge" value="0" checked={data.isLimitAge == '0'}  onChange={(event) => handleChange(event)}></input>
                        No, my videos are not limited to viewers over 18 years old
                    </label>

                </div>
                <div>Content is paid for advertising</div>
                <label>
                    <input type="checkbox" id="isForMoney" value={data.isForMoney ? '0' : '1'} checked={data.isForMoney == '1'} onChange={(event) => handleChange(event)}></input>
                    My video contains paid advertising such as product placement, sponsored content or endorsements
                </label>
                <div>Automatic scene segmentation</div>
                <label>
                    <input type="checkbox" id="isAutomativeScene" value={data.isAutomativeScene ? '0' : '1'} checked={data.isAutomativeScene == '1'}  onChange={(event) => handleChange(event)}></input>
                    Enables automatic creation of key moments and scenes
                </label>
                <div>Outstanding location</div>
                <label>
                    <input type="checkbox" id="isAutomativeLocation" value={data.isAutomativeLocation ? '0' : '1'}  checked={data.isAutomativeLocation == '1'} onChange={(event) => handleChange(event)}></input>
                    Enables automatic location insertion
                </label>
                <div>Automatically display concepts</div>
                <label>
                    <input type="checkbox" id="isAutomativeTerm" value={data.isAutomativeTerm ? '0' : '1'} checked={data.isAutomativeTerm == '1'} onChange={(event) => handleChange(event)}></input>
                    Enable automatic concept addition
                </label>
               
                <div className="flex">
                    <div>Language and subtitle certification</div>
                    <select onChange={(event) => handleChange(event)} id="languageVideo" value={data.languageVideo}>
                        {languages ? languages.map((language) => {
                            return <option key={language.id} value={language.id}>{language.name}</option>
                        }) : null}
                    </select>

                    <div>SubcriptionLisence</div>
                    <select onChange={(event) => handleChange(event)} id="subcriptionLisence" value={data.subcriptionLisence}>
                        {subcribe ? subcribe.map((sub) => {
                            return <option key={sub.id} value={sub.id}>{sub.name}</option>
                        }) : null}
                    </select>
                </div>
                <div className="flex">
                    <div>Date and location of video recording</div>
                    <div>createDate</div>
                    <input type="date" onChange={(event) => handleChange(event)} id="createVideo" value={data.createVideo}></input>
                    <div>location</div>
                    <input type="text" id="locationVideo" onChange={(event) => handleChange(event)} value={data.locationVideo} className="" ></input>
                </div>
                <div>License</div>
                <select onChange={(event) => handleChange(event)} id="youtubeLisence" value={data.youtubeLisence}>
                    {youtube ? youtube.map((you) => {
                        return <option key={you.id} value={you.id}>{you.name}</option>
                    }) : null}
                </select>
                <div>Category</div>
                <select onChange={(event) => handleChange(event)} id="categoryID" value={data.categoryID}>
                    {category ? category.map((cate) => {
                        return <option key={cate.id} value={cate.id}>{cate.name}</option>
                    }) : null}
                </select>
            </div>
            <div>


              
                


                <div>Video quality</div>
                <select onChange={(event) => handleChange(event)} id="qualityID" value={data.qualityID}>
                    {quality ? quality.map((qual) => {
                        return <option key={qual.id} value={qual.id}>{qual.name}</option>
                    }) : null}
                </select>
                <div>Display mode</div>
                <select onChange={(event) => handleChange(event)} id="mode" value={data.mode}>
                    {mode ? mode.map((mod) => {
                        return <option key={mod.id} value={mod.id}>{mod.name}</option>
                    }) : null}
                </select>
                <div>
                    <button onClick={handleSubmit} className="bg-yellow-500">Apply</button>
                </div>
            </div>

        </div>
    </form>

    )
}