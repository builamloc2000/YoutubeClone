const [category, setCategory] = useState([]);
    useEffect(() =>{
        const url = 'http://localhost:3001/api/categories/allCate';
        axios.get(url).then((response)=>{
            setCategory(response.data);
            
        });
    }, []);