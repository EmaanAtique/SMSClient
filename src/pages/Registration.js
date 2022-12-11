import React from "react";
import { useState } from "react";
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import './LandingPage.css';
import Dropdown from 'react-dropdown';


const options = [
  'M','F'
];


const cities = [
  "Abbottabad",
"Adezai",
"Ali Bandar",
"Amir Chah",
"Attock",
"Ayubia",
"Bahawalpur",
"Baden",
"Bagh",
"Bahawalnagar",
"Burewala",
"Banda Daud Shah",
"Bannu district|Bannu",
"Batagram",
"Bazdar",
"Bela",
"Bellpat",
"Bhag",
"Bhakkar",
"Bhalwal",
"Bhimber",
"Birote",
"Buner",
"Burj",
"Chiniot",
"Chachro",
"Chagai",
"Chah Sandan",
"Chailianwala",
"Chakdara",
"Chakku",
"Chakwal",
"Chaman",
"Charsadda",
"Chhatr",
"Chichawatni",
"Chitral",
"Dadu",
"Dera Ghazi Khan",
"Dera Ismail Khan",
 "Dalbandin",
"Dargai",
"Darya Khan",
"Daska",
"Dera Bugti",
"Dhana Sar",
"Digri",
"Dina City|Dina",
"Dinga",
", Pakistan|Diplo",
"Diwana",
"Dokri",
"Drosh",
"Duki",
"Dushi",
"Duzab",
"Faisalabad",
"Fateh Jang",
"Ghotki",
"Gwadar",
"Gujranwala",
"Gujrat",
"Gadra",
"Gajar",
"Gandava",
"Garhi Khairo",
"Garruck",
"Ghakhar Mandi",
"Ghanian",
"Ghauspur",
"Ghazluna",
"Girdan",
"Gulistan",
"Gwash",
"Hyderabad",
"Hala",
"Haripur",
"Hab Chauki",
"Hafizabad",
"Hameedabad",
"Hangu",
"Harnai",
"Hasilpur",
"Haveli Lakha",
"Hinglaj",
"Hoshab",
"Islamabad",
"Islamkot",
"Ispikan",
"Jacobabad",
"Jamshoro",
"Jhang",
"Jhelum",
"Jamesabad",
"Jampur",
"Janghar",
"Jati(Mughalbhin)",
"Jauharabad",
"Jhal",
"Jhal Jhao",
"Jhatpat",
"Jhudo",
"Jiwani",
"Jungshahi",
"Karachi",
"Kotri",
"Kalam",
"Kalandi",
"Kalat",
"Kamalia",
"Kamararod",
"Kamber",
"Kamokey",
"Kanak",
"Kandi",
"Kandiaro",
"Kanpur",
"Kapip",
"Kappar",
"Karak City",
"Karodi",
"Kashmor",
"Kasur",
"Katuri",
"Keti Bandar",
"Khairpur",
"Khanaspur",
"Khanewal",
"Kharan",
"kharian",
"Khokhropur",
"Khora",
"Khushab",
"Khuzdar",
"Kikki",
"Klupro",
"Kohan",
"Kohat",
"Kohistan",
"Kohlu",
"Korak",
"Korangi",
"Kot Sarae",
"Kotli",
"Lahore",
"Larkana",
"Lahri",
"Lakki Marwat",
"Lasbela",
"Latamber",
"Layyah",
"Leiah",
"Liari",
"Lodhran",
"Loralai",
"Lower Dir",
"Shadan Lund",
"Multan",
"Mandi Bahauddin",
"Mansehra",
"Mian Chanu",
"Mirpur",
", Pakistan|Moro",
"Mardan",
"Mach",
"Madyan",
"Malakand",
"Mand",
"Manguchar",
"Mashki Chah",
"Maslti",
"Mastuj",
"Mastung",
"Mathi",
"Matiari",
"Mehar",
"Mekhtar",
"Merui",
"Mianwali",
"Mianez",
"Mirpur Batoro",
"Mirpur Khas",
"Mirpur Sakro",
"Mithi",
"Mongora",
"Murgha Kibzai",
"Muridke",
"Musa Khel Bazar",
"Muzaffar Garh",
"Muzaffarabad",
"Nawabshah",
"Nazimabad",
"Nowshera",
"Nagar Parkar",
"Nagha Kalat",
"Nal",
"Naokot",
"Nasirabad",
"Nauroz Kalat",
"Naushara",
"Nur Gamma",
"Nushki",
"Nuttal",
"Okara",
"Ormara",
"Peshawar",
"Panjgur",
"Pasni City",
"Paharpur",
"Palantuk",
"Pendoo",
"Piharak",
"Pirmahal",
"Pishin",
"Plandri",
"Pokran",
"Pounch",
"Quetta",
"Qambar",
"Qamruddin Karez",
"Qazi Ahmad",
"Qila Abdullah",
"Qila Ladgasht",
"Qila Safed",
"Qila Saifullah",
"Rawalpindi",
"Rabwah",
"Rahim Yar Khan",
"Rajan Pur",
"Rakhni",
"Ranipur",
"Ratodero",
"Rawalakot",
"Renala Khurd",
"Robat Thana",
"Rodkhan",
"Rohri",
"Sialkot",
"Sadiqabad",
"Safdar Abad- (Dhaban Singh)",
"Sahiwal",
"Saidu Sharif",
"Saindak",
"Sakrand",
"Sanjawi",
"Sargodha",
"Saruna",
"Shabaz Kalat",
"Shadadkhot",
"Shahbandar",
"Shahpur",
"Shahpur Chakar",
"Shakargarh",
"Shangla",
"Sharam Jogizai",
"Sheikhupura",
"Shikarpur",
"Shingar",
"Shorap",
"Sibi",
"Sohawa",
"Sonmiani",
"Sooianwala",
"Spezand",
"Spintangi",
"Sui",
"Sujawal",
"Sukkur",
"Suntsar",
"Surab",
"Swabi",
"Swat",
"Tando Adam",
"Tando Bago",
"Tangi",
"Tank City",
"Tar Ahamd Rind",
"Thalo",
"Thatta",
"Toba Tek Singh",
"Tordher",
"Tujal",
"Tump",
"Turbat",
"Umarao",
"Umarkot",
"Upper Dir",
"Uthal",
"Vehari",
"Veirwaro",
"Vitakri",
"Wadh",
"Wah Cantt",
"Warah",
"Washap",
"Wasjuk",
"Wazirabad",
"Yakmach",
"Zhob",
"Other"
];

