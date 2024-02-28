import React from "react"

import { useEffect, useState } from "react"

import axios from "axios";


export default function AddVideo() {


    //Axios: covert to redux api

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
        fileName: "",
        urlVideo: "",
        qualityID: "",
        categoryID: ""

    })



    const handleChange = (event) => {
        const newData = { ...data }
        newData[event.target.id] = event.target.value
        setData(newData)
    }


    
    const [pathFile, setPathFile] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData()
        formData.append('file', selectedVideo)
        console.log("buig:", selectedVideo)
    
         axios.post('http://localhost:3001/upload', formData)
            .then(res => { setPathFile(res.data); console.log("file:", res.data) })
            .catch(er => console.log(er))
        
    };

    useEffect(() => {
        if(pathFile){
            axios.post('http://localhost:3001/api/video/addVideo', {
            title: data.title,
            description: data.description,
            isLimitAge: data.isLimitAge,
            isForChildren: data.isForChildren,
            isForMoney: data.isForMoney,
            isAutomativeScene: data.isAutomativeScene,
            isAutomativeLocation: data.isAutomativeLocation,
            isAutomativeTerm: data.isAutomativeTerm,
            languageVideo: data.languageVideo,
            subcriptionLisence: data.subcriptionLisence,
            createVideo: data.createVideo,
            locationVideo: data.locationVideo,
            youtubeLisence: data.youtubeLisence,
            mode: data.mode,
            fileName: selectedVideo.name,
            urlVideo:pathFile,
            categoryID: data.categoryID,
            qualityID: data.qualityID
        })
            .then(res => { console.log('Response:', res.data); })
            .catch(er => console.log(er))
            console.log("path:",pathFile)
        }else{
            console.log('first')
        }
        console.log('pathFile',pathFile)
 
    }, [pathFile]);


    
    


    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleFileChange = (event) => {
        event.preventDefault();
        const file = event.target.files[0]
        setSelectedVideo(file);
        console.log("check file", file)
        
    };
    

   
    



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
                            <input type="radio" id="isForChildren" name="optionChild" value="1" onChange={(event) => handleChange(event)}></input>
                            Yes, this content is intended for children.Features like personalized ads and notifications won't work on videos made for kids. Videos that you set as made for kids are more likely to be recommended alongside other videos made for kids. Find out more

                        </label>

                        <label>
                            <input type="radio" id="isForChildren" name="optionChild" value="0" onChange={(event) => handleChange(event)}></input>
                            No, this content is not intended for children
                        </label>

                    </div>
                    <div>Age restrictions </div>
                    <div className="flex">




                        <label>
                            <input type="radio" id="isLimitAge" name="optionAge" value="1" onChange={(event) => handleChange(event)}></input>
                            Yes, limit my videos to viewers over 18 years old

                        </label>

                        <label>
                            <input type="radio" id="isLimitAge" name="optionAge" value="0" onChange={(event) => handleChange(event)}></input>
                            No, my videos are not limited to viewers over 18 years old
                        </label>

                    </div>
                    <div>Content is paid for advertising</div>
                    <label>
                        <input type="checkbox" id="isForMoney" value="1" onChange={(event) => handleChange(event)}></input>
                        My video contains paid advertising such as product placement, sponsored content or endorsements
                    </label>
                    <div>Automatic scene segmentation</div>
                    <label>
                        <input type="checkbox" id="isAutomativeScene" value="1" onChange={(event) => handleChange(event)}></input>
                        Enables automatic creation of key moments and scenes
                    </label>
                    <div>Outstanding location</div>
                    <label>
                        <input type="checkbox" id="isAutomativeLocation" value="1" onChange={(event) => handleChange(event)}></input>
                        Enables automatic location insertion
                    </label>
                    <div>Automatically display concepts</div>
                    <label>
                        <input type="checkbox" id="isAutomativeTerm" value="1" onChange={(event) => handleChange(event)}></input>
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


                    <div>
                        <input type="file" accept="video/*" onChange={handleFileChange} />

                        {selectedVideo && (
                            <div>
                                <p>Selected Video: {selectedVideo.name}</p>
                                <video width="400" controls>
                                    <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />

                                </video>
                            </div>
                        )}
                    </div>
             
                    


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
