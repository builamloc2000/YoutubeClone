const [languages, setLanguages] = useState([]);
    useEffect(() =>{
        const url = 'http://localhost:3001/api/languages/allLanguage';
        axios.get(url).then((response)=>{
            setLanguages(response.data);
            
        });
    }, []);