const Registration = () => {


  const history = useHistory()
  const [FName, setFName] = useState("")
  const [LName, setLName] = useState("")
  const [Age, setAge] = useState("")
  const [Email, setEmail] = useState("")
  const [Contact, setContact] = useState("")
  const [House, setHouse] = useState("")
  const [Area, setArea] = useState("")
  const [CNIC, setCNIC] = useState("")
  const [Vacc, setVacc] = useState("")


  const [City, setCity] = useState("")
  const [Guardian, setGuardian] = useState("")

  const [Gender, setGender] = useState("")

  const [Status, setStatus] = useState("")

  const submit = () => {
  //   if (FName == "" || LName == "" || Age == "" || Gender == "" || Email == "" || Contact == "" || House == "" || City == "" || Guardian || ""){
  //     alert("Please enter valid input!");
  // }
  // else{
    Axios.post('https://dbproject-group22.herokuapp.com/api/SRegister', {FName: FName, LName: LName, Age: Age, Gender: Gender, Email: Email, Contact: Contact, House: House, Area: Area, City: City, Vacc: Vacc, Guardian: Guardian, CNIC: CNIC})
    .then((response)=>{
          
    if (response.data.message === "Success"){
          history.push('/Regi2')
        }
        else{
          setStatus(response.data.message);
        }
        })
      }
    // }

  return (
      <div className="App">
      <div className="form">
          <h1> Student Registration </h1>
          <h2> Enter your personal details below</h2>
          <label> First Name: </label>
          <input type="text" name="FName" onChange={(e)=>{setFName(e.target.value)}}/>
          <label> Last Name: </label>
          <input type="text" name="LName"onChange={(e)=>{setLName(e.target.value)}}/>
          <label> Age: </label>
          <input type="int" name="Age"onChange={(e)=>{setAge(e.target.value)}}/>
          <label> Gender: </label>
          <Dropdown 
                className="etype" 
                options={options} 
                onChange={(e)=>{
                    setGender(e.value);
                    }}  
                value={Gender}  
                placeholder="Gender" 
            />
           <label> Email: </label>
          <input type="text" name="Email"onChange={(e)=>{setEmail(e.target.value)}}/>
          <label> Contact Number: </label>
          <input type="text" name="Contact Number"onChange={(e)=>{setContact(e.target.value)}}/>
          <label> House Number: </label>
          <input type="text" name="House Number"onChange={
            (e)=>{setHouse(e.target.value)}}/>
          <label> Area: </label>
          <input type="text" name="Area"onChange={(e)=>{setArea(e.target.value)}}/>
          <label> City: </label>
          <Dropdown 
                className="etype" 
                options={cities} 
                onChange={(e)=>{
                    setCity(e.value);
                    }}  
                value={City}  
                placeholder="City" 
            />
             <label> Guardian Contact Number: </label>
             <input type="text" name="Guardian Contact"onChange={(e)=>{setGuardian(e.target.value)}}/>
             {/* <label> House Number: </label> */}
             {/* <input type="text" name="House Number"onChange={
            (e)=>{setHouse(e.target.value)}}/> */}
             <label> CNIC Number: </label>
          <input type="text" name="CNIC Number"onChange={
            (e)=>{setCNIC(e.target.value)}}/>
            <label> Vaccinated? Enter 1 for vaccinated, 0 for not. </label>
            <input type="text" name="Vacc"onChange={(e)=>{setVacc(e.target.value)}}/>
             <div>&nbsp;&nbsp;&nbsp;</div>
          <button onClick={submit}> Next </button>
          <text> {Status} </text>
          <div>&nbsp;&nbsp;&nbsp;</div>
      </div>
      </div>
  )
}

export default Registration;