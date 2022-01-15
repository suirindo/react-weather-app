
const Form = ({city, setCity, getWeather})  => {
    return (
        <form>
            <input type = "text" name = "city" placeholder = "都市名" onChange = {e => setCity(e.target.value)} value = {city} />
            <button type = "submit" onClick = {getWeather}>GetWeather</button>
        </form>
    );
};

export default Form;