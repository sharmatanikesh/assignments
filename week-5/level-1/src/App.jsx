import './App.css'
import './components/BusinessCard'
import BusinessCard from './components/BusinessCard'

function App() {
  const card =[
    {
      name:"Tanikesh",
      interest:"High",
      button1:"Linkdin",
      button2:"Twitter",
      description:"Good man "

    },
    {
      name:"Sharma",
      interest:"High",
      button1:"Linkdin",
      button2:"Twitter",
      description:"Good man "

    },
    {
      name:"sahil",
      interest:"High",
      button1:"Linkdin",
      button2:"Twitter",
      description:"Good man "

    }, {
      name:"Aman",
      interest:"High",
      button1:"Linkdin",
      button2:"Twitter",
      description:"Good man "

    }
  ]

  return (
    <>
    <div>
    {card.map((item,index)=>( 
      <BusinessCard key={index} name={item.name} des ={item.description}
      interest={item.interest} button1={item.button1} button2={item.button2}/>
    ))}
    </div>
    </>
  )
}

export default App
